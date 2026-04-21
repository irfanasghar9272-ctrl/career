// --- Data ---
const careersData = {
    army: {
        title: "Join Pak Army (ISSB)",
        icon: "fa-shield-halved",
        summary: "Serve the nation with honor, prestige, and power. Joining the Armed Forces is a highly respected career path in Pakistan.",
        qualifications: "FSc (Pre-Eng, Pre-Med, ICS) or FA with a minimum of 60% marks. Minimum height: 5' 4'' (Male).",
        tests: "Phased testing: Initial Computerized Test (Verbal, Non-Verbal, Academic), Initial Medical, Physical Test (1.6 km run in 8 mins), followed by a grueling 4-day ISSB Evaluation (Psychological Tests, GTO Indoor/Outdoor tasks, Deputy President Interview).",
        timeline: ["Online Registration (PMA Long Course / SSC)", "Clear Initial Written & Medical", "Clear Physical & Initial Interview", "Receive ISSB Call Letter", "Pass 4-Day ISSB Evaluation", "Final Medical Review Board", "Start PMA Kakul Training"],
        salary: "Starting Basic Pay BPS-17 approx Rs 70,000+ extending up with vast perks (free housing, world-class medical, schooling).",
        pros: ["Unmatched Job Security", "High Social Respect", "World class Medical & Housing Perks", "Elite Training", "Pension"],
        cons: ["Rigorous and stressful physical training", "Frequent city transfers", "High discipline requiring lifestyle sacrifices"]
    },
    mbbs: {
        title: "MBBS / Medical Field",
        icon: "fa-stethoscope",
        summary: "A noble profession dedicated to saving lives and advancing clinical sciences.",
        qualifications: "FSc Pre-Medical with minimum 65-70% marks. Core focus required in Biology, Chemistry, and Physics.",
        tests: "MDCAT (National Level Test). Preparation requires mastery of Biology (68 MCQs), Chemistry (54 MCQs), Physics (54 MCQs), English (18 MCQs), and Logical Reasoning (6 MCQs). Pure competitive merit.",
        timeline: ["FSc Pre-Medical Completion", "Rigorous MDCAT Prep (Under Mentorship)", "MDCAT Exam Day", "Provincial Merit List Generation", "5-year intensive MBBS Program", "1-year Mandatory House Job / Residency"],
        salary: "Starting Rs 60,000 - 100,000+ (Govt scales) and scales exponentially in private practice and specializations.",
        pros: ["Very high societal status & respect", "Directly impacting/saving lives", "Lifelong learning & specializations (FCPS/MRCP)", "Global demand"],
        cons: ["Exceptionally long study hours", "High emotional and physical stress", "Delayed financial independence compared to peers"]
    },
    engineering: {
        title: "Engineering & Tech Infrastructure",
        icon: "fa-gears",
        summary: "Build massive infrastructure, design modern solutions, and shape the technological future of Pakistan.",
        qualifications: "FSc Pre-Engineering or ICS with a minimum of 60% marks.",
        tests: "University-specific entrance tests like ECAT (UET), NET (NUST), or GIKi Admission Test. These heavily assess conceptual Physics, advanced FSc Mathematics, Chemistry/CS, and analytical English.",
        timeline: ["FSc Continuation", "Register for NET/ECAT", "Clear Entrance Tests with High Merit", "4-year BE/BSc Program (e.g. Civil, Mechanical, Electrical, Aerospace)", "PEC Registration", "Join Industry as Trainee Engineer"],
        salary: "Starting Rs 50,000 - 150,000+ depending heavily on the firm (MNCs pay premium) and the specific engineering branch.",
        pros: ["Strong analytical problem-solving career", "Massive opportunities abroad (Middle East/Europe)", "Diverse fields from aerospace to civil"],
        cons: ["Market saturation limits initial opportunities for lower-tier graduates", "Requires constant upskilling to stay relevant"]
    },
    it: {
        title: "IT / Computer Science",
        icon: "fa-laptop-code",
        summary: "The fastest growing global industry offering immense remote work potential, software engineering, and AI development.",
        qualifications: "FSc (Maths/Physics), ICS, or A-Levels with Mathematics/CS setup.",
        tests: "Rigorous entry tests focusing predominantly on IQ, Advanced Mathematics, and Analytical Logic. FAST-NU entry test is standard benchmark. PUCIT / NUST entry tests are also vital.",
        timeline: ["College Completion", "Algorithm/Math preparation for Entry Tests", "4-year BS (CS, SE, AI, or Data Science)", "Bootcamps/Internships during degree", "Junior Developer / Freelancer"],
        salary: "Exponential growth. Starting Rs 80,000 - 200,000+ locally. Can easily exceed millions remotely / via freelancing (Upwork/Fiverr).",
        pros: ["Highest entry-level salary potential", "Remote work & global flexibility", "Massive demand for AI/Web developers"],
        cons: ["Sedentary, high screen-time lifestyle", "Rapidly changing technology requires burning the midnight oil to keep up", "High burnout rates"]
    },
    business: {
        title: "Business / Corporate Sector",
        icon: "fa-chart-line",
        summary: "Spearhead corporate strategies, manage multinational corporations, or create disruptive startups.",
        qualifications: "Any FSc/FA/I.Com/A-Levels with a minimum of 50-60% marks.",
        tests: "LUMS Admission Test (LMAT/SAT), IBA Admission Test, or NUST Business School tests. Heavy emphasis on Advanced English/Grammar and Quantitative/Basic Mathematics.",
        timeline: ["College Completion", "Prepare for SAT or University Entry Tests", "4-year BBA or BS-AF Program", "Take internships at FMCGs (e.g., Unilever, Nestle)", "Join as Management Trainee", "Optional MBA for executive acceleration"],
        salary: "Highly variable. Starting Rs 60,000 - 150,000+ at top MNCs. Limitless if creating a successful venture.",
        pros: ["Unlimited hierarchical growth potential", "Leadership and managerial roles", "Vast corporate networking opportunities"],
        cons: ["Very high pressure / target-oriented culture", "Financial risks if entrepreneur", "Highly competitive to enter top FMCGs"]
    },
    government: {
        title: "Government Bureaucracy (CSS/PMS)",
        icon: "fa-building-columns",
        summary: "Serve in the elite federal bureaucracy (PAS, PSP, FSP) wielding immense administrative authority.",
        qualifications: "Any recognized Bachelor's Degree (14 or 16 years) with at least a 2nd Division. Age limit generally 21-30 years.",
        tests: "FPSC Central Superior Services (CSS) or Provincial Management Service (PMS) exams. Consists of 6 Compulsory subjects (English Essay is notoriously difficult) and 6 Optional subjects.",
        timeline: ["Complete Graduation", "Commit 1-2 Years exclusively to CSS Preparation", "Appear for Written Exams (12 Papers)", "Wait 6+ Months for results", "Clear Medical, Psychological, and Viva Voce Interview", "Allocation to Group (e.g., Police, Admin)", "CSA Training"],
        salary: "Basic BPS-17 starting (approx Rs 80,000+) but true value comes from immense perks, housing, vehicles, and authority.",
        pros: ["Unmatched societal power and prestige in Pakistan", "Absolute Job security", "State perks (Housing, Transport, Protocol)"],
        cons: ["Extremely low passing rate (around 2%)", "Slow financial promotion structure compared to IT/Business", "Exposure to heavy political pressures"]
    }
};

