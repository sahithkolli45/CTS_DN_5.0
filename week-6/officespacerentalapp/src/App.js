import React from "react";
import officeImage from "./office.jpg";
import "./App.css";

function App() {
  const featuredOffice = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {featuredOffice.Name}</p>

      <p
        style={{
          color: featuredOffice.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> Rs. {featuredOffice.Rent}
      </p>

      <p><b>Address:</b> {featuredOffice.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.Name}</h3>

          <p
            style={{
              color: item.Rent < 60000 ? "red" : "green"
            }}
          >
            <b>Rent:</b> Rs. {item.Rent}
          </p>

          <p><b>Address:</b> {item.Address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;