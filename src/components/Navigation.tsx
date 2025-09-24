import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-salmon to-salmon-light bg-clip-text text-transparent">
            Sakura Moments
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-salmon transition-colors ${
                  location.pathname === item.path ? "text-salmon font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Button variant="cultural" className="hidden md:block">
            Fazer Pedido
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;