import mapIndonesia from "../assets/map-indonesia.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <img
        src={mapIndonesia}
        alt="Map of Indonesia"
        className="w-full h-auto"
      />
    </section>
  );
}
export default Hero;
