export default function Clients() {
  const clients = [
    'Global Corp',
    'Innovation Labs',
    'Prime Media',
    'Tech Futures',
    'Elite Events',
    'Digital Hub',
    'Creative Studios',
    'Brand Pro'
  ]

  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Leading Brands</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
             className="group bg-white rounded-lg p-8 flex items-center justify-center h-32 hover:bg-gray-900 transition-all duration-300 border border-gray-200 hover:shadow-lg"
            >
              <p className="text-gray-800 group-hover:text-white  text-center font-semibold">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
