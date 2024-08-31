import { useEffect, useState } from "react";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      name: "Psychology",
      price: 27000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2878,h_1176/dk-core-nonprod/9780744091960/9780744091960_cover.jpg",
    },
    {
      id: 102,
      name: "Politic",
      price: 30000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465402141/9781465402141_cover.jpg",
    },
    {
      id: 103,
      name: "Business",
      price: 28000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465415851/9781465415851_cover.jpg",
    },
    {
      id: 104,
      name: "Science",
      price: 35000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465419651/9781465419651_cover.jpg",
    },
    {
      id: 105,
      name: "Sociology",
      price: 15000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465436504/9781465436504_cover.jpg",
    },
    {
      id: 106,
      name: "History",
      price: 38000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465445100/9781465445100_cover.jpg",
    },
    {
      id: 107,
      name: "Literature",
      price: 18000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465491015/9781465491015_cover.jpg",
    },
    {
      id: 108,
      name: "Classical Music",
      price: 40000,
      pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465473424/9781465473424_cover.jpg",
    },
  ]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const moveToCart = (id) => {
    let found = products.find((x) => x.id === id);
    let foundInBasket = basket.find((x) => x.id === id);

    if (foundInBasket) {
      setBasket(
        basket.map((x) => (x.id === id ? { ...x, count: x.count + 1 } : x))
      );
    } else {
      setBasket([...basket, { ...found, count: 1 }]);
    }
  };

  useEffect(() => {
    setTotal(
      basket
        .map((item) => item.count * item.price)
        .reduce((prev, next) => prev + next, 0)
    );
  }, [basket]);

  return (
    <>
      <h1>Online Shop</h1>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket cart={basket} setCart={setBasket} total={total} />
      </div>
    </>
  );
}
