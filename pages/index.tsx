import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-logo-cream font-logo-text flex flex-col items-center justify-center space-y-6 p-8">
      
      {/* Logo */}
      <img
        src="/logo-psoluzioni.png"
        alt="Psoluzioni logo"
        className="w-40 h-auto drop-shadow-md rounded"
      />
      {/* Tagline text */}
      <div className="text-logo-brown text-2xl">
        <h1 className="text-3xl text-logo-brown font-bold mt-4 text-center">
          Empowering AI and Machine Learning
        </h1>
      {/* Divider */}
      <div className="border-b-2 border-logo-olive w-full max-w-md text-center pt-4">
      </div>
  <p className="text-logo-brown text-lg text-center max-w-xl mt-2">
          At Psoluzioni, we partner with strategic teams worldwide to deliver cost-effective solutions in reasonable terms.
  </p>

      </div>

      
      <div className="min-h-screen bg-logo-cream font-logo-text text-logo-brown">
  {/* Hero */}
  <section className="flex flex-col items-center justify-center py-16 px-4">
    <Link href="/contact">
        <button className="bg-logo-orange hover:bg-logo-brown text-logo-cream px-4 py-2 rounded">
        Learn More
      </button>
    </Link>
  </section>

  {/* About */}
  <section className="bg-white py-16 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p>
      We don't need to spend too much time to help you know what story your data wants to tell.
      </p>
    </div>
  </section>

  {/* Footer */}
  <footer className="text-center text-sm py-4 border-t border-logo-olive">
    © {new Date().getFullYear()} Psoluzioni. All rights reserved.
  </footer>
</div>

    </div>
  );
}
