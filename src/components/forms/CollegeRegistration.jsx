import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection


export default function CollegeRegistration() {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    collegeName: "",
    collegeId: "",
    email: "",
    type: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};

    if (!formData.collegeName.trim()) {
      errors.collegeName = "College Name is required";
    }

    if (!formData.collegeId.trim()) {
      errors.collegeId = "College ID is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.type) {
      errors.type = "Please select a type of institution";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:8080/api/colleges/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("../Dashboards/CollegeDashboard"); // Redirect to College Dashboard
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">College Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">College Name</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.collegeName && <p className="text-red-500 text-sm">{errors.collegeName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">College ID</label>
          <input
            type="text"
            name="collegeId"
            value={formData.collegeId}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.collegeId && <p className="text-red-500 text-sm">{errors.collegeId}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Institution</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          >
            <option value="">Select Type</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Autonomous">Autonomous</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
