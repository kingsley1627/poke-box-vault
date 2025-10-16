import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              PokéBox Store
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Your trusted destination for authentic English Pokemon Trading Card Game products. 
              We offer competitive prices and fast shipping on all booster boxes and elite trainer boxes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Shipping & Returns</li>
              <li className="text-muted-foreground">Contact Us</li>
              <li className="text-muted-foreground">FAQ</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 PokéBox Store. All rights reserved. Pokemon is a trademark of Nintendo.</p>
        </div>
      </div>
    </footer>
  );
};
