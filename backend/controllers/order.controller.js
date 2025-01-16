import {
  orderCancellationRequestMail,
  orderConformationMail,
  orderStatusMail,
} from "../helpers/mailer.js";
import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
export const getOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    let orders;
    if (req.isAdmin) {
      orders = await Order.find().populate({path:"products.productId"});;
    } else {
      orders = await Order.find({ userId }).populate({path:"products.productId"});
    }
    if (!orders) {
      return res.status(500).json({
        success: false,
        message: "Orders fetching failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "Orders fetched sucessfully",
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const updateOrderStatus = async (req, res) => {
  try {
    let subject = "Order status update";
    let message;
    const { orderStatus } = req.body;
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Order id required",
      });
    }
    if (!req.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Admin rights required",
      });
    }
    const order = await Order.findById(orderId).populate("userId");
    if(!order){
      return res.status(403).json({
        success: false,
        message: "order not found",
      });
    }
    if (order.orderStatus == "PLACED" && orderStatus == "SHIPPED") {
      order.orderStatus = "SHIPPED";
      message = "Your order has been shipped";
    } else if (
      order.orderStatus == "SHIPPED" &&
      orderStatus == "OUT OF DELIVERY"
    ) {
      order.orderStatus = "OUT OF DELIVERY";
      message = "Your order is out of delivery";
    } else if (
      order.orderStatus == "OUT OF DELIVERY" &&
      orderStatus == "DELIVERIED"
    ) {
      order.orderStatus = "DELIVERIED";
      message = "Your order deliveried";
    } else {
      return res.status(403).json({
        success: false,
        message: "invalid request",
      });
    }
    await orderStatusMail(message, order.userId.email, subject);
    await order.save();
    res.status(200).json({
      success: false,
      message: "Order status updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const placeOrder = async (req, res) => {
  try {
    const {
      userId,
      products,
      address,
      paymentStatus,
      transactionId,
      userNote,
      instituteName,
      clubName
    } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "user id required to place the order",
      });
    }
    if (!instituteName) {
      return res.status(400).json({
        success: false,
        message: "institute name required to place the order",
      });
    }
    if (!clubName) {
      return res.status(400).json({
        success: false,
        message: "club name required to place the order",
      });
    }
    const user=await User.findById(userId);
    if(!user){
      return res.status(404).json({
        success: false,
        message: "user should register to place the order",
      });
    }
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Products are required to place the order",
      });
    }
    for (const product of products) {
      const fetchedProduct = await Product.findById(product.productId);
      if (!fetchedProduct) {
        return res.status(404).json({
          success: "false",
          message: `product with ${product.productId} is not found`,
        });
      }
      if (!product.productId || !product.quantity) {
        return res.status(400).json({
          success: false,
          message: "Each product must have productId and quantity",
        });
      }
    }
    if (!address) {
      return res.status(400).json({
        success: false,
        message: "address required to place the order",
      });
    }
    if (paymentStatus === "PAID" && !transactionId) {
      return res.status(400).json({
        success: false,
        message: "Transaction ID is required for paid orders",
      });
    }
    const order = await Order.create({
      userId,
      products,
      address,
      paymentStatus,
      transactionId,
      userNote,
      instituteName,
      clubName
    });
    user.orders.push(order._id);
    await user.save();
    if (!order) {
      return res.status(500).json({
        success: false,
        message: "failed to place the order",
      });
    }
    const response = await orderConformationMail(order);
    if (!response.success) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
    return res.status(200).json({
      success: true,
      message: "order request recieved!Wait for conformation email",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "order id required for cancellation",
      });
    }
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "user id required to cancel the order",
      });
    }
    const order = await Order.findById(orderId);
    if(order.userId!=userId){
      return res.status(400).json({
        success: false,
        message: "cancellation request should be send from ordered account",
      });
    }
    if(!order){
      return res.status(400).json({
        success: false,
        message: "order not found",
      });
    }
    if(order.isCancelled){
      return res.status(400).json({
        success: false,
        message: "order already cancelled",
      });
    }
    if (
      order.orderStatus == "OUT OF DELIVERY" ||
      order.orderStatus == "DELIVERIED"
    ) {
      return res.status(403).json({
        success: false,
        message:
          "Unable to cancel.Either order is out of delivery or deliveried.please contact customer care.",
      });
    }
    const response = await orderCancellationRequestMail(orderId);
    if (!response.success) {
      res.status(500).json({
        success: false,
        message: "something went wrong!",
      });
    }
    order.orderStatus = "CANCELLATION PENDING";
    await order.save();
    res.status(200).json({
      success: false,
      message: "cancellation request sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const orderConformation = async (req, res) => {
  try {
    const { status } = req.query;
    const orderId = req.params.id;
    if (!status || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Status and order ID are required.",
      });
    }
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }
    if(status!="reject" && (order.orderStatus=="PLACED" || order.orderStatus=="OUT OF DELIVERY" || order.orderStatus=="DELIVERIED")){
      return res.status(403).json({
        success: false,
        message: "order already accepted",
      });
    }
    let emailMessage;
    if (status === "accept") {
      if (order.isCancelled) {
        return res.status(403).json({
          success: false,
          message: "Order is already cancelled",
        });
      }
      emailMessage = "Your order has been accepted!";
      order.orderStatus = "PLACED";
    } else if (status === "reject") {
      if (order.isCancelled) {
        return res.status(403).json({
          success: false,
          message: "Order is already cancelled",
        });
      }
      emailMessage = "Your order has been rejected!";
      order.orderStatus = "CANCELLED";
      order.isCancelled = true;
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Use 'accept' or 'reject'.",
      });
    }
    const user = await User.findById(order.userId);
    await orderStatusMail(
      emailMessage,
      user.email,
      "custkart order Status email"
    );
    await order.save();
    return res.status(200).json({
      success: true,
      message: `Order successfully ${
        status === "accept" ? "accepted" : "rejected"
      }.`,
      order,
    });
  } catch (err) {
    console.error("Error processing order confirmation:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const orderCancellationRequest = async (req, res) => {
  try {
    const { status } = req.query;
    const orderId = req.params.id;
    if (!status || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Status and order ID are required.",
      });
    }
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }
    if(order.orderStatus=="CANCELLED"){
      return res.status(400).json({
        success: false,
        message: "Order already cancelled",
      });
    }
    let emailMessage;
    if (status === "accept") {
      if (order.isCancelled) {
        return res.status(403).json({
          success: false,
          message: "Order is already cancelled",
        });
      }
      emailMessage = "Your order is cancelled successfully";
      order.orderStatus = "CANCELLED";
      order.isCancelled = true;
    } else if (status === "reject") {
      if (order.isCancelled) {
        return res.status(403).json({
          success: false,
          message: "Order is already cancelled",
        });
      }
      emailMessage =
        "Your order cancellation request is rejected!please contact customer care";
      order.isCancelled = false;
      order.orderStatus="PLACED"
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Use 'accept' or 'reject'.",
      });
    }
    const user = await User.findById(order.userId);
    await orderStatusMail(
      emailMessage,
      user.email,
      "custkart order Cancellation status email"
    );
    await order.save();
    return res.status(200).json({
      success: true,
      message: `response sent successfully`,
    });
  } catch (err) {
    console.error("Error processing order confirmation:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};