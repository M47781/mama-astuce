// استبدل جزء الـ handleSubmit بهذا الجزء فقط للتجربة
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const sheetBestUrl = 'https://api.sheetbest.com/sheets/c8564913-f657-408f-9f0b-72f86891aec2';

  try {
    // إرسال كـ Object بسيط داخل المصفوفة
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

    // فتح واتساب
    const message = `طلب جديد: ${formData.fullName} - ${formData.phone}`;
    window.open(`https://wa.me/213772136223?text=${encodeURIComponent(message)}`, "_blank");

    setSubmitted(true);
  } catch (error) {
    alert('خطأ في الاتصال');
  }
  setLoading(false);
};
