import { PageHeader } from '../components/layout'

export const CardiacTechnologyPage = () => {
    return `
    ${PageHeader(
        'B.Sc. Cardiac Technology',
        'Comprehensive 4-year program in cardiac care technology, ECG, echocardiography, and cardiovascular diagnostics',
        '',
        'B.Sc. Cardiac Technology (4 Years)'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Program Overview</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        The B.Sc. Cardiac Technology program provides comprehensive training in cardiac care, diagnostic procedures, and cardiovascular technology. Students gain hands-on experience with ECG, echocardiography, stress testing, and cardiac catheterization.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our curriculum combines theoretical knowledge with extensive clinical training, preparing graduates for careers in hospitals, cardiac care centers, and diagnostic laboratories.
                    </p>
                </div>
                <div class="bg-sky-50 rounded-2xl p-8 border-l-4 border-sky-500">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900">Program Highlights</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">4-Year Undergraduate Program</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Clinical Training in Leading Hospitals</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">State-of-the-art Cardiac Labs</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">100% Placement Support</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Industry Expert Faculty</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Eligibility Criteria</h2>
            <div class="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                <p class="text-lg text-gray-700 text-center">
                    Passed 10+2 examination with <strong>Physics and Chemistry</strong> as compulsory subjects along with <strong>Mathematics/Biology</strong> subject.
                </p>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-xl">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Start Your Career in Cardiac Technology?</h2>
            <p class="text-xl mb-8 opacity-90">
                Join our B.Sc. Cardiac Technology program and become a skilled cardiac care professional.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-phone mr-2"></i>Contact Us
                </a>
            </div>
        </div>
    </section>
    `;
};

// Generic program page generator
export const ProgramPage = (title: string, description: string, highlights: string[]) => {
    return `
    ${PageHeader(
        title,
        description,
        '',
        `${title} (4 Years)`
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Program Overview</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        ${description}
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our curriculum combines theoretical knowledge with extensive clinical training, preparing graduates for successful careers in healthcare.
                    </p>
                </div>
                <div class="bg-sky-50 rounded-2xl p-8 border-l-4 border-sky-500">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900">Program Highlights</h3>
                    <ul class="space-y-4">
                        ${highlights.map(h => `
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">${h}</span>
                        </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Eligibility Criteria</h2>
            <div class="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                <p class="text-lg text-gray-700 text-center">
                    Passed 10+2 examination with <strong>Physics and Chemistry</strong> as compulsory subjects along with <strong>Mathematics/Biology</strong> subject.
                </p>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-xl">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Start Your Healthcare Career?</h2>
            <p class="text-xl mb-8 opacity-90">
                Join our ${title} program and become a skilled healthcare professional.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-phone mr-2"></i>Contact Us
                </a>
            </div>
        </div>
    </section>
    `;
};
