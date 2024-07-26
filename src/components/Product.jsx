import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="bg-[#5f4e33] h-full rounded-md flex flex-col">
      <img className="w-full rounded-md" src={image} alt="" />
      <div className="flex flex-col justify-between flex-1 px-4 py-2 ">
        <div className="mb-6">
          <h3 className="text-xl text-[#fbd392] mb-1">{title}</h3>
          <p className="text-base text-[#d1b68b] m-0">{price}</p>
          <p className="leading-5">{description}</p>
        </div>
        <p className="text-right">
          <button
            onClick={() => addItemToCart(id)}
            className="bg-[#f4b115] border-none rounded-md p-2 text-black hover:bg-[#f5b744]"
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}

export default Product;
