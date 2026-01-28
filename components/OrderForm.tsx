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

    // الرابط الجديد الذي أرسلته
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzsHqCrEymMQB5ZVkUFV49Y-p_RCAtXNbcyfZMGF-es88QQsiDqfJFSKbV6sKkhoz4e_A/exec';

    try {
      // 1. إرسال البيانات إلى Google Sheet
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. إعداد رسالة WhatsApp للرقم: 0772136223
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
      alert('حدث خطأ أثناء معالجة الطلب، يرجى المحاولة مرة أخرى.');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ fullName: '', phone: '', state: '', address: '', productSize: '500mg' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-white" dir="rtl">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-12 text-center shadow-xl">
            <CheckCircle className="text-emerald-600 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تم استلام طلبك بنجاح!</h2>
            <p className="text-lg text-gray-600">سيتم التواصل معك هاتفياً خلال الـ 24 ساعة القادمة لتأكيد الطلب.</p>
            <button onClick={resetForm} className="mt-8 text-emerald-600 font-bold hover:underline">تقديم طلب آخر</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-white text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">اطلب الآن</h2>
            <p className="text-lg text-gray-600">يرجى ملء المعلومات التالية لتأكيد طلبك وتجربة قوة الطبيعة.</p>
            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
              {[ {t: 'أدخل بياناتك الشخصية', n: '1'}, {t: 'اختر حجم العبوة المناسب', n: '2'}, {t: 'تواصل معنا عبر واتساب للتأكيد', n: '3'} ].map((item) => (
                <div key={item.n} className="flex gap-4 items-center justify-end">
                  <p className="font-bold text-gray-900">{item.t}</p>
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">{item.n}</div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 space-y-6 order-1 lg:order-2">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-right">الاسم الكامل</label>
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
                <label className="block text-gray-700 font-bold mb-2 text-right">الولاية</label>
                <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                  value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
                  <option value="">اختر الولاية</option>
                  <option value="الجزائر">الجزائر</option>
                  <option value="وهران">وهران</option>
                  <option value="سطيف">سطيف</option>
                  <option value="أخرى">ولاية أخرى...</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2 text-right">العنوان الكامل</label>
              <textarea required rows={2} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-4 text-right">اختر الحجم</label>
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
              {loading ? 'جارٍ الإرسال...' : 'تأكيد الطلب الآن'}
              {!loading && <Send size={24} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
