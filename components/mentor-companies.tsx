"use client";

const companies = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Grab", logo: "/logos/grab.svg" },
  { name: "Petronas", logo: "/logos/petronas.svg" },
  { name: "Maybank", logo: "/logos/maybank.svg" },
  { name: "CIMB", logo: "/logos/cimb.svg" },
  { name: "Shopee", logo: "/logos/shopee.svg" },
];

export function MentorCompanies() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Learn From The Best
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            Our Mentors Come From Leading Companies
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none md:w-16" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none md:w-16" />

          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <div className="flex items-center justify-center h-12 md:h-16 w-28 md:w-36 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <span className="text-lg md:text-xl font-semibold text-foreground/70">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          And many more from top Malaysian and international companies
        </p>
      </div>
    </section>
  );
}
