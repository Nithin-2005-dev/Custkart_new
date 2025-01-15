import React from 'react';

const AboutComponent=()=>{
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col">
    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          About Us
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-700">
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

      <div className="flex-1">
        <img
          src="\src\assets\about.jpg"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
    </div>
    <br />
    <br />
    <br />
    <div>
                <ul className="list-disc pl-6 text-lg font-medium text-gray-800">
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
  </section>
  );
}

export default AboutComponent;
