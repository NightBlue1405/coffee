import { motion } from 'motion/react';

export default function Menu() {
  const specialtyCoffee = [
    {
      name: 'Ethiopian Yirgacheffe',
      price: '6.50',
      desc: 'Washed process, delicate floral notes of jasmine and bergamot with a bright citrus finish.',
      tags: ['Floral', 'Citrus'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArQERk5S_rp-PMUlc2Ih1jdZ1KKL4RgqITcJtdfJAGpsQmyOWRqziiYLTv2qhzAGpWNeGGM0FQ0z-joRVzotTiftF7-BE4DV19DN394ke_YcFsussZ3yq6osU75uT5umaq0QezDuoaTuWcu6yzmRaCIDEPXuEFYvY8EXr48HEGUbW46xT8e1Y9hEFKHoZvdWTjrviGwzPyiSo5Ap4LOv2ulB-zOxa1EVPSN_hifhF8CTH6azhpVrqfTpXGhW-R-cYgn5Le8dkI3Fk'
    },
    {
      name: 'Colombian Gesha',
      price: '9.00',
      desc: 'Exquisite honey-processed lot featuring notes of dried apricot, black tea, and honeysuckle.',
      tags: ['Stone Fruit', 'Tea-like'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCKaPYEl2PszqT71nWf3ypHuU2EAbVldZVsUcEVZgFztk6S36lb2TTo8sAeMYzAkfwkaWVVOWlfnuqRixndQGHlRDeDkEWDATI97Fd7KfEm4EGYxm1iFFtp6gnxFaw8ijzvhMiu6sOzPUzbwgJULBfEJJhMb8cbbDV5aSvGJZEqNla4_DsYdYqA99kT3FkBZLVbytLS9zuf9qUravTpNCS6Zccn5TtRy91ICq6R3kx2otCfnDCsUCZSiiyC9uXTXJ20hzl-JRkZJs'
    },
    {
      name: 'Sumatran Mandheling',
      price: '7.00',
      desc: 'Deep, earthy profile with hints of dark chocolate, spice, and a velvety syrupy body.',
      tags: ['Earthy', 'Chocolate'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjL_zDnNWzTtLK4YjUv8LskKpVLU13hf_7OFJ4F9KoFFws7fDtj529xs7pz_KLEd_c2H3s3X8qBQqLtgxFi1wQgwFn6qHwqepI7ca5N2oty5cx84mJRu6YQuF5YbU9RXqe5_9CM9_xMgXkJlGxF65hSDioI2dEop1wVZp1rVPYJaTq2ao8-TrFxvYrhnmJynfXhMQzfIDs9CyZoa1nX9048udGdmwwUNAYVPmK_Bzz3cJ2QXKzeYzfddFijjlb8rMZTAHZHhRMXA0'
    }
  ];

  const signatureLattes = [
    { name: 'Lavender Honey Infusion', price: '7.50', desc: 'House-made lavender reduction with wildflower honey and micro-foam. Available hot or iced.' },
    { name: 'Salted Caramel Miso', price: '7.75', desc: 'An umami-forward twist on a classic, featuring white miso caramel and Maldon sea salt.' },
    { name: 'Oatmilk Cardamom Latte', price: '7.25', desc: 'Freshly ground cardamom pods simmered with maple syrup and creamy oat milk.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20 text-center">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">The Daily Curation</span>
        <h1 className="text-5xl md:text-7xl font-headline tracking-tighter text-primary mb-8">Our Seasonal Menu</h1>
        <p className="max-w-xl mx-auto text-on-surface-variant font-body leading-relaxed opacity-80">
          A meticulous selection of small-batch roasts and hand-crafted delicacies, curated to awaken your senses through every sip and bite.
        </p>
      </section>

      {/* Specialty Coffee */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <h2 className="text-3xl font-headline text-primary">Specialty Coffee</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Direct Trade | Micro-Lot</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyCoffee.map((coffee) => (
            <div key={coffee.name} className="bg-surface-container-lowest p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group editorial-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-headline group-hover:text-primary transition-colors">{coffee.name}</h3>
                <span className="text-sm font-body text-outline-variant">{coffee.price}</span>
              </div>
              <div className="bg-surface-container-low aspect-square mb-6 overflow-hidden">
                <img 
                  src={coffee.img} 
                  alt={coffee.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-on-surface-variant mb-4 font-body leading-relaxed">{coffee.desc}</p>
              <div className="flex flex-wrap gap-2">
                {coffee.tags.map(tag => (
                  <span key={tag} className="bg-surface-container text-tertiary px-3 py-1 text-[10px] uppercase tracking-wider font-bold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Lattes */}
      <section className="bg-surface-container-low py-24 mb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12">Signature Lattes</h2>
              <ul className="space-y-12">
                {signatureLattes.map((latte) => (
                  <li key={latte.name} className="flex justify-between items-start group">
                    <div className="max-w-md">
                      <h4 className="text-lg font-headline mb-2">{latte.name}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{latte.desc}</p>
                    </div>
                    <span className="text-on-surface-variant text-sm font-body ml-4">{latte.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-surface-container-highest p-4 rounded-lg transform rotate-2">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Os2Xv0Sm00gaCHZ4soV8lr6X22Nqkb4FequYZoAlaXyJcd2_kvsx0Ti-WUGNs2B_eVFiHByU0-nGbz7z9Zlc_uye_o2XQpGdtQPbU0kbVrRAlu8VGA9CUjrGAq4GNagKkr0wgwnY5lY3ZWkqU1WYD4TRPnRh1JdtqOTKqEHdcqfs7851GsWHZl0By5eYFO4IDNlSvReMXVQApSCn_T0yVzQpZtdv18hmJeKIlZIL_opXhCVNpg7kzTSH1DVwDWFXo_m4tlXtVZc" 
                  alt="Latte Art"
                  className="w-full aspect-[4/5] object-cover rounded shadow-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-on-primary p-8 hidden lg:block">
                <p className="font-headline text-2xl italic">The Art of Extraction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastries */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline text-primary mb-4">House Pastries</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs1ehnb5TTtXIZOGsRGsYMFp8RqgG96cSaOJq8zyg4ugRO2vv7sMTmkgD551ZRbTAjPfzzRkfe-Vd2rK-bnbz5A43L9lRtQWbwGFXd_4Yp4rfUAGICkeL1HKpbBevtLTd6f5JRqcrio3Ku32Uon8oTRYGtklgQixz48Qwfi62qc2vdPDrG07Zh41qp_HVL5qNH35dNWaQ5XvoSvlth-WMI8-YgBqXsg4ctTGkbZ44rgjk61wTWzA3f9uYdCVObyP3u5wYUx6MtfqM" 
              alt="Croissant"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/80 font-label text-xs tracking-widest uppercase mb-2">Signature</span>
              <h3 className="text-white text-3xl font-headline mb-2">Sourdough Croissant</h3>
              <p className="text-white/90 text-sm font-body">48-hour fermented, hand-laminated with cultured butter. 5.50</p>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden bg-surface-container aspect-square md:aspect-auto">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAioqy1n_ZZJoP31IVUSZYTSnrRPOdsWyqZDb8Ew11eM_wLo7jszqOoTbkWNPUtvDeZPZeajRPBA_4d2WB819anWkfxRlfOxNWtmpRcOqWlDlV_g85P2Q6kjKXkq0lcd_o3zSf4Ca50MwINU3jxij7_4hM0NHBr45HJ0qQH1jYPhNMx79suaLv_eYGcst9uFN5AilAyG16LGQrTT7vJasv-Vm8W0QdtGo3rtj5x0LfFZ36DADme4mHgJVFrdKnXFewdcwBS3TVAuXY" 
              alt="Almond Bostock"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-surface/90 p-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline text-sm">Almond Bostock</h4>
                <span className="text-xs text-primary">6.00</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden bg-surface-container aspect-square md:aspect-auto">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifCIDY225NSSzyy5nM2DJQ1ECVZmco6eElM9LcckN6YVQpL7fbqa_-o37Cw9qzaxSPkn7XY0Xad30CK_J6ihDujuss0FMKQiXuoNUMKbRN1irIdyviUA76apkgr_5Nw8_CMtzm_izwCnIGFEhowf9SoYlLM8A2nGxlClckLwnD4A3ApnFJtdYeeiZ31Hv9zniZniK2Ct5V8e42_Wvl0sKktcwKGZ1-1hR5yu4p9sPiKxj_mBVFQxeARBUHEbo3Au4ZxtV4oWpapQ" 
              alt="Cookies"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-surface/90 p-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline text-sm">Sea Salt Choc Chip</h4>
                <span className="text-xs text-primary">4.50</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden bg-surface-container h-64 md:h-auto">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWubOlm60OjmuvxsozY6A4rIWaDn5Bs3VEVJ_PW-I-tPWzpNBxfgABgHu6pszE168nThjrd0y9itU5r0qdstLNoqSuzJekhfljIM8N9DgMkfpECk4GdzFhmsiKQZCl8QJWG4V4TSQ9oeCdqLjVGkWYcMstM1mhM0ccZk59TKO8FAkEN4t6dA9Wd8lWJc8L1GW2MHL022fnsdg2ubGVlbdT-cmtwW6lJdnhCExmDvh7AgeF3HniBH1MjrW9zdDUqtrLUQdmK-9uk0" 
              alt="Lemon Tart"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-headline mb-1">Meyer Lemon Tart</h3>
              <p className="text-white/90 text-sm font-body">Shortcrust pastry with silky lemon curd and toasted meringue. 8.00</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
