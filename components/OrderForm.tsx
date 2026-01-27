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

    try {
      // إرسال البيانات إلى Google Sheet
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzgUBFX7ZeW2wtf64F3lDs8SKkJb5oiw08NkCx_0Ad65r7Z-cTOJuwALvTygjvThplVJA/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === 'success') {
        // فتح WhatsApp مع الرسالة الجاهزة للرقم المحدد
        const message = `طلب جديد:
الاسم: ${formData.fullName}
الهاتف: ${formData.phone}
الولاية: ${formData.state}
العنوان: ${formData.address}
الحجم: ${formData.productSize}`;

        const phoneNumber = "213659272799"; // رقم الشركة على WhatsApp
        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );

        setSubmitted(true);
      } else {
        alert('حدث خطأ أثناء إرسال الطلب');
      }
    } catch (error) {
      alert('حدث خطأ أثناء إرسال الطلب: ' + error);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      state: '',
      address: '',
      productSize: '500mg',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تم استلام طلبك بنجاح!</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              شكراً لثقتك بـ MAMA Astuce. سيتم التواصل معك هاتفياً خلال الـ 24 ساعة القادمة لتأكيد الطلب.
            </p>
            <button
              onClick={resetForm}
              className="mt-8 text-emerald-600 font-bold hover:underline"
            >
              تقديم طلب آخر
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* الجهة اليسرى: خطوات الطلب */}
          <div className="space-y-8 text-right">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">اطلب الآن</h2>
            <p className="text-lg text-gray-600">
              يرجى ملء المعلومات التالية لتأكيد طلبك وتجربة قوة الطبيعة في علاج بشرتك.
            </p>

            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-bold text-gray-900">أدخل بياناتك الشخصية</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-bold text-gray-900">اختر حجم العبوة المناسب</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-bold text-gray-900">سنقوم بالاتصال بك للتأكيد</p>
              </div>
            </div>
          </div>

          {/* الجهة اليمنى: نموذج الطلب */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 space-y-6 text-right"
          >
            <div>
              <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
              <input
                required
                type="text"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                placeholder="مثلاً: محمد علي"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                <input
                  required
                  type="tel"
                  placeholder="0X XX XX XX XX"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-left"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">الولاية</label>
                <select
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                >
                  <option value="">اختر الولاية</option>
                  <option value="الجزائر">الجزائر</option>
                  <option value="وهران">وهران</option>
                  <option value="قسنطينة">قسنطينة</option>
                  <option value="سطيف">سطيف</option>
                  <option value="تيزي وزو">تيزي وزو</option>
                  <option value="أخرى">ولاية أخرى...</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">العنوان الكامل</label>
              <textarea
                required
                rows={2}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                placeholder="الشارع، رقم المنزل، البلدية..."
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-4">اختر الحجم</label>
              <div className="grid grid-cols-2 gap-4">
                {productSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, productSize: size })
                    }
                    className={`py-3 rounded-xl border-2 font-bold transition-all ${
                      formData.productSize === size
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                        : 'border-gray-100 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-3 mt-4 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'جارٍ إرسال الطلب...' : 'تأكيد الطلب الآن'}
              {!loading && <Send size={24} />}
            </button>
            <p className="text-center text-sm text-gray-500">
              سيتم التواصل معك لتأكيد الطلب هاتفياً
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
