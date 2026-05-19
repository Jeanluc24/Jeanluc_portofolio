import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            ICT Professional. Developer. Systems Thinker.
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
                I'm Jean Luc Musengayezu, an ICT professional based in Kigali with over three years of experience
                making technology work inside mission-driven organizations. Currently at WaterAid Rwanda, I manage
                Microsoft 365 environments for a 32-person team, led the internal rollout of Microsoft Copilot
                across programme and admin staff, and support field data collection systems used in WASH programming
                across Rwanda.{" "}
              </p>
              <p className="text-white">
                My background sits at the intersection of systems administration, data governance, and software
                development. I hold a BSc in Business Information Technology from the University of Rwanda, completed
                full-stack engineering training through ALX Africa, and earned an ISO/IEC 27001 Lead Auditor
                certification in early 2026. I'm drawn to roles where technology connects directly to a real
                organizational outcome, not just keeping the lights on, but building systems that change how people work.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Three things define how I work: I take ownership of problems rather than waiting to be told what to do.
                    I explain technical concepts clearly to non-technical colleagues, which is often the harder skill.
                    And I build things that actually get used, not just things that technically function.
                    At WaterAid, that meant staff moved from Copilot demos to daily active use. At GardaWorld,
                    it meant 45% less downtime through preventive maintenance. At Ameki Color, it meant systems
                    that operators trusted enough to follow. That pattern — build it, communicate it, make it stick — is what I bring.
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
