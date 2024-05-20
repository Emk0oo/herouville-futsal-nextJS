"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const ActualiteForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    imageURL: "",
    title: "",
    title2: "",
    title3: "",
    entete: "",
    content: "",
    content2: "",
    author: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Remplacer l'URL par l'URL de votre API
    const res = await fetch("http://localhost:4000/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      console.log("Article créé avec succès!");
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        date: "",
        imageURL: "",
        title: "",
        title2: "",
        title3: "",
        entete: "",
        content: "",
        content2: "",
        author: "",
      });
    } else {
      console.error("Erreur lors de la création de l'article");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="imageURL"
        placeholder="Image URL"
        value={formData.imageURL}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title2"
        placeholder="Title 2"
        value={formData.title2}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title3"
        placeholder="Title 3"
        value={formData.title3}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="entete"
        placeholder="Entete"
        value={formData.entete}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="content2"
        placeholder="Content 2"
        value={formData.content2}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Créer l&apos;article
      </button>
    </form>
  );
};

export default ActualiteForm;
