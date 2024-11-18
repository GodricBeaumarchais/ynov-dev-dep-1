"use client";
import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { isOver18, isValidName, isValidPostalCode } from '../utils/module';
import validator from 'validator';
import { toast } from 'sonner';

interface FormData {
    nom: string;
    prenom: string;
    email: string;
    dateNaissance: string;
    ville: string;
    codePostal: string;
}

interface FormProps {
    onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        email: '',
        dateNaissance: '',
        ville: '',
        codePostal: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: Partial<FormData> = {};
        let hasError = false;

        if (!isOver18(formData.dateNaissance)) {
            newErrors.dateNaissance = "Vous devez avoir au moins 18 ans.";
            hasError = true;
        }

        if (!isValidPostalCode(formData.codePostal)) {
            newErrors.codePostal = "Le code postal doit contenir 5 chiffres.";
            hasError = true;
        }

        if (!validator.isEmail(formData.email)) {
            newErrors.email = "L'adresse e-mail n'est pas valide.";
            hasError = true;
        }

        if(!isValidName(formData.nom)) {
            newErrors.nom = "Le nom n'est pas valide.";
            hasError = true;
        }

        if(!isValidName(formData.prenom)) {
            newErrors.prenom = "Le prénom n'est pas valide.";
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) {
            toast.error("Veuillez corriger les erreurs du formulaire.");
        } else {
            toast.success("Formulaire soumis avec succès.");
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-mainBlue-500 border border-mainPurple-400 p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-mainPurple hover:text-mainPurple-400"
                    aria-label="Fermer"
                >
                    <FaXmark className="w-6 h-6" />
                </button>
                <form onSubmit={handleSubmit} className="space-y-4" role="form">
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-200">
                            Nom :
                        </label>
                        <input 
                            type="text" 
                            id="nom" 
                            name="nom" 
                            value={formData.nom} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.nom && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.nom}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-200">
                            Prénom :
                        </label>
                        <input 
                            type="text" 
                            id="prenom" 
                            name="prenom" 
                            value={formData.prenom} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.prenom && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.prenom}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                            Email :
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-200">
                            Date de naissance :
                        </label>
                        <input 
                            type="date" 
                            id="dateNaissance" 
                            name="dateNaissance" 
                            value={formData.dateNaissance} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.dateNaissance && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.dateNaissance}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="ville" className="block text-sm font-medium text-gray-200">
                            Ville :
                        </label>
                        <input 
                            type="text" 
                            id="ville" 
                            name="ville" 
                            value={formData.ville} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.ville && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.ville}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="codePostal" className="block text-sm font-medium text-gray-200">
                            Code postal :
                        </label>
                        <input 
                            type="text" 
                            id="codePostal" 
                            name="codePostal" 
                            value={formData.codePostal} 
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full bg-mainPurple-400 rounded-md border-gray-900 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        {errors.codePostal && (
                            <p className="text-red-500 text-xs mt-1" data-testid="error-message">
                                {errors.codePostal}
                            </p>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Valider
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;