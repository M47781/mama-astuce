
import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const Features: React.FC = () => {
  const benefits = [
    "مكونات طبيعية 100%",
    "لطيف على البشرة",
    "يساعد على تهدئة الحروق",
    "يخفف الاحمرار والالتهاب",
    "يساهم في التئام الجلد",
    "لا يترك آثار مزعجة على البشرة"
  ];

  const indications = [
    "الحروق الخفيفة",
    "الحروق من الدرجة الأولى والثانية",
    "حروق الشمس",
    "الجروح السطحية البسيطة"
  ];

  return (
    <section id="features" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">لماذا تختار MAMA Astuce؟</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">المميزات الرئيسية</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-700 text-lg">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Indications Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">الحالات التي يُنصح بها</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {indications.map((item, idx) => (
                  <div key={idx} className="bg-emerald-50 p-4 rounded-xl text-emerald-800 font-bold text-center border border-emerald-100">
                    {item}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-red-50 border-r-4 border-red-500 rounded-lg flex items-start gap-3">
                <Info className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-red-800 text-sm font-medium">
                  تنبيه مهم: غير مخصص للحروق العميقة أو الخطيرة. يرجى مراجعة الطبيب في الحالات المستعجلة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
