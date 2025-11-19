import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "admin",
    title: "General Administrative Virtual Assistant",
    problem: "Most business owners and entrepreneurs are overwhelmed by the volume of small yet essential administrative tasks that consume their time. From managing overflowing inboxes and scheduling meetings to handling data entry and document organisation, these responsibilities can quickly accumulate. As a result, productivity declines, deadlines are missed, and important opportunities are overlooked.",
    solution: "I provide professional administrative support to help businesses stay organised and focused. I manage emails, coordinate schedules, prepare documents, handle data entry, and maintain accurate and confidential file systems. My goal is to create order and efficiency, allowing clients to focus on high-value activities that drive growth. Every message, meeting, and record is handled with precision and professionalism."
  },
  {
    id: "legal",
    title: "Legal Virtual Assistant",
    problem: "Law firms and solo attorneys often struggle with time-consuming administrative and research tasks that take focus away from client service. Preparing case files, organising evidence, managing legal correspondence, and scheduling hearings require both accuracy and confidentiality. Without structured support, lawyers face delays, disorganisation, and unnecessary stress.",
    solution: "I assist legal professionals by managing client files, conducting legal research, preparing case documents, drafting correspondence, and organising schedules. I ensure that casework runs smoothly, deadlines are met, and documentation is maintained correctly. My goal is to provide seamless support that enhances productivity, allowing lawyers to focus on advocacy and client representation."
  },
  {
    id: "social",
    title: "Social Media Management Virtual Assistant",
    problem: "Many small businesses want to grow their online presence but struggle to maintain consistency and a strategic approach to their social media presence. Irregular posting, poor engagement, and a lack of a clear content plan prevent them from connecting with their target audience. This leads to low visibility, fewer leads, and stagnant growth.",
    solution: "I manage and optimise social media accounts with a focus on strategy, engagement, and consistency. I create content calendars, design visuals, write engaging captions, schedule posts, and track analytics to measure performance. My approach helps businesses build strong online identities, attract followers, and convert engagement into genuine brand loyalty."
  },
  {
    id: "content",
    title: "Content and Digital Marketing Virtual Assistant",
    problem: "Businesses often fail to reach their audience effectively because their content is unstructured, unstrategic, or inconsistent. Poorly written blogs, weak ad copy, and irregular marketing campaigns cause brands to lose visibility and trust. Without clear messaging, even good products and services get overlooked.",
    solution: "I help businesses strengthen their digital presence by creating high-quality content and strategic marketing plans. From writing SEO-optimised blogs and crafting ad copy to designing visuals and managing email marketing campaigns, I ensure that every piece of content aligns with the brand's goals. I focus on delivering clarity, consistency, and engagement that drive measurable business results."
  },
  {
    id: "medical",
    title: "Medical Virtual Assistant",
    problem: "Doctors, clinics, and wellness providers are often burdened with administrative tasks that divert their attention from patient care. Managing appointments, billing, follow-ups, and patient communication consumes valuable time. Without organised systems, clinics experience missed appointments, billing errors, and communication delays.",
    solution: "I support healthcare professionals by managing patient scheduling, providing medical billing support, updating charts, coordinating telehealth services, and facilitating communication. I ensure that all administrative processes run smoothly and professionally, allowing healthcare providers to focus on delivering quality care. My work helps create efficiency, accuracy, and a better experience for both patients and staff."
  },
  {
    id: "realestate",
    title: "Real Estate and Property Management Virtual Assistant",
    problem: "Real estate agents and property managers spend countless hours handling administrative work such as updating listings, tracking leads, coordinating maintenance, and communicating with clients or tenants. These repetitive tasks take focus away from growth opportunities and relationship building.",
    solution: "I assist with listing management, CRM updates, property show co-ordination, tenant communication, and maintenance tracking. I also handle vendor follow-ups, rent reminders, and report documentation. My role ensures that every transaction, inquiry, and update is handled promptly, keeping operations organised and clients satisfied."
  },
  {
    id: "ecommerce",
    title: "E-Commerce Virtual Assistant",
    problem: "Online store owners often face challenges managing daily operations while trying to grow their business. Order processing, product updates, customer service, returns, and stock management take time away from marketing and business development. This causes inefficiency and poor customer satisfaction.",
    solution: "I provide full e-commerce support, including order processing, inventory updates, customer communication, and returns management. I manage platforms such as Shopify, Etsy, and WooCommerce, ensuring smooth operations and quick responses. My goal is to enhance your online store's efficiency and improve customer experience while freeing up your time for strategic growth."
  },
  {
    id: "podcast",
    title: "Podcast and Media Support Virtual Assistant",
    problem: "Podcasters and content creators often struggle with the administrative and technical side of production. Tasks such as editing episodes, coordinating guest interviews, writing show notes, and managing uploads can be time-consuming. Without help, creators lose consistency and momentum.",
    solution: "I manage podcast operations from editing and post-production to scheduling and promotion. I handle guest co-ordination, episode uploads, show notes, and distribution to multiple platforms. My support ensures consistency, quality, and growth for podcast creators who want to focus on producing valuable conversations instead of managing logistics."
  },
  {
    id: "academic",
    title: "Academic Writing and Research Virtual Assistant",
    problem: "Students and researchers often feel overwhelmed with assignments, dissertations, or research papers that require time, structure, and academic precision. Lack of clear organisation, poor referencing, and tight deadlines make the process stressful and difficult to manage.",
    solution: "I assist with academic writing, research guidance, proofreading, formatting, and reference management. I help students organise their thoughts, structure their papers, and deliver polished, plagiarism-free work. My support helps learners present academically sound work confidently while saving time and reducing stress."
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping and Financial Management Virtual Assistant",
    problem: "Small businesses and freelancers often struggle with financial tracking because bookkeeping is time-consuming and requires meticulous attention to detail. Disorganised invoices, unrecorded expenses, and missing reports create confusion and lead to poor financial decisions.",
    solution: "I manage invoicing and payment tracking, expense recording and organisation, account reconciliation, profit and loss reports, monthly and weekly summaries, and clean up of disorganised records. I help clients maintain clarity and compliance by organising records, preparing summaries, and keeping books up to date so that business owners always have a clear picture of their finances. My service ensures accuracy, transparency, and peace of mind."
  },
  {
    id: "hr",
    title: "HR Virtual Assistant",
    problem: "HR departments and business owners struggle to keep up with recruitment, onboarding, and employee management while handling daily business operations. This leads to communication gaps, hiring delays, and inefficient employee support.",
    solution: "I assist HR teams by sourcing candidates, coordinating interviews, preparing onboarding materials, managing employee communication, and maintaining payroll records. I help build organised, consistent, and supportive HR processes that keep teams aligned and motivated."
  },
  {
    id: "leadgen",
    title: "Lead Generation and Client Outreach Virtual Assistant",
    problem: "Businesses depend on a steady flow of clients but often lack the time or strategy to generate and manage quality leads. Cold outreach can be uncomfortable for many, and without a systematic follow-up plan, valuable opportunities are often lost.",
    solution: "I identify and qualify leads through research, email campaigns, and professional outreach. I manage CRM tools, track communication, and maintain follow-ups to convert prospects into clients. My goal is to help businesses build strong, long-term relationships with the right audience through consistent and personalised communication."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Liquid Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="glass mx-4 mt-4 rounded-2xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-secondary/90 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">
                  <span className="text-white font-bold text-sm tracking-wide">Virtual Assistant & Writers Co.</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#services" className="text-white/90 hover:text-secondary transition-colors font-medium text-glow">Services</a>
                <a href="#contact" className="text-white/90 hover:text-secondary transition-colors font-medium text-glow">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-4">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block glass px-6 py-2 rounded-full mb-8 border border-white/20">
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Elevate Your Business</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
              PROFESSIONAL VIRTUAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">ASSISTANT SUPPORT</span>
              <br />
              FOR BUSY FOUNDERS
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light">
              We are problem solvers, strategists, and support partners dedicated to
              helping businesses save time, stay organised, and achieve consistent growth.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
              Get Started <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">Our Services</h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Card key={service.id} className="glass-card border-0 text-white group">
                <CardHeader>
                  <CardTitle className="text-secondary text-xl group-hover:text-yellow-300 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-blue-200 mb-2 uppercase tracking-wider">Problem</h4>
                      <p className="text-sm text-white/70 line-clamp-3 group-hover:text-white/90 transition-colors">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-300 mb-2 uppercase tracking-wider">Solution</h4>
                      <p className="text-sm text-white/70 line-clamp-3 group-hover:text-white/90 transition-colors">{service.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services Accordion */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center text-glow">
              Learn More About Each Service
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="glass border-0 rounded-xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-secondary transition-colors py-6">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pb-6">
                      <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm">
                        <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                          <span className="mr-2">⚠️</span> Problem:
                        </h4>
                        <p className="text-sm text-white/80">{service.problem}</p>
                      </div>
                      <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Solution:
                        </h4>
                        <p className="text-sm text-white/80">{service.solution}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass p-12 rounded-3xl border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-glow">Get In Touch</h2>
            <p className="text-xl mb-12 text-blue-100/90">
              Ready to simplify your workload and focus on growth? Let&apos;s discuss how we can help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-secondary p-4 rounded-full shadow-lg shadow-secondary/20">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                  <a href="tel:+254720858303" className="text-blue-200 hover:text-white transition-colors text-lg">
                    +254 720 858 303
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-secondary p-4 rounded-full shadow-lg shadow-secondary/20">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                  <a href="mailto:teddycleg@gmail.com" className="text-blue-200 hover:text-white transition-colors text-lg break-all">
                    teddycleg@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/virtualassistandwriters.co?utm_source=qr&igsh=d3czbHJmZGg2Mm1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group"
              >
                <Button variant="secondary" size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 px-8 py-6 rounded-full text-lg">
                  Visit Instagram
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg text-white py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="inline-block bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                <span className="text-white font-bold tracking-wide">Virtual Assistant & Writers Co.</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="tel:+254720858303" className="flex items-center text-blue-200 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +254 720 858 303
              </a>
              <a href="mailto:teddycleg@gmail.com" className="flex items-center text-blue-200 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                teddycleg@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Virtual Assistant & Writers Co. All rights reserved.</p>
            <p className="mt-2">Simplifying complex tasks, enabling consistent growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
