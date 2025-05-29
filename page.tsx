import { Sparkles, FileText, FolderOpen, LayoutDashboard } from "lucide-react";

export default function DazlLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 font-sans">
      <header className="py-6 px-4 md:px-8 flex justify-between items-center shadow-sm bg-white">
        <div className="text-xl md:text-2xl font-bold text-orange-500 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Dazl
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2 text-sm md:text-base">
          Join the Club
        </button>
      </header>

      <section className="px-4 md:px-8 py-16 md:py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Create. Share. Shine.</h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          Dazl helps you keep your creative hustle smooth—from projects to payments.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10">
          <input
            type="email"
            placeholder="What's your email?"
            className="rounded-xl sm:rounded-l-xl w-full sm:max-w-sm px-4 py-2 border border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl sm:rounded-r-xl w-full sm:w-auto px-6 py-2">
            Let's Go
          </button>
        </div>
        <div className="mt-10 px-4">
          <img
            src="/Mockup.png"
            alt="Dazl App Mockup"
            className="mx-auto rounded-2xl shadow-lg w-full max-w-4xl h-auto"
          />
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 p-6 text-center">
          <LayoutDashboard className="mx-auto h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Your World, Your Way</h3>
          <p className="text-gray-600 text-sm md:text-base">Design dashboards that fit your vibe and keep your flow going.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 p-6 text-center">
          <FileText className="mx-auto h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">No-Fuss Contracts</h3>
          <p className="text-gray-600 text-sm md:text-base">Send and sign contracts without the stress—legal made easy.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 p-6 text-center">
          <FolderOpen className="mx-auto h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Creative Cloud</h3>
          <p className="text-gray-600 text-sm md:text-base">Upload and share your files like a breeze—no clutter, just magic.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 p-6 text-center">
          <FileText className="mx-auto h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Simple Invoicing</h3>
          <p className="text-gray-600 text-sm md:text-base">Get paid fast with beautiful invoices your clients will love.</p>
        </div>
      </section>

      <footer className="px-4 md:px-8 py-10 text-center text-gray-500 text-sm border-t mt-20">
        © {new Date().getFullYear()} Dazl ✨ Made for creatives, by creatives.
      </footer>
    </div>
  );
}
