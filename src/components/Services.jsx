import { Sparkles, Palette, Theater , Megaphone, BarChart3, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Exhibition Design',
      description: 'Creative stand design and production that captivates and engages.'
    },
    {
      icon: Palette,
      title: 'Events Management',
      description: 'Complete brand strategy and visual identity development.'
    },
    {
      icon: Theater ,
      title: 'Stage & Backdrops',
      description: 'Professional production and photography services.'
    },
    {
      icon: Megaphone,
      title: '3D Designing & Production',
      description: 'Strategic marketing campaigns and public relations management.'
    },
    {
      icon: BarChart3,
      title: 'Kiosk & Display Stands',
      description: 'Full-service event coordination and execution.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Concepts',
      description: 'Innovative ideas that bring your vision to life.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">
            Comprehensive solutions for all your exhibition and event needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-amber-50 p-8 rounded-lg hover:shadow-lg transition border border-gray-200 group"
              >
                <div className="mb-4 inline-block p-3 bg-gray-600/10 rounded-lg group-hover:bg-gray-800/20 transition">
                  <Icon size={32} className="text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
