"use client"
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto">
        {/*TEXT CONTAINER*/}
        <div className="h-1/6 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/*FORM CONTAINER*/}
        <div className="h-4/6 w-5/6 lg:h-4/5 lg:w-2/5 bg-red-50 rounded-xl">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="text-xl flex flex-col gap-1 lg:gap-2 justify-center p-4 lg:p-12 mt-10"
          >
            <label htmlFor="user_message">Dear Artem Skakun,</label>
            <textarea
              id="message"
              name="user_message"
              rows="6"
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              required
              autoFocus
            />
            <label htmlFor="user_email">My mail address is:</label>
            <input
              name="user_email"
              type="email"
              id="email"
              // pattern=".+@example\.com"
              className="bg-transparent border-b-2 border-b-black outline-none"
              size="30"
              required
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
            {success && <span className="flex justify-center text-green-500 font-semibold text-sm">Your message has been sent successfully!</span>}
            {error && <span className="flex justify-center text-red-500 font-semibold text-sm">Something went wrong!</span>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
