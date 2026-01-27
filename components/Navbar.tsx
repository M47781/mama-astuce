
import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
             <img
          src="https://res.cloudinary.com/dv664dogt/image/upload/v1769434470/image_2026-01-26_143151971_1_t9knhy.png"
          alt="MAMA Astuce Logo"
          className="w-10 h-13 object-contain"
        />
           <span className="text-2xl font-bold text-black">
  MAMA Astuce
</span>

          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">لماذا نحن؟</a>
            <a href="#usage" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">طريقة الاستعمال</a>
            <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">الأسعار</a>
            <a href="#order" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all font-bold shadow-md">اطلب الآن</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2 font-medium">لماذا نحن؟</a>
            <a href="#usage" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2 font-medium">طريقة الاستعمال</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2 font-medium">الأسعار</a>
            <a href="#order" onClick={() => setIsOpen(false)} className="block bg-emerald-600 text-white text-center py-3 rounded-xl font-bold">اطلب الآن</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
