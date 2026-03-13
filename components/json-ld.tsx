export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rank4",
    alternateName: "Rank4 Technology Solutions",
    url: "https://www.rank-4.com",
    logo: "https://www.rank-4.com/images/rank4-logo.svg",
    description:
      "Post-modern technology solutions specializing in high-end FPGA, RFSoC, and Digital Signal Processing (DSP) design services.",
    email: "contact@rank-4.com",
    areaServed: "United States",
    knowsAbout: [
      "FPGA Design",
      "RFSoC Development",
      "Digital Signal Processing",
      "Software Defined Radio",
      "Phased Array Systems",
      "Radar Signal Processing",
      "Xilinx Versal",
      "Zynq UltraScale+",
    ],
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProfessionalServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rank4",
    url: "https://www.rank-4.com",
    logo: "https://www.rank-4.com/images/rank4-logo.svg",
    description:
      "Expert FPGA design, RFSoC systems, DSP algorithms, and signal processing consulting services for defense, aerospace, and telecommunications.",
    email: "contact@rank-4.com",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "FPGA Design Services",
      "RFSoC System Development",
      "DSP Algorithm Implementation",
      "System Architecture Consulting",
      "High-Speed Interface Design",
      "Verification & Validation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FPGA Design",
            description:
              "RTL development, timing closure, and production deployment for complex signal processing applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SDR & RFSoC Systems",
            description:
              "Software defined radio architecture and RFSoC integration for wideband signal processing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DSP Algorithms",
            description:
              "Fixed-point algorithm development, optimization, and hardware implementation.",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rank4",
    url: "https://www.rank-4.com",
    description:
      "Post-modern technology solutions specializing in high-end FPGA, RFSoC, and Digital Signal Processing (DSP) design services.",
    publisher: {
      "@type": "Organization",
      name: "Rank4",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rank-4.com/images/rank4-logo.svg",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
