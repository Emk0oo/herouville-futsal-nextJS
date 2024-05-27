import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addToCart, CartItem } from "@/utils/cart";
import { toast } from "sonner";

interface ProduitHomePageCardProps {
  id: string;
  title: string;
  description: string;
  imageBase64: string; // Changed from imageURL to imageBase64
  price: number;
}

const ProduitHomePageCard = ({
  id,
  title,
  description,
  imageBase64, // Changed from imageURL to imageBase64
  price,
}: ProduitHomePageCardProps) => {
  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      title,
      description,
      imageBase64, // Changed from imageURL to imageBase64
      price,
      quantity: 1,
    };
    addToCart(item);
    toast.success("Produit ajouté au panier");
  };

  const imageURL=`data:image/jpeg;base64,${imageBase64}`;
  return (
    <div
      id="contentProduit"
      className="bg-white border w-full border-gray-200 rounded-lg shadow-lg overflow-hidden"
    >
      <div id="imageProduit" className="relative w-full h-48 rounded-t-lg">
        <Link href={`/boutique/${id}`}>
          <Image
            src={imageURL} // Changed from imageURL to imageBase64
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
