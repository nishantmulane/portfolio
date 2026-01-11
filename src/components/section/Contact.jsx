import useAppContext from "../../context/useAppContext";

const Contact = () => {
  const { contact } = useAppContext();

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold tracking-tight text-center mb-4">
        Contact
      </h2>

      <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />

      <div className="max-w-xl mx-auto text-center">
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
          I’m always open to discussing new opportunities, collaborations,
          or interesting ideas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="
              px-6 py-3 rounded-full
              border border-black/20 dark:border-white/20
              transition-all duration-300
              hover:border-emerald-500
            "
          >
            Email Me
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-underline px-6 py-3"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
