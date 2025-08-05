import React from 'react';
import { InteractiveServiceCard } from './InteractiveServiceCard';
import { JourneyChart } from './JourneyChart';
import ProductsAndTechnology from './ProductsAndTechnology';
import { BlockchainIcon, AIIcon, CloudIcon, CybersecurityIcon, IoTIcon, SoftwareDevIcon } from './icons/ServiceIcons';
import { TwitterIcon, LinkedInIcon } from './icons/SocialIcons';
import { TeamCard } from './TeamCard';
import '../styles/teamCard.css';

const Section: React.FC<{id: string; title: string; subtitle: string; children: React.ReactNode; className?: string}> = ({ id, title, subtitle, children, className }) => (
    <section id={id} className={`py-16 sm:py-20 md:py-24 px-6 md:px-12 ${className}`}>
        <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)] mb-6">{title}</h2>
                <p className="text-lg text-[var(--text-main)] opacity-80">{subtitle}</p>
            </div>
            {children}
        </div>
    </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[var(--bg-secondary)] border-t border-[var(--glass-bg)] text-[var(--text-main)] opacity-70 py-8 px-6 md:px-12">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} SystemsGroup. All Rights Reserved.</p>
      <div className="flex items-center gap-6 mt-4 md:mt-0">
        <a href="#" aria-label="Twitter" className="hover:text-[var(--text-main)] transition-colors">
          <TwitterIcon className="w-5 h-5" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[var(--text-main)] transition-colors">
          <LinkedInIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);


