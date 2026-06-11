import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Palette, Sparkles } from 'lucide-react';
import brandPhotographyImage from '@/assets/brand-photography.png';
import brandingStrategyImage from '@/assets/branding-strategy.png';
import productPhotographyImage from '@/assets/product-photography.png';

const services = [
  {
    icon: Camera,
    title: 'Brand Photography',
    description: 'Elevate your brand identity with stunning visuals that capture your unique essence and values.',
    image: brandPhotographyImage,
  },
  {
    icon: Sparkles,
    title: 'Product Photography',
    description: 'Showcase your products with crisp, professional images that drive engagement and sales.',
    image: productPhotographyImage,
  },
  {
    icon: Palette,
    title: 'Branding Strategy',
    description: 'Shape a cohesive visual identity with strategic creative direction from concept to launch.',
    image: brandingStrategyImage,
  },
];

export function HowWeHelp() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl lg:text-6xl tracking-tight mb-6 text-black">
            How We Help Brands
          </h2>
          <p className="text-xl text-gray-600">
            We partner with forward-thinking brands to create visual stories that resonate with their audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
