import Head from 'next/head'

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://steadywithin.com/#medicalbusiness",
    "name": "Steady Within Counseling",
    "description": "Castle Rock counselor Ashley Jangro, LPCC specializing in anxiety therapy, depression counseling, and trauma treatment. Licensed Professional Counselor Candidate offering compassionate, effective counseling services.",
    "url": "https://steadywithin.com",
    "logo": "https://steadywithin.com/images/steady-within-logo.png",
    "image": "https://steadywithin.com/images/ashley-photo-1-web.jpg",
    "telephone": "+1-720-336-0777",
    "email": "ashley@steadywithin.com",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Medicaid"],
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "425 N. Wilcox St., Suite 200, Office 2",
      "addressLocality": "Castle Rock", 
      "addressRegion": "Colorado",
      "postalCode": "80104",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.3722",
      "longitude": "-104.8561"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Castle Rock",
        "sameAs": "https://en.wikipedia.org/wiki/Castle_Rock,_Colorado"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Douglas County"
      },
      {
        "@type": "City",
        "name": "Highlands Ranch"
      },
      {
        "@type": "City",
        "name": "Lone Tree"
      },
      {
        "@type": "City",
        "name": "Parker"
      },
      {
        "@type": "State",
        "name": "Colorado"
      }
    ],
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 09:00-17:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.3722",
        "longitude": "-104.8561"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "CBT Therapy",
            "description": "Cognitive Behavioral Therapy for anxiety, depression, and negative thought patterns"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "DBT Counseling",
            "description": "Dialectical Behavior Therapy for emotional regulation and distress tolerance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy", 
            "name": "Somatic Therapy",
            "description": "Body-based therapy addressing trauma stored in the nervous system"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Trauma Therapy",
            "description": "Specialized treatment for PTSD, childhood trauma, and complex trauma"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Minecraft Therapy",
            "description": "Innovative gaming therapy for teens and neurodivergent individuals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Online Therapy",
            "description": "Secure video therapy sessions throughout Colorado"
          }
        }
      ]
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://steadywithin.com/#person", 
    "name": "Ashley Jangro",
    "givenName": "Ashley",
    "familyName": "Jangro",
    "additionalName": "LPCC",
    "jobTitle": "Licensed Professional Counselor Candidate",
    "description": "Castle Rock counselor specializing in anxiety therapy, depression counseling, and trauma treatment. LPCC with extensive experience working with teens, young adults, and women through education and coaching.",
    "url": "https://steadywithin.com/about",
    "image": "https://steadywithin.com/images/ashley-photo-1-web.jpg",
    "telephone": "+1-720-336-0777",
    "email": "ashley@steadywithin.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Castle Rock",
      "addressRegion": "Colorado", 
      "addressCountry": "US"
    },
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Steady Within Counseling",
      "@id": "https://steadywithin.com/#medicalbusiness"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Licensed Professional Counselor Candidate",
        "credentialCategory": "LPCC - Colorado License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Colorado Department of Regulatory Agencies"
        }
      }
    ],
    "knowsAbout": [
      "Cognitive Behavioral Therapy",
      "Dialectical Behavior Therapy", 
      "Somatic Therapy",
      "Trauma Therapy",
      "Gaming Therapy",
      "Minecraft Therapy",
      "Anxiety Treatment",
      "Depression Treatment",
      "PTSD Treatment"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Northern Colorado"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Colorado State University"
      }
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Colorado"
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