const expertsData = [
    {
        field: "MDCAT / Medical Specialist",
        name: "Dr. Ali Rehman",
        tag: "High-Yield Biology & Test Strategy",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "An authoritative medical mentor dedicated exclusively to MDCAT preparation. From tackling high-yield conceptual Biology to time-management techniques in Physics and Chemistry, he strategically ensures top merit positioning for aspirants."
    },
    {
        field: "Armed Forces (ISSB) Mentor",
        name: "Major (R) Tariq Mahmood",
        tag: "Psychological Profiling & GTO Strategies",
        image: "https://images.unsplash.com/photo-1579038773867-044c58cdefcaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "A veteran who decodes the secret to clearing the 4-day ISSB evaluation. He conducts mock interviews, physical fitness routines, and psychological profiling tests to map out a clear path to your recommendation letter."
    },
    {
        field: "IT & Engineering Advisor",
        name: "Zainab Shah, MS CS",
        tag: "Algorithm Prep & University Merits",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "An industry veteran guiding students to crack FAST-NU and NUST NETs. She aids in navigating the confusing choices between Software Engineering, AI, and CS, putting students on the modern global track."
    },
    {
        field: "Business & Govt Careers (CSS)",
        name: "Ahmed Hassan",
        tag: "LUMS/IBA & CSS Blueprinting",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Specializing in corporate and bureaucratic pathways, Ahmed formulates the exact study plans for scoring high in the CSS English Essay and breaking into top-tier FMCG management trainee programs."
    }
];

