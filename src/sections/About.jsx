import mockup from "../assets/mockup.png";
import { Eye, Users, TreePine } from "lucide-react";

function About() {
  return (
    <section id="about" className="px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Mockup Image */}
        <div className="lg:w-1/2">
          <img
            src={mockup}
            alt="Elavate Dashboard Mockup"
            className="w-full h-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Kami, Elavate
          </h2>
          <p className="text-lg text-gray-600 mb-8 italic">
            "Dashboard berbasis AI/ML untuk membantu regulator
            seperti BI, OJK, dan Ditjen Pajak memantau aset dan transaksi
            agribisnis kelapa sawit secara real-time dan transparan di seluruh
            Indonesia."
          </p>

          {/* Three feature boxes */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div
              className="p-8 rounded-lg text-center min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">Transparansi</h3>
            </div>

            <div
              className="p-8 rounded-lg text-center min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">Inklusi</h3>
            </div>

            <div
              className="p-8 rounded-lg text-center min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: "#E7E76E" }}
            >
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">Keberlanjutan</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
