import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

const benefits = [
  'Full AI content generation',
  'Multi-platform publishing',
  'Smart scheduling',
  'Cancel anytime',
];

export function FreeTrialBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start Your Free 7-Day Trial
        </h2>
        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
          Try every feature with no restrictions. Create AI-powered content, schedule posts, and publish to all your social accounts.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <Link href="https://app.kontentfire.com/login">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg text-lg px-8">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        <p className="mt-4 text-sm text-orange-100 flex items-center justify-center gap-1.5">
          <Shield className="h-3.5 w-3.5" />
          Cancel anytime. Secure checkout.
        </p>
      </div>
    </section>
  );
}
