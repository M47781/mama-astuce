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

    // الرابط الخاص بك الذي أرسلته
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzJq-iSoxcpVOgXCe_cjmJyWuUOkGXUuydwZ9mAgdCDY0kMBouuNOB0WbAl-KGrPcxgKw/exec';

    try {
      // 1. إرسال البيانات إلى Google Sheet
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. تجهيز رسالة الواتساب للرقم: 0772136223
      const message = `طلب شراء جديد من موقع MAMA Astuce:
---------------------------
👤 الاسم: ${formData.fullName}
📞 الهاتف: ${formData.phone}
📍 الولاية: ${formData.state}
🏠 العنوان: ${formData.address}
📦 العبوة: ${formData.productSize}`;

      const whatsappNumber = "213772136223"; 
      
      // فتح الواتساب
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

      setSubmitted(true);
    } catch (error) {
      alert('حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.');
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-emerald-50 text-center" dir="rtl">
        <div className="max-w-xl mx-auto px-4 border-2 border-emerald-100 rounded-3xl p-12 bg-white shadow-xl">
          <CheckCircle className="text-emerald-600 w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تم إرسال طلبك!</h2>
          <p className="text-lg text-gray-600 mb-8">
            شكراً لثقتك بنا. لقد تم توجيهك إلى واتساب لتأكيد الطلب، وسنتصل بك هاتفياً في أقرب وقت.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-emerald-600 font-bold hover:underline">
            إرسال طلب آخر
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-white text-right" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-emerald-950 mb-4">اطلب المنتج الآن</h2>
          <p className="text-gray-500 text-lg">أدخل معلوماتك وسنتكفل بالباقي</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-emerald-50 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-gray-700 font-bold mr-2">الاسم واللقب</label>
              <input required type="text" placeholder="أدخل اسمك الكامل"
                className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-emerald-500 transition-all bg-gray-50" 
                onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-bold mr-2">رقم الهاتف</label>
              <input required type="tel" placeholder="07XXXXXXXX"
                className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-emerald-500 transition-all bg-gray-50 text-left" dir="ltr"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-gray-700 font-bold mr-2">الولاية</label>
              <input required type="text" placeholder="مثلاً: الجزائر، سطيف..."
                className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-emerald-500 transition-all bg-gray-50"
                onChange={(e) => setFormData({...formData, state: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-bold mr-2">حجم العبوة</label>
              <select className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-emerald-500 transition-all bg-gray-50"
                onChange={(e) => setFormData({...formData, productSize: e.target.value})}>
                <option value="500mg">500mg - 40,000 دج</option>
                <option value="1g">1g - 120,000 دج</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-bold mr-2">العنوان الكامل</label>
            <textarea required placeholder="البلدية، الحي، رقم المنزل..."
              className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-emerald-500 transition-all bg-gray-50 h-32"
              onChange={(e) => setFormData({...formData, address: e.target.value})}></textarea>
          </div>

          <button type="submit" disabled={loading} 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-2xl transition-all shadow-xl hover:shadow-emerald-200 flex items-center justify-center gap-4 group">
            {loading ? 'جارٍ تسجيل طلبك...' : 'تأكيد الطلب الآن'}
            <Send className={`w-6 h-6 ${loading ? 'animate-pulse' : 'group-hover:translate-x--2'}`} />
          </button>
          
          <p className="text-center text-gray-400 text-sm">توصيل سريع لـ 58 ولاية والدفع عند الاستلام</p>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
