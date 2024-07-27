import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!form.current.checkValidity()) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-auto w-5/6 lg:w-2/5 bg-red-50 rounded-xl">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="text-xl flex flex-col gap-1 lg:gap-2 justify-normal p-4 lg:p-12 mt-5"
        noValidate
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
          className="bg-transparent border-b-2 border-b-black outline-none"
          size="30"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
        />
        <span>Regards</span>
        <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
          Send
        </button>
        {success && (
          <span className="text-green-500 font-semibold text-sm">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-500 font-semibold text-sm">
            Something went wrong!
          </span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
