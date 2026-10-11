
import React, { useEffect, useState } from "react";
import attractions from "../data/attractions";

function Enquiry() {
  // ================================
  // FORM DATA
  // ================================
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    visitors: "",
    visitDate: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ================================
  // PAGE TITLE
  // ================================
  useEffect(() => {
    document.title = "Visitor Enquiry | Explore Lesotho";
    window.scrollTo(0, 0);
  }, []);

  // ================================
  // HANDLE INPUT CHANGES
  // ================================
  const handleChange = (event) => {
    const { name, value } = event.target;

    let newValue = value;

    // FULL NAME: Letters and spaces only
    if (name === "fullName") {
      newValue = value.replace(/[^\p{L} ]/gu, "");
    }

    // PHONE NUMBER: Numbers only
    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 8);
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: newValue
    }));

    // Clear error when user edits a field
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: ""
    }));

    setSubmitted(false);
  };

  // ================================
  // FORM VALIDATION
  // ================================
  const validateForm = () => {
    const newErrors = {};

    // FULL NAME VALIDATION
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (
      !/^[\p{L} ]+$/u.test(formData.fullName.trim())
    ) {
      newErrors.fullName =
        "Only letters and spaces are allowed.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName =
        "Full name must contain at least 3 characters.";
    }

    // EMAIL VALIDATION
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    // PHONE NUMBER VALIDATION
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{8}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 8 digits.";
    }

    // DESTINATION VALIDATION
    if (!formData.destination) {
      newErrors.destination =
        "Please select a destination.";
    }

    // VISITORS VALIDATION
    if (!formData.visitors) {
      newErrors.visitors =
        "Please enter the number of visitors.";
    } else if (
      !Number.isInteger(Number(formData.visitors)) ||
      Number(formData.visitors) < 1
    ) {
      newErrors.visitors =
        "Please enter a valid number of visitors.";
    }

    // VISIT DATE VALIDATION
    if (!formData.visitDate) {
      newErrors.visitDate =
        "Please select your preferred visit date.";
    } else {
      const selectedDate = new Date(
        `${formData.visitDate}T00:00:00`
      );

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.visitDate =
          "Please select today or a future date.";
      }
    }

    // MESSAGE VALIDATION
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Your message must contain at least 10 characters.";
    }

    return newErrors;
  };

  // ================================
  // SUBMIT FORM
  // ================================
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Reset form after successful validation
    setFormData({ ...initialFormData });
  };

  return (
    <main className="enquiry-page">

      {/* ================================
          PAGE HEADER
      ================================ */}
      <section className="enquiry-hero">
        <div className="section-container">

          <p className="section-label">
            PLAN YOUR JOURNEY
          </p>

          <h1>
            Your Lesotho
            <span> Adventure Starts Here</span>
          </h1>

          <p className="enquiry-intro">
            Tell us about your planned visit and the destination
            you would like to explore.
          </p>

        </div>
      </section>

      {/* ================================
          ENQUIRY AREA
      ================================ */}
      <section className="enquiry-section">

        <div className="section-container enquiry-layout">

          {/* LEFT INFORMATION */}
          <div className="enquiry-information">

            <p className="section-label">
              VISITOR ENQUIRY
            </p>

            <h2>
              Plan an Unforgettable Journey
            </h2>

            <p>
              Whether you are looking for mountain adventures,
              cultural experiences or peaceful natural landscapes,
              Lesotho has something extraordinary to discover.
            </p>

            <div className="enquiry-info-list">

              <div className="enquiry-info-item">
                <span>01</span>

                <div>
                  <h3>Choose a Destination</h3>
                  <p>
                    Select one of Lesotho's featured tourism
                    destinations.
                  </p>
                </div>
              </div>

              <div className="enquiry-info-item">
                <span>02</span>

                <div>
                  <h3>Tell Us About Your Visit</h3>
                  <p>
                    Enter your preferred date and number of
                    travellers.
                  </p>
                </div>
              </div>

              <div className="enquiry-info-item">
                <span>03</span>

                <div>
                  <h3>Send Your Enquiry</h3>
                  <p>
                    Complete the form and receive an on-screen
                    confirmation.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================================
              FORM CONTAINER
          ================================ */}
          <div className="enquiry-form-container">

            <div className="form-heading">
              <p>TRAVEL ENQUIRY</p>
              <h2>Tell Us About Your Trip</h2>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div
                className="success-message"
                role="status"
              >
                <strong>
                  Enquiry form validated successfully!
                </strong>

                <p>
                  Thank you for your interest in exploring Lesotho.
                  This is a demonstration form; no enquiry has
                  been sent to a server.
                </p>
              </div>
            )}

            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* ================================
                  FULL NAME
              ================================ */}
              <div className="form-group full-width">

                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />

                {errors.fullName && (
                  <span className="form-error">
                    {errors.fullName}
                  </span>
                )}

              </div>

              {/* ================================
                  EMAIL ADDRESS
              ================================ */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                {errors.email && (
                  <span className="form-error">
                    {errors.email}
                  </span>
                )}

              </div>

              {/* ================================
                  PHONE NUMBER
              ================================ */}
              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  maxLength={8}
                  placeholder="Enter 8-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel-national"
                />

                {errors.phone && (
                  <span className="form-error">
                    {errors.phone}
                  </span>
                )}

              </div>

              {/* ================================
                  DESTINATION
              ================================ */}
              <div className="form-group full-width">

                <label htmlFor="destination">
                  Selected Destination
                </label>

                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a destination
                  </option>

                  {attractions.map((attraction) => (
                    <option
                      key={attraction.id}
                      value={attraction.name}
                    >
                      {attraction.name}
                    </option>
                  ))}
                </select>

                {errors.destination && (
                  <span className="form-error">
                    {errors.destination}
                  </span>
                )}

              </div>

              {/* ================================
                  NUMBER OF VISITORS
              ================================ */}
              <div className="form-group">

                <label htmlFor="visitors">
                  Number of Visitors
                </label>

                <input
                  id="visitors"
                  type="number"
                  name="visitors"
                  min="1"
                  step="1"
                  placeholder="2"
                  value={formData.visitors}
                  onChange={handleChange}
                />

                {errors.visitors && (
                  <span className="form-error">
                    {errors.visitors}
                  </span>
                )}

              </div>

              {/* ================================
                  PREFERRED VISIT DATE
              ================================ */}
              <div className="form-group">

                <label htmlFor="visitDate">
                  Preferred Visit Date
                </label>

                <input
                  id="visitDate"
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                />

                {errors.visitDate && (
                  <span className="form-error">
                    {errors.visitDate}
                  </span>
                )}

              </div>

              {/* ================================
                  MESSAGE
              ================================ */}
              <div className="form-group full-width">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about the experience you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && (
                  <span className="form-error">
                    {errors.message}
                  </span>
                )}

              </div>

              {/* ================================
                  SUBMIT BUTTON
              ================================ */}
              <div className="full-width">

                <button
                  type="submit"
                  className="submit-enquiry-button"
                >
                  Submit Enquiry
                </button>

              </div>

            </form>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Enquiry;
