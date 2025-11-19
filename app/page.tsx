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
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary px-4 py-2 rounded-md">
                <span className="text-black font-bold text-sm">VirtualAssistandWriters.Co</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-secondary transition-colors">Services</a>
              <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-secondary px-4 py-2 rounded-md mb-6">
              <span className="text-black font-semibold">VirtualAssistandWriters.Co</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              TRUSTED BOOKKEEPING
              <br />
              <span className="text-secondary">SUPPORT FOR BUSY</span>
              <br />
              FOUNDERS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              At VirtualAssistandWriters.Co, we are more than just virtual assistants.
              We are problem solvers, strategists, and support partners dedicated to
              helping businesses, professionals, and entrepreneurs save time, stay
              organised, and achieve consistent growth.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Our goal is to simplify complex administrative, creative, and operational tasks, 
              allowing our clients to focus on what truly matters: performance, growth, and success.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive virtual assistant solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Card key={service.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Problem:</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">{service.solution}</p>
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
                <AccordionItem key={service.id} value={service.id} className="bg-white border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                          <span className="mr-2">⚠️</span> Problem:
                        </h4>
                        <p className="text-sm text-red-700">{service.problem}</p>
                      </div>
                      <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Solution:
                        </h4>
                        <p className="text-sm text-green-700">{service.solution}</p>
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
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-12 text-white/90">
              Ready to simplify your workload and focus on growth? Let's discuss how we can help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-secondary p-4 rounded-full">
                      <Phone className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a href="tel:+254720858303" className="text-secondary hover:underline text-lg">
                    +254 720 858 303
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-secondary p-4 rounded-full">
                      <Mail className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:teddycleg@gmail.com" className="text-secondary hover:underline text-lg break-all">
                    teddycleg@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.instagram.com/virtualassistandwriters.co?utm_source=qr&igsh=d3czbHJmZGg2Mm1w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="secondary" size="lg">
                  Visit Instagram
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="inline-block bg-secondary px-4 py-2 rounded-md">
                <span className="text-black font-bold">VirtualAssistandWriters.Co</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="tel:+254720858303" className="flex items-center hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +254 720 858 303
              </a>
              <a href="mailto:teddycleg@gmail.com" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                teddycleg@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-white/70 text-sm">
            <p>&copy; {new Date().getFullYear()} VirtualAssistandWriters.Co. All rights reserved.</p>
            <p className="mt-2">Simplifying complex tasks, enabling consistent growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
