import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJTI2kPC3evhHQPcErcOb8SpuDQTKA5UKPZmrwxRc2HjWnJkC8hqlk9hQFOybhlmbjPGh22qiFoUStf2Wq7-qjJ_EaoFY1vAi6vCMSPMs1HsnW2DFKqseqiew5ZenDjWLGnbPLLtylD3H54INleM4Ldfugvl8jivjN4JFkztuQ6CT8u2xapWB_Ga5yI4HtOPu7mzHetoUHzO9kNrBp4IX3Zcoj6YLMRZZ7ytcxnvwpbzQIuoVJ7jpravaaqWZtntAvdFukEwHa8dg" 
            alt="Artisanal coffee"
            className="w-full h-full object-cover brightness-90"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-label text-sm tracking-[0.2em] uppercase text-surface-container-lowest mb-6 block"
          >
            Est. 1984
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl text-surface-container-lowest leading-tight tracking-tight"
          >
            The Art of the <br/><i className="font-serif italic font-normal">Perfect Pour</i>
          </motion.h1>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="font-label text-xs tracking-widest uppercase text-primary mb-4 block">The Heritage</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">Grown in Silence, <br/>Harvested with Care.</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-light">
                Our journey began in the high-altitude misty ridges where coffee isn't just a crop, but a legacy. We believe that a truly exceptional cup of coffee is a dialogue between the earth, the farmer, and the roaster.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                Every bean in the Artisanal Gallery is selected for its distinct character, ensuring that the final notes you experience are as complex and layered as a fine vintage.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYPqsHa0wD7ExRj96WLGNiES-20aIX0gI1Xt9OMY1yN_ob13uVXXS8OSM2pzt7CQpXN7XnGpVHDBVT8bAdUrKHPZBUOEf11vcIKe_8u9KieHUEyUtiEJ4DULZoLrZoap2AKBnBomFR0VxFgLnUBBYPOE_XNMDjMz7Q-WQ9l5Jx4Q4cj3_ojU4VwzshugOvUV6XcU9typJ8rdf5U0Ha_s4zxcEVZjJuxtJX1zwHjAtWQkCrhjMCYS-xXM5RVGhRkMsUCOlCzlbxc-Y" 
                  alt="Coffee farm"
                  className="w-full h-full object-cover grayscale-[30%] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 hidden lg:block w-64 aspect-square bg-surface-container-lowest p-4 shadow-sm border border-outline-variant/10">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKWxEKuAcrhiBv3a2ir1XUUV6SO66hi4X0OUH2fz5JqSgZgCi1Cpwy7Yv8t3TnNfzUUbNEsZ7Qs2nRHC4fdRJQo35kze87gNKxADsbxjis8WqS1qpwNCl-V2n97iipIEKZEWlNy5FgNPZryB77HW7OMbS6I7XG_LaU8vRNoPZdryraibVeBKEiPvZyVn0x-k4XqHbMqSkomvQ3EhboldelJhzntGWnqi3E6mgEdu4tv8Xr9RyCZ6QDhgXNhrskWAlcFLgaRE9aGA" 
                  alt="Raw beans"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Process */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="font-headline text-4xl text-on-surface">The Craft Process</h2>
            <div className="h-px bg-outline-variant/30 flex-grow mx-8 hidden md:block"></div>
            <span className="font-label text-sm uppercase tracking-widest text-tertiary">Precision in every step</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { num: '01.', title: 'Ethical Sourcing', desc: 'We partner directly with family-owned estates, ensuring fair wages and sustainable farming practices that protect the biodiversity of the coffee belt.' },
              { num: '02.', title: 'Slow Roasting', desc: 'Our master roasters use a combination of traditional techniques and modern sensory analysis to find the "soul" of every bean.' },
              { num: '03.', title: 'Artful Brewing', desc: 'From the water temperature to the grind size, every detail is calibrated to highlight the nuanced flavor profiles of our signature blends.' }
            ].map((item) => (
              <div key={item.num} className="group">
                <div className="text-primary text-4xl font-headline italic mb-6">{item.num}</div>
                <h3 className="font-headline text-2xl mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-highest p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-5xl">auto_awesome</span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface max-w-3xl mb-12 leading-tight">
              "Coffee is a bridge to moments that matter."
            </h2>
            <div className="h-12 w-px bg-primary/30 mb-8"></div>
            <p className="font-label text-sm uppercase tracking-widest text-primary">Julian Thorne, Founder</p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[600px] overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOuY2awpEID-2BJqq6ChH6TlTsRkIp9DUeyReAYjakHgWaEqEI5ruhRfvgIJf-tuBpl6GrKFnuSo2W71N7UvygHVB-sjeI91sN0Yg4yN20_-h4EiqVuHIEUT-FlR4tjFnr8mIYvPkPvd3JOnFr_LMSaGzEnaGxo1G48BgT8gsl4xRqNdk4-ckqcLKdWaPHnqb9z5EIQAVbR3WBz7j5s63czoK_45RWuyv7DBm8vnutKxIjGPH2362zMBzbKVkjvjnJTPZA5gdGHSs" 
                alt="Roastery"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-12">
                <h4 className="text-surface-bright font-headline text-3xl mb-4">Our Roastery</h4>
                <p className="text-surface-bright/80 font-light max-w-md">Experience the meticulous transformation of green beans into gold.</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-surface-container-low p-12 flex flex-col justify-center">
                <h4 className="font-headline text-2xl mb-4">Sustainability First</h4>
                <p className="text-on-surface-variant font-light mb-6">100% compostable packaging and zero-waste initiatives in all our galleries.</p>
                <a href="#" className="text-primary font-label text-xs uppercase tracking-widest flex items-center group">
                  Learn More 
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <div className="relative overflow-hidden group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGXwv-mHvl3abYIZJRH42YpT7oKTdj0E9yR6_gEBAfNmNTouR_VF1rja7RxP1OvpsGOAK4298njA4vWkA6ZLloBP54VaqJn8fv75oH-riSBmIjrzABgeQow8B7eGBqVM6ecVw-X3bQqxlj0LjqQktERk-x-2TEfrsPm6ZzPuJaw98dJ2D4o9OVzSU0yi3HcwLrr75qH1uuQGwBnjHg79isEfiDK-e8fJ2Z2_-bZGx-PBqqMQO9WLFqa6Rafd5QyeGDsmCm3pOVt1c" 
                  alt="Gallery"
                  className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-surface-bright font-headline text-2xl border-b border-surface-bright pb-1">Visit Our Galleries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
