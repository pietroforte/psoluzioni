import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mpwpjdvn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setIsSent(true);
      setTimeout(() => {
        router.push('/');
      }, 3000); // Redirect after 3 seconds
    } else {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-logo-cream font-logo-text flex flex-col items-center justify-center px-4 py-16">
      {!isSent ? (
        <>
          <h1 className="text-3xl font-bold text-logo-brown mb-4">Contact Us</h1>
          <p className="text-logo-brown mb-8 text-center max-w-lg">
            We'd love to hear from you! Fill out the form below and we’ll get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
          >
            <div>
              <label className="block text-logo-brown font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-logo-olive px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-logo-brown font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="w-full border border-logo-olive px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-logo-brown font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full border border-logo-olive px-3 py-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-logo-orange hover:bg-logo-brown text-logo-cream px-4 py-2 rounded w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl text-logo-brown font-bold mb-4">Thank you!</h2>
          <p className="text-logo-brown">
            Your message has been sent. Redirecting to the homepage...
          </p>
        </div>
      )}
    </div>
  );
}
