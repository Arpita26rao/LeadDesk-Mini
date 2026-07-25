import { useState } from "react";
import axios from "axios";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://leaddesk-mini-production-3c69.up.railway.app/api/leads",
        formData
      );

      alert(res.data.message || "Lead submitted successfully!");

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);

      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Get a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-4"
            required
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded-lg p-4"
            required
          >
            <option value="">Select Budget</option>
            <option value="Less than $1,000">Less than $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default LeadForm;