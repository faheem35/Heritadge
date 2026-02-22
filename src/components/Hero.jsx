

// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = 50;
//     const duration = 1500; // 1.5 seconds
//     const incrementTime = duration / end;

//     const counter = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(counter);
//     }, incrementTime);

//     return () => clearInterval(counter);
//   }, []);

//   return (


// <section
//   id="home"
//   className="min-h-screen text-white overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
//   style={{ backgroundImage: "url('src/assets/hero/hero.jpg')" }}
// >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          
//           {/* Left Content */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-7xl md:text-7xl font-bold mb-6 leading-tight text-orange-600">
//               Events Management 
//               <br />
//               <span className="text-orange-600">& Exhibitions</span>
//             </h2>

//             <p className="text-xl text-gray-700 mb-8 leading-relaxed">
//               We create unforgettable exhibition experiences that captivate audiences and elevate your brand presence to new heights.
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <button className="bg-orange-700 text-primary px-8 py-3 font-semibold hover:bg-gray-700 hover:text-white-900 transition cursor-pointer">
//                 Get Started
//               </button>
//               <button className=" bg-orange-700 text-white px-8 py-3 font-semibold hover:bg-gray-700 hover:text-white-600 transition cursor-pointer">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Stats Card */}
//           <div className="relative h-96 md:h-3/4">
//   <div
//     className="relative h-full  flex items-center justify-center bg-cover    overflow-hidden"
//     style={{ backgroundImage: "url('src/assets/hero/h2.jpg')" }}
//   >
//     <div className="absolute inset-0 bg-black/10 rounded-tl-3xl rounded-br-3xl"></div>

//     <div className="relative text-center">
//       <div className="text-9xl font-bold text-amber-700 mb-4">
//         {count}+
//       </div>
//       <p className="text-amber-700 text-2xl">
//         Successful Exhibitions
//       </p>
//     </div>
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";

import heroImg from "../assets/hero/hero.jpg";
import h2 from "../assets/hero/h2.jpg";

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
    <section
      id="home"
      className="min-h-screen text-white overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left py-16 lg:py-32 xl:py-40">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-orange-700">
              Events Management 
              <br className="hidden sm:block" />
              <span className="text-orange-700">& Exhibitions</span>
            </h2>

            <p className="text-base sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We create unforgettable exhibition experiences that captivate audiences and elevate your brand presence to new heights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center lg:justify-start">
             <a
  href="#about"
  className="bg-orange-700 text-white px-6 sm:px-8 py-3 font-semibold hover:bg-orange-800 transition-all duration-300 rounded-lg inline-block text-center"
>
  Get Started
</a>
              {/* <button className="bg-orange-700 text-white px-6 sm:px-8 py-3 font-semibold hover:bg-orange-800 transition-all duration-300 rounded-lg border border-transparent hover:border-orange-300">
                Learn More
              </button> */}

              <a
  href="#services"
  className="bg-orange-700 text-white px-6 sm:px-8 py-3 font-semibold hover:bg-orange-800 transition-all duration-300 rounded-lg border border-transparent hover:border-orange-300 inline-block text-center"
>
  Learn More
</a>
            </div>
          </div>

          {/* Right Stats Card - Increased height */}
          <div className="relative order-1 lg:order-2 min-h-[400px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px] mt-16">
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundImage: `url(${h2})` }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

              <div className="relative text-center z-10 px-4 w-full h-full flex flex-col items-center justify-center">
                <div className="text-5xl sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-amber-700  mb-4 drop-shadow-lg">
                  {count}+
                </div>
                <p className="text-amber-700 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-md">
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
