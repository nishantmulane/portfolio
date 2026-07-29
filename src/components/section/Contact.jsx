import { ArrowUpRight } from "lucide-react";
import useAppContext from "../../context/useAppContext";

const Contact = () => {
  const { contact } = useAppContext();

  const links = [
    {
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      title: "LinkedIn",
      value: "Connect",
      href: contact.linkedin,
    },
    {
      title: "GitHub",
      value: "View Profile",
      href: contact.github,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-layout px-6">
        {/* Section Label */}

        <span
          className="
            text-xs
            uppercase
            tracking-[0.22em]
            text-secondary
          "
        >
          Contact
        </span>

        {/* Heading */}

        <h2
          className="
            mt-4
            max-w-4xl
            font-display
            text-4xl
            leading-tight
            tracking-tight
            text-primary
            sm:text-5xl
            lg:text-6xl
          "
        >
          Let's build something meaningful together.
        </h2>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-3xl
            text-base
            leading-8
            text-secondary
          "
        >
          Whether you're looking for a software engineer,
          want to collaborate on a project, or simply want
          to connect, I'd be happy to hear from you.
        </p>

        {/* Availability */}

        <div className="mt-10">
          <span
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              px-5
              py-3
              text-sm
              text-primary
            "
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for internships and full-time opportunities
          </span>
        </div>

        {/* Contact Links */}

        <div className="mt-20 border-t border-border">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={
                link.title === "Email"
                  ? undefined
                  : "_blank"
              }
              rel={
                link.title === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                border-b
                border-border
                py-8
                transition-all
                duration-300
                hover:bg-primary/5
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    font-display
                    tracking-tight
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {link.title}
                </h3>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-secondary
                "
              >
                <span>{link.value}</span>

                <ArrowUpRight
                  size={18}
                  className="
                    opacity-0
                    -translate-x-2
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </div>
            </a>
          ))}
        </div>

        {/* Closing Statement */}

        <div
          className="
            mt-20
            border-l-2
            border-primary
            pl-6
          "
        >
          <p
            className="
              max-w-2xl
              text-xl
              font-display
              leading-relaxed
              tracking-tight
              text-primary
            "
          >
            Thanks for taking the time to explore my work.
            I'm always excited to learn, collaborate,
            and contribute to meaningful software that
            creates real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;