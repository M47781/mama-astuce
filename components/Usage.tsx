
import React from 'react';

const Usage: React.FC = () => {
  const steps = [
    { num: "1", title: "تنظيف المنطقة", desc: "نظّف المنطقة المصابة جيداً بالماء الفاتر والصابون اللطيف." },
    { num: "2", title: "وضع المرهم", desc: "ضع كمية صغيرة من مرهم MAMA Astuce على طرف إصبعك." },
    { num: "3", title: "التدليك", desc: "دلّك المنطقة بلطف وبحركات دائرية حتى يتم الامتصاص الكامل." },
    { num: "4", title: "التكرار", desc: "يُستعمل من 2 إلى 3 مرات يومياً للحصول على أفضل النتائج." }
  ];

  return (
    <section id="usage" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">طريقة الاستعمال</h2>
          <p className="text-gray-600">خطوات بسيطة لعناية فعالة وآمنة</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-emerald-200">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-emerald-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usage;
