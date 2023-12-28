"use client"
import React from "react";

function Queries({ setDefaults, setValue }) {
  const queryValues = [
    {
      query: "select * from customers;",
      default: 1,
    },
    
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
    {
      query: "select * from orders;",
      default: 5,
    },
    {
      query:
        "select contact_name, address, city, postal_code, country from customers limit 18;",
      default: 4,
    },
  ];

  return (
    <div className="container mx-auto my-0 p-4 bg-gray-100 ">
      <div className="flex items-center justify-center mb-4">
        <div className="text-2xl font-bold text-blue-500">
          {`</> `}Sample Queries
        </div>
      </div>

      <div className=" h-90  lg:h-80 overflow-auto  scrollbar-hide lg:mb-0 gap-4">
        {queryValues.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer bg-gray-300 hover:bg-gray-400 p-4 text-center text-sm rounded-md my-4"
            onClick={() => {
              setDefaults(`${item.default}`);
              setValue(`${item.query}`);
            }}
          >
            <p className="text-indigo-500 font-mono">{item.query}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Queries;
