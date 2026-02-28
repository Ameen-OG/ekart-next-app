"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";



export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>

    <title>Contact Us of Ekart</title>
      <meta name="description" content="Reach out to our team for support or inquiries." />


      <section className="max-w-3xl mx-auto py-16">


        <h1 className="text-4xl font-extrabold text-center mb-6">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}