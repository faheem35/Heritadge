import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 1500; // 1.5 seconds
    const incrementTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 bg-blue-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Exceptional
              <br />
              <span className="text-secondary">Exhibitions</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We create unforgettable exhibition experiences that captivate audiences and elevate your brand presence to new heights.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-secondary text-primary px-8 py-3 font-semibold hover:bg-white hover:text-amber-900 transition cursor-pointer">
                Get Started
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 font-semibold hover:bg-gray-600 hover:text-white-600 transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="relative h-96 md:h-3/4">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-transparent rounded-lg"></div>

            <div className="h-full bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-secondary mb-4">
                  {count}+
                </div>
                <p className="text-gray-300 text-lg">
                  Successful Exhibitions
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}