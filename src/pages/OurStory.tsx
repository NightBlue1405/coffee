import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <section className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-label text-xs uppercase tracking-widest text-primary mb-4 block">Our Philosophy</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary mb-8 leading-tight">Artistry in the Bean. <br/>Perfection in the Cup.</h1>
          <p className="font-body text-on-surface-variant text-xl leading-relaxed">
            We believe coffee is an art form. From the high-altitude farms to our precision roasting, every step is a deliberate brushstroke in a masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVlb4Lj3mqTCX8Yhm2xDDTHHxOIkVsc9dt6SuJakj0yzhWwAEJ-J4qF8-p4xDVJIynWUMWlhJ7u48MtgwI1-261mK0N6ZqANL30ODtbNzxYcWFtGAI6EeKmm4U8wNI_76RfmEdU5WLHlhGLJW-j28N3ZGsMjihtm-usFcX8BZRQK4eYj64nqFK-Tdiv-qXwNJK5bej2pGrouyhXCW3en-tG-hN_MBIAHxcrqrGjvTyen-rIlLWFnVVTfonrOp2PxIbX66i1Q7mTQ" 
              alt="Brewing"
              className="w-full aspect-[4/5] object-cover editorial-shadow"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 -z-10"></div>
          </div>
          <div className="space-y-8">
            <h2 className="font-headline text-4xl text-on-surface">The Gallery Experience</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Immerse yourself in a guided journey led by our master baristas. Learn the nuances of roast profiles, brewing temperatures, and the science of the perfect extraction.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Our spaces are designed to be sanctuaries of slow craft, where time slows down and the focus shifts to the sensory experience of the bean.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFcHp-0-5TEx9kTDWHYnXcR4k2SY777N8JYBzTKj4UCBPMmYV84bYtHAwykswpiiQSkQcZrNSB0i-tbn-vjwseGI-D3R0VbuU0Z2NeGq5WiQPo6NQR0LRXFqmVTtVElfgxNz2aZGFGJUiCJfWukQAupzLyxYZ-0L1Z-XNEiFOI-Ode2wr4q630zbcx1Ixn5RHOL38QNIdHLq_cpRa7lY4hFO8ZBJ2ZZpoAFMnYOIyFl2XUyNdXj9igRcg2wikqbjwaVsGf7qpg_QY" alt="Gallery 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa5cGNoRKKGb4uPd1JtYnfc69zvWIDTyvOovCtCQbDWAH6isAp8LhAZ509IeWYU0F88SClB2Au3N5tG7YMzoEpRSiN5AaOtmM5k5JYWzw6BdrICuakGe_kAS2elnhCW-hc4Dez82f6spxfqUiPP-xmy7suMPOVhh_XCYE2-cjODBQw4U6x4klL8hkQQXMpGkkUS1zLTbUUuMwugn-kUqLzsXvt8BsQcb8RjS-dU3S1h0x0uYCtVeft_R5ePq0jJoa5Z2oRvsAbK7Q" alt="Gallery 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjcaThre7E7Zs-iqMnItU4dukeTyw9mAFBXIttGc2xinacioLZ1MdpP0w-dcJxswFP5FYK3043u8htZ4s3tHNZy9n3bQaVShVlhX3u6P5XOdBIrivw5HWOCWpsc5HiyFBj0bwJvLHJcveDiKyo4FTVEvalBXUaxZW0CO6Pt77rFtilY2JhQPGH3TqwA3YMg_IyydwEz3Z5N-s2meftA9mlxwO8akbFzcGbyIo4PWXpv6xDILtNYbvSvYE7hPbfSHu1V8S9Nx0hCd8" alt="Gallery 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
