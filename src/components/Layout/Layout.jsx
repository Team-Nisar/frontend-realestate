import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar"
import Footer from "../common/Footer"

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      {/* SEO configuration with react-helmet */}
      <Helmet>
        <title>{title || "Default Page Title"}</title>
        <meta name="description" content={description || "Default description for the page."} />
        <meta name="keywords" content={keywords || "default, keywords, here"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Page layout structure */}
      <Navbar/>
      <main className="min-h-[calc(100vh - 200px)] p-0 m-0 box-border w-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
