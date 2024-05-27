"use client";
import React, { useState, useEffect } from "react";
import { getCart, saveCart, CartItem } from "@/utils/cart";
import { FaTrashAlt } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe publishable key is not defined");
}

const stripePromise = loadStripe(stripePublishableKey);

const PanierComponent = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const isError = (error: unknown): error is Error => {
    return (error as Error).message !== undefined;
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.details || "Server error");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error: unknown) {
      if (isError(error)) {
        console.error("Checkout error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-3/4 p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Votre Panier
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Votre panier est vide.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 md:justify-between mb-4 border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.imageURL}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.price} €</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 text-center border-0 focus:ring-0"
                    min="1"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <h2 className="text-xl font-semibold text-gray-800">Total</h2>
              <span className="text-xl font-semibold text-gray-800">
                {calculateTotal()} €
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Payer avec Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanierComponent;
