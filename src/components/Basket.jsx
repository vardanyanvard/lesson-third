import { useState } from "react";
import { BasketItem } from "./BasketItem";

export const Basket = ({ cart, setCart, total }) => {
  return (
    <div className="col-md-5">
      <h3>{`Total: ` + total}</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>count</th>
            <th>subtotal</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <BasketItem
              item={item}
              key={item.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
