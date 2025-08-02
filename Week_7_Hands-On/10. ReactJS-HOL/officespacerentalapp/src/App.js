import React from 'react';
import './App.css'; 

function App() {
  let colors = [];
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }
  
  const element = "Office Space";

  const jsxatt = (
    <img
      src="https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D"
      width="35%"
      height="65%"
      alt="Office Space"
    />
  );

  return (
    <>
      {}
      <style>
        {`
          .App {
            text-align: center;
            font-family: Arial, sans-serif;
           padding: 20px;
          }
          .textRed {
            color: red;
          }
          .textGreen {
            color: green;
          }
        `}
      </style>
      <div className="App">
        <h1>{element}, at Affordable Range</h1>
        {jsxatt}
        <h1>Name: {ItemName.Name}</h1>
        <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
        <h3>Address: {ItemName.Address}</h3>
      </div>
    </>
  );
}

export default App;
