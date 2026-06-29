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
        if (!privacyModal) return;
        privacyModal.classList.remove('hidden');
        privacyModal.classList.add('flex');
        setTimeout(() => {
            privacyModal.classList.remove('opacity-0');
        }, 10);
    }

    function closePrivacyModal() {
        if (!privacyModal) return;
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
    if (privacyModal) {
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closePrivacyModal();
            }
        });
    }

    // 3.6. نافذة سياسة الاستبدال والاسترجاع المنبثقة (Refund Policy Modal Logic)
    const refundModal = document.getElementById('refund-modal');
    const refundPolicyBtn = document.getElementById('refund-policy-btn');
    const refundPolicyQuickLink = document.getElementById('refund-policy-quicklink');
    const closeRefundModalBtn = document.getElementById('close-refund-modal-btn');
    const closeRefundModalX = document.getElementById('close-refund-modal-x');

    function openRefundModal() {
        if (!refundModal) return;
        refundModal.classList.remove('hidden');
        refundModal.classList.add('flex');
        setTimeout(() => {
            refundModal.classList.remove('opacity-0');
        }, 10);
    }

    function closeRefundModal() {
        if (!refundModal) return;
        refundModal.classList.add('opacity-0');
        setTimeout(() => {
            refundModal.classList.add('hidden');
            refundModal.classList.remove('flex');
        }, 300);
    }

    if (refundPolicyBtn) {
        refundPolicyBtn.addEventListener('click', openRefundModal);
    }
    if (refundPolicyQuickLink) {
        refundPolicyQuickLink.addEventListener('click', openRefundModal);
    }
    if (closeRefundModalBtn) {
        closeRefundModalBtn.addEventListener('click', closeRefundModal);
    }
    if (closeRefundModalX) {
        closeRefundModalX.addEventListener('click', closeRefundModal);
    }
    if (refundModal) {
        refundModal.addEventListener('click', (e) => {
            if (e.target === refundModal) {
                closeRefundModal();
            }
        });
    }

    // 3.7. نافذة الشروط والأحكام المنبثقة (Terms & Conditions Modal Logic)
    const termsModal = document.getElementById('terms-modal');
    const termsBtn = document.getElementById('terms-btn');
    const termsQuickLink = document.getElementById('terms-quicklink');
    const closeTermsModalBtn = document.getElementById('close-terms-modal-btn');
    const closeTermsModalX = document.getElementById('close-terms-modal-x');

    function openTermsModal() {
        if (!termsModal) return;
        termsModal.classList.remove('hidden');
        termsModal.classList.add('flex');
        setTimeout(() => {
            termsModal.classList.remove('opacity-0');
        }, 10);
    }

    function closeTermsModal() {
        if (!termsModal) return;
        termsModal.classList.add('opacity-0');
        setTimeout(() => {
            termsModal.classList.add('hidden');
            termsModal.classList.remove('flex');
        }, 300);
    }

    if (termsBtn) {
        termsBtn.addEventListener('click', openTermsModal);
    }
    if (termsQuickLink) {
        termsQuickLink.addEventListener('click', openTermsModal);
    }
    if (closeTermsModalBtn) {
        closeTermsModalBtn.addEventListener('click', closeTermsModal);
    }
    if (closeTermsModalX) {
        closeTermsModalX.addEventListener('click', closeTermsModal);
    }
    if (termsModal) {
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                closeTermsModal();
            }
        });
    }

    // 3.8. أداة الدعم الفني العائمة وتواصل العملاء (Floating Support Widget Logic)
    const supportWidgetBtn = document.getElementById('support-widget-btn');
    const supportPanel = document.getElementById('support-panel');
    const closeSupportBtn = document.getElementById('close-support-btn');
    const supportActionTicket = document.getElementById('support-action-ticket');

    function toggleSupportPanel() {
        if (!supportPanel) return;
        const isHidden = supportPanel.classList.contains('hidden');
        if (isHidden) {
            supportPanel.classList.remove('hidden');
            supportPanel.classList.add('flex');
            setTimeout(() => {
                supportPanel.classList.remove('opacity-0', 'translate-y-4');
            }, 10);
        } else {
            closeSupportPanel();
        }
    }

    function closeSupportPanel() {
        if (!supportPanel) return;
        supportPanel.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
            supportPanel.classList.add('hidden');
            supportPanel.classList.remove('flex');
        }, 300);
    }

    if (supportWidgetBtn) {
        supportWidgetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSupportPanel();
        });
    }

    if (closeSupportBtn) {
        closeSupportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeSupportPanel();
        });
    }

    if (supportPanel) {
        supportPanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    document.addEventListener('click', () => {
        closeSupportPanel();
    });

    if (supportActionTicket) {
        supportActionTicket.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeSupportPanel();

            const contactSection = document.getElementById('booking-contact');
            const formName = document.getElementById('form-name');
            const bookingForm = document.getElementById('booking-form');
            const bookingName = document.getElementById('booking-name');

            if (contactSection && formName) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    formName.focus();
                }, 800);
            } else if (bookingForm && bookingName) {
                bookingForm.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    bookingName.focus();
                }, 800);
            }
        });
    }

    // إغلاق أي نافذة مفتوحة أو صندوق دعم عند الضغط على Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (privacyModal && !privacyModal.classList.contains('hidden')) {
                closePrivacyModal();
            }
            if (refundModal && !refundModal.classList.contains('hidden')) {
                closeRefundModal();
            }
            if (termsModal && !termsModal.classList.contains('hidden')) {
                closeTermsModal();
            }
            closeSupportPanel();
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

// 6. معالجة إرسال نموذج صفحة الحجز وإظهار تنبيه بوابة الدفع
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const packageVal = document.getElementById('booking-package').value;
    const dateVal = document.getElementById('booking-date').value;
    
    // التحقق من أن جميع القيم المطلوبة متوفرة
    if (!name || !phone || !packageVal || !dateVal) {
        alert('يرجى تعبئة جميع الحقول المطلوبة.');
        return;
    }
    
    // استدعاء دالة فتح المودال المعرفة في الصفحة
    if (typeof openPaymentModal === 'function') {
        openPaymentModal(name, phone, packageVal, dateVal);
    } else {
        // رسالة احتياطية في حال تعذر العثور على الدالة
        alert(`بوابة الدفع الإلكتروني قيد التفعيل الفني حالياً مع المصرف.\n\nتم تسجيل حجزك باسم: ${name}\nباقة: ${packageVal}`);
    }
}
