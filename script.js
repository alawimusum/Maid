// منطق التحكم والبرمجة التفاعلية للموقع المحدث لشركة معيض القرني التجارية

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التحكم في مظهر الهيدر عند التمرير (Sticky Navbar)
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // عند نزول الصفحة لأسفل: خلفية بيضاء كاملة مع ظل رمادي ناعم
            navbar.classList.remove('bg-white/90', 'border-gray-200/50');
            navbar.classList.add('bg-white', 'shadow-md', 'shadow-slate-100', 'border-brand-gold/20', 'py-1');
            navbar.querySelector('div').classList.remove('h-20', 'md:h-24');
            navbar.querySelector('div').classList.add('h-16', 'md:h-20');
            
            // إظهار زر العودة للأعلى
            backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
            // عند التواجد في أعلى الصفحة
            navbar.classList.add('bg-white/90', 'border-gray-200/50');
            navbar.classList.remove('bg-white', 'shadow-md', 'shadow-slate-100', 'border-brand-gold/20', 'py-1');
            navbar.querySelector('div').classList.add('h-20', 'md:h-24');
            navbar.querySelector('div').classList.remove('h-16', 'md:h-20');
            
            // إخفاء زر العودة للأعلى
            backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
    });

    // 2. القائمة الجانبية المتجاوبة للهواتف (Mobile Menu Handlers)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        
        if (isOpen) {
            // إغلاق القائمة
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
            
            // تغيير شكل أيقونة الهامبرغر للوضع العادي
            mobileMenuBtn.querySelectorAll('span')[0].classList.remove('rotate-45', 'translate-y-[6px]', '-translate-x-[2px]');
            mobileMenuBtn.querySelectorAll('span')[1].classList.remove('opacity-0');
            mobileMenuBtn.querySelectorAll('span')[2].classList.remove('-rotate-45', '-translate-y-[6px]', '-translate-x-[2px]');
        } else {
            // فتح القائمة
            mobileMenuOverlay.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenuOverlay.classList.remove('opacity-0');
            }, 10);
            
            // تغيير شكل أيقونة الهامبرغر لوضع الإغلاق (X)
            mobileMenuBtn.querySelectorAll('span')[0].classList.add('rotate-45', 'translate-y-[6px]', '-translate-x-[2px]');
            mobileMenuBtn.querySelectorAll('span')[1].classList.add('opacity-0');
            mobileMenuBtn.querySelectorAll('span')[2].classList.add('-rotate-45', '-translate-y-[6px]', '-translate-x-[2px]');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // إغلاق القائمة عند النقر على أي رابط من روابطها
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        });
    });

    // 3. التنقل السلس بين الأقسام وتنشيط الروابط (Active Section Link)
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-brand-gold');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('text-brand-gold');
            }
        });
    });

    // 3.5. نافذة سياسة الخصوصية المنبثقة (Privacy Policy Modal Logic)
    const privacyModal = document.getElementById('privacy-modal');
    const privacyPolicyBtn = document.getElementById('privacy-policy-btn');
    const privacyPolicyQuickLink = document.getElementById('privacy-policy-quicklink');
    const closePrivacyModalBtn = document.getElementById('close-privacy-modal-btn');
    const closePrivacyModalX = document.getElementById('close-privacy-modal-x');

    function openPrivacyModal() {
        // Make sure modal has correct z-index above everything
        privacyModal.classList.remove('hidden');
        privacyModal.classList.add('flex');
        setTimeout(() => {
            privacyModal.classList.remove('opacity-0');
        }, 10);
    }

    function closePrivacyModal() {
        privacyModal.classList.add('opacity-0');
        setTimeout(() => {
            privacyModal.classList.add('hidden');
            privacyModal.classList.remove('flex');
        }, 300);
    }

    if (privacyPolicyBtn) {
        privacyPolicyBtn.addEventListener('click', openPrivacyModal);
    }
    if (privacyPolicyQuickLink) {
        privacyPolicyQuickLink.addEventListener('click', openPrivacyModal);
    }
    if (closePrivacyModalBtn) {
        closePrivacyModalBtn.addEventListener('click', closePrivacyModal);
    }
    if (closePrivacyModalX) {
        closePrivacyModalX.addEventListener('click', closePrivacyModal);
    }

    // إغلاق المودال عند النقر على الخلفية الشبه شفافة
    if (privacyModal) {
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closePrivacyModal();
            }
        });
    }

    // إغلاق المودال عند الضغط على زر Escape في لوحة المفاتيح
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal && !privacyModal.classList.contains('hidden')) {
            closePrivacyModal();
        }
    });
});

