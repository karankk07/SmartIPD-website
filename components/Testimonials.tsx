'use client'

const testimonials = [
  {
    id: 1,
    content: "Paperless IPD has completely transformed how we manage patient care. The efficiency gains are remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    hospital: "Metro General Hospital"
  },
  {
    id: 2,
    content: "The real-time monitoring features have helped us improve patient outcomes by 30%. I can't imagine going back to our old system.",
    author: "Dr. Michael Chen",
    role: "Head of Cardiology",
    hospital: "City Medical Center"
  },
  {
    id: 3,
    content: "Implementation was smooth and the support team was exceptional. Our staff adapted quickly and patient satisfaction has increased significantly.",
    author: "Emily Rodriguez",
    role: "Hospital Administrator",
    hospital: "Riverside Healthcare"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from healthcare professionals who have transformed their facilities with Paperless IPD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.hospital}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 