import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

//Array of cities
export const cities = ["Hydrabad","Indore","Mumbai", "Bhopal", "Banglore", "Gurugram", "Delhi"];

//create a costom component
export const useMegaMenuLinks = () => {
    const {curruntCity} = useContext(FilterContext)

    return [
    // {
    //   name: "City",
    //   submenu: true,
    //   column:1,
    //   sublinks: [
    //     {
    //       Head: "Top Cities",
    //       sublink: [
    //         { name: `Hydrabad`, link: "/" },
    //         { name: "Indore", link: "/" },
    //         { name: "Noida", link: "/" },
    //         { name: "Banglore", link: "/" },
    //         { name: "Bhopal", link: "/" },
    //         { name: "Mumbai", link: "/" },
    //         { name: "Gurgaon", link: "/" },
    //         { name: "Delhi", link: "/" },
    //         { name: "Gujrat", link: "/" },
    //         { name: "Chennai", link: "/" },
    //         { name: "Rajisthan", link: "/" },
    //         { name: "Pune", link: "/" },
    //         { name: "Jaipur", link: "/" },
    //         { name: "Mohali", link: "/" },
    //       ],
    //     },
    //   ],
    // },
    
    {
      name: "Buy",
      submenu: true,
      column:5,
      sublinks: [
        {
          Head: "Popular Searches",
          sublink: [
            { name: `Plots ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Villa ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `houses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Buildings ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "Commercial Properties",
          sublink: [
            { name: `Land ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Shop ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Office Space ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Industrial Plot ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Showroom ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Warehouses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "No. of Rooms",
          sublink: [
            { name: `1BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `2BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `1RK ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `3BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `4BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `5BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `6BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
      ],
    },
    {
      name: "Rent",
      column:3,
      submenu: true,
      sublinks: [
        {
          Head: "Popular Searches",
          sublink: [
            { name: `Property ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Gated Community Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Property ${curruntCity ? "in " + curruntCity: ""} Without Brokerage`, link: "/" },
            { name: `Furnished Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Power Backup ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Clubhouse ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Gymnasium ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Swimming Pool ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "Residential Properties",
          sublink: [
            { name: `Plots ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Villa ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `houses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Buildings ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "Commercial Properties",
          sublink: [
            { name: `Land ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Shop ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Office Space ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Industrial Plot ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Showroom ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Warehouses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "No. of Rooms",
          sublink: [
            { name: `1BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `2BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `1RK ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `3BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `4BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `5BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `6BHK Flat ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
      ],
    },
    {
      name: "Projects",
      column:4,
      submenu: true,
      sublinks: [
        {
          Head: "Popular Searches",
          sublink: [
            { name: `Property ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Gated Community Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Property ${curruntCity ? "in " + curruntCity: ""} Without Brokerage`, link: "/" },
            { name: `Furnished Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Power Backup ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Clubhouse ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Gymnasium ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Properties with Swimming Pool ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "Residential Properties",
          sublink: [
            { name: `Plots ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Villa ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `houses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Flats ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Buildings ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        {
          Head: "Commercial Properties",
          sublink: [
            { name: `Land ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Shop ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Office Space ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Industrial Plot ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Showroom ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Warehouses ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
      ],
    },
    {
      name: "Agents",
      column:1,
      submenu: true,
      sublinks: [
        {
          Head: `Agents ${curruntCity ? curruntCity: ""}`,
          sublink: [
            { name: `Real Estate Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in Mega" + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in Rondu" + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Agents ${curruntCity ? "in South" + curruntCity: ""}`, link: "/" },
            { name: `Real Estate Sub Agents ${curruntCity ? "in " + curruntCity: ""}`, link: "/" },
          ],
        },
        
      ],
    },
    {
      name: "Services",
      column:3,
      submenu: true,
      sublinks: [
        {
          Head: "For Tenants",
          sublink: [
            { name: "Online Rent Agreement", link: "/" },
            { name: "Rent Receipt Generator", link: "/" },
            { name: "Packers & Movers", link: "/" },
            { name: "Home Appliances on Rent", link: "/" },
            { name: "Tenant Guide", link: "/" },
            { name: "Furniture on Rent", link: "/" },
          ],
        },
        {
          Head: "For Buyers",
          sublink: [
            { name: "Home Loan", link: "/" },
            { name: "Property Legal Services", link: "/" },
            { name: "Real Estate Services", link: "/" },
            { name: "Vastu Consultation", link: "/" },
            { name: "Property Inspection", link: "/" },
            { name: "Buyer Guide", link: "/" },
            { name: "NRI Guide", link: "/" },
            { name: "Title Search", link: "/" },
            { name: "Litigation Search", link: "/" },
          ],
        },
        {
          Head: "For Owners",
          sublink: [
            { name: "Post Free Property", link: "/" },
            { name: "Property Management", link: "/" },
            { name: "Home Painting Services", link: "/" },
            { name: "Home Interior Designers", link: "/" },
            { name: "Seller Guide", link: "/" },
            { name: "Solar Rooftop", link: "/" },
            { name: "Valuation Report", link: "/" },
          ],
        },
      ],
    },
  ];
}
