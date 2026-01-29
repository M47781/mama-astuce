import React from 'react';
import { Send, CheckCircle, MapPin, Phone, User, Package } from 'lucide-react';

const productSizes = ['50g', ' 100g'];

const algerianWilayas = [
  "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة", 
  "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة", 
  "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو", 
  "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة", 
  "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة", 
  "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة", 
  "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس", 
  "36 - الطارف", "37 - تندوف", "38 - تسمسيلت", "39 - الوادي", "40 - خنشلة", 
  "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة", 
  "46 - عين تموشنت", "47 - غرداية", "48 - غليزان", "49 - تيميمون", "50 - برج باجي مختار", 
  "51 - أولاد جلال", "52 - بني عباس", "53 - عين صالح", "54 - عين قزام", "55 - تقرت", 
  "56 - جانت", "57 - المغير", "58 - المنيعة"
];

const OrderForm: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    state: '',
    address: '',
    productSize: '50g',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const sheetBestUrl = 'https://api.sheetbest.com/sheets/c8564913-f657-408f-9f0b-72f86891aec2';

    try {
      // 1. إرسال البيانات إلى SheetBest
      await fetch(sheetBestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([{
          fullName: formData.fullName,
          phone: formData.phone,
          state: formData.state,
          address: formData.address,
          productSize: formData.productSize
        }]),
      });

      // 2. إرسال رسالة WhatsApp
      const message = `طلب جديد لمنتج MAMA Astuce:\n👤 الاسم: ${formData.fullName}\n📞 الهاتف: ${formData.phone}\n📍 الولاية: ${formData.state}\n🏠 العنوان: ${formData.address}\n📦 الحجم: ${formData.productSize}`;
      const phoneNumber = "213772136223"; 
      
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert('تم تسجيل الطلب وسيتم توجيهك الآن لواتساب للتأكيد.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ fullName: '', phone: '', state: '', address: '', productSize: '50g' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-emerald-50" dir="rtl">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white border-2 border-emerald-100 rounded-[2rem] p-12 shadow-2xl">
            <CheckCircle className="text-emerald-600 w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تم استلام طلبك!</h2>
            <p className="text-lg text-gray-600 mb-8">شكراً لك، سيتم التواصل معك هاتفياً خلال الـ 24 ساعة القادمة.</p>
            <button onClick={resetForm} className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all">تقديم طلب آخر</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-gray-50 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl font-black text-gray-900 leading-tight">سجل طلبك <span className="text-emerald-600">الآن</span></h2>
            <p className="text-xl text-gray-600">املأ الاستمارة وسنقوم بالتواصل معك لتأكيد التوصيل.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-4 bg-white p-5 rounded-2xl shadow-sm border-r-4 border-emerald-500">
                <span className="font-bold text-gray-800">التوصيل لـ 58 ولاية</span>
                <MapPin className="text-emerald-600" />
              </div>
              <div className="flex items-center justify-end gap-4 bg-white p-5 rounded-2xl shadow-sm border-r-4 border-emerald-500">
                <span className="font-bold text-gray-800">الدفع عند الاستلام</span>
                <Package className="text-emerald-600" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 space-y-6 order-1 lg:order-2">
            <div>
              <label className="flex items-center justify-end gap-2 text-gray-700 font-bold mb-2">الاسم الكامل <User size={18}/></label>
              <input required type="text" placeholder="أدخل اسمك الكامل" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all text-right"
                value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center justify-end gap-2 text-gray-700 font-bold mb-2">رقم الهاتف <Phone size={18}/></label>
                <input required type="tel" placeholder="0XXXXXXXXX" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all text-left" dir="ltr"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label className="flex items-center justify-end gap-2 text-gray-700 font-bold mb-2">الولاية <MapPin size={18}/></label>
                <select required className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all text-right appearance-none"
                  value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
                  <option value="">اختر ولايتك</option>
                  {algerianWilayas.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">العنوان الكامل</label>
              <textarea required rows={2} placeholder="البلدية، الحي، رقم المنزل..." className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all text-right"
                value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>

            <div className="space-y-4">
              <label className="block text-gray-700 font-bold">اختر الحجم</label>
              <div className="grid grid-cols-2 gap-4">
                {productSizes.map((size) => (
                  <button key={size} type="button" onClick={() => setFormData({ ...formData, productSize: size })}
                    className={`py-4 rounded-2xl border-2 font-black transition-all ${formData.productSize === size ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-emerald-200'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" disabled={loading} className={`w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-600 shadow-xl flex items-center justify-center gap-3 transition-all ${loading ? 'opacity-50' : ''}`}>
              {loading ? 'جارٍ الحفظ...' : 'تأكيد الطلب الآن'}
              {!loading && <Send size={24} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
