import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Jean Luc Musengayezu, a passionate Full-Stack Software Engineer
                and ICT Professional specializing in creating innovative digital solutions 
                and user-centric applications. With a strong foundation in both frontend and backend development, 
                coupled with extensive experience in ICT systems management and data-driven solutions, 
                I bridge the gap between technical excellence and practical business needs.{" "}
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on leveraging technology to solve real-world problems, 
                particularly in developing custom software solutions like inventory management systems and data visualization tools. 
                Currently working as an ICT for Development Professional at WaterAid Rwanda, 
                I manage comprehensive information systems supporting over 32 staff members while continuously expanding my technical expertise in areas such as Microsoft Power Apps and cloud-based solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and problem solver, driven by a desire to contribute to the tech community through innovative solutions that deliver measurable impact. 
                    With certifications in Full-Stack Software Engineering from ALX Africa and hands-on experience across database management, system administration, 
                    and application development, I'm committed to pushing the boundaries of what technology can achieve in driving organizational efficiency and social development. 
                    My expertise spans Microsoft 365 ecosystem, database management (MySQL, PostgreSQL), endpoint management, and full-stack development, enabling me to build seamless, 
                    robust applications that empower users and organizations to achieve their goals.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Jean Luc MUSENGAYEZU
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
