
import React from 'react';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-100">
              <Sparkles size={16} />
              <span>مرهم طبيعي 100%</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              رجّع لبشرتك <span className="text-emerald-600">الراحة</span> والعناية الطبيعية 🌱
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              هل تعاني من حروق خفيفة، حروق الشمس أو جروح سطحية؟ مرهم MAMA Astuce المصنوع من مكونات مختارة بعناية يساعد على تهدئة الألم وتخفيف الاحمرار ودعم التئام الجلد.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#order" className="flex-1 min-w-[200px] text-center bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1">
                اطلب الآن – الدفع عند الاستلام
              </a>
              <a href="#features" className="flex-1 min-w-[200px] text-center bg-white text-emerald-600 border-2 border-emerald-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all">
                اكتشف المزيد
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">آمن تماماً</p>
                  <p className="text-sm text-gray-500">لطيف على جميع أنواع البشرة</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Zap size={24} />
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">مفعول سريع</p>
                  <p className="text-sm text-gray-500">تهدئة فورية للألم</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://res.cloudinary.com/dv664dogt/image/upload/v1769438103/photo_6032996507948093054_y_nf9s1x.jpg" 
                alt="MAMA Astuce Natural Ointment" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-emerald-600 rounded-3xl opacity-10 transform -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
