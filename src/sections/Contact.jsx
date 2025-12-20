import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_obaaysk",
        "template_ihnsrgq",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "QkaLkOEStA32XZfD8"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong. Please try again.");
    }
  };

  return (
    <motion.section
      className="relative flex items-center c-space section-spacing"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Contact card */}
      <motion.div
        className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
        variants={fadeUp}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col items-start w-full gap-5 mb-10"
          variants={fadeUp}
        >
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="w-full"
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          <motion.div className="mb-5" variants={fadeUp}>
            <label htmlFor="name" className="feild-label">
              Your Good Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Tony Stark"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="mb-5" variants={fadeUp}>
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="tony@stark.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="mb-5" variants={fadeUp}>
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-60"
            variants={fadeUp}
          >
            {isLoading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
