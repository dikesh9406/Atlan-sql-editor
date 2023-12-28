"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Buttons from "@/components/Buttons";
import SqlEditor from "@/components/SqlEditor";
import { toast } from "react-toastify";
import Table from "@/components/Table";
import TableDraw from "@/components/TableDraw";
import Queries from "@/components/Queries";
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }
  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address, city, postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    }
    else if(
      value.toLowerCase()==="select * from orders;"
    ){
      setDefaults(5);
    } else {
      setDefaults(0);
    }
  }, [value]);
  return (
    <>
      <Navbar></Navbar>

      <div
        className="flex h-screen flex-wrap justify-center w-full p-4 "
        style={{ height: "calc(100vh - 3.25rem)" }}
      >
        <div className="w-full lg:w-3/12">
<TableDraw/>
        </div>
        <div className="w-full lg:w-6/12">
       
          <div className="w-full flex justify-between ">
            <div className="font-bold text-center py-4 w-full lg:w-1/3 bg-gray-200">
              Input
            </div>

            <Buttons setQuery={setQuery}
              setHeaders={setHeaders}
              setRows={setRows}
              setCSVData={setCSVData}
              value={value}
              setValue={setValue}
              setDefaults={setDefaults}
              defaults={defaults}
            ></Buttons>
          </div>
          <SqlEditor value={value} setValue={setValue}/>
          <Table query={query} headers={headers} rows={rows} csvData={csvData}></Table>
          
        </div>
        <div className="w-full lg:w-3/12">
<Queries setValue={setValue} setDefaults={setDefaults}/>
        </div>
      </div>
     
    </>
  );
};

export default page;
