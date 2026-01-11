import img1 from "../../assets/nishant_mulane.png";
import useAppContext from "../../context/useAppContext";

const Hero = () => {
  const { personalInfo } = useAppContext();

  return (
    <section id="home" className="relative">
      <div
        className="
          min-h-[calc(100vh-72px)]
          max-w-6xl mx-auto
          px-6
          flex items-center
        "
      >
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image with solid bg + gradient ring */}
          <div
            className="
              p-[3px] rounded-full
              bg-gradient-to-r from-emerald-500 to-sky-500
            "
          >
            <div
              className="
                w-44 md:w-56
                rounded-full
                bg-white dark:bg-neutral-950
                flex items-center justify-center
              "
            >
              <img
                src={img1}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
              Computer Engineering Student & Frontend Developer
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Hi, I&apos;m{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-emerald-500 to-sky-500
                  bg-clip-text text-transparent
                "
              >
                Nishant
              </span>{" "}
              👋
            </h2>

            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex gap-4 justify-center md:justify-start">

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-2.5 rounded-full
                  border border-black/20 dark:border-white/20
                  font-medium
                  transition-all duration-300
                  hover:border-emerald-500
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/40
                "
              >
                Resume
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-2.5 rounded-full
                  bg-black text-white
                  dark:bg-white dark:text-black
                  transition-all duration-300
                  hover:bg-neutral-800 dark:hover:bg-neutral-200
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/40
                "
              >
                Contact
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
