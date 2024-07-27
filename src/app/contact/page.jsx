"use client";
import { motion } from "framer-motion";
import AnimatedText from "../../components/animatedText";
import ContactForm from "../../components/contactForm";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto">
        <AnimatedText text="Say Hello " />
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default ContactPage;
