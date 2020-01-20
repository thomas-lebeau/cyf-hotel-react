import React from "react";

const Footer = ({ address }) => (
  <div className="footer">
    <ul className="list-unstyled">
      {address.map(line => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
