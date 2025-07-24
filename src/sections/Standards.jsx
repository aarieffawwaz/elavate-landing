function Standards() {
  return (
    <section id="standar" className="px-6 py-16 text-center bg-white">
      <h2 className="text-4xl font-bold mb-2 text-gray-900">Standar Kami</h2>
      <div
        className="w-24 h-1 mx-auto mb-12"
        style={{ backgroundColor: "#E7E76E" }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* J - Jelas */}
        <div
          className="flex items-center bg-gray-800 rounded-lg p-6 hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6"
            style={{ backgroundColor: "#E7E76E" }}
          >
            J
          </div>
          <div className="text-left">
            <span className="font-bold" style={{ color: "#E7E76E" }}>
              Jelas,{" "}
            </span>
            <span className="text-white">
              Data dan proses yang transparan dan mudah dipahami.
            </span>
          </div>
        </div>

        {/* A - Amanah */}
        <div
          className="flex items-center bg-gray-800 rounded-lg p-6 hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6"
            style={{ backgroundColor: "#E7E76E" }}
          >
            A
          </div>
          <div className="text-left">
            <span className="font-bold" style={{ color: "#E7E76E" }}>
              Amanah,{" "}
            </span>
            <span className="text-white">
              Bertanggung jawab dan dapat dipercaya oleh semua pihak.
            </span>
          </div>
        </div>

        {/* D - Digital */}
        <div
          className="flex items-center bg-gray-800 rounded-lg p-6 hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6"
            style={{ backgroundColor: "#E7E76E" }}
          >
            D
          </div>
          <div className="text-left">
            <span className="font-bold" style={{ color: "#E7E76E" }}>
              Digital,{" "}
            </span>
            <span className="text-white">
              Berbasis teknologi mutakhir seperti AI dan ML.
            </span>
          </div>
        </div>

        {/* I - Inklusif */}
        <div
          className="flex items-center bg-gray-800 rounded-lg p-6 hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6"
            style={{ backgroundColor: "#E7E76E" }}
          >
            I
          </div>
          <div className="text-left">
            <span className="font-bold" style={{ color: "#E7E76E" }}>
              Inklusif,{" "}
            </span>
            <span className="text-white">
              Mencakup semua pelaku agribisnis, dari petani kecil hingga
              pemangku kepentingan besar.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Standards;
