// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Down Button
document.querySelector('.scroll-down').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector('#features').offsetTop - 80,
        behavior: 'smooth'
    });
});

// Features Data
const featuresData = [
    {
        icon: 'fas fa-robot',
        title: 'AI Chatbot Canggih',
        description: 'Dilengkapi dengan kecerdasan buatan untuk memahami dan merespons percakapan secara alami.'
    },
    {
        icon: 'fas fa-bullhorn',
        title: 'Broadcast Pesan',
        description: 'Kirim pesan massal ke ribuan kontak sekaligus dengan personalisasi untuk setiap penerima.'
    },
    {
        icon: 'fas fa-users',
        title: 'Manajemen Grup',
        description: 'Kelola grup WhatsApp dengan fitur otomatis seperti welcome message dan moderation tools.'
    },
    {
        icon: 'fas fa-plug',
        title: 'Integrasi API',
        description: 'Terhubung dengan sistem lain melalui API untuk otomatisasi yang lebih powerful.'
    },
    {
        icon: 'fas fa-chart-bar',
        title: 'Analitik Canggih',
        description: 'Pantau statistik dan performa pesan dengan dashboard analitik yang mudah dipahami.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Keamanan Tinggi',
        description: 'Data Anda aman dengan enkripsi end-to-end dan sistem backup otomatis.'
    }
];

// Load Features
const featuresContainer = document.querySelector('.features');
featuresData.forEach((feature, index) => {
    const featureCard = document.createElement('div');
    featureCard.className = `feature-card fade-in delay-${(index % 3) + 1}`;
    featureCard.innerHTML = `
        <div class="feature-icon">
            <i class="${feature.icon}"></i>
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;
    featuresContainer.appendChild(featureCard);
});

// How It Works Steps
const stepsData = [
    {
        number: '1',
        title: 'Daftar Akun',
        description: 'Buat akun Shikimori MD dan verifikasi nomor WhatsApp yang akan digunakan.'
    },
    {
        number: '2',
        title: 'Atur Bot Anda',
        description: 'Konfigurasi balasan otomatis, pesan siaran, dan integrasi sesuai kebutuhan bisnis Anda.'
    },
    {
        number: '3',
        title: 'Mulai Otomatisasi',
        description: 'Aktifkan bot Anda dan biarkan Shikimori MD menangani komunikasi dengan pelanggan.'
    }
];

// Load Steps
const stepsContainer = document.querySelector('.steps');
stepsData.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.className = `step fade-in delay-${index + 1}`;
    stepElement.innerHTML = `
        <div class="step-number">${step.number}</div>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
    `;
    stepsContainer.appendChild(stepElement);
});

// WhatsApp Configuration
const whatsappNumber = '6281234567890'; // Replace with your WhatsApp number
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}?text=`;

// Pricing Data with WhatsApp Integration
const pricingData = [
    {
        id: 'basic',
        title: 'Paket 1 Bulan',
        price: '50.000',
        period: '',
        features: [
            '1 Grup WhatsApp',
            'Masa aktif 30 hari',
            '500 Pesan/bulan',
            'Balas Otomatis Dasar',
            'Dukungan Email',
            'Integrasi Sederhana',
            'Laporan Dasar'
        ],
        popular: false,
        whatsappMessage: "Halo, saya tertarik dengan sewa Grup WhatsApp 1 bulan. Mohon info lebih lanjut."
    },
    {
        id: 'pro',
        title: 'Paket 2 Bulan',
        price: '100.000',
        period: '',
        features: [
            '1 Grup WhatsApp',
            'Masa aktif 60 hari',
            '1000 Pesan/bulan',
            'Balas Otomatis Cerdas',
            'Dukungan Prioritas',
            'Integrasi E-commerce',
            'Laporan Lengkap',
            'Bonus 7 hari ekstra'
        ],
        popular: true,
        whatsappMessage: "Halo, saya tertarik dengan sewa Grup WhatsApp 2 bulan. Mohon info lebih lanjut."
    },
    {
        id: 'enterprise',
        title: 'Paket 4 Bulan',
        price: '250.000',
        period: '',
        features: [
            '1 Grup WhatsApp',
            'Masa aktif 120 hari',
            'Pesan Tidak Terbatas',
            'AI Chatbot Canggih',
            'Dukungan 24/7',
            'Multi-Integrasi',
            'Analitik Lengkap',
            'Bonus 15 hari ekstra',
            'Prioritas update fitur'
        ],
        popular: false,
        whatsappMessage: "Halo, saya tertarik dengan sewa Grup WhatsApp 4 bulan. Mohon info lebih lanjut."
    }
];

// Load Pricing Cards with WhatsApp Buttons
const pricingContainer = document.querySelector('.pricing-cards');
pricingData.forEach((plan, index) => {
    const pricingCard = document.createElement('div');
    pricingCard.className = `pricing-card fade-in delay-${index + 1} ${plan.popular ? 'popular' : ''}`;
    
    const featuresList = plan.features.map(feature => {
        const isAvailable = !feature.startsWith('Tidak');
        return `
            <li>
                <i class="fas fa-${isAvailable ? 'check' : 'times'}"></i>
                ${feature}
            </li>
        `;
    }).join('');

    const whatsappUrl = `${whatsappBaseUrl}${encodeURIComponent(plan.whatsappMessage)}`;

    pricingCard.innerHTML = `
        <div class="pricing-header">
            <h3>${plan.title}</h3>
            <div class="price">Rp${plan.price}<span>${plan.period}</span></div>
        </div>
        <div class="pricing-body">
            <ul>
                ${featuresList}
            </ul>
            <a href="${whatsappUrl}" class="btn whatsapp-btn" target="_blank" data-package="${plan.id}">
                <i class="fab fa-whatsapp"></i> Pilih Paket
            </a>
        </div>
    `;
    pricingContainer.appendChild(pricingCard);
});

// Track package selection clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.whatsapp-btn')) {
        const button = e.target.closest('.whatsapp-btn');
        const packageId = button.getAttribute('data-package');
        const packageName = pricingData.find(p => p.id === packageId).title;
        
        console.log(`Package selected: ${packageName}`);
        // You can add analytics tracking here
        // Example: gtag('event', 'package_selection', { package_type: packageName });
    }
});

