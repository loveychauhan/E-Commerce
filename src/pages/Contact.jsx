import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="mx-4 sm:mx-8 md:mx-16 mt-12">
        <form className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-4 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Get in Touch
          </h2>

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700">
              Feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
              placeholder="Share your thoughts..."></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
