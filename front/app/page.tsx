"use client";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

export default function Home() {

  const [formOpen, setFormOpen] = useState(false);

    const handleFormOpen = () => {
        setFormOpen(true);
    };

    const handleFormClose = () => {
        setFormOpen(false);
    };
    
  return (
    <div className="min-h-screen bg-mainBlue-500">
      <Header onFormOpen={handleFormOpen}/>
      {formOpen && <Form onClose={handleFormClose} />}
    </div>
  );
}