// Testimonials Data
const testimonialsData = [
    {
        quote: "Shikimori MD telah mengubah cara kami berinteraksi dengan pelanggan. Respons waktu kami meningkat 300% dan kepuasan pelanggan melonjak!",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Sarah Wijaya",
        role: "Pemilik, Butik Sarah"
    },
    {
        quote: "Dengan Shikimori MD, kami bisa menghemat 10 jam kerja per minggu yang sebelumnya digunakan untuk membalas pesan WhatsApp manual.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Budi Santoso",
        role: "Manajer, Toko Online Budi"
    },
    {
        quote: "Integrasi dengan Shopify sangat mulus. Sekarang setiap pesanan baru langsung dikonfirmasi ke pelanggan melalui WhatsApp otomatis.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Dewi Lestari",
        role: "Pemilik, Dewi Craft"
    },
    {
        quote: "Fitur broadcast-nya sangat membantu untuk promosi produk baru. Open rate kami mencapai 95%, jauh lebih tinggi dari email marketing.",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        name: "Rudi Hermawan",
        role: "Marketing Manager"
    }
];

// Load Testimonials
const testimonialTrack = document.querySelector('.testimonial-track');
testimonialsData.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="quote">${testimonial.quote}</div>
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <div class="author-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `;
    testimonialTrack.appendChild(testimonialCard);
});

// Testimonial Slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalSlides = testimonials.length;

function showSlide(index) {
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.slider-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Auto Slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// FAQ Data
const faqData = [
    {
        question: "Apakah nomor WhatsApp saya akan diblokir?",
        answer: "Tidak, Shikimori MD dirancang untuk mematuhi semua kebijakan dan batasan WhatsApp. Kami menggunakan API resmi dan memastikan semua pesan dikirim sesuai aturan untuk mencegah pemblokiran."
    },
    {
        question: "Berapa lama waktu setup setelah mendaftar?",
        answer: "Anda bisa mulai menggunakan Shikimori MD dalam waktu 15 menit setelah pendaftaran. Proses setup sangat mudah dengan panduan langkah demi langkah yang kami sediakan."
    },
    {
        question: "Apakah ada kontrak jangka panjang?",
        answer: "Tidak, semua paket kami berbasis bulanan tanpa kontrak jangka panjang. Anda bisa berhenti kapan saja tanpa biaya tambahan."
    },
    {
        question: "Bisakah saya upgrade paket nanti?",
        answer: "Ya, Anda bisa upgrade paket kapan saja. Selisih harga akan disesuaikan secara pro-rata berdasarkan sisa waktu berlangganan Anda."
    },
    {
        question: "Apakah ada versi gratis?",
        answer: "Kami menawarkan trial 7 hari untuk paket Profesional sehingga Anda bisa mencoba semua fitur sebelum berlangganan."
    }
];

// Load FAQ
const accordion = document.querySelector('.accordion');
faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = `accordion-item fade-in delay-${index % 4 + 1}`;
    faqItem.innerHTML = `
        <div class="accordion-header">
            <span>${faq.question}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="accordion-content">
            <p>${faq.answer}</p>
        </div>
    `;
    accordion.appendChild(faqItem);
});

// Accordion Functionality
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.accordion-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.accordion-header i').className = 'fas fa-chevron-down';
        }
        
        item.classList.toggle('active');
        const icon = header.querySelector('i');
        icon.className = item.classList.contains('active') 
            ? 'fas fa-chevron-up' 
            : 'fas fa-chevron-down';
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('button');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Set Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Scroll Reveal Animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});