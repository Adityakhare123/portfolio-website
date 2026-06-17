import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { profile, socialIcons } from "../data/portfolioData";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("SENDING...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: profile.email,
          },
          publicKey
        );

        setStatus("MESSAGE_SENT");
        setForm(initialForm);
      } catch {
        window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(
          form.name
        )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)}`;
      }

      return;
    }

    window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="command-label">CONTACT_CHANNEL</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
            Start a conversation.
          </h2>
          <p className="mt-6 leading-8 text-zinc-400">
            Reach out for developer roles, data projects, AI/ML ideas, collaborations, or freelance-style work.
          </p>

          <div className="mt-8 grid gap-3">
            <a href={`mailto:${profile.email}`} className="terminal-card p-4 text-zinc-300 hover:text-[#9cff57]">
              email: {profile.email}
            </a>

            <div className="flex flex-wrap gap-3">
              {socialIcons.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 px-4 py-3 text-sm"
                  >
                    <Icon />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submitForm}
          className="terminal-card"
        >
          <div className="terminal-header px-5 py-3">
            <p className="font-black">message_form.exe</p>
          </div>

          <div className="grid gap-5 p-5">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-zinc-400">NAME</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your name"
                className="border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-[#9cff57]"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-zinc-400">EMAIL</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="Enter your email"
                className="border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-[#9cff57]"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-zinc-400">MESSAGE</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateField}
                rows="6"
                placeholder="Write your message..."
                className="resize-none border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-[#9cff57]"
              />
            </label>

            <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
              SEND_MESSAGE <FiSend />
            </button>

            {status && <p className="green-text text-sm">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;