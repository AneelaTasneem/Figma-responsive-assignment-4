import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import Image from 'next/image'; // Import Image from Next.js

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Newsletter Section */}
      <div className="w-full bg-black text-white py-10 px-5 flex flex-col md:flex-row justify-between items-center rounded-lg mb-6">
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h2 className="text-[28px] font-extrabold">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        </div>

        {/* Email Input and Button */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 w-[300px] rounded-full text-black outline-none"
          />
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 text-gray-700">
          {/* Logo and Info */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center lg:items-start">
            <h2 className="text-xl font-bold mb-3">SHOP.CO</h2>
            <p className="text-center lg:text-left">
              We have clothes that suit your style and which you are proud to wear. From women to men.
            </p>
            <div className="flex space-x-3 mt-4">
              <i className="fab fa-facebook-f text-2xl"></i>
              <i className="fab fa-twitter text-2xl"></i>
              <i className="fab fa-instagram text-2xl"></i>
              <i className="fab fa-pinterest text-2xl"></i>
            </div>
          </div>

          {/* Company Links */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-80'>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-3">HELP</h3>
              <ul className="space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* FAQ Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-3">FAQ</h3>
              <ul className="space-y-2">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
              <ul className="space-y-2">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
              </ul>
              <ul className="space-y-2">
                <li>How-to Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-5 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Image
            src="https://img.icons8.com/color/48/visa.png"
            alt="Visa"
            width={48}
            height={48}
          />
          <Image
            src="https://img.icons8.com/color/48/mastercard.png"
            alt="MasterCard"
            width={48}
            height={48}
          />
          <Image
            src="https://img.icons8.com/color/48/paypal.png"
            alt="PayPal"
            width={48}
            height={48}
          />
          <Image
            src="https://img.icons8.com/color/48/apple-pay.png"
            alt="Apple Pay"
            width={48}
            height={48}
          />
          <Image
            src="https://img.icons8.com/color/48/google-pay.png"
            alt="Google Pay"
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