const HomepageContent: React.FC = () => {
  return (
    <div className="bg-[var(--bg-main)]">
      <div 
        className="bg-[var(--bg-main)]"
        style={{
          backgroundImage: `
            radial-gradient(at 15% 25%, var(--homepage-particle-color-1) 0px, transparent 50%),
            radial-gradient(at 85% 75%, var(--homepage-particle-color-2) 0px, transparent 50%)
          `
        }}
      >
        <Section id="company" title="Our Journey" subtitle="Tracing the path of innovation that defines SystemsGroup.">
            <JourneyChart />
        </Section>
        
        <Section id="impact" title="Our Impact" subtitle="Quantifying our commitment to excellence and innovation in the digital frontier.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-[var(--text-heading)] mb-2">100+</h3>
                    <p className="text-[var(--text-main)] opacity-80">Projects Launched</p>
                </div>
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-[var(--text-heading)] mb-2">$1B+</h3>
                    <p className="text-[var(--text-main)] opacity-80">Value Secured</p>
                </div>
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-[var(--text-heading)] mb-2">5M+</h3>
                    <p className="text-[var(--text-main)] opacity-80">Users Empowered</p>
                </div>
            </div>
        </Section>

        <Section id="business-model" title="Our Business Model" subtitle="A blueprint of how we create, deliver, and capture value, structured as a business model canvas.">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto text-left">
                
                {/* Row 1 */}
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 md:col-span-1">
                    <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">💼 Key Partners</h3>
                    <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                        <li>Cloud Providers (AWS, Azure)</li>
                        <li>API Partners (Stripe, Twilio)</li>
                        <li>Consultants & Integrators</li>
                        <li>Cybersecurity Specialists</li>
                        <li>Academic Institutions</li>
                        <li>Resellers & Distributors</li>
                    </ul>
                </div>

                <div className="grid grid-rows-2 gap-4 md:col-span-1">
                    <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">🛠️ Core Activities</h3>
                        <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                            <li>Agile Product Development</li>
                            <li>DevOps & QA</li>
                            <li>Client Onboarding</li>
                            <li>Continuous R&D</li>
                        </ul>
                    </div>
                    <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">🧠 Key Resources</h3>
                        <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                            <li>Skilled Engineering Teams</li>
                            <li>Proprietary Software IP</li>
                            <li>Robust Tech Platform</li>
                            <li>Brand & Client Relationships</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 md:col-span-1 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">🎯 Value Proposition</h3>
                    <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                        <li>Scalable & Secure Platforms</li>
                        <li>Intuitive, API-driven Design</li>
                        <li>Seamless Integrations</li>
                        <li>Transparent ROI</li>
                        <li>Dedicated Enterprise Support</li>
                    </ul>
                </div>

                <div className="grid grid-rows-2 gap-4 md:col-span-1">
                    <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">💬 Customer Relationships</h3>
                        <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                            <li>Dedicated Account Mgmt</li>
                            <li>Guided Onboarding</li>
                            <li>Webinars & Tutorials</li>
                            <li>Community Forums</li>
                        </ul>
                    </div>
                    <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">📣 Channels</h3>
                        <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                            <li>Website & Landing Pages</li>
                            <li>Direct Sales Outreach</li>
                            <li>Digital Marketing & SEO</li>
                            <li>Tech Events & Expos</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 md:col-span-1">
                    <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">🧩 Who We Serve</h3>
                    <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5">
                        <li>Large Enterprises</li>
                        <li>High-growth Startups</li>
                        <li>Fintech & Healthcare</li>
                        <li>EdTech & Retail</li>
                        <li>Public Sector</li>
                        <li>Consultants & Resellers</li>
                    </ul>
                </div>

                {/* Row 2 */}
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 md:col-span-3">
                    <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">💵 Cost Structure</h3>
                    <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5 sm:columns-2">
                        <li>Engineering & Product Salaries</li>
                        <li>Cloud Infrastructure & Tools</li>
                        <li>R&D and Innovation</li>
                        <li>Marketing & Sales</li>
                        <li>Security & Compliance</li>
                        <li>Legal & Administration</li>
                    </ul>
                </div>
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">💰 Revenue Model</h3>
                    <ul className="list-disc list-inside text-sm text-[var(--text-main)] opacity-80 space-y-1.5 sm:columns-2">
                        <li>SaaS Subscriptions</li>
                        <li>Enterprise Licensing</li>
                        <li>Custom Development</li>
                        <li>Premium Support Plans</li>
                        <li>Marketplace Fees</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-4 text-center bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">💡 Why Choose Systems Group?</h3>
                <p className="text-[var(--text-main)] opacity-80 max-w-4xl mx-auto">
                    We don’t just build software — we build value. With deep technical expertise and customer-centric innovation, Systems Group helps businesses transform their operations with technology that is powerful, reliable, and ready for the future.
                </p>
            </div>
        </Section>

        <ProductsAndTechnology />

        <Section id="team" title="Meet the Experts" subtitle="A collective of visionary engineers, designers, and strategists driving the future of technology.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="md:col-span-1">
                    <TeamCard 
                        name="Jane Doe"
                        title="CEO & Founder"
                        bio="Jane is a visionary leader with over 20 years of experience in the tech industry. She founded SystemsGroup with the mission to decentralize the digital world."
                        isLarge={true}
                    />
                </div>
                <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <TeamCard name="John Smith" title="Lead Architect" bio="John is the mastermind behind our scalable and secure blockchain protocols." />
                    <TeamCard name="Alex Ray" title="Head of AI" bio="Alex leads our AI division, pushing the boundaries of on-chain analytics." />
                    <TeamCard name="Sarah Wilson" title="Lead Designer" bio="Sarah's creative vision ensures our products are not only powerful but also beautiful and intuitive." />
                    <TeamCard name="Mike Brown" title="Head of Engineering" bio="Mike ensures our engineering teams are building robust and reliable systems." />
                    <TeamCard name="Emily White" title="Head of Product" bio="Emily drives the product vision, ensuring we are building what our customers need." />
                    <TeamCard name="Chris Green" title="Head of Security" bio="Chris is responsible for the security of our platforms and our clients' assets." />
                </div>
            </div>
        </Section>
        
        <Section id="services" title="What We Do: Core Services" subtitle="We specialize in pioneering solutions across the digital frontier, helping businesses navigate the complexities of modern technology.">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InteractiveServiceCard 
                  icon={<BlockchainIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="Blockchain Solutions"
                  description="From smart contracts to full-scale decentralized applications, we architect and build robust blockchain solutions tailored to your needs."
                />
                <InteractiveServiceCard 
                  icon={<AIIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="AI & ML Integration"
                  description="Leverage the power of artificial intelligence. We build and integrate custom models to unlock data-driven insights and automate processes."
                />
                <InteractiveServiceCard 
                  icon={<CloudIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="Scalable Cloud Infrastructure"
                  description="We design and manage resilient, scalable cloud architectures that power demanding applications with security and efficiency."
                />
                <InteractiveServiceCard 
                  icon={<CybersecurityIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="Cybersecurity Solutions"
                  description="Protect your digital assets with our multi-layered security protocols, threat intelligence, and proactive vulnerability management."
                />
                <InteractiveServiceCard 
                  icon={<IoTIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="IoT & Embedded Systems"
                  description="We develop intelligent, connected devices and robust IoT ecosystems, from firmware to cloud integration, for a smarter world."
                />
                <InteractiveServiceCard 
                  icon={<SoftwareDevIcon className="w-6 h-6 text-[var(--text-main)] opacity-80" />}
                  title="Custom Software Development"
                  description="From enterprise platforms to mobile apps, we deliver high-quality, tailor-made software solutions that align with your strategic goals."
                />
            </div>
        </Section>

        
        <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or want to learn more? We'd love to hear from you.">
             <div className="max-w-2xl mx-auto bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-8 md:p-12">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-main)] opacity-80 mb-2">Name</label>
                        <input type="text" id="name" className="w-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-lg px-4 py-2 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--text-main)]/50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-main)] opacity-80 mb-2">Email</label>
                        <input type="email" id="email" className="w-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-lg px-4 py-2 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--text-main)]/50" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--text-main)] opacity-80 mb-2">Message</label>
                        <textarea id="message" rows={4} className="w-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-lg px-4 py-2 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--text-main)]/50"></textarea>
                    </div>
                    <button type="submit" className="w-full text-base font-medium px-6 py-3 rounded-lg bg-[var(--text-main)] text-[var(--bg-main)] hover:opacity-90 transition-opacity">
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
        
      </div>
      <Footer />
    </div>
  );
};

export default HomepageContent;
