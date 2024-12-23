import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-[#213555] ">
      <div className="container px-4 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p>Real Estate</p>
            <p>Property Dealing </p>
            <p>Innovation City, ABC 45678</p>
            <p>Email: info@realEstate.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#training" className="hover:text-gray-300">Training</a></li>
              <li><a href="#careers" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Office Location</h3>
            <div className="h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509271!2d144.95373531531662!3d-37.81720997975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770b0fa9a13d03!2s123%20Technology%20Drive!5e0!3m2!1sen!2sus!4v1634239086120!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-8 text-center border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;