export const ParentsTestimonialsCarousel = () => {
    const avatarIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="w-9 h-9 text-white/95">
      <path fill="currentColor" d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7Z" />
    </svg>
  `;

    return `
    <!-- Testimonials Section -->
    <section class="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Voices of Success: Students & Parents</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from the families who trust SNS College of Allied Health Science with their professional future
                </p>
            </div>

            <!-- Carousel Container -->
            <div class="relative">
                <div id="testimonials-carousel" class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="testimonials-track">
                        
                        <!-- Testimonial 1 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mrs. Priya Sharma</h4>
                                        <p class="text-gray-600">Parent of B.Sc. Cardiac Technology Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "SNS College of Allied Health Science has transformed my daughter's approach to learning. The expert faculty and design thinking methodology have made her a creative problem-solver in healthcare. She's not just scoring well academically but also developing real-world clinical skills."
                                </p>
                                <div class="flex items-center text-sky-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Parent Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mr. Rajesh Kumar</h4>
                                        <p class="text-gray-600">Parent of B.Sc. Physician Assistant Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "The clinical labs and industry focus at SNS CAHS are exceptional. My son has gained hands-on experience in leading hospitals this year! The college's emphasis on both academics and innovation through SNS iHub is preparing him for future healthcare challenges."
                                </p>
                                <div class="flex items-center text-sky-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Parent Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mrs. Anita Menon</h4>
                                        <p class="text-gray-600">Parent of B.Sc. Radiography Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "What sets SNS CAHS apart is their genuine care for each student's overall development. The SPINE wellness program and modern sports facilities are outstanding. My daughter loves the fingerprint approach where her unique professional talents are recognized and nurtured."
                                </p>
                                <div class="flex items-center text-sky-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Parent Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 4 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Dr. Vijay Narayan</h4>
                                        <p class="text-gray-600">Parent of B.Sc. Operation Theatre & Anesthesia Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "SNS CAHS's clinical pathway program is phenomenal! My son secured a great internship thanks to the rigorous preparation and healthcare mindset developed here. The focus on innovation, leadership, and medical excellence truly prepares students for elite careers."
                                </p>
                                <div class="flex items-center text-sky-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Parent Review</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button id="prev-testimonial" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-sky-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="next-testimonial" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-sky-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <!-- Dots Indicator -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-sky-600 transition-all" data-index="0"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-sky-400 transition-all" data-index="1"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-sky-400 transition-all" data-index="2"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-sky-400 transition-all" data-index="3"></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Carousel Script -->
    <script>
        (function() {
            let currentIndex = 0;
            const track = document.getElementById('testimonials-track');
            const dots = document.querySelectorAll('.testimonial-dot');
            const totalSlides = 4;

            function updateCarousel() {
                track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.remove('bg-gray-300');
                        dot.classList.add('bg-sky-600');
                    } else {
                        dot.classList.remove('bg-sky-600');
                        dot.classList.add('bg-gray-300');
                    }
                });
            }

            document.getElementById('next-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });

            document.getElementById('prev-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.dataset.index);
                    updateCarousel();
                });
            });

            // Auto-advance every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 5000);
        })();
    </script>
  `;
};
