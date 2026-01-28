import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Usage from "./components/Usage";
import Pricing from "./components/Pricing";
import OrderForm from "./components/OrderForm";
import FAQ from "./components/FAQ";
// تم حذف ChatAssistant من هنا
import { Instagram, Facebook, Mail, ShieldAlert, ChevronLeft, ChevronRight, X } from "lucide-react";

const App: React.FC = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/dv664dogt/image/upload/v1769438381/photo_6032996507948093056_y_uevzdl.jpg",
      alt: "صورة المنتج 1 - منظر أمامي",
    },
    {
      url: "https://res.cloudinary.com/dv664dogt/image/upload/v1769438373/photo_6032996507948093058_y_nsi9mk.jpg",
      alt: "صورة المنتج 2 - منظر جانبي",
    },
    {
      url: "https://res.cloudinary.com/dv664dogt/image/upload/v1769438369/photo_6032996507948093057_y_hbv0tn.jpg",
      alt: "صورة المنتج 3 - التغليف",
    },
    {
      url: "https://res.cloudinary.com/dv664dogt/image/upload/v1769438353/photo_6032996507948093059_y_dcqnp8.jpg",
      alt: "صورة المنتج 4 - تفاصيل المنتج",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Features />

        {/* Real Photos Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">صور حقيقية للمنتج</h2>
            <p className="text-gray-500">نحن نؤمن بالشفافية، هذه الصور توضح شكل وطبيعة المنتج</p>
          </div>

          <div className="flex justify-center overflow-x-auto pb-8 gap-4 px-4 no-scrollbar">
            {images.map((img, i) => (
              <div
                key={i}
                className="min-w-[100px] md:min-w-[140px] aspect-[4/5] bg-gray-100 rounded-2xl shadow-md overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImageIndex(i)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-80 h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
              <button
                className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={28} />
              </button>

              <button
                className="absolute left-6 text-white p-2 rounded-full hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft size={32} />
              </button>

              <img
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alt}
                className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
              />

              <button
                className="absolute right-6 text-white p-2 rounded-full hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight size={32} />
              </button>
            </div>
          )}
        </section>

        <Usage />
        <Pricing />
        <OrderForm />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-emerald-900 pb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dv664dogt/image/upload/v1769434470/image_2026-01-26_143151971_1_t9knhy.png"
                  alt="MAMA Astuce Logo"
                  className="w-20 h-18 object-contain"
                />
                <span className="text-2xl font-bold">MAMA Astuce</span>
              </div>
              <p className="text-emerald-100/70 max-w-sm leading-relaxed">
                علامة تجارية رائدة في تقديم الحلول الطبيعية للعناية بالبشرة وعلاج الحروق. نجمع بين أسرار الطبيعة وأعلى معايير الجودة.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/marouch.miral?igsh=MTkzZm12ejh1b3Jjbg==" target="_blank" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/17Znd1UJjr/" target="_blank" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="mailto:Boudjatatamira5@gmail.com" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-emerald-100/70">
                <li><a href="#features" className="hover:text-emerald-400">مميزاتنا</a></li>
                <li><a href="#usage" className="hover:text-emerald-400">طريقة الاستعمال</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400">الأسعار والعبوات</a></li>
                <li><a href="#order" className="hover:text-emerald-400">طلب المنتج</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-emerald-100/70">
                <li>توصيل سريع لجميع الولايات</li>
                <li>الدفع عند الاستلام</li>
                <li>خدمة عملاء 24/7</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 bg-emerald-900/40 p-3 rounded-xl border border-emerald-800">
              <ShieldAlert className="text-orange-400 flex-shrink-0" size={20} />
              <p className="text-xs text-emerald-100/60 leading-relaxed">
                تنبيه: للاستعمال الخارجي فقط. هذا المنتج ليس دواءً طبياً. في حال وجود حساسية، يُنصح بتجربة كمية صغيرة أولاً.
              </p>
            </div>
            <p className="text-emerald-100/40 text-sm">
              &copy; {new Date().getFullYear()} MAMA Astuce. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-emerald-100 z-40 flex gap-4">
        <a href="#order" className="flex-1 bg-emerald-600 text-white text-center py-3 rounded-xl font-bold shadow-lg">
          اطلب الآن
        </a>
        <a href="https://www.facebook.com/share/17Znd1UJjr/" target="_blank" className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
          <Facebook size={24} />
        </a>
        <a href="mailto:Boudjatatamira5@gmail.com" className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;
