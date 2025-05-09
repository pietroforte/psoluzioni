import Head from 'next/head';
import Image from 'next/image';

export default function AboutRicardo() {
  return (
    <>
      <Head>
        <title>Ricardo Pietroforte | U.S.-Based SAP & CX Strategist</title>
        <meta name="description" content="Get to know Ricardo Pietroforte, founder of Psoluzioni and a digital CX strategist based in Deerfield, Illinois. Learn about his leadership in SAP, Emarsys, Salesforce, and AI." />
        <meta name="author" content="Ricardo Pietroforte" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ricardo Pietroforte",
          "jobTitle": "SAP & CX Strategist",
          "url": "https://psoluzioni.com/ricardo-pietroforte",
          "image": "https://psoluzioni.com/images/ricardo-pietroforte.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Deerfield",
            "addressRegion": "IL",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://psoluzioni.com",
            "https://www.linkedin.com/in/ricardopietroforte"
          ],
          "description": "Ricardo Pietroforte is a U.S.-based expert in SAP Customer Experience, Salesforce, and loyalty integrations, leading projects from Deerfield, Illinois."
        }) }} />
      </Head>

      <main className="flex flex-col items-center justify-start min-h-screen px-6 py-16 bg-white text-gray-900">
        <section className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">About Ricardo Pietroforte</h1>
          <p className="text-lg mb-8 text-gray-700">
            Based in Deerfield, Illinois, Ricardo Pietroforte is a U.S.-based strategist specializing in SAP, Customer Experience (CX), and AI integration. As founder of Psoluzioni, he leads transformative projects that bridge enterprise platforms like SAP and Salesforce with cutting-edge digital experiences.
          </p>
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/ricardo-pietroforte.jpg" 
              alt="Ricardo Pietroforte, Digital CX and SAP Leader based in Deerfield, Illinois" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-md text-gray-600 mb-4">
            With over two decades of experience in technology and digital consulting, Ricardo has worked with leading firms like Deloitte, Accenture, and Corevist. His projects span global enterprise transformations, loyalty programs, and omnichannel CX solutions powered by SAP Emarsys, SAP BTP, and Salesforce AgentForce.
          </p>
          <p className="text-md text-gray-600 mb-4">
            Ricardo shares his ongoing projects and thought leadership via <a href="https://psoluzioni.com" className="text-blue-700 hover:underline">psoluzioni.com</a> and <a href="https://www.linkedin.com/in/ricardopietroforte" className="text-blue-700 hover:underline">LinkedIn</a>. All initiatives are designed with a focus on real business outcomes, innovation, and strategic CX leadership.
          </p>
        </section>
      </main>
    </>
  );
}