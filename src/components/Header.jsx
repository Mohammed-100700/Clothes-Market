import { useRef, useContext } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../store/shopping-cart-context";

function Header() {
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;
  const modal = useRef();

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="bg-transparent text-[#201e1a] hover:text-[#453719]">
          Close
        </button>
        <button className="bg-[#271e07] cursor-pointer border-none rounded-md p-2 text-[#f9efda] hover:bg-[#382e1b]">
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} modalActions={modalActions} />
      <header className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <img className="w-20 mr-6" src="logo.png" alt="Elegant Model" />
          <h1 className="text-center uppercase text-[#edbf68] text-[2.5rem] m-0">
            Elegant Context
          </h1>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className="bg-[#edbf68] text-[#201e1a] border-none rounded-[5px] px-2 py-2 cursor-pointer text-[1.25rem] hover:bg-[#f5b744]"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}

export default Header;