// --- Views ---

const views = {
    home: () => {
        let heroData = null;
        try {
            const saved = localStorage.getItem('career_hero_data');
            if(saved) heroData = JSON.parse(saved);
        } catch(e) {}
        
        const heroTitle = heroData ? heroData.title : 'Shape Your Future With <span class="highlight">Clarity</span>';
        const heroDesc = heroData ? heroData.desc : 'Expert, step-by-step career guidance for Pakistani students. Whether it\'s joining the prestigious Pak Army, pursuing MBBS, or diving into IT, we help you navigate the journey.';

        return `
        <section class="hero" id="home">
            <div class="hero-content">
                <div class="hero-tag">Free Counseling Registration Open</div>
                <h1 class="hero-title">${heroTitle}</h1>
                <p class="hero-desc">${heroDesc}</p>
                <div class="hero-actions">
                    <a href="#quiz" class="btn-primary">Find My Career</a>
                    <a href="#paths" class="btn-outline">Explore Pathways</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="hero-image.png" alt="Students Planning Career">
            </div>
        </section>

        <section class="section categories-bg">
            <div class="text-center">
                <h2 class="section-title">Popular Career Pathways</h2>
                <p class="section-subtitle">Discover structured roadmaps for the most in-demand careers in Pakistan.</p>
            </div>
            <div class="grid-cards">
                ${Object.entries(careersData).map(([key, data]) => `
                    <a href="#career/${key}" class="card">
                        <div class="card-icon"><i class="fa-solid ${data.icon}"></i></div>
                        <h3 class="card-title">${data.title}</h3>
                        <p class="card-desc">${data.summary}</p>
                        <span class="card-link">View Details <i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                `).join('')}
            </div>
        </section>

        <section class="section" id="about">
            <div class="text-center" style="margin-bottom: 4rem;">
                <h2 class="section-title">Meet Our <span class="highlight">Experts</span></h2>
                <p class="section-subtitle">Dedicated strategists and veterans mapping your hidden potential to the right market opportunities. Each expert brings authoritative control over their specific domain.</p>
            </div>
            
            <div class="experts-grid">
                ${expertsData.map(expert => `
                    <div class="expert-card">
                        <div class="expert-banner"></div>
                        <img src="${expert.image}" alt="${expert.name}" class="expert-img">
                        <div class="expert-info">
                            <div class="expert-field">${expert.field}</div>
                            <h3 class="expert-name">${expert.name}</h3>
                            <div class="expert-tag"><i class="fa-solid fa-arrow-trend-up"></i> ${expert.tag}</div>
                            <p class="expert-bio">${expert.bio}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="text-center" style="margin-top: 3rem;">
                <a href="#contact" class="btn-primary">Book 1-on-1 Consultation</a>
            </div>
        </section>

        <section class="section" id="feedback">
            <div class="text-center" style="margin-bottom: 2rem;">
                <div class="hero-tag" style="background: rgba(2, 132, 199, 0.1); color: var(--primary); margin-bottom: 1rem;">Testimonials</div>
                <h2 class="section-title">Patient & Client <span class="highlight">Feedback</span></h2>
                <p class="section-subtitle">Read what our patients and clients have to say about their life-changing experiences and the premium holistic care they received.</p>
            </div>
            <div class="reviews-grid">
                <!-- Review 1 -->
                <div class="review-card">
                    <i class="fa-solid fa-quote-right review-quote"></i>
                    <div class="star-rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="review-text">"The medical and psychological counseling I received here was absolutely life-changing. From the moment I walked in as a patient, I felt deeply understood and thoroughly cared for. An exceptional experience!"</p>
                    <div class="review-author">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Patient Avatar" class="review-avatar">
                        <div>
                            <div class="review-name">Zoya Rahman</div>
                            <div class="review-role">Recovering Patient</div>
                        </div>
                    </div>
                </div>
                
                <!-- Review 2 -->
                <div class="review-card">
                    <i class="fa-solid fa-quote-right review-quote"></i>
                    <div class="star-rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="review-text">"I was struggling with immense stress regarding my career and health. The experts here provided me with a highly personalized roadmap. Their empathy and expert medical insights are simply phenomenal."</p>
                    <div class="review-author">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Patient Avatar" class="review-avatar">
                        <div>
                            <div class="review-name">Asad Mahmood</div>
                            <div class="review-role">Counseling Client</div>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="review-card">
                    <i class="fa-solid fa-quote-right review-quote"></i>
                    <div class="star-rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <p class="review-text">"A truly holistic approach to wellness. The doctors and counselors took the time to understand my medical history before offering specialized advice. Highly recommended to anyone seeking clarity!"</p>
                    <div class="review-author">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Patient Avatar" class="review-avatar">
                        <div>
                            <div class="review-name">Dr. Sara K.</div>
                            <div class="review-role">Medical Patient</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section contact-section" id="contact">
            <div class="contact-grid">
                <div>
                    <h2 class="section-title" style="text-align: left;">Let's Talk About Your <span class="highlight">Future</span></h2>
                    <p style="margin-bottom: 2rem; color: var(--gray);">Fill out the form to securely send us your details. We will formulate a blueprint and email or call you back shortly.</p>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="card-icon" style="width: 50px; height: 50px; margin:0;"><i class="fa-solid fa-envelope"></i></div>
                            <div><strong>Email Us</strong><br><span style="color: var(--gray);">mahichudhary218@gmail.com</span></div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="card-icon" style="width: 50px; height: 50px; margin:0;"><i class="fa-solid fa-phone"></i></div>
                            <div><strong>Call/WhatsApp</strong><br><span style="color: var(--gray);">03456789100</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <form id="consultation-form" onsubmit="handleContact(event)">
                        <div id="form-loader" style="display: none; text-align: center; margin-bottom: 1rem; color: var(--primary); font-weight: bold;">
                            <i class="fa-solid fa-spinner fa-spin"></i> Sending securely...
                        </div>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" class="form-control" required placeholder="Ali Ahmed">
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" class="form-control" required placeholder="ali@example.com">
                        </div>
                        <div class="form-group">
                            <label>Phone / WhatsApp</label>
                            <input type="tel" name="phone" class="form-control" required placeholder="03XXXXXXXXX">
                        </div>
                        <div class="form-group">
                            <label>Career Interest</label>
                            <select name="interest" class="form-control" required>
                                <option value="" disabled selected>Select an option...</option>
                                <option value="army">Join Pak Army</option>
                                <option value="mbbs">MBBS / Medical</option>
                                <option value="engineering">Engineering</option>
                                <option value="it">IT / Computer Science</option>
                                <option value="business">Business</option>
                                <option value="government">Government Jobs</option>
                                <option value="undecided">Undecided / Help me choose</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 1rem;">Submit to Mentors <i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </section>
    `;
    },

    paths: () => `
        <section class="section categories-bg" style="padding-top: 4rem; padding-bottom: 4rem;">
            <div class="text-center">
                <h1 class="section-title">All Career Paths</h1>
                <p class="section-subtitle">Select a discipline to view exact entry requirements, crucial tests, detailed timelines, and authentic salary potentials.</p>
            </div>
             <div class="grid-cards">
                ${Object.entries(careersData).map(([key, data]) => `
                    <a href="#career/${key}" class="card">
                        <div class="card-icon"><i class="fa-solid ${data.icon}"></i></div>
                        <h3 class="card-title">${data.title}</h3>
                        <p class="card-desc">${data.summary}</p>
                        <span class="card-link">View Roadmap <i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                `).join('')}
            </div>
        </section>
    `,

    careerDetail: (careerKey) => {
        const data = careersData[careerKey];
        if(!data) return `<div class="section text-center"><h2>Career not found.</h2><a href="#paths" class="btn-primary mt-4">Go Back</a></div>`;
        return `
            <div class="career-header">
                <i class="fa-solid ${data.icon}" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                <h1>${data.title}</h1>
                <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">${data.summary}</p>
            </div>
            
            <section class="section" style="padding-top: 0;">
                <div class="career-content">
                    <div>
                        <div class="career-main-card">
                            <h2>Detailed Roadmap Plan</h2>
                            <div class="timeline">
                                ${data.timeline.map(item => `
                                    <div class="timeline-item">
                                        <strong>${item}</strong>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="career-main-card">
                            <h2>Key Educational Requirements</h2>
                            <p style="margin-bottom: 1.5rem; line-height: 1.8;"><strong><i class="fa-solid fa-graduation-cap highlight" style="width: 25px;"></i> Criteria:</strong> <br> ${data.qualifications}</p>
                            <p style="line-height: 1.8;"><strong><i class="fa-solid fa-file-pen highlight" style="width: 25px;"></i> Crucial Testing:</strong> <br> ${data.tests}</p>
                        </div>
                    </div>
                    
                    <div>
                        <div class="career-main-card" style="margin-bottom: 2rem;">
                            <h2>Financial Scope</h2>
                            <div class="stat-box">
                                <i class="fa-solid fa-money-bill-wave stat-icon"></i>
                                <div><strong>Expected Base Starts</strong></div>
                                <div style="color: var(--gray); font-size: 0.95rem; margin-top: 0.5rem;">${data.salary}</div>
                            </div>
                        </div>

                        <div class="career-main-card">
                            <h2>Pros & Cons Analysis</h2>
                            <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fa-solid fa-plus"></i> Pros</h3>
                            <ul style="margin-left: 1.5rem; margin-bottom: 2rem; color: var(--gray);">
                                ${data.pros.map(pro => `<li style="margin-bottom: 0.3rem;">${pro}</li>`).join('')}
                            </ul>
                            
                            <h3 style="color: #EF4444; margin-bottom: 0.5rem;"><i class="fa-solid fa-minus"></i> Cons / Trade-offs</h3>
                            <ul style="margin-left: 1.5rem; color: var(--gray);">
                                ${data.cons.map(con => `<li style="margin-bottom: 0.3rem;">${con}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <a href="#contact" class="btn-primary" style="width: 100%; justify-content: center; padding: 1rem;">Consult our Expert for this Field</a>
                    </div>
                </div>
            </section>
        `;
    },

    quiz: () => `
        <section class="section">
            <div class="quiz-container" id="quiz-ui">
                <!-- Quiz dynamically rendered here -->
            </div>
        </section>
    `
};

// --- Quiz Logic ---
let currentQuestionIndex = 0;
let quizAnswers = {};

const questions = [
    {
        id: "stream",
        question: "What was your major in FSc / Intermediate?",
        options: [
            { label: "Pre-Medical", value: "med" },
            { label: "Pre-Engineering / ICS", value: "eng" },
            { label: "Arts / Commerce", value: "arts" }
        ]
    },
    {
        id: "marks",
        question: "What is your approximate percentage score?",
        options: [
            { label: "Above 80%", value: "high" },
            { label: "60% - 80%", value: "mid" },
            { label: "Below 60%", value: "low" }
        ]
    },
    {
        id: "interest",
        question: "Which of the following activities do you prefer?",
        options: [
            { label: " Physical conditioning, leadership exercises, discipline", value: "army" },
            { label: " Abstract problem solving, math logic, coding", value: "tech" },
            { label: " Strategic planning, human resource dynamics, corporate flow", value: "management" }
        ]
    }
];

function initQuiz() {
    currentQuestionIndex = 0;
    quizAnswers = {};
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-ui');
    if (!container) return;

    if (currentQuestionIndex >= questions.length) {
        showQuizResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    container.innerHTML = `
        <div class="quiz-header">
            <h3>Smart Career Picker</h3>
            <p>Question ${currentQuestionIndex + 1} of ${questions.length}</p>
        </div>
        <div class="quiz-body">
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map(opt => `
                    <button class="quiz-option" onclick="handleQuizAnswer('${q.id}', '${opt.value}')">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="quiz-footer">
            <button class="btn-outline" onclick="initQuiz()" style="padding: 0.5rem 1rem;">Restart Analytics</button>
        </div>
    `;
}

function handleQuizAnswer(questionId, answerValue) {
    quizAnswers[questionId] = answerValue;
    currentQuestionIndex++;
    renderQuizQuestion();
}

function showQuizResult() {
    let recommendation = "business"; // default
    
    const { stream, marks, interest } = quizAnswers;

    if (interest === 'army' && marks !== 'low') recommendation = "army";
    else if (stream === 'med' && marks === 'high') recommendation = "mbbs";
    else if (stream === 'eng' && interest === 'tech') recommendation = "it";
    else if (stream === 'eng') recommendation = "engineering";
    else if (interest === 'management') recommendation = "business";
    else if (stream === 'arts') recommendation = "government";

    const recData = careersData[recommendation];

    const container = document.getElementById('quiz-ui');
    container.innerHTML = `
        <div class="quiz-header">
            <h3>Your Algorithmic Recommendation</h3>
        </div>
        <div class="quiz-body text-center">
            <div class="card-icon" style="margin: 0 auto 1.5rem auto; width: 80px; height: 80px; font-size: 2.5rem;"><i class="fa-solid ${recData.icon}"></i></div>
            <h2 style="margin-bottom: 1rem;">${recData.title}</h2>
            <p style="color: var(--gray); margin-bottom: 2rem;">Based on your inputs regarding academics and psychometrics, this pathway aligns statistically to your strengths.</p>
            <a href="#career/${recommendation}" class="btn-primary" style="margin-bottom: 1rem;">View Deep Roadmap</a>
            <br>
            <a href="#contact" class="btn-outline">Discuss with Expert</a>
        </div>
        <div class="quiz-footer">
            <button class="btn-outline" onclick="initQuiz()" style="padding: 0.5rem 1rem;">Retake Evaluation</button>
        </div>
    `;
}

// --- Router ---

function parseRoute() {
    let hash = window.location.hash.toLowerCase() || '#home';
    const parts = hash.split('/');
    return {
        hash: hash,
        path: parts[0], 
        params: parts[1] 
    };
}

function router() {
    const container = document.getElementById('app-container');
    const { hash, path, params } = parseRoute();

    updateSEO(path, params);

    switch (path) {
        case '#home':
        case '#contact':
        case '#about':
            container.innerHTML = views.home();
            window.scrollTo(0, 0); 
            setTimeout(() => {
                if (hash === '#contact') {
                    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                } else if (hash === '#about') {
                    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
                }
            }, 50);
            break;
        case '#paths':
            container.innerHTML = views.paths();
            window.scrollTo(0, 0);
            break;
        case '#career':
            container.innerHTML = views.careerDetail(params);
            window.scrollTo(0, 0);
            break;
        case '#quiz':
            container.innerHTML = views.quiz();
            initQuiz();
            window.scrollTo(0, 0);
            break;
        default:
            container.innerHTML = views.home();
            window.location.hash = '#home';
    }
}

function updateSEO(path, params) {
    const titleTag = document.querySelector('title');
    const metaDesc = document.querySelector('meta[name="description"]');
    
    let title = "Career Guidance Pakistan | Connect With Mentors";
    let desc = "Detailed career counseling and blueprints for Pakistani students across all major domains.";

    if(path === '#paths') {
        title = "Explore Expert Roadmaps | Career Guidance Pakistan";
    } else if (path === '#quiz') {
        title = "Smart Career Analytics | Find Your True Potential";
    } else if (path === '#career' && careersData[params]) {
        title = careersData[params].title + " Blueprint | Career Guidance Pakistan";
        desc = careersData[params].summary;
    }

    titleTag.innerText = title;
    metaDesc.setAttribute('content', desc);
}

// --- API Logic for Emails ---

async function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const loader = document.getElementById('form-loader');
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Switch UI to loading state
    loader.style.display = 'block';
    
    try {
        // Directing to FormSubmit service (creates a trigger to designated email without exposing keys)
        const response = await fetch("https://formsubmit.co/ajax/mahichudhary218@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Name: data.name,
                Email: data.email,
                Phone: data.phone,
                Interest_Area: data.interest,
                _subject: "New Career Consultation Request!"
            })
        });

        if(response.ok) {
            alert("Success! Your consultation request has been securely dispatched to our experts. Please check your inbox or wait for a WhatsApp message.");
            form.reset();
        } else {
            throw new Error("API Network issue");
        }
    } catch (error) {
        alert("Oops! There was a problem reaching the email servers. Please try again or WhatsApp us directly using the floating button.");
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
}

// --- Event Listeners and Utilities ---

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    navLinks.addEventListener('click', (e) => {
        if(e.target.classList.contains('nav-link')) {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-xmark');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        }
    });

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('hashchange', router);
    router();
});
