import React, { useState } from 'react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    package: '500mg'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // رقم هاتفك الجديد بتنسيق دولي لضمان عمل الرابط
    const phoneNumber = "213772136223"; 
    
    const message = `طلب شراء جديد من MAMA Astuce:%0A` +
                    `---------------------------%0A` +
                    `👤 الاسم: ${formData.name}%0A` +
                    `📞 الهاتف: ${formData.phone}%0A` +
                    `📍 العنوان: ${formData.address}%0A` +
                    `📦 العبوة: ${formData.package}`;

    // فتح واتساب مباشرة بالرسالة المجهزة
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-900">طلب المنتج</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">الاسم الكامل</label>
              <input 
                type="text" 
                required 
                placeholder="أدخل اسمك هنا"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">رقم الهاتف</label>
              <input 
                type="tel" 
                required 
                placeholder="07XXXXXXXX"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">العنوان (الولاية والبلدية)</label>
              <textarea 
                required 
                placeholder="مثلاً: الجزائر العاصمة، رويبة"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-32 transition-all"
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">اختر العبوة</label>
              <select 
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white cursor-pointer"
                onChange={(e) => setFormData({...formData, package: e.target.value})}
              >
                <option value="500mg">500mg - 40,000 دج</option>
                <option value="1g">1g - 120,000 دج</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-lg active:transform active:scale-95"
            >
              إرسال الطلب عبر واتساب
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
