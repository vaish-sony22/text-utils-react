import React from "react";

export default function Table(props) {
  return (
    <div style={{ margin: "20px auto", maxWidth: "90%" }}>
      <table style={props.tableStyle}>
        <thead>
          <tr>
            <th style={props.thStyle}>Items</th>
            <th style={props.thStyle}>Purchase Date</th>
            <th style={props.thStyle}>Units Sold</th>
            <th style={props.thStyle}>Unit Price</th>
            <th style={props.thStyle}>Revenue</th>
            <th style={props.thStyle}>Cost</th>
            <th style={props.thStyle}>Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          <tr>
            <td style={props.tdStyle}>Drinks</td>
            <td style={props.tdStyle}>10/06/2014</td>
            <td style={props.tdStyle}>4,382.00</td>
            <td style={props.tdStyle}>47.45</td>
            <td style={props.tdStyleBlue}>$207,925.90</td>
            <td style={props.tdStyleRed}>$139,303.78</td>
            <td style={props.tdStyleGreen}>$68,622.12</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
