import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Psoluzioni | Ricardo Pietroforte | SAP CX Architect & Hybris Expert</title>
        <meta name="description" content="Psoluzioni is the official CX innovation hub of Ricardo Pietroforte, a 30-year SAP Commerce and Customer Experience expert based in Deerfield, IL. Explore AI-driven customer journeys, Emarsys demos, and cloud-native architecture." />
        <meta name="keywords" content="Psoluzioni, Ricardo Pietroforte, Pietroforte, SAP Commerce, Hybris, SAP CX, SAP Emarsys, SAP BTP, SAP C4C, Salesforce AgentForce, AI Customer Experience, Digital Transformation, CX Architect, Corevist, Deloitte, Accenture, Deerfield" />
        <meta name="author" content="Ricardo Pietroforte" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Psoluzioni",
          "url": "https://psoluzioni.com",
          "logo": "https://psoluzioni.com/images/psoluzioni-logo.png",
          "founder": {
            "@type": "Person",
            "name": "Ricardo Pietroforte",
            "jobTitle": "SAP CX Architect & Commerce Expert",
            "url": "https://psoluzioni.com",
            "image": "https://psoluzioni.com/images/ricardo-pietroforte.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/ricardopietroforte",
              "https://github.com/pietroforte"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "description": "Ricardo Pietroforte is a U.S.-based leader in SAP Commerce (Hybris), Emarsys, BTP, and AI-powered CX. He founded Psoluzioni to deliver composable, real-world prototypes and solutions across the SAP ecosystem."
          },
          "description": "Psoluzioni is the digital portfolio and innovation platform of Ricardo Pietroforte, showcasing SAP and AI-powered CX delivery with Emarsys, Commerce Cloud, and BTP."
        }) }} />
      </Head>

      <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-gray-900 font-sans">
        
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
            AI-Driven Customer Experiences. Reimagined.
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl mb-10 text-gray-300 animate-fadeIn delay-150">
            Psoluzioni connects SAP, Salesforce, and Custom AI to transform loyalty and service journeys.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://psoluzioni-pcx.vercel.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition hover:scale-105"
            >
              🚀 Launch Simulator
            </a>
            <a 
              href="/contact"
              className="bg-transparent border border-white hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-6 rounded-lg transition hover:scale-105"
            >
              📅 Schedule a Call
            </a>
          </div>
        </section>

        {/* About Psoluzioni */}
        <section className="bg-white py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About Psoluzioni</h2>
            <p className="text-lg text-gray-700">
              <strong>Psoluzioni</strong> is the CX innovation hub of <strong>Ricardo Pietroforte</strong>, a U.S.-based SAP architect with 30+ years of experience in <strong>SAP Commerce (Hybris)</strong>, <strong>Emarsys</strong>, <strong>Sales & Service Cloud</strong>, and <strong>SAP BTP</strong>. He has delivered global enterprise solutions with <strong>Deloitte</strong>, <strong>Accenture</strong>, and <strong>Corevist</strong>, and now leads AI-powered CX simulations integrating <strong>Salesforce AgentForce</strong>, <strong>AWS</strong>, and <strong>OpenAI</strong>.
            </p>
            <p className="mt-6 text-md text-gray-600">
              Built with <strong>Next.js, React, Tailwind CSS, Python</strong>, and cloud-native tools, the <em>Psoluzioni</em> portfolio demonstrates composable architecture, loyalty campaign triggers, agent assist tools, and predictive lifecycle automation. If you're looking for cutting-edge SAP CX talent—or want to see real-world SAP prototypes—you're in the right place.
            </p>
            <div className="mt-10 flex justify-center">
              <img 
                src="/images/ricardo-pietroforte.jpg" 
                alt="Ricardo Pietroforte, SAP Commerce and CX Architect" 
                width={300} 
                height={300} 
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Demo Simulator Section */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Explore Our Unified CX Simulator</h2>
              <p className="text-gray-700 mb-6">
                Witness how SAP Emarsys loyalty journeys and Salesforce AgentForce sentiment analysis combine to elevate the customer experience.
              </p>
              <a 
                href="https://psoluzioni-pcx.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition hover:scale-105"
              >
                🚀 Launch Demo
              </a>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://psoluzioni-pcx.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/demo-thumbnail.png"
                  alt="CX Simulator preview"
                  className="rounded-lg shadow-xl hover:opacity-90 transition w-full max-w-md"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Tech Logos */}
        <section className="bg-white py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Technology Expertise</h2>
            <div className="flex justify-center items-center gap-8 mt-8">
              <img src="/sap-logo.svg" alt="SAP" className="h-12" />
              <img src="/salesforce-logo.png" alt="Salesforce" className="h-12" />
              <img src="/ai-icon.png" alt="AI/ML" className="h-12" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-gray-900 text-gray-300 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Psoluzioni. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://www.linkedin.com/in/ricardopietroforte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-white"
            >
              LinkedIn
            </a>
          </p>
        </footer>

      </main>
    </>
  );
}
