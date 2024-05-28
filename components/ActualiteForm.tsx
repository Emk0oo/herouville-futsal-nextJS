"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

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
    useState<Record<string, string>>(getInitialFormData());
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (res.ok) {
        setSubmitStatus("Article créé avec succès!");
        setFormData(getInitialFormData());
        setImageFile(null);
        toast.success("Article créé avec succès!");
      } else {
        setSubmitStatus("Erreur lors de la création de l'article");
        toast.error("Erreur lors de la création de l'article");
      }
    } catch (error) {
      setSubmitStatus("Erreur lors de la création de l'article");
      toast.error("Erreur lors de la création de l'article");
    }
  };

  return (
    <div id='addArticleContainer' className='w-full max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg'>
      <div id='addArticleHeader' className='mb-6 border-b pb-4'>
        <h1 id='titreCard' className='text-2xl font-semibold text-gray-700'>Créer un article</h1>
      </div>
      <div id='addArticleContent'>
        <form id='addArticleForm' className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          {Object.entries(formFields).map(([name, config]) => (
            <div key={name}>
              <label htmlFor={name} className='block text-sm font-medium text-gray-700'>{config.label}</label>
              <input
                type={config.type}
                id={name}
                name={name}
                placeholder={config.placeholder}
                value={config.type !== "file" ? formData[name] : ""}
                onChange={handleChange}
                required={config.type !== "file"}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300'
              />
              {config.type === "file" && imageFile && (
                <p className='text-sm text-gray-600 mt-2'>{imageFile.name}</p>
              )}
            </div>
          ))}
          <div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Créer l&apos;article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActualiteForm;
