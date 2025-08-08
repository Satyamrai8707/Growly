import React, { useState } from "react";
import { submitLeadForm } from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.businessType.trim())
      newErrors.businessType = "Business Type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    if (newErrors.phone) {
      return { valid: false, message: newErrors.phone };
    }

    if (newErrors.message) {
      return { valid: false, message: newErrors.message };
    }

    return { valid: Object.keys(newErrors).length === 0 };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationResult = validate();
    if (!validationResult.valid) {
      toast.error(validationResult.message || "Please fill the form.");
      return;
    }

    try {
      await submitLeadForm(formData);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="lead-form"
        className="max-w-xl mx-auto p-8 rounded-xl shadow-lg space-y-6
                   bg-white dark:bg-gray-800"
        noValidate
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
          />
          {errors.name && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
          />
          {errors.email && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone (10 digits) *"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
          />
          {errors.phone && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${
                          errors.businessType
                            ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
          >
            <option value="" disabled>
              Select Business Type *
            </option>
            <option value="Freelancer">Freelancer</option>
            <option value="Coach">Coach</option>
            <option value="Small Business">Small Business</option>
            <option value="Ecommerce">Ecommerce</option>
          </select>
          {errors.businessType && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">
              {errors.businessType}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400"
        >
          Submit
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
