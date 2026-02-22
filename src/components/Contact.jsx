// import { Mail, Phone, MapPin } from 'lucide-react'
// import { useState } from 'react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     })
//   }

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
//           <div className="w-24 h-1 bg-secondary mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="flex gap-4">
//               <div className="flex-shrink-0">
//                 <Phone size={28} className="text-secondary" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary mb-1">Phone</h3>
//                 <p className="text-gray-600">+971 (0) 123 456 789</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex-shrink-0">
//                 <Mail size={28} className="text-secondary" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary mb-1">Email</h3>
//                 <p className="text-gray-600">info@heritage.ae</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex-shrink-0">
//                 <MapPin size={28} className="text-secondary" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary mb-1">Address</h3>
//                 <p className="text-gray-600">
//                   Heritage Tower<br />
//                   Abu Dhabi, UAE
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
//               required
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-secondary text-primary py-3 font-bold rounded-lg hover:bg-yellow-500 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }



import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    emailjs.send(
      "service_48m620l",     // 🔴 replace with your service ID
      "template_a4pzola",    // 🔴 replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "_bMHvXjNywALEbhqx"        // 🔴 replace with your public key
    )
    .then(() => {
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    })
    .catch((error) => {
      console.error("Email failed:", error)
      alert("Something went wrong. Please try again.")
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone size={28} className="text-secondary" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Phone</h3>
                <p className="text-gray-600">+971 5474 729 81</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={28} className="text-secondary" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Email</h3>
                <p className="text-gray-600">heritageevents@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin size={28} className="text-secondary" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Address</h3>
                <p className="text-gray-600">
                  Zayed First Street, Khalidiya<br />
                  Abu Dhabi, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 ">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-700 text-primary py-3 font-bold rounded-lg hover:bg-gray-600 transition disabled:opacity-50 cursor-pointer text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-center">
              📩 Thanks for reaching out — we’ll get back to you soon.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}

