import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Psoluzioni | AI-Driven Customer Experience Solutions</title>
        <meta name="description" content="Psoluzioni empowers businesses with AI-driven SAP, Salesforce, and loyalty experiences." />
        <link rel="icon" href="/favicon.ico" />
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

        {/* About Section */}
        <section className="bg-white py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About Psoluzioni</h2>
            <p className="text-lg text-gray-700">
              We help companies bridge the gap between insight and action by integrating SAP Customer Experience, Salesforce Service Cloud, and AI-driven loyalty personalization — all aligned to real business outcomes.
            </p>
          </div>
        </section>

        {/* Demo Simulator Section */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text side */}
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

            {/* Image side */}
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

        {/* Tech Expertise Section */}
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
              href="https://www.linkedin.com/" 
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
