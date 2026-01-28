
import React from 'react';
import { Tag, Truck, CreditCard } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      size: "50g",
      price: " 80 ألف ,000 دج",
      tag: "الأكثر طلباً",
      popular: true,
      features: ["مناسب للحروق البسيطة", "حجم مثالي للجيب", "توصيل سريع", "دفع عند الاستلام"]
    },
    {
      size: "100g",
      price: "160 ألف ,000 دج",
      tag: "قيمة أفضل",
      popular: false,
      features: ["توفير أكبر", "للاستخدام المتكرر", "توصيل سريع لكل الولايات", "دفع عند الاستلام"]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">اختر العبوة المناسبة لك</h2>
          <p className="text-emerald-100">أسعار تنافسية وجودة طبيعية لا تضاهى</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-white rounded-3xl p-8 shadow-2xl transition-transform hover:scale-105 ${plan.popular ? 'ring-4 ring-emerald-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {plan.tag}
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">علبة {plan.size}</h3>
                <div className="text-4xl font-extrabold text-emerald-600">{plan.price}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                    <Tag className="text-emerald-500 w-5 h-5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="#order" className={`block text-center py-4 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                اطلب هذه العبوة
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-emerald-800/50 p-6 rounded-2xl flex items-center gap-4 text-white">
            <Truck className="text-emerald- 80 ألف 0 w-10 h-10" />
            <div className="text-right">
              <p className="font-bold">توصيل متوفر</p>
              <p className="text-emerald-200 text-sm">لكافة ولايات الجزائر</p>
            </div>
          </div>
          <div className="bg-emerald-800/50 p-6 rounded-2xl flex items-center gap-4 text-white">
            <CreditCard className="text-emerald- 80 ألف 0 w-10 h-10" />
            <div className="text-right">
              <p className="font-bold">دفع عند الاستلام</p>
              <p className="text-emerald-200 text-sm">ادفع فقط عند استلام منتجك</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
