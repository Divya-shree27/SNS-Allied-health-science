
import { PageHeader } from '../components/page-header'

export const PrePrimaryPage = () => {
    return `
    ${PageHeader(
        'Pre-Primary Education',
        'Building strong foundations through play-based learning, curiosity, and early childhood development',
        '/static/images/pre-primary.png',
        'Pre-Primary (Ages 2.5 - 5 Years)'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Discovery Through Play</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Every parent appreciates that these early years in education are a time of curiosity, discovery, and learning. Our Preschool curriculum is inquiry and play-based, with a strong focus on developing early Literacy and Numeracy skills.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Great emphasis is placed on developing early reading and writing skills, so that each child is given a "head start" in their education. The wonderful world of stories, nursery rhymes, songs, role-play, and drama within a language-rich learning environment stimulates children's curiosity.
                    </p>
                </div>
                <div class="relative">
                     <div class="absolute -top-4 -right-4 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <img src="/static/images/SNS College of Allied Health Science Web/Pre-Primary Education.png" alt="Happy Kindergarten Students" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Age Groups -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Pre-Primary Programs</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Tailored learning experiences for every stage of early childhood.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Nursery -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-baby text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Nursery (2.5-3.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Our youngest students enjoy a hands-on, fun curriculum with opportunities to think, speak, and listen in various situations.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Communication & language</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Indoor & outdoor learning</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Motor skills development</li>
                    </ul>
                </div>

                <!-- LKG -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300 border-b-4 border-sky-600">
                    <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-child-reaching text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Lower KG (3.5-4.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        More structured day with emphasis on early English and Mathematics skills, while maintaining a balanced program.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                         <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Phonics & early reading</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Basic mathematics concepts</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Creative arts & design</li>
                    </ul>
                </div>

                <!-- UKG -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300 border-b-4 border-sky-500">
                    <div class="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-child text-3xl text-sky-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Upper KG (4.5-5.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Preparing for formal schooling with advanced literacy and numeracy skills, critical thinking, and creativity.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                         <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Blending & segmentation</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>Early writing skills</li>
                        <li class="flex items-center"><i class="fas fa-check text-sky-500 mr-2"></i>School readiness preparation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Learning Programs -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16">
                <!-- Literacy Program -->
                <div class="bg-sky-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-book-open text-2xl text-sky-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Literacy Programme</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        We place great emphasis on developing early Literacy skills to provide your child with a 'head start' in their education. Through well-established literacy programmes, children are taught fundamental skills essential for early reading and writing success.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Fun and interactive introduction to alphabetic sounds and phonics</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Letter recognition and sound association</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Early reading and writing development</span>
                        </li>
                    </ul>
                </div>

                <!-- Numeracy Program -->
                <div class="bg-blue-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-calculator text-2xl text-sky-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Numeracy Programme</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        Our Numeracy programme draws on the young child's natural mathematical interest and encourages numerical proficiency. Children participate in meaningful and fun activities that build their initial understanding.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Number recognition and counting</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Shapes, patterns, and spatial awareness</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-sky-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Real-life mathematical experiences</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-sky-600 text-white relative overflow-hidden">
         <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Give Your Child the Best Start</h2>
            <p class="text-xl mb-10 text-sky-100 font-light">
                Join SNS College of Allied Health Science's Pre-Primary program and watch your child thrive.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-sky-800 border border-sky-700 hover:bg-sky-700 px-10 py-4 rounded-xl font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
};

export const PrimaryPage = () => {
    return `
    ${PageHeader(
        'Primary Education',
        'Exploratory learning and explicit core skills for a strong educational foundation',
        '/static/images/primary.png',
        'Primary (Grades 1 - 5)'
    )}

    <!-- Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Curriculum</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">CBSE with Innovation</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS College of Allied Health Science follows CBSE Curriculum enhanced with design thinking methodologies. Core English and Mathematics skills are explicitly taught from foundation, while the broader skills of Literacy and Numeracy are developed across all subject areas.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        All classrooms are equipped with smart boards which are used regularly to facilitate learning, making education interactive and engaging.
                    </p>
                </div>
                <div class="relative">
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <img src="/static/images/SNS College of Allied Health Science Web/Primary Education.png" alt="Primary Classroom" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Goals Box -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-900">Our Primary Goals</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4 text-sky-600 text-2xl"><i class="fas fa-globe"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Global Citizens</h3>
                        <p class="text-sm text-gray-500">Equipping students for a globalized world</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-sky-600 text-2xl"><i class="fas fa-graduation-cap"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Successful Learners</h3>
                        <p class="text-sm text-gray-500">Developing independent clinical skills</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-4 text-sky-600 text-2xl"><i class="fas fa-hands-helping"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Social Justice</h3>
                        <p class="text-sm text-gray-500">Fostering strong ethical values</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 text-sky-600 text-2xl"><i class="fas fa-brain"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Critical Thinking</h3>
                        <p class="text-sm text-gray-500">Encouraging clinical problem solving</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-sky-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Nurture Your Child's Potential</h2>
            <p class="text-xl mb-10 text-sky-100 font-light">
                Experience world-class primary education with design thinking approach.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-sky-800 border border-sky-700 hover:bg-sky-700 px-10 py-4 rounded-xl font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
}

