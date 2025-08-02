import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [amount, setAmount] = useState('80');
  const [currency, setCurrency] = useState('Euro');

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
    alert('Hello member!');
  };

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const sayMessage = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert('I was clicked');
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const euroAmount = parseFloat(amount) * 80;
      alert(`Converting to Euro Amount is: ${euroAmount}`);
    } else {
      alert('Conversion not supported for this currency.');
    }
  };

  return (
    <>
      {}
      <style>
        {`
          .container {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .counter {
            margin-bottom: 20px;
            font-size: 2em;
          }
          button {
            padding: 8px 12px;
            cursor: pointer;
          }
          .main-buttons button {
            display: block;
            margin-bottom: 10px;
          }
          form {
            margin-top: 20px;
            max-width: 400px;
          }
          .form-group {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .form-group label {
            margin-right: 10px;
            width: 80px;
          }
          .form-group input {
            flex-grow: 1;
            padding: 5px;
          }
          .currency-converter h1 {
            color: green;
          }
          .button-container {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <div className="container">
        {}
        <div className="counter">{counter}</div>
        <div className="main-buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          
          {}
          <button onClick={() => sayMessage('Welcome')}>Say Welcome</button>
          
          {}
          <button onClick={handleClick}>Click on me</button>
        </div>

        {}
        <div className="currency-converter">
          <h1>Currency Convertor!!!</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input 
                type="text" 
                id="amount" 
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currency">Currency:</label>
              <input 
                type="text" 
                id="currency" 
                value={currency}
                onChange={handleCurrencyChange}
              />
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
