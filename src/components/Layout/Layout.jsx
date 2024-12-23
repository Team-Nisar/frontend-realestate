import React from "react";
import { Helmet } from "react-helmet";

// Import your Header and Footer components
import Header from "./Header";
import Footer from "./Footer";

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
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 200px)",
          padding: "0", // Remove default padding
          boxSizing: "border-box",
          width: "100vw", // Use viewport width
          margin: "0", // Remove margin
        }}
      >
        {children}
      </main>
      <Footer />

      {/* Global responsive styles */}
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: stretch; /* Ensure content spans full width */
          justify-content: flex-start; /* Align content to the top */
        }

        @media (max-width: 768px) {
          main {
            padding: 0; /* Keep no padding for smaller screens */
          }
        }

        @media (max-width: 480px) {
          main {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
