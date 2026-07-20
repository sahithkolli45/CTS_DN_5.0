import React from "react";

function GuestPage() {
  return (
    <div className="page">
      <h1>Please Sign Up</h1>

      <h2>Flight Details</h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>IndiGo 6E-101</td>
            <td>Vijayawada</td>
            <td>Hyderabad</td>
            <td>₹3,500</td>
          </tr>

          <tr>
            <td>Air India AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹6,500</td>
          </tr>

          <tr>
            <td>SpiceJet SG-303</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>₹4,000</td>
          </tr>
        </tbody>
      </table>

      <p className="message">
        Login to book your flight tickets.
      </p>
    </div>
  );
}

export default GuestPage;