import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
  const isOpen = true; // Example value, set this based on your logic
  const openHour = 9; // Example open hour
  const closeHour = 22; // Example close hour

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

function Header() {
  const style = {}; // Define your styles if needed

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cusine </p>
          <ul className="pizzas_grid">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) {
    return null;
  }

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>€{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer({ isOpen, openHour, closeHour }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come to visit us.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// Now you can use pizzaData in your code
console.log(pizzaData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
