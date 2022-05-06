import { Products, ProductsCarousel } from "../../components/";
/* import { Navbar } from '../../components/Navbar';
import { Menu } from '../../components/Menu'; */

import "./Store.scss";
import { useState } from "react";
export function Store() {
  return (
    <div className="store__container">
      <div className="store__wrapper__bottom">
        <Products het={'testing index store products'}/>
      </div>
    </div>
  );
}
