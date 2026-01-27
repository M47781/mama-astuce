
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "هل المنتج طبيعي 100%؟",
      a: "نعم، مرهم MAMA Astuce مصنوع بالكامل من مكونات طبيعية مختارة بعناية ولا يحتوي على أي مواد كيميائية ضارة."
    },
    {
      q: "هل يناسب جميع أنواع البشرة؟",
      a: "نعم، تركيبته لطيفة ومناسبة لمعظم أنواع البشرة، بما في ذلك البشرة الحساسة."
    },
    {
      q: "متى تظهر النتائج؟",
      a: "يختلف الأمر حسب حالة البشرة ومدى الإصابة، ولكن غالباً ما يتم الإحساس بالراحة وتخفيف الألم من أولى الاستعمالات."
    },
    {
      q: "هل يمكن استخدامه للأطفال؟",
      a: "نعم، بما أنه طبيعي 100% فهو آمن للأطفال، ولكن ننصح دائماً بتجربة كمية صغيرة جداً في البداية للتأكد من عدم وجود حساسية تجاه المكونات الطبيعية."
    }
  ];

  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600">كل ما تود معرفته عن مرهم MAMA Astuce</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-right hover:bg-emerald-50/30 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="text-emerald-600" /> : <ChevronDown className="text-emerald-600" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
