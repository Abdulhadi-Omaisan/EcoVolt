// اختيار جميع أشرطة التمرير (الطبقات الثلاث)
const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    // وظيفة الزر الأيمن (للرجوع)
    prevBtn.addEventListener('click', () => {
        // التمرير جهة اليمين
        track.scrollBy({ left: 340, behavior: 'smooth' });
    });

    // وظيفة الزر الأيسر (للتقدم)
    nextBtn.addEventListener('click', () => {
        // التمرير جهة اليسار
        track.scrollBy({ left: -340, behavior: 'smooth' });
    });
});


/* =========================================
   إرسال نموذج التواصل إلى الواتساب
   ========================================= */
   const whatsappForm = document.getElementById('whatsapp-form');

   if (whatsappForm) {
       whatsappForm.addEventListener('submit', function(e) {
           // منع الصفحة من إعادة التحميل عند الضغط على زر الإرسال
           e.preventDefault();
   
           // 1. قراءة البيانات التي أدخلها الزائر
           const name = document.getElementById('sender-name').value;
           const message = document.getElementById('sender-message').value;
   
           // 2. رقم الواتساب الخاص بك (بدون علامة + أو أصفار في البداية)
           const phoneNumber = "905523090037"; 
   
           // 3. تنسيق الرسالة لتكون مرتبة عند وصولها لك
           // الرمز %0A يعني سطر جديد (Enter) في الروابط
           const textMessage = `مرحباً، لدي رسالة من موقعك الشخصي (Portfolio):%0A%0A*الاسم:* ${name}%0A*البريد الإلكتروني:* ${email}%0A*الرسالة:* ${message}`;
   
           // 4. دمج الرقم مع الرسالة في رابط واتساب الرسمي
           const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
   
           // 5. فتح الرابط في نافذة جديدة
           window.open(whatsappUrl, '_blank');
       });
   }