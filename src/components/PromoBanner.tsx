import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container">
        <div className="text-center text-primary-foreground">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Shipping on Orders Over $100
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Get your Pokemon cards delivered fast with free standard shipping on qualifying orders
          </p>
        </div>
      </div>
    </section>
  );
};
