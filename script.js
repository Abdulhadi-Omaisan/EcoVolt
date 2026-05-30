// =========================================
// 1. تحريك أشرطة التمرير للمشاريع (الأسهم)
// =========================================
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

// =========================================
// إرسال نموذج التواصل إلى الواتساب (طريقة آمنة)
// =========================================

// نطلب من المتصفح الانتظار حتى يتم تحميل ملف HTML بالكامل
document.addEventListener("DOMContentLoaded", function() {
    
    // نبحث عن النموذج
    const whatsappForm = document.getElementById('whatsapp-form');
    
    // إذا وجدنا النموذج في الصفحة، نطبق عليه الأوامر
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            // 1. منع الصفحة من إعادة التحميل (الخطوة الأهم)
            e.preventDefault();
            
            // 2. قراءة البيانات
            const name = document.getElementById('sender-name').value;
            const message = document.getElementById('sender-message').value;
            
            // 3. رقم الواتساب الخاص بك
            const phoneNumber = "905523090037"; 
            
            // 4. تنسيق الرسالة
            const textMessage = `مرحباً، لدي رسالة من موقعك الشخصي (Portfolio):%0A%0A*الاسم:* ${name}%0A*الرسالة:* ${message}`;
            
            // 5. دمج الرقم مع الرسالة
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
            
            // 6. فتح الرابط في نافذة جديدة
            window.open(whatsappUrl, '_blank');
        });
    }
});
