import { ParentsTestimonialsCarousel } from '../components/testimonials';

export const HomePage = () => {
    return `
    <!-- Hero Section -->
    <section class="relative text-white min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-sky-900/40 via-transparent to-sky-900/20"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="animate-fade-in-up">
                    <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase">
                        Healthcare Excellence
                    </div>
                    <h1 class="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight font-display">
                        Welcome to <br/>
                        <span class="text-white">SNS College of</span><br/>
                        <span class="text-sky-200">Allied Health Science</span>
                    </h1>
                    
                    <p class="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-xl">
                        SNS College of Allied Health Science, Coimbatore was established in the year of 2015 with the aim to give excellent education in the medical field along with clinical practices to the students.
                    </p>

                    <p class="text-lg mb-10 text-white/80 leading-relaxed max-w-xl italic">
                        Transform your career in healthcare with cutting-edge facilities, experienced faculty, and comprehensive clinical exposure.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-5">
                        <a href="/admissions" class="bg-white hover:bg-sky-50 text-sky-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1 flex items-center justify-center">
                            Apply for 2026-27
                            <i class="fas fa-arrow-right ml-3 text-sm"></i>
                        </a>
                        <a href="/about" class="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center">
                            About Us
                        </a>
                    </div>
                </div>
                
                <div class="relative">
                    <div class="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-right">
                        <!-- Stats Card 1 -->
                        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                            <div class="text-5xl font-black text-white mb-2">8+</div>
                            <div class="text-sky-100 font-bold uppercase tracking-wider text-sm">B.Sc. Programs</div>
                        </div>
                        <!-- Stats Card 2 -->
                        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl mt-8">
                            <div class="text-5xl font-black text-white mb-2">100%</div>
                            <div class="text-sky-100 font-bold uppercase tracking-wider text-sm">Placement Support</div>
                        </div>
                        <!-- Stats Card 3 -->
                        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                            <div class="text-5xl font-black text-white mb-2">15:1</div>
                            <div class="text-sky-100 font-bold uppercase tracking-wider text-sm">Student-Faculty Ratio</div>
                        </div>
                        <!-- Stats Card 4 -->
                        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl mt-8">
                            <div class="text-5xl font-black text-white mb-2">5+</div>
                            <div class="text-sky-100 font-bold uppercase tracking-wider text-sm">Years Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose SNS CAHS -->
    <section class="py-24 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Why Choose SNS CAHS</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We don't just teach subjects—we redesign common minds through design thinking, preparing our students for tomorrow's healthcare challenges.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-brain text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Design Thinking Education</h3>
                    <p class="text-gray-600 leading-relaxed">
                        India's first college with GenAI-Powered Design Thinking Framework (Patented). Built on Empathy, every student learns to solve problems creatively using AI-enhanced methodologies.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-users-gear text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">3P Culture Framework</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Purpose, Process, People—our holistic approach ensures every student develops professionally, socially, emotionally, and ethically.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-user-doctor text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">15:1 Personalized Care</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Optimized student-teacher ratio ensures every student receives individual attention. Our experienced faculty brings deep clinical expertise to the classroom.
                    </p>
                </div>

                <!-- Card 4 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-lightbulb text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">SNS Innovation Hub</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Access to SNS iHub—India's Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs preparing them for future healthcare careers.
                    </p>
                </div>

                <!-- Card 5 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-building-columns text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">World-Class SPINE Center</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Multilevel activity center with swimming pool, indoor cricket, gym, music studio, dance studio, and more—everything under one roof for holistic development.
                    </p>
                </div>

                <!-- Card 6 -->
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
                    <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-star text-2xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">5 Pillars Development</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Learning, Upskilling, Innovation, Networking, Character Building—comprehensive development for future healthcare leaders.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Bar -->
    <section class="py-10 bg-gray-50 border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-200">
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">2019</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">15:1</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Student Ratio</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">A+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Clinical Lab</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">10+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Hospital Tie-ups</div>
                </div>
            </div>
        </div>
    </section>

    <!-- New Courses Section -->
    <section id="new-courses" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <p class="text-sky-600 font-bold uppercase tracking-widest mb-2">SNS CAHS</p>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 uppercase">New Courses</h2>
                <div class="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
                <p class="text-sm text-gray-500 italic">*Subject to Approval</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-10">
                <!-- Course: Dialysis Technology -->
                <div class="group">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                        <img src="https://snscahs.org/images/dialysis.jpg" alt="B.Sc. Dialysis Technology" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero2.png'">
                    </div>
                    <h3 class="text-xl font-bold text-sky-700 uppercase group-hover:text-sky-600 transition-colors">B.Sc. Dialysis Technology (4 Years) *</h3>
                </div>

                <!-- Course: Respiratory Therapy -->
                <div class="group">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                        <img src="https://snscahs.org/images/respiratory.jpg" alt="B.Sc. Respiratory Therapy" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero3.png'">
                    </div>
                    <h3 class="text-xl font-bold text-sky-700 uppercase group-hover:text-sky-600 transition-colors">B.Sc. Respiratory Therapy (4 Years) *</h3>
                </div>

                <!-- Course: Optometry -->
                <div class="group">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                        <img src="https://snscahs.org/images/optometry.jpg" alt="B.Sc. Optometry" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero5.png'">
                    </div>
                    <h3 class="text-xl font-bold text-sky-700 uppercase group-hover:text-sky-600 transition-colors">B.Sc. Optometry (4 Years) *</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Courses Offered Section -->
    <section id="courses-offered" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <p class="text-sky-600 font-bold uppercase tracking-widest mb-2">SNS CAHS</p>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 uppercase">Courses Offered</h2>
                <div class="w-24 h-1 bg-sky-600 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-10">
                <!-- Course 1 -->
                <div class="group text-center">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                        <img src="https://snscahs.org/images/cardiac.jpg" alt="B.Sc. Cardiac Technology" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero.png'">
                    </div>
                    <h3 class="text-lg font-bold text-sky-600 uppercase">B.Sc. Cardiac Technology (4 Years)</h3>
                </div>

                <!-- Course 2 -->
                <div class="group text-center">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                        <img src="https://snscahs.org/images/perfusion.jpg" alt="B.Sc. Cardio Pulmonary Perfusion" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero4.png'">
                    </div>
                    <h3 class="text-lg font-bold text-sky-600 uppercase leading-snug">B.Sc. Cardio Pulmonary Perfusion<br/>Care Technology (4 Years)</h3>
                </div>

                <!-- Course 3 -->
                <div class="group text-center">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                        <img src="https://snscahs.org/images/ot.jpg" alt="B.Sc. Operation Theatre & Anesthesia" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero5.png'">
                    </div>
                    <h3 class="text-lg font-bold text-sky-600 uppercase leading-snug">B.Sc. Operation Theatre &<br/>Anesthesia Technology (4 Years)</h3>
                </div>

                <!-- Course 4 -->
                <div class="group text-center">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                        <img src="https://snscahs.org/images/pa.jpg" alt="B.Sc. Physician Assistant" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero2.png'">
                    </div>
                    <h2 class="text-lg font-bold text-sky-600 uppercase">B.Sc. Physician Assistant (4 Years)</h2>
                </div>

                <!-- Course 5 -->
                <div class="group text-center">
                    <div class="rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                        <img src="https://snscahs.org/images/radio.jpg" alt="B.Sc. Radiography & Imaging" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero3.png'">
                    </div>
                    <h3 class="text-lg font-bold text-sky-600 uppercase">B.Sc. Radiography & Imaging Technology (4 Years)</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Supporting PM Initiatives -->
    <section class="py-20 bg-sky-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-center text-white mb-12 uppercase tracking-wide">Supporting PM Initiatives</h2>
            <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-90">
                <img src="https://snscahs.org/images/pm-jay.png" alt="PM-JAY" class="h-16 lg:h-24 w-auto grayscale brightness-0 invert" onerror="this.src='https://www.pmjay.gov.in/sites/default/files/2018-09/pmjay_logo.png'">
                <img src="https://snscahs.org/images/swayam.png" alt="SWAYAM" class="h-16 lg:h-24 w-auto grayscale brightness-0 invert" onerror="this.src='https://swayam.gov.in/assets/img/swayam_logo.png'">
                <img src="https://snscahs.org/images/skill-india.png" alt="Skill India" class="h-16 lg:h-24 w-auto grayscale brightness-0 invert" onerror="this.src='https://www.skillindia.gov.in/assets/images/logo.png'">
                <img src="https://snscahs.org/images/startup-india.png" alt="Startup India" class="h-12 lg:h-20 w-auto grayscale brightness-0 invert" onerror="this.src='https://www.startupindia.gov.in/static/img/logo.f768565.png'">
                <img src="https://snscahs.org/images/nsdc.png" alt="NSDC" class="h-16 lg:h-24 w-auto grayscale brightness-0 invert" onerror="this.src='https://nsdcindia.org/sites/default/files/NSDC-Logo.png'">
                <img src="https://snscahs.org/images/agnii.png" alt="AGNII" class="h-16 lg:h-24 w-auto grayscale brightness-0 invert" onerror="this.src='https://www.agnii.gov.in/assets/img/logo.png'">
            </div>
        </div>
    </section>

    ${ParentsTestimonialsCarousel()}

    <!-- Clinical Tie-ups -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <p class="text-sky-600 font-bold uppercase tracking-widest mb-2">Industry/Hospital Connect</p>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 uppercase">Clinical Tie-ups</h2>
                <div class="w-24 h-1 bg-sky-600 mx-auto mb-8"></div>
                <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Our Clinical training provide the knowledge of identifying problem and treatment and rehabilitation. Connecting and collaborating with leading governmental bodies and private hospitals opens up wide opportunities for our students to get clinically trained in the specialized centers.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img src="https://snscahs.org/images/hospital-1.jpg" alt="BRJ Ortho Centre & MAK Hospital" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero4.png'">
                    <div class="p-6 text-center">
                        <h4 class="font-bold text-lg">BRJ Ortho Centre & MAK Hospital</h4>
                    </div>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img src="https://snscahs.org/images/hospital-2.jpg" alt="NM Hospital" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero.png'">
                    <div class="p-6 text-center">
                        <h4 class="font-bold text-lg">NM HOSPITAL</h4>
                    </div>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img src="https://snscahs.org/images/hospital-3.jpg" alt="Kumaran Medical Center" class="w-full h-64 object-cover" onerror="this.src='/static/images/hero5.png'">
                    <div class="p-6 text-center">
                        <h4 class="font-bold text-lg">KUMARAN MEDICAL CENTER</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-2xl">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Start Your Healthcare Career?
            </h2>
            <p class="text-xl opacity-90 mb-8">
                Admissions open for Academic Year 2026-27. Limited seats available.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                    <i class="fas fa-pen-to-square mr-2"></i>
                    Apply Now
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-phone mr-2"></i>
                    Schedule Campus Visit
                </a>
            </div>
        </div>
    </section>
    `;
};
