"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Définition des types pour les champs du formulaire
type FormFieldConfig = {
  label: string;
  type: string;
  placeholder?: string;
};

type FormFields = {
  date: FormFieldConfig;
  image: FormFieldConfig;
  title: FormFieldConfig;
  title2: FormFieldConfig;
  title3: FormFieldConfig;
  entete: FormFieldConfig;
  content: FormFieldConfig;
  content2: FormFieldConfig;
  author: FormFieldConfig;
};

// Configuration des champs du formulaire
const formFields: FormFields = {
  date: { label: "Date", type: "date" },
  image: { label: "Uploader l'image", type: "file", placeholder: "upload" },
  title: { label: "Titre 1", type: "text", placeholder: "Title" },
  title2: { label: "Titre 2", type: "text", placeholder: "Title 2" },
  title3: { label: "Titre 3", type: "text", placeholder: "Title 3" },
  entete: { label: "En tete", type: "text", placeholder: "Entete" },
  content: { label: "Contenu 1", type: "text", placeholder: "Content" },
  content2: { label: "Contenu 2", type: "text", placeholder: "Content 2" },
  author: { label: "Auteur", type: "text", placeholder: "Author" },
};

const getInitialFormData = () => {
  return Object.keys(formFields).reduce((acc, key) => {
    if (formFields[key as keyof FormFields].type !== "file") {
      acc[key] = "";
    }
    return acc;
  }, {} as Record<string, string>);
};

const ActualiteForm = () => {
  const [formData, setFormData] =
    useState<Record<string, string>>(getInitialFormData);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      setImageFile(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, value);
    }
    if (imageFile) {
      data.append("image", imageFile);
    }
    const token = localStorage.getItem("token"); 

    try {
      const res = await fetch("http://localhost:4000/article", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: data, // Utilisation de FormData directement
      });

      if (res.ok) {
        setSubmitStatus("Article créé avec succès!");
        setFormData(getInitialFormData());
        setImageFile(null);
      } else {
        setSubmitStatus("Erreur lors de la création de l'article");
      }
    } catch (error) {
      setSubmitStatus("Erreur lors de la création de l'article");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mt-10"
    >
      {Object.entries(formFields).map(([name, config]) => (
        <div key={name} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {config.label}
          </label>
          <input
            type={config.type}
            name={name}
            placeholder={config.placeholder}
            value={config.type !== "file" ? formData[name] : ""}
            onChange={handleChange}
            required={config.type !== "file"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {config.type === "file" && imageFile && (
            <p className="text-sm text-gray-600 mt-2">{imageFile.name}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Créer l&apos;article
      </button>
      {submitStatus && (
        <p className="mt-4 text-sm text-red-500">{submitStatus}</p>
      )}
    </form>
  );
};

export default ActualiteForm;
