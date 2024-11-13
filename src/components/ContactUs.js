import React from "react";

export default function ContactUs(props) {
  return (
    <>
      <div className="card" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name:Vaishnavi</li>
          <li className="list-group-item">Phone:6309745712</li>
          <li className="list-group-item">Mail:vaishnavii@gmail.com</li>
        </ul>
      </div>
    </>
  );
}
