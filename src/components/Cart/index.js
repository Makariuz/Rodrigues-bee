import { useState } from "react";

import "./Cart.scss";

export function Cart({users, showCart, setShowCart}) {

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div className={"cart__wrapper " + (showCart && "show")}>
      <div className={"cart__empty " + (isEmpty && showCart && "isEmpty")}>
        <h2>Cart is empty</h2>

        <button> Continue shopping </button>
      </div>
    </div>
  );
}
