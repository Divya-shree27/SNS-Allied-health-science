import { PageHeader } from './page-header'

// Layout component with navigation and footer
export const Layout = (content: string, title: string, activePage: string = 'home') => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | SNS College of Allied Health Science</title>
        <meta name="description" content="SNS College of Allied Health Science - Offering B.Sc. programs in Allied Health Science. Established 2019, Coimbatore.">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
        
        <style>
            * { font-family: 'Inter', sans-serif; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; }
            html { scroll-behavior: smooth; }
            
            .gradient-bg {
                background: linear-gradient(-45deg, #0ea5e9, #2563eb, #3b82f6, #0284c7);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
            }
            
            /* Gradient Text Effect */
            .gradient-text {
                background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #1d4ed8 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .gradient-text-blue {
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            /* Softer Hero Gradients */
            .hero-gradient-warm {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%);
            }
            
            .hero-gradient-cool {
                background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 25%, #bfdbfe 50%, #93c5fd 75%, #60a5fa 100%);
            }
            
            /* Better Card Shadows */
            .card-shadow-sm {
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow-lg {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            
            .card-shadow-xl {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .float {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            .card-hover {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .card-hover:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            
            .pulse-slow {
                animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            @keyframes swing {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
            }
            
            .swing {
                animation: swing 2s ease-in-out infinite;
                transform-origin: top center;
            }
            
            /* Badge/Tag Styles */
            .badge-glow {
                box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
                animation: glow 2s ease-in-out infinite;
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.5); }
                50% { box-shadow: 0 0 30px rgba(14, 165, 233, 0.8); }
            }
            
            /* Smooth Transitions */
            .transition-smooth {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* Better Line Heights */
            body {
                line-height: 1.6;
            }
            
            h1 { line-height: 1.2; letter-spacing: -0.02em; }
            h2 { line-height: 1.3; letter-spacing: -0.01em; }
            h3 { line-height: 1.4; }

            /* WhatsApp Floating Button */
            .whatsapp-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 40px;
                right: 40px;
                background-color: #25d366;
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-whatsapp 2s infinite;
            }

            .whatsapp-float:hover {
                transform: scale(1.1) translateY(-5px);
                background-color: #128c7e;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            /* Instagram Floating Button */
            .instagram-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 110px;
                right: 40px;
                background: linear-gradient(45deg, #0ea5e9 0%, #2563eb 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%);
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-instagram 2s infinite;
            }

            .instagram-float:hover {
                transform: scale(1.1) translateY(-5px);
                background: linear-gradient(45deg, #2563eb 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #0ea5e9 100%);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            @keyframes pulse-whatsapp {
                0% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }

            @keyframes pulse-instagram {
                0% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(225, 48, 108, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0);
                }
            }

            @media screen and (max-width: 768px) {
                .whatsapp-float {
                    width: 50px;
                    height: 50px;
                    bottom: 25px;
                    right: 25px;
                    font-size: 28px;
                }
                .instagram-float {
                    width: 50px;
                    height: 50px;
                    bottom: 85px;
                    right: 25px;
                    font-size: 28px;
                }
            }
        </style>
    </head>
    <body class="antialiased bg-gray-50">
        
        <!-- Hanging Tag 2: Brochure -->
        <div class="fixed top-[36%] right-0 z-50 swing" style="animation-delay: 0.3s;">
            <a href="https://snscahs.org/brochure/" target="_blank" class="bg-gradient-to-br from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
                <i class="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <span class="font-extrabold text-sm uppercase tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
            </a>
        </div>
        
        <!-- Floating CTA Button (Mobile) -->
        <div class="fixed bottom-6 left-6 z-50 lg:hidden">
            <a href="/admissions" class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
                <i class="fas fa-pen-to-square"></i>
                <span class="font-bold">Apply Now</span>
            </a>
        </div>

        <!-- Navigation -->
        <nav class="bg-white shadow-md sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="/images/cahs-logo.png" alt="SNS CAHS Logo" class="h-16 w-auto" onerror="this.onerror=null;this.src='https://snscahs.org/favicon.ico'">
                        <div>
                            <h1 class="text-xl font-bold text-gray-900 leading-tight">SNS CAHS</h1>
                            <p class="text-[10px] text-gray-500 uppercase tracking-tighter">College of Allied Health Science</p>
                        </div>
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="/" class="${activePage === 'home' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">Home</a>
                        <a href="/about" class="${activePage === 'about' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">About Us</a>
                        
                        <!-- Courses Dropdown -->
                        <div class="relative group">
                            <button class="${activePage.startsWith('programs') ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium flex items-center transition-smooth">
                                Courses <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50 border-t-2 border-sky-500">
                                <a href="/#courses-offered" class="block px-4 py-2 hover:bg-sky-50 text-gray-700 transition">Courses Offered</a>
                                <a href="/#new-courses" class="block px-4 py-2 hover:bg-sky-50 text-gray-700 transition">New Courses</a>
                            </div>
                        </div>

                        <!-- Infrastructure Dropdown -->
                        <div class="relative group">
                            <button class="${['facilities', 'gallery', 'transport'].includes(activePage) ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium flex items-center transition-smooth">
                                Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50 border-t-2 border-sky-500">
                                <a href="/facilities" class="block px-4 py-2 hover:bg-sky-50 text-gray-700 transition">Facilities</a>
                                <a href="/gallery" class="block px-4 py-2 hover:bg-sky-50 text-gray-700 transition">Gallery</a>
                                <a href="/transport" class="block px-4 py-2 hover:bg-sky-50 text-gray-700 transition">Transportation</a>
                            </div>
                        </div>

                        <a href="/admissions" class="${activePage === 'admissions' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">Admissions</a>
                        <a href="/placement" class="${activePage === 'placement' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">Placement</a>
                        <a href="/career" class="${activePage === 'career' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">Career</a>
                        <a href="/contact" class="${activePage === 'contact' ? 'text-sky-600 font-bold' : 'text-gray-700 hover:text-sky-600'} font-medium transition-smooth">Contact</a>
                        
                        <a href="/admissions" class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-sky-200">
                            Apply Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-4 space-y-3">
                    <a href="/" class="block text-gray-700 hover:text-sky-600 font-medium py-2">Home</a>
                    <a href="/about" class="block text-gray-700 hover:text-sky-600 font-medium py-2">About Us</a>
                    
                    <!-- Courses -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-courses').classList.toggle('hidden')">
                            Courses <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-courses" class="hidden pl-4 space-y-2 mt-2">
                             <a href="/#courses-offered" class="block text-gray-600 hover:text-sky-600 py-1">Courses Offered</a>
                             <a href="/#new-courses" class="block text-gray-600 hover:text-sky-600 py-1">New Courses</a>
                        </div>
                    </div>
                    
                    <!-- Infrastructure -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                            Infrastructure <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/facilities" class="block text-gray-600 hover:text-sky-600 py-1">Facilities</a>
                            <a href="/gallery" class="block text-gray-600 hover:text-sky-600 py-1">Gallery</a>
                            <a href="/transport" class="block text-gray-600 hover:text-sky-600 py-1">Transportation</a>
                        </div>
                    </div>

                    <a href="/admissions" class="block text-gray-700 hover:text-sky-600 font-medium py-2">Admissions</a>
                    <a href="/placement" class="block text-gray-700 hover:text-sky-600 font-medium py-2">Placement</a>
                    <a href="/career" class="block text-gray-700 hover:text-sky-600 font-medium py-2">Career</a>
                    <a href="/contact" class="block text-gray-700 hover:text-sky-600 font-medium py-2">Contact Us</a>
                    
                    <a href="/admissions" class="block bg-sky-600 text-white text-center px-6 py-3 rounded-lg font-bold shadow-lg">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Content -->
        ${content}

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="https://sns.bitrix24.in/b11752903/resize_cache/674085/c8042d925d6656dd077f15192d13bb8f/landing/515/515efceac1ad568a6b02b26fc99e73d8/snsahs.png" alt="SNS CAHS Logo" class="h-12 w-auto bg-white rounded p-1" onerror="this.onerror=null;this.src='https://snscahs.org/favicon.ico'">
                            <div>
                                <h3 class="text-white font-bold">SNS CAHS</h3>
                                <p class="text-xs">College of Allied Health Science</p>
                            </div>
                        </div>
                        <p class="text-sm leading-relaxed">
                            Established: 2019<br>
                            Coimbatore, Tamil Nadu<br>
                            SNS Kalvi Nagar
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/" class="hover:text-white transition">Home</a></li>
                            <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                            <li><a href="/#courses-offered" class="hover:text-white transition">Courses Offered</a></li>
                            <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                            <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                            <li><a href="/transport" class="hover:text-white transition">Transportation</a></li>
                            <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                            <li><a href="/placement" class="hover:text-white transition">Placement</a></li>
                            <li><a href="/career" class="hover:text-white transition">Career</a></li>
                            <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Courses Offered</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/programs/cardiac-technology" class="hover:text-white transition">B.Sc. Cardiac Technology</a></li>
                            <li><a href="/programs/cardio-pulmonary" class="hover:text-white transition">B.Sc. Cardio Pulmonary Perfusion</a></li>
                            <li><a href="/programs/operation-theatre" class="hover:text-white transition">B.Sc. Operation Theatre & Anesthesia</a></li>
                            <li><a href="/programs/physician-assistant" class="hover:text-white transition">B.Sc. Physician Assistant</a></li>
                            <li><a href="/programs/radiography" class="hover:text-white transition">B.Sc. Radiography & Imaging</a></li>
                            <li class="pt-2 text-xs text-gray-500 uppercase font-bold">New Courses</li>
                            <li><a href="/programs/dialysis" class="hover:text-white transition">B.Sc. Dialysis Technology*</a></li>
                            <li><a href="/programs/respiratory" class="hover:text-white transition">B.Sc. Respiratory Therapy*</a></li>
                            <li><a href="/programs/optometry" class="hover:text-white transition">B.Sc. Optometry*</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Connect</h4>
                        <ul class="space-y-2 text-sm mb-4">
                            <li><i class="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar,<br />Kurumbapalayam, SSKulam,<br />Coimbatore, Tamil Nadu</li>
                            <li><a href="tel:+919629937861" class="hover:text-white transition"><i class="fas fa-phone mr-2"></i>Admission: +91 96299 37861</a></li>
                            <li><a href="mailto:info@snscahs.org" class="hover:text-white transition"><i class="fas fa-envelope mr-2"></i>info@snscahs.org</a></li>
                            <li><a href="mailto:job@snsgroups.com" class="hover:text-white transition"><i class="fas fa-briefcase mr-2"></i>Career: job@snsgroups.com</a></li>
                        </ul>
                        <div class="flex space-x-3">
                            <a href="https://www.facebook.com/snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/snsacademyorg" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2026 SNS College of Allied Health Science. All rights reserved.</p>
                    <p class="mt-2 text-sky-400 font-semibold uppercase tracking-wider">Design Thinkers | We are Design Thinkers</p>
                    <p class="mt-1 text-xs opacity-70">SNS Core Value: Sincerity, Nobility, Service</p>
                    <p class="mt-4 text-sky-500 font-bold text-lg"><i class="fas fa-headset mr-2"></i>Admission Helpline: 96299 37861</p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        </script>
        <!-- Instagram Floating Icon -->
        <a href="https://www.instagram.com/snscahs" class="instagram-float" target="_blank" rel="noopener noreferrer"
            title="Follow us on Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <!-- WhatsApp Floating Icon -->
        <a href="https://wa.me/919629937861" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
            title="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </body>
    </html>
  `;
};

// Export PageHeader for use in other components
export { PageHeader };