export const MiddleSchoolPage = () => {
    return `
    ${PageHeader(
        'Middle School Education',
        'Developing critical thinking, problem-solving, and collaborative skills through project-based learning',
        '/static/images/middle.png',
        'Middle School (Grades 6 - 8)'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Building Stage</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Building The Future</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Middle school focus on the Building Stage, where students master the design thinking framework and begin applying it to real-world challenges. This critical phase prepares students for advanced academic pursuits and develops entrepreneurial mindsets.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Our curriculum combines rigorous CBSE academics with hands-on projects, critical reasoning, and collaborative problem-solving, ensuring students develop both knowledge and practical skills.
                    </p>
                </div>
                <div class="bg-sky-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-sky-700 text-xs"></i></div>
                            <span class="text-gray-700">Design Thinking Framework Mastery</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-sky-700 text-xs"></i></div>
                            <span class="text-gray-700">Critical Thinking & Problem Solving</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-sky-700 text-xs"></i></div>
                            <span class="text-gray-700">Real-World Projects</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-sky-700 text-xs"></i></div>
                            <span class="text-gray-700">Team Collaboration & Communication</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking Framework Grid -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Action</h2>
                <p class="text-gray-600">The 5-step process our middle school students apply to every project.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-heart text-3xl text-sky-500 mb-3"></i>
                    <h4 class="font-bold">1. Empathize</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-crosshairs text-3xl text-sky-600 mb-3"></i>
                    <h4 class="font-bold">2. Define</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-lightbulb text-3xl text-blue-500 mb-3"></i>
                    <h4 class="font-bold">3. Ideate</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-tools text-3xl text-sky-700 mb-3"></i>
                    <h4 class="font-bold">4. Prototype</h4>
                </div>
                 <div class="col-span-2 md:col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-vial text-3xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">5. Test</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-sky-900 text-white relative overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6 uppercase tracking-wider">Join Our College Community</h2>
            <p class="text-xl mb-10 text-sky-100 font-light">
                Give your professional journey the opportunity to develop critical thinking, creativity, and problem-solving skills.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-sky-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-sky-800 border border-sky-700 hover:bg-sky-700 px-10 py-4 rounded-xl font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
}

export const SecondaryPage = () => {
    return `
    ${PageHeader(
        'Secondary & Senior Secondary',
        'Excellence stage focusing on board excellence, career readiness, and specialized streams',
        '/static/images/secondary.png',
        'Secondary & Senior Secondary (Grades 9 - 12)'
    )}

    <!-- Excellence Stage -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Excellence Stage</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Excellence Stage Objectives</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        The Excellence Stage at SNS College of Allied Health Science is designed to prepare students for professional success. We focus on academic rigor, clinical expertise, and character development, ensuring our graduates are ready for the healthcare industry.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mr-3 mt-1"><i class="fas fa-check text-sky-600 text-xs"></i></div>
                             <p class="text-gray-700">Mastery of specialized medical subjects and clinical practices.</p>
                        </div>
                        <div class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mr-3 mt-1"><i class="fas fa-check text-sky-600 text-xs"></i></div>
                             <p class="text-gray-700">Development of leadership and ethical decision-making skills.</p>
                        </div>
                        <div class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mr-3 mt-1"><i class="fas fa-check text-sky-600 text-xs"></i></div>
                             <p class="text-gray-700">Preparation for higher education and competitive healthcare roles.</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="/static/images/SNS College of Allied Health Science Web/Secondary Education.png" alt="Secondary Students" class="rounded-2xl shadow-2xl w-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Streams -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Choose Your Stream</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Focused learning paths for Grades 11-12.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 class="text-2xl font-bold text-sky-600 mb-4 text-center">Science Stream</h3>
                    <p class="text-gray-600 mb-6 text-sm">Focused on Biology, Physics, Chemistry, and Psychology for aspiring medical professionals.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 class="text-2xl font-bold text-sky-700 mb-4 text-center">Commerce Stream</h3>
                    <p class="text-gray-600 mb-6 text-sm">Focusing on Healthcare Management, Economics, and Accountancy.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 class="text-2xl font-bold text-sky-600 mb-4 text-center">Humanities Stream</h3>
                    <p class="text-gray-600 mb-6 text-sm">Developing insights into Sociology, History, and Political Science in healthcare context.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Support for Success -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-sky-600 rounded-3xl p-12 text-white shadow-xl">
                <div class="text-center mb-12">
                     <h2 class="text-3xl font-bold">Comprehensive Support for Success</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <i class="fas fa-book-reader text-4xl mb-4"></i>
                        <h4 class="font-bold mb-2">Board Exam Coaching</h4>
                        <p class="text-sky-100 text-sm">Intensive preparation for board excellence</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-compass text-4xl mb-4"></i>
                        <h4 class="font-bold mb-2">Career Counseling</h4>
                        <p class="text-sky-100 text-sm">Personalized guidance for university admissions</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-flask text-4xl mb-4"></i>
                        <h4 class="font-bold mb-2">Innovation Projects</h4>
                        <p class="text-sky-100 text-sm">Hands-on experience in iHub labs</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-globe-americas text-4xl mb-4"></i>
                        <h4 class="font-bold mb-2">Global Readiness</h4>
                        <p class="text-sky-100 text-sm">Preparing for international healthcare standards</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-sky-50 text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">Shape Your Future at SNS CAHS</h2>
             <p class="text-xl text-gray-600 mb-10">
                Join our excellence stage and prepare for a successful career in health sciences.
            </p>
            <a href="/admissions" class="bg-sky-600 text-white hover:bg-sky-700 px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg shrink-0">
                Apply for Admission
            </a>
        </div>
    </section>
    `;
}

