import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";

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
      {/* Background - White from original flyer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-white"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="bg-primary mx-4 mt-4 rounded-2xl shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 md:h-12 md:w-12">
                  <Image
                    src="/images/logo.jpg"
                    alt="VirtualAssistandWriters.Co Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="bg-primary px-4 py-2 rounded-lg">
                  <span className="text-white font-bold text-sm tracking-wide">VirtualAssistandWriters.Co</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#services" className="text-white hover:text-secondary transition-colors font-medium">Services</a>
                <a href="#contact" className="text-white hover:text-secondary transition-colors font-medium">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-4">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-primary">
              LEAD GENERATION & CLIENT OUTREACH
            </h1>
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2">VIRTUAL ASSISTANT</h2>
              <div className="h-1 bg-primary w-32 mx-auto"></div>
            </div>
            <p className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I help businesses find the right clients through research, personalized outreach, and consistent follow up. You get organized communication, qualified leads, and a steady flow of potential clients.
            </p>
            <div className="flex items-center justify-center mb-8">
              <CheckCircle2 className="h-6 w-6 text-primary mr-2" />
              <p className="text-lg text-gray-700">
                If you need help with client outreach or lead follow up, I am here to support your business
              </p>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-bold text-lg px-10 py-6 rounded-lg shadow-lg transition-all duration-300">
              CONTACT US: <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border-2 border-gray-200 text-gray-800 group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wider">Problem</h4>
                      <p className="text-sm text-gray-700 line-clamp-3">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wider flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Solution
                      </h4>
                      <p className="text-sm text-gray-700 line-clamp-3">{service.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services Accordion */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Learn More About Each Service
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="bg-white border-2 border-gray-200 rounded-xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80 transition-colors py-6">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pb-6">
                      <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                          <span className="mr-2">⚠️</span> Problem:
                        </h4>
                        <p className="text-sm text-gray-700">{service.problem}</p>
                      </div>
                      <div className="p-6 bg-green-50 border border-primary/20 rounded-xl">
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Solution:
                        </h4>
                        <p className="text-sm text-gray-700">{service.solution}</p>
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
      <section id="contact" className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl border-2 border-gray-200 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Get In Touch</h2>
            <p className="text-xl mb-12 text-gray-700">
              Ready to simplify your workload and focus on growth? Let&apos;s discuss how we can help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                <CardContent className="pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-secondary p-4 rounded-full shadow-lg">
                      <Phone className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Phone</h3>
                  <a href="tel:+254720858303" className="text-gray-700 hover:text-primary transition-colors text-lg">
                    +254 720 858 303
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                <CardContent className="pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-secondary p-4 rounded-full shadow-lg">
                      <Mail className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
                  <a href="mailto:teddycleg@gmail.com" className="text-gray-700 hover:text-primary transition-colors text-lg break-all">
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
                <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-bold border-0 shadow-lg px-8 py-6 rounded-lg text-lg">
                  Visit Instagram
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Follow Us on Instagram</h2>
            <p className="text-xl mb-12 text-gray-700">
              Stay connected and see our latest updates, tips, and behind-the-scenes content.
            </p>
            <div className="flex justify-center mb-8">
              <InstagramEmbed />
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.instagram.com/virtualassistandwriters.co?utm_source=qr&igsh=d3czbHJmZGg2Mm1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group"
              >
                <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-bold border-0 shadow-lg px-8 py-6 rounded-lg text-lg">
                  Visit Our Instagram
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center space-x-3">
              <div className="relative h-8 w-8 md:h-10 md:w-10">
                <Image
                  src="/images/logo.jpg"
                  alt="VirtualAssistandWriters.Co Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="inline-block px-6 py-3">
                <span className="text-white font-bold tracking-wide">VirtualAssistandWriters.Co</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="tel:+254720858303" className="flex items-center text-white hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +254720858303
              </a>
              <a href="mailto:teddycleg@gmail.com" className="flex items-center text-white hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                teddycleg@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-white/80 text-sm">
            <p>&copy; {new Date().getFullYear()} Virtual Assistant & Writers Co. All rights reserved.</p>
            <p className="mt-2">Simplifying complex tasks, enabling consistent growth.</p>
            <p className="mt-4 text-white/60">
              Made by{" "}
              <a
                href="https://captivart.art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-yellow-300 transition-colors underline"
              >
                captivart.art
              </a>
            </p>
          </div>
        </div>
        {/* Yellow strip at bottom - matching original flyer */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
      </footer>
    </div>
  );
}
