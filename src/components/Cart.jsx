import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div>
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul className="list-none my-4 flex flex-col gap-2">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 bg-[#fbd392] rounded-md text-sm"
              >
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="text-base flex gap-2 items-center">
                  <button
                    onClick={() => updateItemQuantity(item.id, -1)}
                    className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-xl hover:bg-[#f5b744] p-1"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateItemQuantity(item.id, 1)}
                    className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-xl hover:bg-[#f5b744] p-1"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p className="text-right mb-4">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

export default Cart;
