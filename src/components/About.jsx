import aboutImg from '../assets/about/a1.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">About Heritage</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
  src={aboutImg}
  alt="About Heritage"
  className="h-110 w-full object-cover rounded-lg shadow-lg"
/>  

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Heritage is a premier exhibition management company dedicated to creating remarkable experiences that showcase brands and ideas in compelling ways. With years of expertise in the industry, we bring creativity, precision, and passion to every project.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver world-class exhibition solutions that exceed expectations and create lasting impressions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted and innovative exhibition partner in the region, recognized for excellence and creativity.
                </p>
              </div>

              {/* <button className="bg-orange-600 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition mt-6 cursor-pointer">
                Discover More
              </button> */}

              <a
  href="#portfolio"
  className="bg-orange-600 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition mt-6 inline-block"
>
  Discover More
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
