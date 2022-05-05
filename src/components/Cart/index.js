import { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { Products } from "../Products";

import "./Cart.scss";

export function Cart({users, showCart, setShowCart}) {

  const [isEmpty, setIsEmpty] = useState(true);
  

  return (
    <div className={"cart__wrapper " + (showCart && "show")}>

      <div className={"cart__empty " + (isEmpty && showCart && "isEmpty")}>
        <h2>Cart is empty</h2>

        <button onClick={() => setShowCart(!showCart)}> Continue shopping </button>
    
        
      </div>

      <div className={"cart__prod " + (!isEmpty && showCart && 'show')}>

      {/* {prodCart &&
          prodCart.map((item, i) => {
            return (
              <div key={item._id} className="prod__cart__list">
                <div index={i} className="prod__added__cart">
                  {item}
                </div>

                <div className="btn__remove">
                  <button>
                    Remove <IoMdRemoveCircleOutline />{" "}
                  </button>
                </div>
              </div>
            );
          })} */}
      </div>
    </div>
  );
}
