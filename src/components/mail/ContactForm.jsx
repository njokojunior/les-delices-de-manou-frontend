import React, { useState } from "react";
import Button from "../ui/Button";
import { FaPlane } from "react-icons/fa6";
// import env from "react-dotenv"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    uname: "", // User's name
    email: "", // User's email
    subject: "", // Subject of the message
    message: "", // User's message
  });

  
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      alert("API URL is missing. Check your Vercel env variables.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      warn("Message sent successfully!", data);
      // Optionally, reset the form or show a success message
      setFormData({ uname: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Error submitting form:", error);
      return;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18  text-violet-700">
        Contactez-Nous
      </h2>

      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-2 gap-4 mt-4 lg:gap-6 lg:mt-7"
      >
        <input
          type="text"
          name="uname"
          placeholder="Votre Nom"
          onChange={handleChange}
          value={formData.uname}
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Votre Email"
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1"
        />
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          value={formData.subject}
          placeholder="Objet"
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1 col-span-2"
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Votre Message"
          className="border-gray-500 py-4 px-4 rounded-lg placeholder:text-gray-400 border-1 col-span-2 resize-none lg:h-42"
        ></textarea>

        <Button
          className="cursor-pointer flex! items-center justify-center gap-1"
          shape="pill"
          type="submit"
        >
          Send Message <FaPlane />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
