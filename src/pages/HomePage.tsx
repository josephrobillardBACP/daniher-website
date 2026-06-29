import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, FileText, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import coverImage from '@/assets/revised-cover.png';
import mobileCoverImage from '@/assets/revised-cover.png';
import contactOfficeImage from '@/assets/Gemini_Generated_Image_l6jcc5l6jcc5l6jc.png';
import drPortrait from '@/assets/Daniher.webp';
import shawnaPortrait from '@/assets/image-asset (4).webp';
import kimPortrait from '@/assets/Kim (1).webp';

function HomePage() {
  const teamMembers = [
    { name: 'Amy Daniher, M.D.', image: drPortrait, role: 'Physician', link: '/team#amy' },
    { name: 'Shawna G.', image: shawnaPortrait, role: 'Office Manager', link: '/team#shawna' },
    { name: 'Kim J.', image: kimPortrait, role: 'Medical Assistant', link: '/team#kim' }
  ];

  const conciergeCards = [
    { title: 'Direct Access', desc: '24/7 communication with your physician via phone or email.', accent: 'border-t-gold' },
    { title: 'More Time', desc: 'Extended, unhurried visits to address all your concerns.', accent: 'border-t-steely-blue' },
    { title: 'Proactive Care', desc: 'Focus on prevention, wellness, and long-term health optimization.', accent: 'border-t-steely-blue' },
    { title: 'Coordination', desc: 'Seamless specialist referrals and hospital care management.', accent: 'border-t-gold' }
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden pb-10 pt-20 sm:min-h-[84vh] sm:pt-24 md:min-h-[88vh] md:pb-20 md:pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={mobileCoverImage}
              alt="Dr. Amy Daniher with a patient"
              className="h-full w-full object-cover object-center contrast-[1.06] saturate-[1.03] brightness-[1.03] sm:hidden"
            />
            <img
              src={coverImage}
              alt="Dr. Amy Daniher with a patient"
              className="hidden h-full w-full object-cover object-top contrast-[1.06] saturate-[1.03] brightness-[1.03] sm:block"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,64,88,0.74)_0%,rgba(41,73,95,0.64)_16%,rgba(51,82,102,0.52)_32%,rgba(63,94,111,0.38)_46%,rgba(76,106,121,0.24)_60%,rgba(90,118,131,0.12)_72%,rgba(90,118,131,0)_100%)]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl"
            >
              <div className="mt-2 px-0 sm:mt-5 sm:px-1 md:px-2">
                <Link
                  to="/contact"
                  className="mb-5 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_10px_24px_rgba(15,23,42,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white sm:mb-6 sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  Inquire About Membership
                </Link>
                <h1 className="mb-2 max-w-[16rem] text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_3px_14px_rgba(15,23,42,0.34)] sm:max-w-none sm:text-[3.1rem] md:text-[3.4rem] lg:text-[4.6rem]">
                  Amy Daniher, M.D.
                </h1>
                <p className="hero-text mb-1 text-[2.15rem] font-medium italic leading-[0.96] tracking-[-0.02em] text-white/95 drop-shadow-[0_3px_12px_rgba(15,23,42,0.32)] sm:text-[3rem] md:text-5xl">
                  Concierge Medicine
                </p>
                <p className="hero-text mb-4 text-[2.15rem] font-medium italic leading-[0.96] text-white/95 drop-shadow-[0_3px_12px_rgba(15,23,42,0.32)] sm:text-[3rem] md:text-5xl">
                  San Mateo, CA
                </p>
                <div className="space-y-2 text-[1.05rem] text-white drop-shadow-[0_2px_8px_rgba(15,23,42,0.34)] sm:text-xl md:text-2xl">
                  <p className="hero-text flex items-start gap-2 sm:items-center">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-steely-blue sm:mt-0 sm:h-6 sm:w-6" />
                    34 N. San Mateo Drive, Suite #1
                  </p>
                  <p className="hero-text flex items-center gap-2">
                    <Phone className="h-5 w-5 shrink-0 text-steely-blue sm:h-6 sm:w-6" />
                    <a href="tel:+16503935851" className="transition-opacity hover:opacity-80">650-393-5851</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO BLURB */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0"
            >
              <div className="md:pr-10 lg:pr-14">
                <p className="mb-5 text-[1.2rem] font-semibold leading-snug text-navy md:text-[1.35rem]">
                  Are you looking for a primary care practice that
                </p>
                <ul className="space-y-3 text-[1.1rem] leading-[1.6] text-navy/90 md:text-[1.2rem]">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>Has a Physician who knows you personally?</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>Sees you promptly and spends enough time with you at your office visit?</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>Is available 24/7 if you have questions?</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>Works with you as a team to keep you healthy?</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>Guarantees that you actually meet with the Physician during your visits?</span></li>
                </ul>
              </div>
              <div className="border-t border-steely-blue/40 pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
                <p className="text-[1.2rem] leading-[1.85] text-navy/90 md:text-[1.35rem]">
                  Amy Daniher is a board certified Internal Medicine physician who has been practicing in San Mateo, California since 2001. She is listed as one of the Top Doctors of 2019 by San Francisco Magazine. Frustrated with the constraints of healthcare and insurance companies, she has transitioned her practice to a &ldquo;private&rdquo; (sometimes called &ldquo;concierge&rdquo; or &ldquo;membership&rdquo;) medical practice to continue to put patient care first. Now her office visits are longer, she is more available, and she is better able to communicate on your behalf with the other physicians involved in your care. Dr. Daniher believes in a comprehensive approach to health that focuses on wellness, prevention, and disease management.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="border-y border-steely-blue/30 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="mb-6 text-[1.75rem] font-bold leading-snug tracking-tight text-navy md:text-[2rem]">What is Concierge Medicine?</h2>
                <p className="mb-4 text-[1.45rem] leading-[1.85] text-navy/90">Concierge medicine represents a return to the traditional doctor-patient relationship, where your physician has the time to truly know you and your health needs. Through an annual membership, you gain direct access to Dr. Daniher, same-day or next-day appointments, and comprehensive care that goes beyond the constraints of traditional insurance-based medicine.</p>
                <p className="mb-8 text-[1.45rem] leading-[1.85] text-navy/90">This model allows for longer appointments, proactive health planning, and a genuine partnership in maintaining your wellbeing.</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy">
                  View Our Services <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-6 md:gap-x-5 md:gap-y-7"
              >
                {conciergeCards.map((card, i) => (
                  <div key={i} className={`flex min-h-[8.2rem] flex-col border border-navy/55 border-t-[3px] bg-white p-4 shadow-[0_12px_24px_rgba(95,118,128,0.08)] sm:min-h-[8.7rem] md:min-h-[9.1rem] md:p-4.5 ${i >= 2 ? 'sm:translate-y-4 md:translate-y-5' : ''} ${card.accent}`}>
                    <h3 className="mb-2.5 text-[1.32rem] font-semibold leading-tight text-navy">{card.title}</h3>
                    <p className="text-[1.1rem] leading-6 text-navy/85">{card.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 text-center"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gold">Our Practice</p>
              <h3 className="text-[1.75rem] font-bold tracking-tight text-navy md:text-[2rem]">Meet Our Team</h3>
              <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group border border-steely-blue/35 bg-white p-4 shadow-[0_16px_34px_rgba(95,118,128,0.12)]"
                >
                  <Link to={member.link} className="block">
                    <div className="mb-5 overflow-hidden border border-steely-blue/28">
                      <img src={member.image} alt={`${member.name}, ${member.role}`} className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:h-72" />
                    </div>
                  </Link>
                  <div className="border-t border-steely-blue/45 pt-4 text-center">
                    <p className="text-[1.2rem] font-semibold text-navy">{member.name}</p>
                    <p className="mt-1 text-[1rem] tracking-[0.08em] text-navy/72">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/team" className="inline-flex items-center justify-center border border-navy px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition-colors duration-200 hover:bg-navy hover:text-white active:scale-[0.97]">
                Meet the Office
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 text-center"
            >
              <h2 className="text-[1.75rem] font-bold tracking-tight text-navy md:text-[2rem]">Get in Touch</h2>
              <p className="mt-2 text-sm text-foreground/60">We look forward to partnering in your health.</p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="h-[320px] overflow-hidden border border-navy/70 sm:h-[400px]">
                  <MapEmbed />
                </div>
                <div className="overflow-hidden border border-navy/70 bg-white">
                  <img
                    src={contactOfficeImage}
                    alt="Exterior of the office building"
                    className="h-56 w-full object-cover object-center sm:h-64"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-steely-blue/45 bg-white p-6 shadow-[0_16px_34px_rgba(95,118,128,0.10)]"
              >
                <h3 className="mb-5 border-b border-gray-200 pb-3 text-[1.45rem] font-semibold text-navy">Send a Message</h3>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="border border-navy/70 bg-white p-6">
                  <h4 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 font-semibold text-navy">
                    <MapPin className="h-4 w-4 text-gold" /> Contact Information
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-navy/88">34 N. San Mateo Drive, Suite #1<br />San Mateo, CA94401</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-navy/88"><Phone className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Telephone:</span> <a href="tel:+16503935851" className="hover:underline">650-393-5851</a></p>
                    <p className="flex items-center gap-2 text-sm text-navy/88"><FileText className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Fax:</span> 650-393-5871</p>
                  </div>
                </div>
                <div className="border border-navy/70 bg-white p-6">
                  <h4 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 font-semibold text-navy">
                    <Clock className="h-4 w-4 text-gold" /> Office Hours
                  </h4>
                  <div className="space-y-2.5 text-sm text-navy/88">
                    <div className="flex justify-between"><span className="font-medium text-navy">Mon - Fri</span><span>9:00am - 5:00pm</span></div>
                    <div className="flex justify-between"><span className="font-medium text-navy">Sat - Sun</span><span className="text-foreground/50">Closed</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
