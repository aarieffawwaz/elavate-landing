function Pricing() {
  return (
    <section id="harga" className="px-6 py-16 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">
        Harga dan Paket
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Essentials Package */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Essentials</h3>
          <p className="text-gray-600 mb-6">
            Untuk departemen individual atau tim regulasi kecil.
          </p>

          {/* Person Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div className="text-left mb-6 space-y-2 flex-grow">
            <p className="text-sm text-gray-600">Hingga 10 pengguna.</p>
            <p className="text-sm text-gray-600">Dasbor Standar</p>
            <p className="text-sm text-gray-600">
              Pemetaan Aset Perkebunan Dasar
            </p>
            <p className="text-sm text-gray-600">
              Pemantauan Transaksi Real-Time
            </p>
            <p className="text-sm text-gray-600">Chatbot Berbasis AI</p>
          </div>

          <button
            className="w-full py-3 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#E7E76E" }}
          >
            Mulai
          </button>
        </div>

        {/* Advanced Package */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced</h3>
          <p className="text-gray-600 mb-6">
            Untuk pengawasan nasional yang komprehensif
          </p>

          {/* Running Person Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
              </svg>
            </div>
          </div>

          <div className="text-left mb-6 space-y-2 flex-grow">
            <p className="text-sm text-gray-600">Akses skala departemen</p>
            <p className="text-sm text-gray-600">Suite Dasbor Lengkap</p>
            <p className="text-sm text-gray-600">
              Pemetaan Aset Cerdas & Analitik
            </p>
            <p className="text-sm text-gray-600">Cross-Check Data Otomatis</p>
            <p className="text-sm text-gray-600">
              Laporan Anomali Sesuai Permintaan
            </p>
            <p className="text-sm text-gray-600">Manajemen akun khusus</p>
          </div>

          <button
            className="w-full py-3 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#E7E76E" }}
          >
            Mulai
          </button>
        </div>

        {/* Enterprise Package */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col hover:border-2 transition-all duration-300"
          style={{ borderColor: "transparent" }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#E7E76E")}
          onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise</h3>
          <p className="text-gray-600 mb-6">
            Untuk penerapan skala nasional dan integrasi penuh dengan sistem
            mitra
          </p>

          {/* Group Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H17c-.83 0-1.54.5-1.85 1.22l-1.92 5.77A1.5 1.5 0 0 0 14.64 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 16v-6H9l-1.8-5.4A1.5 1.5 0 0 0 5.8 9H4.2c-.62 0-1.18.38-1.4.95L1 16h2.5v6h3z" />
              </svg>
            </div>
          </div>

          <div className="text-left mb-6 space-y-2 flex-grow">
            <p className="text-sm text-gray-600">Akses skala organisasi</p>
            <p className="text-sm text-gray-600">
              Laporan & Investigasi Kustom
            </p>
            <p className="text-sm text-gray-600">Akses API Data Penuh</p>
            <p className="text-sm text-gray-600">Kustomisasi Platform</p>
            <p className="text-sm text-gray-600">
              Pengembangan dan pemeliharaan model AI/ML kustom.
            </p>
          </div>

          <button
            className="w-full py-3 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#E7E76E" }}
          >
            Mulai
          </button>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
