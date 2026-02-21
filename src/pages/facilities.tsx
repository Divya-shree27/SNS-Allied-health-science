import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'Infrastructure',
        'World-class facilities and clinical training environment for healthcare excellence',
        '/static/images/hero5.png',
        'Infrastructure'
    )}

    <!-- Core Infrastructure -->
    <section class="py-24 bg-white text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-sky-600 uppercase tracking-tight">Infrastructure</h2>
            <div class="w-24 h-1 bg-sky-600 mx-auto mb-12"></div>
            
            <p class="text-gray-600 max-w-5xl mx-auto leading-relaxed mb-20 text-lg">
                Providing a cutting-edge infrastructure in the forms of <strong class="text-gray-900">ICT Enabled Classrooms, Well-Equipped Laboratories, Library, WiFi Enabled Campus, Food Court, Cafeteria, Coffee Day, Playgrounds and Play areas</strong> equipped with top-quality sports equipment, Executive Lounge, SPINE - The student recreational Activity center, Hostel facilities with caring wardens and tight securities, Transportation facilities, tie-ups with renowned Hospitals, owned Clinic and 108 emergency.
            </p>

            <div class="grid md:grid-cols-3 gap-16">
                <!-- Campus Life -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                        <i class="fas fa-chart-line text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Campus Life</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Our campus is styled with all required amenities and world-class infrastructure to create a happy learning environment with clean and green atmosphere for all the students and staffs promoting health and wellness at every step.
                    </p>
                </div>

                <!-- Library -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                        <i class="fas fa-lightbulb text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Library</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Our library equipped with excellent collection of academic books in the fields of General Science, Physiology, Sociology, Osteopathy, and specialized physiotherapy streams. And our digital library creates a way for all students and faculties to access wide range of digital resources online courses and e-journals.
                    </p>
                </div>

                <!-- Transport -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                        <i class="fas fa-globe text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Transport</h3>
                    <p class="text-gray-600 leading-relaxed">
                        A full-fledged Transport department functions in the campus to provide hassle-free and safe transport facility to all students and staff covering up various places across the city and around the city.
                    </p>
                </div>

                <!-- Sports for Life -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                         <i class="fas fa-hands-helping text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Sports for Life</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Sports and Fitness go hand in hand at SNS. Passing the legacy of health to next generation with top-quality sports equipment and well-trained coaches.
                    </p>
                </div>

                <!-- Hostel -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                         <i class="fas fa-chart-bar text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Hostel</h3>
                    <p class="text-gray-600 leading-relaxed">
                        College provides separate hostel facility for boys and girls, which is administered by chief warden and assisted by separate warden/assistant warden. Each room is furnished with required furniture.
                    </p>
                </div>

                <!-- Medical Facility -->
                <div class="group">
                    <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-sky-500 transition-all duration-300">
                         <i class="fas fa-hospital-user text-4xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Medical Care</h3>
                    <p class="text-gray-600 leading-relaxed">
                        24/7 medical assistance with tie-ups with renowned Hospitals, owned Clinic and 108 emergency services for any on-campus emergencies.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Detailed Labs -->
    <section class="py-24 bg-gray-50 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-gray-900 mb-12 uppercase">Academic Infrastructure</h2>
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-microscope text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-4">Clinical Labs</h3>
                    <p class="text-sm text-gray-600 text-center">Industry-enabled laboratories for practical training.</p>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-laptop-medical text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-4">ICT Classrooms</h3>
                    <p class="text-sm text-gray-600 text-center">Modern classrooms with interactive learning tools.</p>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-network-wired text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-4">WIFI Campus</h3>
                    <p class="text-sm text-gray-600 text-center">High-speed connectivity across the entire premises.</p>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-coffee text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-4">Food Court</h3>
                    <p class="text-sm text-gray-600 text-center">Quality cafeteria and refreshment zones.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-sky-600 text-white relative overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Experience It In Person</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light uppercase tracking-wide">
                Visit our world-class campus and clinical facilities.
            </p>
            <a href="/contact" class="bg-white text-sky-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
  `;
};
