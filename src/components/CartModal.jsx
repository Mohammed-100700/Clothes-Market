import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart.jsx";

const CartModal = forwardRef(function CartModal({ modalActions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 bg-[#d3b17b] p-4 rounded-md shadow-md mx-auto w-[30%]"
    >
      <h2 className="text-2xl text-[#4f3807] uppercase m-0">Your Cart</h2>
      <Cart />
      <form className="flex gap-4 justify-end items-center" method="dialog">
        {modalActions}
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default CartModal;
