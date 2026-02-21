import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Layout } from './components/layout'
import { HomePage } from './pages/home'
import { CardiacTechnologyPage, ProgramPage } from './pages/programs'
import { FacilitiesPage } from './pages/facilities'
import { AboutPage, ContactPage, AdmissionsPage, InnovationPage, PlacementPage, CareerPage } from './pages/remaining'
import { MandatoryDisclosurePage } from './pages/mandatory-disclosure'
import { GalleryPage } from './pages/gallery-sports'
import { TransportPage } from './pages/transport'

const app = new Hono()

// Diagnostic route
app.get('/health', (c) => c.text('Hono is running!'))
app.get('/api/test', (c) => c.json({ status: 'ok', runtime: 'edge' }))

// Enable CORS for API routes
app.use('/api/*', cors())

// API route for admission inquiry
app.post('/api/admission-inquiry', async (c) => {
    const data = await c.req.json()
    console.log('Admission Inquiry:', data)

    // In production, you would send email or save to database
    return c.json({
        success: true,
        message: 'Thank you! Our admissions team will contact you within 24 hours.'
    })
})

// Home Page
app.get('/', (c) => {
    return c.html(Layout(HomePage(), 'Home', 'home'))
})

// Program Pages
app.get('/programs/cardiac-technology', (c) => {
    return c.html(Layout(CardiacTechnologyPage(), 'B.Sc. Cardiac Technology', 'programs-cardiac'))
})

app.get('/programs/cardio-pulmonary', (c) => {
    const content = ProgramPage(
        'B.Sc. Cardio Pulmonary Perfusion Care Technology',
        'Specialized training in cardiopulmonary bypass and perfusion technology for cardiac surgeries, preparing students for critical roles in cardiac care teams.',
        [
            '4-Year Undergraduate Program',
            'Clinical Training in Leading Cardiac Centers',
            'Advanced Perfusion Technology Labs',
            '100% Placement Support',
            'Expert Faculty from Medical Field'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Cardio Pulmonary Perfusion', 'programs-cardio'))
})

app.get('/programs/operation-theatre', (c) => {
    const content = ProgramPage(
        'B.Sc. Operation Theatre & Anesthesia Technology',
        'Comprehensive training in operation theatre management, anesthesia technology, and surgical assistance for modern healthcare facilities.',
        [
            '4-Year Undergraduate Program',
            'Hands-on OT Training',
            'Anesthesia Technology Labs',
            'Clinical Rotations in Top Hospitals',
            '100% Placement Assistance'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Operation Theatre & Anesthesia', 'programs-ot'))
})

app.get('/programs/physician-assistant', (c) => {
    const content = ProgramPage(
        'B.Sc. Physician Assistant',
        'Training to assist physicians in patient care, diagnosis, treatment planning, and medical procedures in various healthcare settings.',
        [
            '4-Year Undergraduate Program',
            'Clinical Training in Multi-specialty Hospitals',
            'Patient Care Management',
            'Diagnostic Procedures Training',
            'Career Opportunities in Hospitals & Clinics'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Physician Assistant', 'programs-pa'))
})

app.get('/programs/radiography', (c) => {
    const content = ProgramPage(
        'B.Sc. Radiography & Imaging Technology',
        'Advanced training in medical imaging, X-ray, CT scan, MRI, and other diagnostic imaging technologies for accurate disease diagnosis.',
        [
            '4-Year Undergraduate Program',
            'State-of-the-art Imaging Labs',
            'Training in X-ray, CT, MRI, Ultrasound',
            'Radiation Safety Protocols',
            'High Demand Career Path'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Radiography & Imaging', 'programs-radio'))
})

app.get('/programs/dialysis', (c) => {
    const content = ProgramPage(
        'B.Sc. Dialysis Technology',
        'Specialized training in renal care, dialysis procedures, and kidney disease management for critical patient care. (Subject to Approval)',
        [
            '4-Year Undergraduate Program',
            'Dialysis Technology Training',
            'Renal Care Management',
            'Clinical Exposure in Nephrology Units',
            'Growing Healthcare Sector'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Dialysis Technology', 'programs-dialysis'))
})

app.get('/programs/respiratory', (c) => {
    const content = ProgramPage(
        'B.Sc. Respiratory Therapy',
        'Comprehensive training in respiratory care, ventilator management, and pulmonary diagnostics for critical care settings. (Subject to Approval)',
        [
            '4-Year Undergraduate Program',
            'Respiratory Care Technology',
            'Ventilator Management Training',
            'Pulmonary Function Testing',
            'Critical Care Opportunities'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Respiratory Therapy', 'programs-respiratory'))
})

app.get('/programs/optometry', (c) => {
    const content = ProgramPage(
        'B.Sc. Optometry',
        'Training in eye care, vision testing, optical dispensing, and management of vision disorders. (Subject to Approval)',
        [
            '4-Year Undergraduate Program',
            'Vision Science & Eye Care',
            'Optical Dispensing Training',
            'Clinical Optometry Practice',
            'Independent Practice Opportunities'
        ]
    )
    return c.html(Layout(content, 'B.Sc. Optometry', 'programs-optometry'))
})

// Facilities Page
app.get('/facilities', (c) => {
    return c.html(Layout(FacilitiesPage(), 'Facilities', 'facilities'))
})

// About Page
app.get('/about', (c) => {
    return c.html(Layout(AboutPage(), 'About Us', 'about'))
})

// Contact Page
app.get('/contact', (c) => {
    return c.html(Layout(ContactPage(), 'Contact Us', 'contact'))
})

// Mandatory Disclosure Page
app.get('/mandatory-disclosure', (c) => {
    return c.html(Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure'))
})

// Admissions Page
app.get('/admissions', (c) => {
    return c.html(Layout(AdmissionsPage(), 'Admissions', 'admissions'))
})

// Gallery Page
app.get('/gallery', (c) => {
    return c.html(Layout(GalleryPage(), 'Campus Gallery', 'gallery'))
})

// Infrastructure / Innovation
app.get('/innovation', (c) => {
    return c.html(Layout(InnovationPage(), 'Innovation Hub', 'innovation'))
})

// Placement Page
app.get('/placement', (c) => {
    return c.html(Layout(PlacementPage(), 'Placement', 'placement'))
})

// Career Page
app.get('/career', (c) => {
    return c.html(Layout(CareerPage(), 'Career', 'career'))
})

// Transport Page
app.get('/transport', (c) => {
    return c.html(Layout(TransportPage(), 'Transport Services', 'transport'))
})

export default app
