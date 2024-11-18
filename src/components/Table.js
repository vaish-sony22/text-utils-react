import React from "react";

export default function Table() {
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
  };

  const thStyle = {
    backgroundColor: "rgb(0 156 255)",
    color: "white",
    padding: "8px",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "8px",
    textAlign: "center",
  };

  const tdStyleBlue ={
    backgroundColor: "rgb(0 156 255)",
    color: "white",
    padding: "8px",
    textAlign: "center",
  }

  const tdStyleRed ={
    backgroundColor: "red",
    color: "white",
    padding: "8px",
    textAlign: "center",
  }

  const tdStyleGreen ={
    backgroundColor: "green",
    color: "white",
    padding: "8px",
    textAlign: "center",
  }

  return (
    <div style={{ margin: "20px auto", maxWidth: "90%" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Items</th>
            <th style={thStyle}>Purchase Date</th>
            <th style={thStyle}>Units Sold</th>
            <th style={thStyle}>Unit Price</th>
            <th style={thStyle}>Revenue</th>
            <th style={thStyle}>Cost</th>
            <th style={thStyle}>Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drinks</td>
            <td style={tdStyle}>10/06/2014</td>
            <td style={tdStyle}>4,382.00</td>
            <td style={tdStyle}>47.45</td>
            <td style={tdStyleBlue}>$207,925.90</td>
            <td style={tdStyleRed}>$139,303.78</td>
            <td style={tdStyleGreen}>$68,622.12</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
