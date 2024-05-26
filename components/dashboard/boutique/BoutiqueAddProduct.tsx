"use client";
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const BoutiqueAddProduct: React.FC = () => {
  const [nomProduit, setNomProduit] = useState<string>('');
  const [descriptionProduit, setDescriptionProduit] = useState<string>('');
  const [prixProduit, setPrixProduit] = useState<string>('');
  const [stockProduit, setStockProduit] = useState<string>('');
  const [imageProduit, setImageProduit] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage and set the token when the component mounts
    setToken(localStorage.getItem('token'));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', nomProduit);
    formData.append('description', descriptionProduit);
    formData.append('price', prixProduit);
    formData.append('stock', stockProduit);
    if (imageProduit) {
      formData.append('image', imageProduit);
    }

    try {
      const response = await fetch('http://localhost:4000/product', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setMessage('Produit ajouté avec succès.');
        setNomProduit('');
        setDescriptionProduit('');
        setPrixProduit('');
        setStockProduit('');
        setImageProduit(null);
        toast.success('Produit ajouté avec succès.');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
        toast.error('Erreur lors de l\'ajout du produit.');
      }
    } catch (err) {
      setError('Erreur lors de l\'ajout du produit.');
      toast.error('Erreur lors de l\'ajout du produit.');
    }
  };

  return (
    <div id='addProductContainer' className='w-full max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg'>
      <div id='addProductHeader' className='mb-6 border-b pb-4'>
        <h1 id='titreCard' className='text-2xl font-semibold text-gray-700'>Ajouter un produit</h1>
      </div>
      <div id='addProductContent'>
        <form id='addProductForm' className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='nomProduit' className='block text-sm font-medium text-gray-700'>Nom du produit</label>
            <input 
              type='text' 
              id='nomProduit' 
              name='nomProduit' 
              value={nomProduit}
              onChange={(e) => setNomProduit(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300' 
            />
          </div>
          <div>
            <label htmlFor='descriptionProduit' className='block text-sm font-medium text-gray-700'>Description du produit</label>
            <textarea 
              id='descriptionProduit' 
              name='descriptionProduit' 
              rows={4}
              value={descriptionProduit}
              onChange={(e) => setDescriptionProduit(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300'
            ></textarea>
          </div>
          <div>
            <label htmlFor='prixProduit' className='block text-sm font-medium text-gray-700'>Prix du produit</label>
            <input 
              type='number' 
              id='prixProduit' 
              name='prixProduit'
              value={prixProduit}
              onChange={(e) => setPrixProduit(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300' 
            />
          </div>
          <div>
            <label htmlFor='stockProduit' className='block text-sm font-medium text-gray-700'>Stock du produit</label>
            <input 
              type='number' 
              id='stockProduit' 
              name='stockProduit'
              value={stockProduit}
              onChange={(e) => setStockProduit(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300' 
            />
          </div>
          <div>
            <label htmlFor='imageProduit' className='block text-sm font-medium text-gray-700'>Image du produit</label>
            <input 
              type='file' 
              id='imageProduit' 
              name='imageProduit' 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImageProduit(e.target.files[0]);
                }
              }}
              className='mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100'
            />
          </div>
          <div>
            <button 
              type='submit' 
              className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoutiqueAddProduct;
