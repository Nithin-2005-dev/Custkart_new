import React from 'react';

const AboutComponent=()=>{
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col min-h-screen m-auto">
    <h2 className="text-4xl font-extrabold text-gray-800 my-4">
          About Us
        </h2>
    <div className="flex flex-col md:flex-row items-center justify-between gap-16">

      <div className="flex-1">
        <img
          src=".\about.jpg"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 space-y-6">
        <p className="text-lg md:text-xl mt-4 text-white">
                  CUSTKART MERCHANDISE PRIVATE LIMITED was founded on June 10th, 2020.
                  Custkart has made a name for itself in the list of top suppliers of
                  Round Neck T-Shirt and Men's Round Neck T-Shirt in India. The
                  supplier company is located in Bokaro, Jharkhand, and is one of the
                  leading sellers of listed products. Custkart offers supreme quality
                  of Perfect Stitching Round Neck T-Shirts, etc. Buy Round Neck
                  T-Shirts, Men's Round Neck T-Shirts in bulk from us for the best
                  quality products and service. It is also known as Custkart
                  Merchandise Store.
                </p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <h2 className="text-4xl font-extrabold text-gray-800">
          Contact Us
        </h2>
        <br />
        <div className="flex flex-col lg:flex-row gap-8 p-6">
  <div className="flex-1">
    <ul className="list-disc pl-6 text-lg font-medium text-white space-y-4">
      <li>
        <strong>Legal Name:</strong> CUSTKART MERCHANDISE PRIVATE LIMITED
      </li>
      <li>
        <strong>Headquarters:</strong> Bokaro, Jharkhand, India
      </li>
      <li>
        <strong>Core Team:</strong>
        <ul className="list-decimal pl-6">
          <li>Kundan Mishra - Chief Executive Officer</li>
          <li>Abhishek Mishra - Co-Founder</li>
        </ul>
      </li>
      <li>
        <strong>Contact:</strong>
        <ul className="list-decimal pl-6">
          <li>E-mail : custkart@gmail.com</li>
          <li>Mobile No. : 7004800309</li>
        </ul>
      </li>
    </ul>
  </div>

  <div className="flex-1 shadow-xl shadow-black">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3856211687794!2d86.1999696744129!3d23.697919478706247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4232a7dbae3ff%3A0x207bd19bde05d5dc!2sCustkart-%20Merchandise%20Store!5e0!3m2!1sen!2sin!4v1736978657897!5m2!1sen!2sin"
      height="400"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    ></iframe>
  </div>
</div>
  </section>
  );
}

export default AboutComponent;
