import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

const productSizes = ['500mg', '1g'];

const OrderForm: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    state: '',
    address: '',
    productSize: '500mg',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // الرابط الأخير الذي أرسلته أنت
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbxDSE6UwTYrcOpiJteVShlumg-Zc2QtOZjj6n-UQhLw-c74-99pGYBmW-ZSsDCQOe8HYA/exec';

    try {
      // 1. إرسال البيانات (تم تعديل الإعدادات لضمان القبول)
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', // لتجاوز قيود المتصفح
        headers: {
          'Content-Type': 'text/plain', // استخدام النص البسيط هو السر في نجاح الإرسال لجوجل
        },
        body: JSON.stringify(formData),
      });

      // 2. رسالة WhatsApp
      const message = `طلب جديد لمنتج MAMA Astuce:
الاسم: ${formData.fullName}
الهاتف: ${formData.phone}
الولاية: ${formData.state}
العنوان: ${formData.address}
الحجم: ${formData.productSize}`;

      const phoneNumber = "213772136223"; 
      
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ fullName: '', phone: '', state: '', address: '', productSize: '500mg' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 text-right">
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-12 text-center shadow-xl">
            <CheckCircle className="text-emerald-600 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تم الإرسال بنجاح!</h2>
            <p className="text-lg text-gray-600 leading-relaxed">ستظهر بياناتك في الجدول ويتم التواصل معك عبر واتساب.</p>
            <button onClick={resetForm} className="mt-8 text-emerald-600 font-bold hover:underline">تقديم طلب آخر</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-right order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">اطلب الآن</h2>
            <p className="text-lg text-gray-600">سيتم تسجيل طلبك في الجدول فوراً عند الضغط على الزر.</p>
            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
               <div className="flex gap-4 items-center justify-end font-bold text-gray-900">
                  <p>أدخل بياناتك الشخصية</p>
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">1</div>
               </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 space-y-6 text-right order-1 lg:order-2">
            <div>
              <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-right">رقم الهاتف</label>
                <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 text-left" dir="ltr"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">الولاية</label>
                <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                  value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
                  <option value="">اختر الولاية</option>
                  <option value="الجزائر">الجزائر</option>
                  <option value="وهران">وهران</option>
                  <option value="سطيف">سطيف</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">العنوان الكامل</label>
              <textarea required rows={2} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-4">اختر الحجم</label>
              <div className="grid grid-cols-2 gap-4">
                {productSizes.map((size) => (
                  <button key={size} type="button" onClick={() => setFormData({ ...formData, productSize: size })}
                    className={`py-3 rounded-xl border-2 font-bold transition-all ${formData.productSize === size ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'border-gray-100 text-gray-500 hover:border-gray-300'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" disabled={loading} className={`w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-emerald-700 shadow-lg flex items-center justify-center gap-3 ${loading ? 'opacity-50' : ''}`}>
              {loading ? 'جارٍ الحفظ...' : 'تأكيد الطلب'}
              {!loading && <Send size={24} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