// 4. ميزة نسخ النصوص إلى الحافظة (نسخ الآيبان والرقم الموحد)
function copyText(textToCopy, buttonId) {
    const button = document.getElementById(buttonId);
    const originalIconHtml = button.innerHTML;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // تغيير الأيقونة للدلالة على نجاح النسخ
        button.innerHTML = '<i class="fa-solid fa-check text-emerald-600"></i>';
        button.classList.add('bg-emerald-500/10', 'border-emerald-500/30');
        
        // إنشاء إشعار عائم صغير (Toast Notification)
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-24 right-1/2 translate-x-1/2 bg-brand-navy text-white border border-brand-gold/30 px-6 py-3 rounded-xl shadow-2xl z-50 text-sm font-bold animate-fade-in-up flex items-center gap-2.5 backdrop-blur-md';
        toast.innerHTML = '<i class="fa-solid fa-circle-check text-brand-gold text-base"></i> <span>تم نسخ النص بنجاح!</span>';
        document.body.appendChild(toast);
        
        // إزالة الإشعار بعد ثانيتين وإرجاع الزر لوضعه الأصلي
        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            setTimeout(() => toast.remove(), 500);
            
            button.innerHTML = originalIconHtml;
            button.classList.remove('bg-emerald-500/10', 'border-emerald-500/30');
        }, 2000);
    }).catch(err => {
        console.error('فشل في نسخ النص: ', err);
    });
}

// 5. التحقق من نموذج الاتصال وإرساله عبر الواتساب تلقائياً
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // استخراج القيم من النموذج
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const serviceValue = document.getElementById('form-service').value;
    const message = document.getElementById('form-message').value.trim();
    
    // التحقق من تعبئة البيانات بالكامل
    if (!name || !phone || !serviceValue || !message) {
        alert('يرجى تعبئة جميع الحقول المطلوبة.');
        return;
    }
    
    // تحويل خيار الخدمة لنص عربي مفهوم
    let serviceText = '';
    switch (serviceValue) {
        case 'accommodation':
            serviceText = 'حجز فندقي وسكن';
            break;
        case 'event-hall':
            serviceText = 'حجز قاعة مناسبات';
            break;
        case 'maintenance':
            serviceText = 'خدمات المقاولات والصيانة';
            break;
        default:
            serviceText = serviceValue;
    }
    
    // تركيب رسالة الواتساب المنسقة
    const formattedMessage = `السلام عليكم ورحمة الله وبركاته،
يوجد طلب حجز/استفسار جديد من الموقع الرسمي:
- الاسم: ${name}
- رقم الجوال: ${phone}
- نوع الخدمة المطلوبة: ${serviceText}
- تفاصيل الطلب: ${message}`;
    
    // ترميز النص ليكون متوافقاً مع روابط الويب
    const encodedText = encodeURIComponent(formattedMessage);
    
    // رقم الجوال المعتمد بالصيغة الدولية (966555595492)
    const whatsappUrl = `https://wa.me/966555595492?text=${encodedText}`;
    
    // محاكاة تحميل الإرسال مؤقتاً قبل فتح الرابط
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> <span>جاري تحويلك إلى واتساب...</span>';
    
    setTimeout(() => {
        // فتح محادثة الواتساب في علامة تبويب جديدة
        window.open(whatsappUrl, '_blank');
        
        // إظهار رسالة النجاح في واجهة الموقع
        statusDiv.classList.remove('hidden');
        statusDiv.classList.add('flex');
        
        // إرجاع زر الإرسال لوضعه الأصلي
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        // مسح بيانات النموذج
        form.reset();
        
        // إخفاء رسالة النجاح بعد 7 ثوانٍ
        setTimeout(() => {
            statusDiv.classList.add('hidden');
            statusDiv.classList.remove('flex');
        }, 7000);
        
    }, 1200);
}
