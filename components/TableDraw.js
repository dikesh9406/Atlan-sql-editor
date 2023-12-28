
"use client"
import React from "react";
import TableStructure from "./TableStructure";

function TableDraw() {
  let customers = require("./Datasets/customers.json");
  let suppliers = require("./Datasets/suppliers.json");
  let products = require("./Datasets/products.json");
  let orders=require("./Datasets/orders.json")
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={1}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
        tableNo={2}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={3}
      />
       <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={orders[0]}
        tableName="orders"
        tableNo={3}
      />
    </div>
  );
}

export default TableDraw;
