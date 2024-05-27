import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addToCart, CartItem } from "@/utils/cart";
import { toast } from "sonner";

interface ProduitHomePageCardProps {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: number;
}

const ProduitHomePageCard = ({
  id,
  title,
  description,
  imageURL,
  price,
}: ProduitHomePageCardProps) => {
  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      title,
      description,
      imageURL,
      price,
      quantity: 1,
    };
    addToCart(item);
    toast.success("Produit ajouté au panier");
  };

  return (
    <div
      id="contentProduit"
      className="bg-white border w-full border-gray-200 rounded-lg shadow-lg overflow-hidden"
    >
      <div id="imageProduit" className="relative w-full h-48 rounded-t-lg">
        <Link href={`/boutique/${id}`}>
          <Image
            src={imageURL}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg"
          />
        </Link>
      </div>

      <div id="informationProduit" className="flex flex-col p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <span className="text-xl font-bold text-gray-800">{price} €</span>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleAddToCart}
            className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProduitHomePageCard;
