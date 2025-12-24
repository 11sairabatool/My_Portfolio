// 1. PRELOADER LOGIC (Website load honay k baad chalay ga)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // 0.5 second baad preloader ko gayab karna shuru karo (Fade Out)
        setTimeout(() => {
            preloader.style.opacity = '0'; // Dheere dheere gayab
            
            // Jab gayab ho jaye, to usay screen se hata do
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // 500ms transition time k barabar
        }, 500); // Thora sa wait taake user animation dekh sakay
    }
});

// 2. MAIN LOGIC (Jab HTML structure load ho jaye)
document.addEventListener('DOMContentLoaded', () => {
    
    // --- AOS Animation Initialize ---
    // Ye code animations ko activate karta hai
    AOS.init({
        duration: 1000, // Animation 1 second tak chalay gi
        once: true,     // Sirf aik baar animation hogi (bar bar nahi)
        offset: 100,    // Thora sa scroll karne par animation shuru ho
    });

    // --- Mobile Menu Logic ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    // Agar button aur menu maujood hain to hi ye code chalay
    if (menuBtn && mobileMenu) {
        
        // Button click karne par menu khulay ya band ho
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Menu k kisi bhi link par click karne se menu band ho jaye
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // --- Smooth Scrolling ---
    // Jab kisi link (jis mein # ho) par click karein
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Foran jump na kare
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Agar target section mil jaye to wahan smooth scroll karo
            if(targetElement){
                // Mobile menu ko band kar do agar khula hai
                if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});