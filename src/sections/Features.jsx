import dashboard from "../assets/dashboard.png";

function Features() {
  return (
    <section id="fitur" className="px-6 py-16 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Fitur Elavate</h2>

      <div className="max-w-7xl mx-auto">
        {/* Layout Grid */}
        <div className="grid grid-cols-5 gap-6 items-center">
          {/* Left Column - Dashboard & Chatbot */}
          <div className="space-y-8">
            <div
              className="bg-gray-800 text-center p-6 rounded-lg relative hover:border-2 transition-all duration-300"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
              onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
            >
              <h3 className="text-xl font-bold" style={{ color: "#E7E76E" }}>
                Dashboard
              </h3>
              {/* Arrow pointing right toward center */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6"
                  style={{ color: "#E7E76E" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div
              className="bg-gray-800 text-center p-6 rounded-lg relative hover:border-2 transition-all duration-300"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
              onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
            >
              <h3 className="text-xl font-bold" style={{ color: "#E7E76E" }}>
                Chatbot
              </h3>
              {/* Arrow pointing right toward center */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6"
                  style={{ color: "#E7E76E" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>{" "}
          {/* Center Column - Dashboard Image (spans 3 columns) */}
          <div className="col-span-3 flex justify-center">
            <img
              src={dashboard}
              alt="Elavate Dashboard"
              className="w-full h-auto"
            />
          </div>
          {/* Right Column - Satellite Map & Transaction Map */}
          <div className="space-y-8">
            <div
              className="bg-gray-800 text-center p-6 rounded-lg relative hover:border-2 transition-all duration-300"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
              onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
            >
              <h3 className="text-xl font-bold" style={{ color: "#E7E76E" }}>
                Satellite Map
              </h3>
              {/* Arrow pointing left toward center */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6"
                  style={{ color: "#E7E76E" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div
              className="bg-gray-800 text-center p-6 rounded-lg relative hover:border-2 transition-all duration-300"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
              onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
            >
              <h3 className="text-xl font-bold" style={{ color: "#E7E76E" }}>
                Transaction Map
              </h3>
              {/* Arrow pointing left toward center */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6"
                  style={{ color: "#E7E76E" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