const ServiceSchema = ({ service }) => {
  const baseUrl = 'https://steadywithin.com'
  const serviceSchemas = {
    cbt: {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "CBT Therapy Castle Rock Colorado",
      "alternateName": "Cognitive Behavioral Therapy",
      "description": "Expert CBT therapist in Castle Rock, CO. Evidence-based cognitive behavioral therapy for anxiety, depression, and negative thought patterns.",
      "url": `${baseUrl}/cbt-therapy-castle-rock`,
      "provider": {
        "@type": "Person",
        "@id": `${baseUrl}/#person`
      },
      "availableAtOrFrom": {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/#medicalbusiness`
      },
      "treatedCondition": [
        "Anxiety Disorders",
        "Depression", 
        "Negative Thought Patterns",
        "Panic Disorder",
        "Social Anxiety"
      ]
    },
    dbt: {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "DBT Counselor Castle Rock Colorado", 
      "alternateName": "Dialectical Behavior Therapy",
      "description": "DBT-informed therapy in Castle Rock, CO. Using DBT tools for emotional regulation, distress tolerance, and crisis support.",
      "url": `${baseUrl}/dbt-counselor-castle-rock`,
      "provider": {
        "@type": "Person",
        "@id": `${baseUrl}/#person`
      },
      "availableAtOrFrom": {
        "@type": "MedicalBusiness", 
        "@id": `${baseUrl}/#medicalbusiness`
      },
      "treatedCondition": [
        "Borderline Personality Disorder",
        "Emotional Dysregulation",
        "Self-Harm Behaviors",
        "Suicidal Ideation",
        "Relationship Difficulties"
      ]
    },
    somatic: {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "Somatic Therapy Castle Rock Colorado",
      "alternateName": "Body-Based Trauma Therapy", 
      "description": "Expert somatic therapy in Castle Rock, CO. Body-based trauma healing for PTSD, anxiety, chronic pain, and nervous system regulation.",
      "url": `${baseUrl}/somatic-therapy-castle-rock`,
      "provider": {
        "@type": "Person",
        "@id": `${baseUrl}/#person`
      },
      "availableAtOrFrom": {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/#medicalbusiness`
      },
      "treatedCondition": [
        "PTSD",
        "Complex Trauma",
        "Chronic Pain",
        "Anxiety Disorders",
        "Dissociation"
      ]
    },
    minecraft: {
      "@context": "https://schema.org", 
      "@type": "MedicalTherapy",
      "name": "Minecraft Therapy for Teens Castle Rock",
      "alternateName": "Gaming Therapy",
      "description": "Revolutionary Minecraft therapy for teens in Castle Rock, CO. Gaming therapy for autism, ADHD, anxiety using innovative therapeutic approaches.",
      "url": `${baseUrl}/minecraft-therapy-teens-castle-rock`,
      "provider": {
        "@type": "Person",
        "@id": `${baseUrl}/#person`
      },
      "availableAtOrFrom": {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/#medicalbusiness`
      },
      "treatedCondition": [
        "Autism Spectrum Disorder",
        "ADHD",
        "Social Anxiety",
        "Teen Depression",
        "Resistance to Traditional Therapy"
      ],
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 10,
        "suggestedMaxAge": 18
      }
    }
  }

  if (!serviceSchemas[service]) return null

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas[service])
        }}
      />
    </Head>
  )
}

const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://steadywithin.com/#website",
    "name": "Steady Within Counseling",
    "description": "Castle Rock therapist specializing in anxiety therapy, depression counseling, teen therapy, and trauma treatment. Counselor offering online and in-person therapy services throughout Colorado.",
    "url": "https://steadywithin.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://steadywithin.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://steadywithin.com/#person"
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

const ProfessionalServiceSchema = ({ serviceName, serviceType, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Person",
      "name": "Ashley Jangro",
      "jobTitle": "Licensed Professional Counselor Candidate",
      "@id": "https://steadywithin.com/#person"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Castle Rock, Colorado"
      },
      {
        "@type": "Place", 
        "name": "Douglas County, Colorado"
      },
      {
        "@type": "Place",
        "name": "Parker, Colorado"
      },
      {
        "@type": "Place",
        "name": "Highlands Ranch, Colorado"
      }
    ],
    "serviceType": serviceType,
    "availableAtOrFrom": {
      "@type": "MedicalBusiness",
      "@id": "https://steadywithin.com/#medicalbusiness"
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

const FAQSchema = ({ faqs, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": url,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://steadywithin.com/#organization",
    "name": "Steady Within Counseling",
    "alternateName": "Steady Within",
    "description": "Professional counseling and therapy services in Castle Rock, Colorado. Specializing in anxiety therapy, depression counseling, trauma treatment, and innovative approaches like Minecraft therapy for teens.",
    "url": "https://steadywithin.com",
    "logo": "https://steadywithin.com/images/steady-within-logo.png",
    "image": "https://steadywithin.com/images/ashley-photo-1-web.jpg",
    "email": "ashley@steadywithin.com",
    "telephone": "+1-720-336-0777",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "425 N. Wilcox St., Suite 200, Office 2",
      "addressLocality": "Castle Rock",
      "addressRegion": "Colorado",
      "postalCode": "80104",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "@id": "https://steadywithin.com/#person"
    },
    "employee": {
      "@type": "Person",
      "@id": "https://steadywithin.com/#person"
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": "Castle Rock",
        "sameAs": "https://en.wikipedia.org/wiki/Castle_Rock,_Colorado"
      },
      {
        "@type": "City",
        "name": "Highlands Ranch"
      },
      {
        "@type": "City",
        "name": "Lone Tree"
      },
      {
        "@type": "City",
        "name": "Parker"
      },
      {
        "@type": "State",
        "name": "Colorado"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Castle Rock"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Douglas County"
      },
      {
        "@type": "State",
        "name": "Colorado"
      }
    ],
    "knowsAbout": [
      "Mental Health Counseling",
      "Anxiety Therapy",
      "Depression Treatment",
      "Trauma Therapy",
      "Gaming Therapy",
      "Teen Counseling",
      "Women's Mental Health",
      "Online Therapy"
    ],
    "sameAs": [
      "https://www.psychologytoday.com/us/therapists/ashley-jangro-castle-rock-co/1234567"
    ]
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </Head>
  )
}

export { LocalBusinessSchema, PersonSchema, ServiceSchema, WebsiteSchema, ProfessionalServiceSchema, FAQSchema, OrganizationSchema }