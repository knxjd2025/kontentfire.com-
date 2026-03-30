import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { Wrench, Home, TreePine, Zap, Hammer, SprayCan, HelpCircle, ArrowRight, Grid3X3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases - Social Media for Contractors & Home Service Businesses | KontentFire',
  description: 'Discover how plumbers, roofers, HVAC techs, landscapers, electricians, and home service contractors use KontentFire for AI-powered social media automation to get more customers.',
  keywords: ['social media for contractors', 'AI marketing for home services', 'social media automation for trade businesses', 'contractor marketing', 'home service social media'],
  alternates: {
    canonical: '/use-cases',
  },
};

const useCases = [
  {
    icon: Wrench,
    title: 'Plumbing & HVAC',
    description: 'Showcase your expertise and build trust with local homeowners. Generate before/after project posts, seasonal maintenance tips, and emergency service announcements.',
    benefits: ['Before/after project galleries', 'Seasonal maintenance reminders', 'Emergency service promotions', 'Customer review highlights'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Home,
    title: 'Roofing & Exteriors',
    description: 'Generate storm damage awareness posts, project showcases, and educational content that positions you as the local expert.',
    benefits: ['Storm season content automation', 'Drone/project photo posts', 'Roof maintenance tips', 'Insurance claim guidance content'],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: TreePine,
    title: 'Landscaping & Lawn Care',
    description: 'Turn your outdoor transformations into scroll-stopping content. Seasonal posts, landscape design tips, and before/after reveals.',
    benefits: ['Seasonal service promotions', 'Landscape design showcases', 'Lawn care tip calendars', 'Time-lapse project videos'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Electrical & Solar',
    description: 'Educate homeowners about energy efficiency, safety tips, and smart home upgrades while generating consistent leads.',
    benefits: ['Energy savings tips', 'Smart home content', 'Safety awareness posts', 'Solar ROI calculators'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Hammer,
    title: 'Home Remodeling',
    description: 'Document kitchen, bathroom, and whole-home transformations. AI generates project timelines, design tips, and reveal content.',
    benefits: ['Project timeline stories', 'Design inspiration posts', 'Budget planning content', 'Permit and process guides'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: SprayCan,
    title: 'Cleaning & Pest Control',
    description: 'Stay top of mind with seasonal cleaning tips, pest prevention guides, and before/after cleaning transformations.',
    benefits: ['Seasonal service reminders', 'Health and safety tips', 'Before/after transformations', 'Pest season alerts'],
    color: 'from-pink-500 to-rose-500',
  },
];

const faqs = [
  { question: 'Which home service businesses benefit most from KontentFire?', answer: 'KontentFire works exceptionally well for plumbing, HVAC, roofing, landscaping, electrical, cleaning, home remodeling, and pest control businesses. Any trade professional who wants to build a stronger online presence and attract more local customers will see results.' },
  { question: 'Can KontentFire create content specific to my trade?', answer: 'Yes! KontentFire includes templates and AI training for 25+ trade verticals. Whether you are a plumber, roofer, or landscaper, the AI generates industry-specific posts, hashtags, and calls-to-action tailored to your trade.' },
  { question: 'How does KontentFire help contractors get more customers?', answer: 'KontentFire\'s AI generates lead-generating content including seasonal promotions, before/after project showcases, customer testimonial highlights, and educational posts that build trust with local homeowners. Consistent posting increases your visibility and keeps you top of mind when homeowners need your services.' },
  { question: 'Do I need to be tech-savvy to use KontentFire?', answer: 'Not at all. KontentFire is designed for busy trade professionals who would rather be on the job than managing social media. The platform handles everything from content creation to scheduling and publishing with minimal input required from you.' },
  { question: 'Can I manage multiple service area locations?', answer: 'Yes! With Blaze and Inferno plans, you can manage content for multiple service areas and locations. Each location can have its own brand voice, connected social accounts, and targeted content strategy.' },
];

const industries = [
  { label: 'Plumbing', href: '/industries/plumbing' },
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'Landscaping', href: '/industries/landscaping' },
  { label: 'Electrical', href: '/industries/electrical' },
  { label: 'Painting', href: '/industries/painting' },
  { label: 'Remodeling', href: '/industries/remodeling' },
  { label: 'Pest Control', href: '/industries/pest-control' },
  { label: 'Cleaning', href: '/industries/cleaning' },
  { label: 'Flooring', href: '/industries/flooring' },
];

export default function UseCasesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Use Cases', href: '/use-cases' }]} className="mb-8" />
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Wrench className="h-4 w-4" />
              <span>Use Cases</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Built for <span className="fire-text">Trade Professionals</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">See how home service contractors use KontentFire to automate social media, showcase their work, and get more customers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-4`}>
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Use Case FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Browse by Industry */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Grid3X3 className="h-4 w-4" />
                <span>Industries</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Browse by Industry</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2">Find tailored social media solutions for your specific trade.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {industries.map((industry, i) => (
                <Link
                  key={i}
                  href={industry.href}
                  className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md transition-all text-center"
                >
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">{industry.label}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Explore More */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/how-it-works" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">How It Works</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">5-step setup guide</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-slate-300 mb-8">Start your 14-day special offer and see the difference AI automation makes.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}
