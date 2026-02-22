import p1 from '../assets/portfolio/p1.jpg'
import p2 from '../assets/portfolio/p2.jpg'
import p3 from '../assets/portfolio/p3.jpg'
import p4 from '../assets/portfolio/p4.jpg'
import p5 from '../assets/portfolio/p5.jpg'
import p6 from '../assets/portfolio/p6.jpg'

export default function Portfolio() {
  const projects = [
    {
      title: 'Annual Exhibition 2024',
      category: 'Exhibition Design',
      image: p1
    },
    {
      title: 'Brand Launch Event',
      category: 'Event Management',
      image: p2
    },
    {
      title: 'Corporate Conference',
      category: 'Production',
      image: p3
    },
    {
      title: 'Product Showcase',
      category: 'Exhibition Design',
      image: p4
    },
    {
      title: 'Cultural Festival',
      category: 'Event Management',
      image: p5
    },
    {
      title: 'Trade Show',
      category: 'Complete Package',
      image: p6
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">
            Showcasing our finest exhibition and event projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            
           <div
  key={index}
  className="group overflow-hidden rounded-lg "
>
  <div className="relative h-64 overflow-hidden rounded-lg">
    
    {/* Image Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-125"
      style={{ backgroundImage: `url(${project.image})` }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/3 0 group-hover:bg-black/60 transition duration-500 flex items-end p-6">
      <div className="text-white">
        <p className="text-sm font-semibold text-secondary mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-bold">
          {project.title}
        </h3>
      </div>
    </div>

  </div>
</div>

          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="bg-primary text-white px-8 py-3 font-semibold hover:bg-gray-900 transition duration-300 rounded-md">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  )
}