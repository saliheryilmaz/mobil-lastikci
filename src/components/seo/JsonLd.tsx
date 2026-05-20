export default function JsonLd() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mobil Lastikçi",
    "image": "https://mobillastikci.com/logo.png",
    "@id": "https://mobillastikci.com",
    "url": "https://mobillastikci.com",
    "telephone": "+905394456052",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maslak Mah. Büyükdere Cad.",
      "addressLocality": "Sarıyer",
      "addressRegion": "İstanbul",
      "postalCode": "34398",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.1126,
      "longitude": 29.0213
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/mobillastikci",
      "https://www.instagram.com/mobillastikci"
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ortalama geliş süreniz nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trafiğin durumuna ve bulunduğunuz konuma bağlı olarak, mobil ekiplerimiz ortalama 20-30 dakika içerisinde yanınızda olmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi bölgelere hizmet veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'un hem Avrupa hem de Anadolu yakasındaki tüm ilçelerine 7/24 hizmet vermekteyiz."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
