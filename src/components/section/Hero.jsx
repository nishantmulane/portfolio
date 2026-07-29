import { ArrowRight } from "lucide-react";
import img1 from "../../assets/nishant_mulane.png";
import useAppContext from "../../context/useAppContext";

const Hero = () => {
  const { personalInfo } = useAppContext();

  return (
    <div>
    <section
      id="home"
      className="scroll-mt-24 flex items-center py-12 md:py-16 lg:min-h-[85vh]"
    >
      <div className="mx-auto w-full max-w-layout px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:items-center xl:gap-16">

          {/* LEFT CONTENT */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <div className="flex justify-center lg:justify-start">
              <span
                className="
                  flex
                  w-full
                  flex-col
                  items-center
                  rounded-full
                  border
                  border-border
                  px-5
                  py-2
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-secondary
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:shadow-sm
                  sm:flex-row
                  sm:justify-between
                  sm:text-xs
                "
              >
                {personalInfo.badge.map((item, index) => (
                  <span
                    key={item}
                    className="flex items-center"
                  >
                    {item}

                    {index !== personalInfo.badge.length - 1 && (
                      <span className="mx-2 hidden sm:inline">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </div>

            {/* Name */}

            <h1
              className="
                mt-5
                font-display
                text-5xl
                leading-[0.9]
                tracking-tight
                text-primary
                transition-transform
                duration-500
                hover:translate-x-1
                sm:text-6xl
                lg:text-7xl
                xl:text-[6rem]
              "
            >
              Nishant
              <br />
              Mulane
            </h1>

            {/* Headline */}

            <h2
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-relaxed
                text-primary
                lg:mx-0
                lg:text-2xl
              "
            >
              {personalInfo.headline}
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-base
                leading-8
                text-secondary
                lg:mx-0
              "
            >
              {personalInfo.description}
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                lg:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-7
                  py-3.5
                  text-background
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                {personalInfo.ctaPrimary}

                <ArrowRight
                  size={18}
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  px-7
                  py-3.5
                  text-primary
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary
                  hover:text-background
                  sm:w-auto
                "
              >
                {personalInfo.ctaSecondary}

                <ArrowRight
                  size={18}
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>

          </div>          
          
          {/* RIGHT IMAGE */}

          <div className="flex justify-center lg:justify-end">
            <div
              className="
                group
                relative
                flex
                h-[300px]
                w-[220px]
                items-end
                justify-center
                transition-all
                duration-500
                group-hover:scale-[1.02]
                sm:h-[380px]
                sm:w-[280px]
                md:h-[430px]
                md:w-[320px]
                lg:h-[440px]
                lg:w-[320px]
              "
            >
              {/* Background Card */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[72%]
                  rounded-[2.5rem]
                  border
                  border-border
                  bg-surface
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:shadow-2xl
                "
              />

              {/* Image */}

              <img
                src={img1}
                alt={personalInfo.name}
                loading="eager"
                decoding="async"
                className="
                  relative
                  h-full
                  w-auto
                  max-h-[300px]
                  object-contain
                  object-bottom
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                  sm:max-h-[360px]
                  md:max-h-[420px]
                  lg:max-h-[430px]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    <div className="mx-auto max-w-layout border-b border-border" />
    </div>
  );
};

export default Hero;