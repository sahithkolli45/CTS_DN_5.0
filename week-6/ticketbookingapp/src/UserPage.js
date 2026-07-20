import React from "react";

function UserPage() {
  const bookTicket = (flightName) => {
    alert(`Ticket booked successfully for ${flightName}`);
  };

  return (
    <div className="page">
      <h1>Welcome Back</h1>

      <h2>Book Your Flight</h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th>Booking</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>IndiGo 6E-101</td>
            <td>Vijayawada</td>
            <td>Hyderabad</td>
            <td>₹3,500</td>
            <td>
              <button
                onClick={() => bookTicket("IndiGo 6E-101")}
              >
                Book Ticket
              </button>
            </td>
          </tr>

          <tr>
            <td>Air India AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹6,500</td>
            <td>
              <button
                onClick={() => bookTicket("Air India AI-202")}
              >
                Book Ticket
              </button>
            </td>
          </tr>

          <tr>
            <td>SpiceJet SG-303</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>₹4,000</td>
            <td>
              <button
                onClick={() => bookTicket("SpiceJet SG-303")}
              >
                Book Ticket
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;