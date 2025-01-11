import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rich-purple-200 px-[2.5rem] py-[1.3rem]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[1.3rem]">
          {/* Contact Information */}
          <div className="text-white text-xl">
            <h3 className="mb-4 font-bold">Contact Us</h3>
            <p className="mx-1.5 text-[0.9rem]">Real Estate</p>
            <p className="mx-1.5 text-[0.9rem]">Property Dealing</p>
            <p className="mx-1.5 text-[0.9rem]">Innovation City, ABC 45678</p>
            <p className="mx-1.5 text-[0.9rem]">Email: info@realEstate.com</p>
            <p className="mx-1.5 text-[0.9rem]">Phone: +1 (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div className="text-white text-xl">
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="mx-1.5 text-[0.9rem]">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="text-white text-xl">
            <h3 className="mb-4 font-bold">Our Office Location</h3>
            <div className="h-[12rem] border border-white overflow-hidden rounded-lg">
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
        <div className="text-center mt-[2.5rem] border-t border-white pt-[2.5rem] text-[0.9rem] text-white">
          <p>&copy; {new Date().getFullYear()} RealEstate.🤍 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
