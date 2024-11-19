import Slideshow from "@/components/media/Slideshow";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      <Slideshow />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to RaceSync</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest in Formula 1, GT Championships, and WEC.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary hover:bg-tertiary text-white font-semibold rounded-lg transition">
          Discover More
        </button>
      </div>
    </div>
  );
}
