export default function TableInfo(data) {
    let infoStore = null;
    if (data === 1) {
      infoStore = require("./Datasets/customers.json");
    } else if (data === 2) {
      infoStore = require("./Datasets/suppliers.json");
    } else if (data === 3) {
      infoStore = require("./Datasets/products.json");
    } else if (data === 4) {
      infoStore = require("./Datasets/select_customer.json");
    }else if(data===5)
    {
      infoStore=require("./Datasets/orders.json")
    }
    let tableHeaders = [];
    let tableRows = [];
    for (var i = 0; i < infoStore.length; i++) {
      const row = infoStore[i];
      if (i === 0) {
        for (const item in row) {
          tableHeaders.push(row[item]);
        }
      } else {
        let temp = [];
        for (const item in row) {
          temp.push(row[item]);
        }
        tableRows.push(temp);
      }
    }
    return { tableHeaders, tableRows };
  }
  