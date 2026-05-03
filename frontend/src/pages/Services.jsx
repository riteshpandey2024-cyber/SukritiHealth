import { servicesData } from '../assets/assets'
import { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  return (
    <div className="py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
          Our Medical Services
        </h1>
        <p className="text-text-light text-lg max-w-2xl mx-auto">
          Explore our comprehensive range of medical services delivered by experienced healthcare professionals dedicated to your wellness.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-20">
        {servicesData.map((service, index) => (
          <div
            key={service._id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-12 items-center`}
          >
            {/* Image Container with Interactive Effects */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div 
                onClick={() => setActiveService(activeService === service._id ? null : service._id)}
                className={`w-full h-auto rounded-3xl overflow-visible transition-all duration-300 cursor-pointer group relative p-4
                  ${activeService === service._id 
                    ? 'shadow-2xl border-4 border-primary scale-105 bg-primary/10' 
                    : 'shadow-lg hover:shadow-2xl hover:scale-102 hover:border-4 hover:border-primary/50 bg-surface border-2 border-transparent'
                  }
                `}
              >
                {/* Hover Background Light Effect */}
                <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none rounded-2xl
                  ${activeService === service._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}></div>

                {/* Image Wrapper with Padding */}
                <div className="relative z-10 rounded-2xl overflow-hidden bg-surface">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-auto object-contain bg-surface transition-transform duration-300 group-hover:scale-105"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      aspectRatio: 'auto'
                    }}
                  />
                </div>

                {/* Shine Effect on Hover */}
                <div className={`absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-500 pointer-events-none rounded-2xl
                  ${activeService === service._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}
                `} style={{
                  transform: 'translateX(-100%)',
                  animation: activeService === service._id ? 'shimmer 2s infinite' : 'none'
                }}></div>

                {/* Click Indicator Badge */}
                {activeService === service._id && (
                  <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 animate-pulse">
                    Selected
                  </div>
                )}
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                {service.name}
              </h2>
              <p className="text-text-light text-base md:text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col gap-3">
                {service.highlights && service.highlights.length > 0 && (
                  <div className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/highlight">
                        <svg
                          className="w-5 h-5 text-primary shrink-0 mt-1 group-hover/highlight:scale-125 transition-transform duration-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-text-light text-sm md:text-base group-hover/highlight:text-text-dark transition-colors duration-200">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-hover transition-all w-fit shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-linear-to-r from-primary to-primary-hover rounded-3xl p-12 md:p-16 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Book Your Appointment?
        </h3>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Connect with our experienced doctors and take the first step towards better health.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-surface transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
          Book Now
        </button>
      </div>

      {/* Shimmer Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Services
