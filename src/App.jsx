import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Standards from "./sections/Standards.jsx";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import logoDark from "./assets/logo_dark.png";

function App() {
  return (
    <main className="font-sans text-dark bg-white">
      <Header />
      <Hero />
      <About />
      <Standards />
      <Features />
      <Pricing />
      <footer
        className="text-center py-12"
        style={{ backgroundColor: "#E7E76E" }}
      >
        <div className="max-w-4xl mx-auto">
          <img
            src={logoDark}
            alt="Elavate Logo"
            className="h-12 mx-auto mb-6"
          />
          <p className="text-gray-800">© 2025 Elavate. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
