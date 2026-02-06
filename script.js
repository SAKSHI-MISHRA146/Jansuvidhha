// ============================================
// JANSUVIDHA GOVERNMENT SCHEMES PORTAL
// COMPLETE JAVASCRIPT CODE
// ============================================

// ============================================
// 1. COMPREHENSIVE SCHEMES DATABASE
// ============================================

const schemesDatabase = {
    // Student Scholarship Schemes (Continued)
    student: [
        // Previous student schemes (1001-1007)...
        {
            id: 1008,
            name: "UP Scholarship Scheme",
            description: "Scholarship for students of Uttar Pradesh belonging to SC/ST/OBC/Minority categories pursuing education from Class 1 to PG.",
            category: "scholarship",
            icon: "book",
            iconClass: "scholarship",
            eligibility: [
                "Domicile of Uttar Pradesh",
                "Belongs to SC/ST/OBC/Minority category",
                "Annual family income below ₹2,00,000",
                "Studying in recognized institution"
            ],
            documents: [
                "Domicile certificate",
                "Caste certificate",
                "Income certificate",
                "Admission proof",
                "Previous marksheet",
                "Bank account details",
                "Aadhaar card"
            ],
            deadline: "2024-10-31",
            startDate: "2024-04-01",
            benefits: "Pre-matric: ₹1,000-₹5,000, Post-matric: Full fees + maintenance",
            benefitsList: [
                "Fee reimbursement",
                "Maintenance allowance",
                "Book grant",
                "Hostel charges",
                "Study tour expenses"
            ],
            applyProcess: [
                "Register on UP Scholarship Portal",
                "Fill application form",
                "Upload required documents",
                "Get institute verification",
                "Track application status"
            ],
            officialPortal: "https://scholarship.up.gov.in",
            applicationForm: "https://scholarship.up.gov.in",
            helpline: "0522-2286183",
            location: ["up"],
            profile: ["student"],
            incomeLimit: 200000,
            minMarks: 45,
            saved: false,
            applied: false,
            popularity: 76,
            type: "state",
            tags: ["up", "scst", "obc"]
        },
        {
            id: 1009,
            name: "Kerala Merit Scholarship",
            description: "Merit scholarship for students of Kerala securing high marks in Class 10 and 12 examinations.",
            category: "scholarship",
            icon: "medal",
            iconClass: "scholarship",
            eligibility: [
                "Domicile of Kerala",
                "Secured 90% or above in Class 10/12",
                "Annual family income below ₹4,00,000",
                "Admitted to higher secondary/degree course"
            ],
            documents: [
                "Domicile certificate",
                "Income certificate",
                "Class 10/12 marksheet",
                "Admission proof",
                "Bank account details",
                "Aadhaar card"
            ],
            deadline: "2024-09-30",
            startDate: "2024-06-01",
            benefits: "One-time award of ₹25,000 for Class 10 toppers, ₹50,000 for Class 12 toppers",
            benefitsList: [
                "One-time financial award",
                "Recognition certificate",
                "Encouragement for merit",
                "Direct bank transfer"
            ],
            applyProcess: [
                "Apply through Kerala Scholarship Portal",
                "Submit marksheet and income proof",
                "School/College verification",
                "Receive award in ceremony"
            ],
            officialPortal: "https://scholarships.kerala.gov.in",
            applicationForm: "https://scholarships.kerala.gov.in",
            helpline: "0471-2300740",
            location: ["kerala"],
            profile: ["student"],
            incomeLimit: 400000,
            minMarks: 90,
            saved: false,
            applied: false,
            popularity: 74,
            type: "state",
            tags: ["kerala", "merit", "topper"]
        }
    ],

    // Senior Citizen Schemes (Continued)
    senior: [
        // Previous senior schemes (2001-2006)...
        {
            id: 2007,
            name: "Ayushman Bharat for Senior Citizens",
            description: "Health insurance coverage for senior citizens providing cashless treatment up to ₹5 lakhs per year.",
            category: "health",
            icon: "heartbeat",
            iconClass: "health",
            eligibility: [
                "Age 60 years or above",
                "Belongs to eligible family as per SECC",
                "No age limit for hospitalization",
                "Valid Aadhaar card"
            ],
            documents: [
                "Aadhaar card",
                "Age proof",
                "Family details",
                "Income certificate (if required)",
                "Ration card"
            ],
            deadline: "Ongoing",
            startDate: "Immediate after registration",
            benefits: "Cashless treatment up to ₹5 lakhs per family per year",
            benefitsList: [
                "Coverage for 1,574 medical procedures",
                "Pre-existing diseases covered",
                "No cap on family size",
                "Cashless treatment at empaneled hospitals",
                "Transportation allowance"
            ],
            applyProcess: [
                "Check eligibility on PMJAY website",
                "Visit empaneled hospital",
                "Get verified through Aadhaar",
                "Receive treatment",
                "Zero payment at hospital"
            ],
            officialPortal: "https://pmjay.gov.in",
            applicationForm: "https://pmjay.gov.in",
            helpline: "14555",
            location: ["all"],
            profile: ["senior"],
            incomeLimit: 0,
            minAge: 60,
            saved: false,
            applied: false,
            popularity: 96,
            type: "central",
            tags: ["health", "insurance", "cashless"]
        },
        {
            id: 2008,
            name: "Atal Vayo Abhyuday Yojana (AVYAY)",
            description: "Comprehensive welfare scheme for senior citizens including old age homes, health care, and capacity building.",
            category: "pension",
            icon: "home",
            iconClass: "pension",
            eligibility: [
                "Age 60 years or above",
                "No regular means of subsistence",
                "Not having sufficient income for maintenance",
                "May include destitute senior citizens"
            ],
            documents: [
                "Age proof",
                "Income certificate",
                "Aadhaar card",
                "Medical fitness certificate",
                "Passport size photographs"
            ],
            deadline: "Ongoing",
            startDate: "After admission",
            benefits: "Shelter, food, medical care, and recreational activities",
            benefitsList: [
                "Residential facilities",
                "Medical care and checkups",
                "Nutritional food",
                "Recreational activities",
                "Counseling services"
            ],
            applyProcess: [
                "Apply at district social welfare office",
                "Submit required documents",
                "Medical examination",
                "Admission to old age home"
            ],
            officialPortal: "https://socialjustice.gov.in",
            applicationForm: "Available at district office",
            helpline: "011-23381087",
            location: ["all"],
            profile: ["senior"],
            incomeLimit: 0,
            minAge: 60,
            saved: false,
            applied: false,
            popularity: 83,
            type: "central",
            tags: ["welfare", "oldagehome", "care"]
        }
    ],

    // Farmer Schemes
    farmer: [
        {
            id: 3001,
            name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
            description: "Direct income support scheme providing ₹6,000 per year to all eligible landholding farmer families.",
            category: "agriculture",
            icon: "rupee-sign",
            iconClass: "agriculture",
            eligibility: [
                "Ownership of cultivable land",
                "Landholding in own name",
                "Not belonging to excluded categories",
                "Aadhaar seeded bank account"
            ],
            documents: [
                "Land ownership records (Khatauni/Khasra)",
                "Aadhaar card",
                "Bank account details",
                "Mobile number linked with Aadhaar",
                "Recent photograph"
            ],
            deadline: "Ongoing",
            startDate: "Installment based (Dec-Mar-Jul)",
            benefits: "₹6,000 per year in 3 equal installments of ₹2,000 each",
            benefitsList: [
                "Direct Benefit Transfer to bank account",
                "No middlemen involved",
                "Quarterly installments",
                "Supports input costs",
                "Covers all seasons"
            ],
            applyProcess: [
                "Register at Common Service Centre",
                "Submit land records and Aadhaar",
                "Verification by revenue department",
                "Installment credited to bank account"
            ],
            officialPortal: "https://pmkisan.gov.in",
            applicationForm: "https://pmkisan.gov.in",
            helpline: "155261",
            location: ["all"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: true,
            saved: false,
            applied: false,
            popularity: 98,
            type: "central",
            tags: ["income", "direct", "support"]
        },
        {
            id: 3002,
            name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            description: "Crop insurance scheme protecting farmers against yield loss due to natural calamities, pests & diseases.",
            category: "agriculture",
            icon: "umbrella",
            iconClass: "agriculture",
            eligibility: [
                "All farmers growing notified crops",
                "Compulsory for loanee farmers",
                "Voluntary for non-loanee farmers",
                "Cultivation in notified area"
            ],
            documents: [
                "Aadhaar card",
                "Land records",
                "Bank account details",
                "Crop details (area, variety)",
                "Loan details (if applicable)"
            ],
            deadline: "Season based (Kharif: Jul, Rabi: Dec)",
            startDate: "Crop season start",
            benefits: "Comprehensive risk coverage with low premium rates (2% Kharif, 1.5% Rabi)",
            benefitsList: [
                "Coverage from sowing to harvest",
                "Post-harvest losses coverage",
                "Localized calamities coverage",
                "Yield loss assessment through CCEs",
                "Quick claim settlement"
            ],
            applyProcess: [
                "Contact bank/insurance company",
                "Submit application with crop details",
                "Pay premium (subsidized rates)",
                "Receive insurance certificate",
                "File claim in case of loss"
            ],
            officialPortal: "https://pmfby.gov.in",
            applicationForm: "Available at banks/insurance companies",
            helpline: "1800-180-1551",
            location: ["all"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: true,
            saved: false,
            applied: false,
            popularity: 95,
            type: "central",
            tags: ["insurance", "crop", "protection"]
        },
        {
            id: 3003,
            name: "Kisan Credit Card (KCC) Scheme",
            description: "Credit card facility for farmers providing short-term credit for crop production and other needs.",
            category: "agriculture",
            icon: "credit-card",
            iconClass: "agriculture",
            eligibility: [
                "Individual farmers/Joint borrowers",
                "Owner cultivators/Tenant farmers",
                "Oral lessees/share croppers",
                "Self Help Groups of farmers"
            ],
            documents: [
                "Land records",
                "Aadhaar card",
                "Bank account details",
                "Passport size photographs",
                "Identity proof",
                "Address proof"
            ],
            deadline: "Ongoing",
            startDate: "After sanction",
            benefits: "Credit limit based on landholding, subsidized interest rate of 4%",
            benefitsList: [
                "Flexible repayment options",
                "Crop loan and term loan",
                "Consumption credit",
                "Insurance coverage",
                "ATM-cum-debit card facility"
            ],
            applyProcess: [
                "Apply at nearest bank branch",
                "Submit required documents",
                "Field verification by bank",
                "Sanction of credit limit",
                "Receive KCC card"
            ],
            officialPortal: "https://www.rbi.org.in",
            applicationForm: "Available at banks",
            helpline: "1800-425-3800",
            location: ["all"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: true,
            saved: false,
            applied: false,
            popularity: 92,
            type: "central",
            tags: ["credit", "loan", "finance"]
        },
        {
            id: 3004,
            name: "Soil Health Card Scheme",
            description: "Provides soil health cards to farmers with nutrient status of soil and recommendations for fertilizers.",
            category: "agriculture",
            icon: "flask",
            iconClass: "agriculture",
            eligibility: [
                "All farmers with agricultural land",
                "No income criteria",
                "Willing to provide soil samples",
                "Registered with agriculture department"
            ],
            documents: [
                "Land records",
                "Aadhaar card",
                "Mobile number",
                "Farmer registration details"
            ],
            deadline: "Ongoing",
            startDate: "After soil testing",
            benefits: "Free soil testing and customized fertilizer recommendations",
            benefitsList: [
                "Soil health card every 3 years",
                "12 parameters tested",
                "Fertilizer recommendation",
                "Crop-wise advice",
                "Online access to reports"
            ],
            applyProcess: [
                "Register at agriculture department",
                "Provide soil sample",
                "Testing in soil testing lab",
                "Receive soil health card",
                "Implement recommendations"
            ],
            officialPortal: "https://soilhealth.dac.gov.in",
            applicationForm: "Available at Krishi Vigyan Kendras",
            helpline: "1800-180-1551",
            location: ["all"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: true,
            saved: false,
            applied: false,
            popularity: 88,
            type: "central",
            tags: ["soil", "testing", "fertilizer"]
        },
        {
            id: 3005,
            name: "Rythu Bandhu Scheme (Telangana)",
            description: "Investment support scheme providing ₹5,000 per acre per crop season to farmers in Telangana.",
            category: "agriculture",
            icon: "hand-holding-usd",
            iconClass: "agriculture",
            eligibility: [
                "Landowner farmer in Telangana",
                "Minimum 1 acre land",
                "Land registered in revenue records",
                "Valid Aadhaar linked bank account"
            ],
            documents: [
                "Pattadar passbook",
                "Aadhaar card",
                "Bank account details",
                "Land ownership proof",
                "Ration card"
            ],
            deadline: "Season based (Kharif: Jun, Rabi: Oct)",
            startDate: "At beginning of each season",
            benefits: "₹10,000 per year (₹5,000 per season) directly to bank account",
            benefitsList: [
                "Direct cash assistance",
                "No middlemen",
                "Covers input costs",
                "Timely assistance",
                "Transparent process"
            ],
            applyProcess: [
                "Registration through village revenue officer",
                "Land verification",
                "Bank account verification",
                "Amount credited before season"
            ],
            officialPortal: "https://rythubandhu.telangana.gov.in",
            applicationForm: "Available at Tahsildar office",
            helpline: "040-23385777",
            location: ["telangana"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: true,
            saved: false,
            applied: false,
            popularity: 96,
            type: "state",
            tags: ["telangana", "investment", "support"]
        },
        {
            id: 3006,
            name: "KALIA Scheme (Odisha)",
            description: "Krushak Assistance for Livelihood and Income Augmentation providing comprehensive support to farmers.",
            category: "agriculture",
            icon: "hands-helping",
            iconClass: "agriculture",
            eligibility: [
                "Small and marginal farmers",
                "Landless agricultural households",
                "Vulnerable agricultural households",
                "Sharecroppers/tenant farmers"
            ],
            documents: [
                "Aadhaar card",
                "Land records (if applicable)",
                "Bank account details",
                "Ration card",
                "Caste certificate (if applicable)"
            ],
            deadline: "Ongoing",
            startDate: "After approval",
            benefits: "Financial assistance of ₹25,000 over 5 seasons + other benefits",
            benefitsList: [
                "₹5,000 per crop season",
                "Livelihood support for landless",
                "Life insurance cover",
                "Interest-free crop loans",
                "Support for allied activities"
            ],
            applyProcess: [
                "Apply at Gram Panchayat",
                "Submit required documents",
                "Verification by block officials",
                "Approval and benefit transfer"
            ],
            officialPortal: "https://kalia.odisha.gov.in",
            applicationForm: "https://kalia.odisha.gov.in",
            helpline: "1800-345-6770",
            location: ["odisha"],
            profile: ["farmer"],
            incomeLimit: 0,
            landRequired: false,
            saved: false,
            applied: false,
            popularity: 93,
            type: "state",
            tags: ["odisha", "livelihood", "support"]
        }
    ],

    // Women Schemes
    women: [
        {
            id: 4001,
            name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
            description: "Maternity benefit programme providing cash incentive for pregnant women and lactating mothers.",
            category: "women",
            icon: "baby",
            iconClass: "women",
            eligibility: [
                "Pregnant women and lactating mothers",
                "First child in family",
                "Age 19 years or above",
                "Not employed in central/state government or PSUs"
            ],
            documents: [
                "Aadhaar card",
                "Husband's Aadhaar card",
                "Bank account details",
                "Pregnancy certificate from doctor",
                "Identity proof",
                "Address proof"
            ],
            deadline: "Ongoing",
            startDate: "After first antenatal checkup",
            benefits: "₹5,000 in first installment + ₹6,000 after childbirth registration",
            benefitsList: [
                "Compensation for wage loss",
                "Improved health seeking behavior",
                "Cash assistance for nutrition",
                "Promotes institutional delivery",
                "Encourages child immunization"
            ],
            applyProcess: [
                "Register at Anganwadi center/ASHA",
                "Submit required documents",
                "Receive first installment after registration",
                "Receive remaining after child birth registration"
            ],
            officialPortal: "https://pmmvy-cas.nic.in",
            applicationForm: "Available at Anganwadi centers",
            helpline: "011-23062493",
            location: ["all"],
            profile: ["women"],
            incomeLimit: 0,
            minAge: 19,
            saved: false,
            applied: false,
            popularity: 94,
            type: "central",
            tags: ["maternity", "pregnant", "mother"]
        },
        {
            id: 4002,
            name: "Mahila Samman Savings Certificate",
            description: "Small savings scheme exclusively for women offering attractive interest rates for 2 years.",
            category: "women",
            icon: "piggy-bank",
            iconClass: "women",
            eligibility: [
                "Women investors only",
                "Age 18 years or above",
                "Indian resident",
                "Can be opened for minor girl child"
            ],
            documents: [
                "Aadhaar card",
                "PAN card",
                "Address proof",
                "Passport size photographs",
                "Bank account details"
            ],
            deadline: "Ongoing",
            startDate: "Date of investment",
            benefits: "7.5% interest per annum payable quarterly, maximum investment ₹2 lakhs",
            benefitsList: [
                "Higher interest rate",
                "Tax benefits",
                "Flexible investment",
                "Quarterly interest payment",
                "Can be opened in post office/banks"
            ],
            applyProcess: [
                "Visit post office or authorized bank",
                "Fill account opening form",
                "Submit KYC documents",
                "Make initial deposit",
                "Receive certificate"
            ],
            officialPortal: "https://www.indiapost.gov.in",
            applicationForm: "Available at post office",
            helpline: "1800-266-6868",
            location: ["all"],
            profile: ["women"],
            incomeLimit: 0,
            minAge: 18,
            saved: false,
            applied: false,
            popularity: 89,
            type: "central",
            tags: ["savings", "investment", "finance"]
        },
        {
            id: 4003,
            name: "Pradhan Mantri Mudra Yojana (PMMY)",
            description: "Micro loans for women entrepreneurs to start or expand their small businesses.",
            category: "women",
            icon: "business-time",
            iconClass: "women",
            eligibility: [
                "Women entrepreneurs",
                "Non-farm income generating activities",
                "Loan requirement up to ₹10 lakhs",
                "Good credit history"
            ],
            documents: [
                "Aadhaar card",
                "PAN card",
                "Business proof/plan",
                "Identity proof",
                "Address proof",
                "Bank statements"
            ],
            deadline: "Ongoing",
            startDate: "After loan sanction",
            benefits: "Collateral-free loans up to ₹10 lakhs in 3 categories: Shishu, Kishor, Tarun",
            benefitsList: [
                "Shishu: Loans up to ₹50,000",
                "Kishor: Loans from ₹50,001 to ₹5 lakhs",
                "Tarun: Loans from ₹5,00,001 to ₹10 lakhs",
                "No collateral required",
                "Subsidized interest rates"
            ],
            applyProcess: [
                "Approach bank/NBFC/MFI",
                "Submit business plan and documents",
                "Credit appraisal by lender",
                "Loan sanction and disbursement"
            ],
            officialPortal: "https://www.mudra.org.in",
            applicationForm: "Available at banks",
            helpline: "1800-180-1111",
            location: ["all"],
            profile: ["women", "entrepreneur"],
            incomeLimit: 0,
            minAge: 18,
            saved: false,
            applied: false,
            popularity: 91,
            type: "central",
            tags: ["loan", "business", "entrepreneur"]
        },
        {
            id: 4004,
            name: "One Stop Centre Scheme (Sakhi)",
            description: "Integrated support center for women affected by violence providing medical, legal, and psychological help.",
            category: "women",
            icon: "shield-alt",
            iconClass: "women",
            eligibility: [
                "Women facing violence of any kind",
                "No age restriction",
                "All women and girls",
                "No income criteria"
            ],
            documents: [
                "Identity proof",
                "Address proof",
                "Medical reports (if any)",
                "FIR copy (if filed)",
                "Any other relevant documents"
            ],
            deadline: "Ongoing",
            startDate: "Immediate assistance",
            benefits: "Comprehensive support including shelter, counseling, legal aid, and police assistance",
            benefitsList: [
                "Emergency response",
                "Medical assistance",
                "Police assistance",
                "Legal aid",
                "Psycho-social counseling",
                "Temporary shelter"
            ],
            applyProcess: [
                "Walk-in to One Stop Centre",
                "Call women helpline 181",
                "Referred by police/hospital/NGO",
                "Receive integrated support"
            ],
            officialPortal: "https://wcd.nic.in",
            applicationForm: "Not required",
            helpline: "181",
            location: ["all"],
            profile: ["women"],
            incomeLimit: 0,
            minAge: 0,
            saved: false,
            applied: false,
            popularity: 87,
            type: "central",
            tags: ["violence", "support", "protection"]
        },
        {
            id: 4005,
            name: "Ladli Behna Yojana (Madhya Pradesh)",
            description: "Monthly financial assistance scheme for women in Madhya Pradesh to support their livelihood.",
            category: "women",
            icon: "female",
            iconClass: "women",
            eligibility: [
                "Women residents of MP",
                "Age 23-60 years",
                "Annual family income below ₹2,50,000",
                "Not paying income tax"
            ],
            documents: [
                "Aadhaar card",
                "Residence proof",
                "Income certificate",
                "Bank account details",
                "Age proof",
                "Husband's income proof (if married)"
            ],
            deadline: "Ongoing",
            startDate: "Month after approval",
            benefits: "₹1,250 per month directly to bank account",
            benefitsList: [
                "Monthly financial assistance",
                "Direct bank transfer",
                "No middlemen",
                "Supports women empowerment",
                "Financial independence"
            ],
            applyProcess: [
                "Apply at Jan Seva Kendra",
                "Submit required documents",
                "Verification by officials",
                "Approval and monthly transfer"
            ],
            officialPortal: "https://mpinfo.org",
            applicationForm: "https://mpinfo.org",
            helpline: "181",
            location: ["madhyapradesh"],
            profile: ["women"],
            incomeLimit: 250000,
            minAge: 23,
            saved: false,
            applied: false,
            popularity: 95,
            type: "state",
            tags: ["mp", "monthly", "assistance"]
        },
        {
            id: 4006,
            name: "Subhadra Yojana (Odisha)",
            description: "Direct cash assistance scheme for women in Odisha to support their financial needs.",
            category: "women",
            icon: "money-bill-wave",
            iconClass: "women",
            eligibility: [
                "Women residents of Odisha",
                "Age 21-60 years",
                "Annual family income criteria",
                "Valid bank account"
            ],
            documents: [
                "Aadhaar card",
                "Residence proof",
                "Income certificate",
                "Bank account details",
                "Age proof",
                "Ration card"
            ],
            deadline: "Ongoing",
            startDate: "After approval",
            benefits: "₹10,000 per year in two equal installments",
            benefitsList: [
                "Financial assistance",
                "Direct bank transfer",
                "Supports household expenses",
                "Women empowerment",
                "Economic independence"
            ],
            applyProcess: [
                "Apply at Gram Panchayat",
                "Submit required documents",
                "Verification by officials",
                "Approval and benefit transfer"
            ],
            officialPortal: "https://sse.odisha.gov.in",
            applicationForm: "Available at GP office",
            helpline: "1800-345-6770",
            location: ["odisha"],
            profile: ["women"],
            incomeLimit: 0,
            minAge: 21,
            saved: false,
            applied: false,
            popularity: 90,
            type: "state",
            tags: ["odisha", "cash", "assistance"]
        }
    ],

    // Entrepreneur/Business Schemes
    entrepreneur: [
        {
            id: 5001,
            name: "Startup India Seed Fund Scheme",
            description: "Financial assistance for early-stage startups for proof of concept, prototype development, and market entry.",
            category: "employment",
            icon: "seedling",
            iconClass: "employment",
            eligibility: [
                "DPIIT recognized startup",
                "Incorporated not more than 2 years ago",
                "At idea stage or early traction",
                "Business idea with innovation"
            ],
            documents: [
                "Company registration certificates",
                "DPIIT recognition certificate",
                "Business plan",
                "Financial projections",
                "Promoter details",
                "Bank account details"
            ],
            deadline: "2024-03-31",
            startDate: "Within 60 days of approval",
            benefits: "Up to ₹20 lakhs as grant for validation, up to ₹50 lakhs as convertible debt",
            benefitsList: [
                "Proof of concept funding",
                "Prototype development",
                "Product trials",
                "Market entry",
                "Commercialization support"
            ],
            applyProcess: [
                "Apply on Startup India portal",
                "Submit business plan",
                "Pitch to expert committee",
                "Due diligence",
                "Fund disbursement"
            ],
            officialPortal: "https://www.startupindia.gov.in",
            applicationForm: "https://www.startupindia.gov.in",
            helpline: "1800-208-1600",
            location: ["all"],
            profile: ["entrepreneur", "business"],
            incomeLimit: 0,
            minAge: 18,
            saved: false,
            applied: false,
            popularity: 86,
            type: "central",
            tags: ["startup", "funding", "innovation"]
        },
        {
            id: 5002,
            name: "Stand-Up India Scheme",
            description: "Bank loans for SC/ST and women entrepreneurs to set up greenfield enterprises in manufacturing, services or trading.",
            category: "employment",
            icon: "user-tie",
            iconClass: "employment",
            eligibility: [
                "SC/ST and/or women entrepreneur",
                "Age 18 years or above",
                "Greenfield project",
                "Loan requirement between ₹10 lakhs to ₹1 crore"
            ],
            documents: [
                "Caste certificate (if applicable)",
                "Business plan",
                "Project report",
                "Identity proof",
                "Address proof",
                "Qualifications/experience proof"
            ],
            deadline: "Ongoing",
            startDate: "After loan sanction",
            benefits: "Bank loan from ₹10 lakhs to ₹1 crore for enterprise setup",
            benefitsList: [
                "Composite loan (term loan + working capital)",
                "Margin money requirement only 10%",
                "Interest rate as per RBI guidelines",
                "Debit card for withdrawal",
                "RuPay card for business expenses"
            ],
            applyProcess: [
                "Approach bank branch",
                "Submit application with business plan",
                "Bank appraisal",
                "Loan sanction and disbursement"
            ],
            officialPortal: "https://www.standupmitra.in",
            applicationForm: "Available at banks",
            helpline: "1800-180-1111",
            location: ["all"],
            profile: ["entrepreneur", "women", "business"],
            incomeLimit: 0,
            minAge: 18,
            saved: false,
            applied: false,
            popularity: 84,
            type: "central",
            tags: ["scst", "women", "loan"]
        }
    ]
};

// ============================================
// 2. APPLICATION STATE & CONFIGURATION
// ============================================

// Current application state
const appState = {
    currentProfile: "student",
    currentFilters: {
        profile: "all",
        location: "all",
        categories: ["scholarship", "pension", "agriculture", "women", "health", "housing", "employment"],
        incomeRange: 800000,
        status: "all",
        searchTerm: "",
        sortBy: "relevance"
    },
    savedSchemes: [],
    appliedSchemes: [],
    notifications: [],
    isListView: false,
    currentPage: 1,
    schemesPerPage: 6,
    userData: {
        name: "Indian Citizen",
        type: "Student",
        familyIncome: 500000,
        category: "General",
        age: 20,
        location: "Maharashtra"
    }
};

// DOM Elements
const elements = {
    schemesContainer: document.getElementById('schemesContainer'),
    profileFilter: document.getElementById('profileFilter'),
    locationFilter: document.getElementById('locationFilter'),
    incomeRange: document.getElementById('incomeRange'),
    incomeValue: document.getElementById('incomeValue'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearch'),
    gridViewBtn: document.getElementById('gridView'),
    listViewBtn: document.getElementById('listView'),
    applyFiltersBtn: document.getElementById('applyFilters'),
    resetFiltersBtn: document.getElementById('resetFilters'),
    sortBy: document.getElementById('sortBy'),
    schemeModal: document.getElementById('schemeModal'),
    compareModal: document.getElementById('compareModal'),
    profileModal: document.getElementById('profileModal'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    notificationArea: document.getElementById('notificationArea'),
    pagination: document.getElementById('pagination'),
    
    // Stats elements
    studentSchemes: document.getElementById('studentSchemes'),
    seniorSchemes: document.getElementById('seniorSchemes'),
    farmerSchemes: document.getElementById('farmerSchemes'),
    womenSchemes: document.getElementById('womenSchemes'),
    totalSchemes: document.getElementById('totalSchemes'),
    savedCount: document.getElementById('savedCount'),
    alertCount: document.getElementById('alertCount'),
    
    // Text elements
    welcomeText: document.getElementById('welcomeText'),
    locationText: document.getElementById('locationText'),
    activeProfile: document.getElementById('activeProfile'),
    activeLocation: document.getElementById('activeLocation'),
    activeIncome: document.getElementById('activeIncome'),
    
    // Profile buttons
    profileButtons: document.querySelectorAll('.profile-btn'),
    changeProfileBtn: document.getElementById('changeProfileBtn'),
    
    // Category checkboxes
    categoryCheckboxes: document.querySelectorAll('.category-checkbox input'),
    
    // Status radio buttons
    statusRadios: document.querySelectorAll('input[name="status"]'),
    
    // Quick action buttons
    documentChecklist: document.getElementById('documentChecklist'),
    deadlineTracker: document.getElementById('deadlineTracker'),
    eligibilityCalculator: document.getElementById('eligibilityCalculator'),
    applyInBulk: document.getElementById('applyInBulk'),
    compareSchemes: document.getElementById('compareSchemes'),
    helpDesk: document.getElementById('helpDesk'),
    
    // Footer buttons
    footerHome: document.getElementById('footerHome'),
    footerContact: document.getElementById('footerContact'),
    footerPrivacy: document.getElementById('footerPrivacy'),
    footerTerms: document.getElementById('footerTerms'),
    feedbackBtn: document.getElementById('feedbackBtn'),
    
    // Navigation buttons
    navDashboard: document.getElementById('navDashboard'),
    navSaved: document.getElementById('navSaved'),
    navAlerts: document.getElementById('navAlerts'),
    navApplications: document.getElementById('navApplications'),
    
    // User profile
    userProfile: document.getElementById('userProfile'),
    userName: document.getElementById('userName'),
    userType: document.getElementById('userType')
};

// ============================================
// 3. UTILITY FUNCTIONS
// ============================================

// Show loading animation
function showLoading() {
    elements.loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    elements.loadingOverlay.style.display = 'none';
}

// Show notification
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    
    elements.notificationArea.appendChild(notification);
    
    // Add close functionality
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    if (dateString === 'Ongoing') return 'Ongoing';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Check if deadline is approaching (within 30 days)
function isDeadlineApproaching(deadline) {
    if (deadline === 'Ongoing') return false;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays >= 0;
}

// Get all schemes for current profile
function getAllSchemes() {
    let allSchemes = [];
    
    if (appState.currentFilters.profile === 'all') {
        // Combine all schemes
        Object.values(schemesDatabase).forEach(category => {
            allSchemes = [...allSchemes, ...category];
        });
    } else {
        // Get schemes for specific profile
        allSchemes = schemesDatabase[appState.currentFilters.profile] || [];
    }
    
    return allSchemes;
}

// Filter schemes based on current filters
function filterSchemes(schemes) {
    return schemes.filter(scheme => {
        // Location filter
        if (appState.currentFilters.location !== 'all') {
            if (!scheme.location.includes('all') && !scheme.location.includes(appState.currentFilters.location)) {
                return false;
            }
        }
        
        // Category filter
        if (appState.currentFilters.categories.length > 0) {
            if (!appState.currentFilters.categories.includes(scheme.category)) {
                return false;
            }
        }
        
        // Income filter
        if (scheme.incomeLimit > 0 && scheme.incomeLimit < appState.currentFilters.incomeRange) {
            return false;
        }
        
        // Search filter
        if (appState.currentFilters.searchTerm) {
            const searchTerm = appState.currentFilters.searchTerm.toLowerCase();
            const searchableText = `
                ${scheme.name} 
                ${scheme.description} 
                ${scheme.category} 
                ${scheme.tags ? scheme.tags.join(' ') : ''}
            `.toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Status filter
        if (appState.currentFilters.status !== 'all') {
            if (appState.currentFilters.status === 'open' && scheme.deadline === 'Ongoing') {
                return false;
            }
            if (appState.currentFilters.status === 'upcoming' && !isDeadlineApproaching(scheme.deadline)) {
                return false;
            }
        }
        
        return true;
    });
}

// Sort schemes
function sortSchemes(schemes) {
    const sortBy = appState.currentFilters.sortBy;
    
    return [...schemes].sort((a, b) => {
        switch (sortBy) {
            case 'deadline':
                if (a.deadline === 'Ongoing' && b.deadline === 'Ongoing') return 0;
                if (a.deadline === 'Ongoing') return 1;
                if (b.deadline === 'Ongoing') return -1;
                return new Date(a.deadline) - new Date(b.deadline);
                
            case 'benefits':
                // Extract numeric value from benefits string
                const getBenefitValue = (benefits) => {
                    const match = benefits.match(/₹([\d,]+)/);
                    return match ? parseInt(match[1].replace(/,/g, '')) : 0;
                };
                return getBenefitValue(b.benefits) - getBenefitValue(a.benefits);
                
            case 'popularity':
                return b.popularity - a.popularity;
                
            case 'newest':
                return new Date(b.startDate) - new Date(a.startDate);
                
            case 'relevance':
            default:
                // Default sorting: saved first, then deadline approaching, then popularity
                const aSaved = appState.savedSchemes.includes(a.id);
                const bSaved = appState.savedSchemes.includes(b.id);
                if (aSaved && !bSaved) return -1;
                if (!aSaved && bSaved) return 1;
                
                const aDeadlineApproaching = isDeadlineApproaching(a.deadline);
                const bDeadlineApproaching = isDeadlineApproaching(b.deadline);
                if (aDeadlineApproaching && !bDeadlineApproaching) return -1;
                if (!aDeadlineApproaching && bDeadlineApproaching) return 1;
                
                return b.popularity - a.popularity;
        }
    });
}

// Update statistics
function updateStatistics() {
    const allSchemes = getAllSchemes();
    const filteredSchemes = filterSchemes(allSchemes);
    
    // Update total count
    elements.totalSchemes.textContent = filteredSchemes.length;
    
    // Update category counts
    const studentCount = allSchemes.filter(s => s.profile.includes('student')).length;
    const seniorCount = allSchemes.filter(s => s.profile.includes('senior')).length;
    const farmerCount = allSchemes.filter(s => s.profile.includes('farmer')).length;
    const womenCount = allSchemes.filter(s => s.profile.includes('women')).length;
    
    elements.studentSchemes.textContent = studentCount;
    elements.seniorSchemes.textContent = seniorCount;
    elements.farmerSchemes.textContent = farmerCount;
    elements.womenSchemes.textContent = womenCount;
    
    // Update saved count
    elements.savedCount.textContent = appState.savedSchemes.length;
}

// Update welcome message and filters display
function updateUIElements() {
    // Update welcome text
    elements.welcomeText.textContent = `Welcome to JanSuvidha, ${appState.userData.name}!`;
    
    // Update location text
    const locationText = appState.currentFilters.location === 'all' 
        ? 'across India' 
        : appState.currentFilters.location.charAt(0).toUpperCase() + appState.currentFilters.location.slice(1);
    elements.locationText.textContent = `Discover government schemes tailored for you in ${locationText}`;
    
    // Update active filters display
    elements.activeProfile.textContent = appState.currentFilters.profile === 'all' 
        ? 'All Citizens' 
        : appState.currentFilters.profile.charAt(0).toUpperCase() + appState.currentFilters.profile.slice(1);
    
    elements.activeLocation.textContent = appState.currentFilters.location === 'all' 
        ? 'All India' 
        : appState.currentFilters.location.charAt(0).toUpperCase() + appState.currentFilters.location.slice(1);
    
    elements.activeIncome.textContent = `Up to ${formatCurrency(appState.currentFilters.incomeRange)}`;
    
    // Update income slider value
    elements.incomeValue.textContent = formatCurrency(appState.currentFilters.incomeRange);
}

// ============================================
// 4. SCHEME CARD RENDERING
// ============================================

// Create scheme card HTML
function createSchemeCard(scheme) {
    const isSaved = appState.savedSchemes.includes(scheme.id);
    const isApplied = appState.appliedSchemes.includes(scheme.id);
    const deadlineApproaching = isDeadlineApproaching(scheme.deadline);
    
    return `
        <div class="scheme-card" data-id="${scheme.id}">
            <div class="scheme-header">
                <div class="scheme-icon ${scheme.iconClass}">
                    <i class="fas fa-${scheme.icon}"></i>
                </div>
                <div class="scheme-title">
                    <h3>${scheme.name}</h3>
                    <div class="scheme-category">${scheme.category.toUpperCase()}</div>
                    <p class="scheme-description">${scheme.description.substring(0, 120)}...</p>
                    <div class="scheme-status">
                        ${isSaved ? '<span class="saved-badge"><i class="fas fa-bookmark"></i> Saved</span>' : ''}
                        ${isApplied ? '<span class="applied-badge"><i class="fas fa-check-circle"></i> Applied</span>' : ''}
                        ${deadlineApproaching ? '<span class="deadline-badge"><i class="fas fa-clock"></i> Deadline Approaching</span>' : ''}
                    </div>
                </div>
            </div>
            
            <div class="scheme-highlight">
                <div class="highlight-item">
                    <span class="highlight-label">Benefits:</span>
                    <span class="highlight-value">${scheme.benefits}</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-label">Deadline:</span>
                    <span class="highlight-value ${deadlineApproaching ? 'deadline-warning' : ''}">${formatDate(scheme.deadline)}</span>
                </div>
            </div>
            
            <div class="scheme-details">
                <div class="detail-item">
                    <i class="fas fa-user-check"></i>
                    <div class="detail-content">
                        <h4>Eligibility</h4>
                        <p>${scheme.eligibility[0].substring(0, 80)}...</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-file-lines"></i>
                    <div class="detail-content">
                        <h4>Documents</h4>
                        <p>${scheme.documents.slice(0, 3).join(', ')}...</p>
                    </div>
                </div>
            </div>
            
            <div class="scheme-footer">
                <div class="deadline">
                    <i class="fas fa-clock"></i>
                    <span>${deadlineApproaching ? 'Apply Soon!' : 'Deadline: ' + formatDate(scheme.deadline)}</span>
                </div>
                <div class="scheme-actions">
                    <button class="action-btn-small view-btn-small" onclick="viewSchemeDetails(${scheme.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="action-btn-small save-btn-small ${isSaved ? 'saved' : ''}" onclick="toggleSaveScheme(${scheme.id})">
                        <i class="fas fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save'}
                    </button>
                    <button class="action-btn-small apply-btn-small ${isApplied ? 'applied' : ''}" onclick="applyForScheme(${scheme.id})">
                        <i class="fas fa-paper-plane"></i> ${isApplied ? 'Applied' : 'Apply'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render scheme cards
function renderSchemeCards() {
    showLoading();
    
    setTimeout(() => {
        const allSchemes = getAllSchemes();
        const filteredSchemes = filterSchemes(allSchemes);
        const sortedSchemes = sortSchemes(filteredSchemes);
        
        // Calculate pagination
        const totalPages = Math.ceil(sortedSchemes.length / appState.schemesPerPage);
        const startIndex = (appState.currentPage - 1) * appState.schemesPerPage;
        const endIndex = startIndex + appState.schemesPerPage;
        const schemesToDisplay = sortedSchemes.slice(startIndex, endIndex);
        
        // Clear container
        elements.schemesContainer.innerHTML = '';
        
        // Render scheme cards
        schemesToDisplay.forEach(scheme => {
            const cardHTML = createSchemeCard(scheme);
            elements.schemesContainer.innerHTML += cardHTML;
        });
        
        // Render pagination
        renderPagination(totalPages);
        
        // Update statistics
        updateStatistics();
        
        // Update UI elements
        updateUIElements();
        
        hideLoading();
    }, 500);
}

// Render pagination
function renderPagination(totalPages) {
    if (totalPages <= 1) {
        elements.pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button class="pagination-btn ${appState.currentPage === 1 ? 'disabled' : ''}" 
                onclick="changePage(${appState.currentPage - 1})" 
                ${appState.currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, appState.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === appState.currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Next button
    paginationHTML += `
        <button class="pagination-btn ${appState.currentPage === totalPages ? 'disabled' : ''}" 
                onclick="changePage(${appState.currentPage + 1})" 
                ${appState.currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    elements.pagination.innerHTML = paginationHTML;
}

// Change page
function changePage(pageNumber) {
    if (pageNumber < 1 || pageNumber > Math.ceil(getAllSchemes().length / appState.schemesPerPage)) {
        return;
    }
    
    appState.currentPage = pageNumber;
    renderSchemeCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// 5. SCHEME DETAILS MODAL
// ============================================

// View scheme details
function viewSchemeDetails(schemeId) {
    const allSchemes = getAllSchemes();
    const scheme = allSchemes.find(s => s.id === schemeId);
    
    if (!scheme) {
        showNotification('Scheme not found!', 'error');
        return;
    }
    
    // Update modal content
    document.getElementById('modalSchemeName').textContent = scheme.name;
    document.getElementById('modalDescription').textContent = scheme.description;
    document.getElementById('modalBenefitAmount').textContent = scheme.benefits;
    document.getElementById('modalDeadline').textContent = formatDate(scheme.deadline);
    document.getElementById('modalEligibleFor').textContent = scheme.profile.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ');
    
    // Update icon
    const modalIcon = document.getElementById('modalIcon');
    modalIcon.className = `scheme-icon-modal ${scheme.iconClass}`;
    modalIcon.innerHTML = `<i class="fas fa-${scheme.icon}"></i>`;
    
    // Update tags
    const modalTags = document.getElementById('modalTags');
    modalTags.innerHTML = scheme.tags ? scheme.tags.map(tag => 
        `<span class="scheme-tag">${tag}</span>`
    ).join('') : '';
    
    // Update eligibility list
    const eligibilityList = document.getElementById('modalEligibilityList');
    eligibilityList.innerHTML = scheme.eligibility.map(item => 
        `<li>${item}</li>`
    ).join('');
    
    // Update documents list
    const documentsList = document.getElementById('modalDocumentsList');
    documentsList.innerHTML = scheme.documents.map(doc => 
        `<li>${doc}</li>`
    ).join('');
    
    // Update benefits list
    const benefitsList = document.getElementById('modalBenefitsList');
    benefitsList.innerHTML = scheme.benefitsList.map(benefit => 
        `<div class="benefit-item"><i class="fas fa-check"></i> ${benefit}</div>`
    ).join('');
    
    // Update apply steps
    const applySteps = document.getElementById('modalApplySteps');
    applySteps.innerHTML = scheme.applyProcess.map((step, index) => 
        `<div class="apply-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">${step}</div>
         </div>`
    ).join('');
    
    // Update links
    document.getElementById('officialPortalLink').href = scheme.officialPortal;
    document.getElementById('applicationFormLink').href = scheme.applicationForm || scheme.officialPortal;
    document.getElementById('helplineLink').href = `tel:${scheme.helpline}`;
    
    // Update modal buttons
    const isSaved = appState.savedSchemes.includes(schemeId);
    const isApplied = appState.appliedSchemes.includes(schemeId);
    
    const saveBtn = document.getElementById('saveModal');
    saveBtn.innerHTML = `<i class="fas fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save Scheme'}`;
    saveBtn.className = `modal-btn ${isSaved ? 'saved' : 'secondary'}`;
    saveBtn.onclick = () => toggleSaveScheme(schemeId);
    
    const applyBtn = document.getElementById('applyNowModal');
    applyBtn.innerHTML = `<i class="fas fa-rocket"></i> ${isApplied ? 'Already Applied' : 'Apply Now'}`;
    applyBtn.disabled = isApplied;
    applyBtn.onclick = () => applyForScheme(schemeId);
    
    // Show modal
    elements.schemeModal.style.display = 'block';
}

// Tab switching in modal
function setupModalTabs() {
    const tabs = document.querySelectorAll('.modal-tab');
    const tabContents = document.querySelectorAll('.modal-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.dataset.tab + 'Tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Print scheme details
function printSchemeDetails() {
    const schemeName = document.getElementById('modalSchemeName').textContent;
    const printContent = `
        <html>
        <head>
            <title>${schemeName} - Scheme Details</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #1a5fb4; }
                .section { margin-bottom: 20px; }
                ul { padding-left: 20px; }
                .benefit-item { margin-bottom: 5px; }
            </style>
        </head>
        <body>
            <h1>${schemeName}</h1>
            <div class="section">
                <h3>Description</h3>
                <p>${document.getElementById('modalDescription').textContent}</p>
            </div>
            <div class="section">
                <h3>Benefits</h3>
                <p>${document.getElementById('modalBenefitAmount').textContent}</p>
            </div>
            <div class="section">
                <h3>Eligibility Criteria</h3>
                <ul>${document.getElementById('modalEligibilityList').innerHTML}</ul>
            </div>
            <div class="section">
                <h3>Required Documents</h3>
                <ul>${document.getElementById('modalDocumentsList').innerHTML}</ul>
            </div>
            <div class="section">
                <h3>Application Process</h3>
                ${document.getElementById('modalApplySteps').innerHTML}
            </div>
            <p><em>Printed from JanSuvidha Portal on ${new Date().toLocaleDateString()}</em></p>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    
    showNotification('Print dialog opened', 'info');
}

// Share scheme
function shareScheme() {
    const schemeName = document.getElementById('modalSchemeName').textContent;
    const schemeUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: schemeName,
            text: `Check out this government scheme on JanSuvidha: ${schemeName}`,
            url: schemeUrl
        }).then(() => {
            showNotification('Scheme shared successfully!', 'success');
        }).catch(() => {
            showNotification('Sharing cancelled', 'info');
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(`${schemeName} - ${schemeUrl}`).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

// ============================================
// 6. SCHEME INTERACTIONS
// ============================================

// Toggle save scheme
function toggleSaveScheme(schemeId) {
    const index = appState.savedSchemes.indexOf(schemeId);
    const allSchemes = getAllSchemes();
    const scheme = allSchemes.find(s => s.id === schemeId);
    
    if (index === -1) {
        // Save scheme
        appState.savedSchemes.push(schemeId);
        showNotification(`${scheme.name} saved to your list!`, 'success');
    } else {
        // Remove from saved
        appState.savedSchemes.splice(index, 1);
        showNotification(`${scheme.name} removed from saved list`, 'info');
    }
    
    // Update UI
    renderSchemeCards();
    updateStatistics();
    saveToLocalStorage();
}

// Apply for scheme
function applyForScheme(schemeId) {
    if (appState.appliedSchemes.includes(schemeId)) {
        showNotification('You have already applied for this scheme!', 'info');
        return;
    }
    
    const allSchemes = getAllSchemes();
    const scheme = allSchemes.find(s => s.id === schemeId);
    
    // Check eligibility (simplified check)
    if (scheme.incomeLimit > 0 && appState.userData.familyIncome > scheme.incomeLimit) {
        showNotification(`You may not be eligible for this scheme. Income limit: ${formatCurrency(scheme.incomeLimit)}`, 'warning');
        return;
    }
    
    if (scheme.minAge && appState.userData.age < scheme.minAge) {
        showNotification(`Minimum age requirement: ${scheme.minAge} years`, 'warning');
        return;
    }
    
    if (scheme.minMarks && scheme.minMarks > 0) {
        showNotification(`Minimum marks requirement: ${scheme.minMarks}%`, 'info');
    }
    
    // Simulate application process
    showLoading();
    setTimeout(() => {
        appState.appliedSchemes.push(schemeId);
        showNotification(`Application started for ${scheme.name}! Redirecting to official portal...`, 'success');
        
        // Simulate redirect (in real implementation, would redirect to official portal)
        setTimeout(() => {
            window.open(scheme.officialPortal, '_blank');
            hideLoading();
            renderSchemeCards();
            saveToLocalStorage();
        }, 1500);
    }, 1000);
}

// Apply for all filtered schemes
function applyForAllFiltered() {
    const allSchemes = getAllSchemes();
    const filteredSchemes = filterSchemes(allSchemes);
    
    if (filteredSchemes.length === 0) {
        showNotification('No schemes found to apply!', 'warning');
        return;
    }
    
    const eligibleSchemes = filteredSchemes.filter(scheme => {
        // Basic eligibility check
        if (scheme.incomeLimit > 0 && appState.userData.familyIncome > scheme.incomeLimit) return false;
        if (scheme.minAge && appState.userData.age < scheme.minAge) return false;
        if (appState.appliedSchemes.includes(scheme.id)) return false;
        return true;
    });
    
    if (eligibleSchemes.length === 0) {
        showNotification('You are not eligible for any filtered schemes!', 'warning');
        return;
    }
    
    if (confirm(`Apply for ${eligibleSchemes.length} schemes? This will open multiple tabs.`)) {
        showLoading();
        setTimeout(() => {
            eligibleSchemes.forEach((scheme, index) => {
                setTimeout(() => {
                    appState.appliedSchemes.push(scheme.id);
                    window.open(scheme.officialPortal, '_blank');
                    
                    if (index === eligibleSchemes.length - 1) {
                        hideLoading();
                        showNotification(`Applied for ${eligibleSchemes.length} schemes successfully!`, 'success');
                        renderSchemeCards();
                        saveToLocalStorage();
                    }
                }, index * 1000); // Stagger openings
            });
        }, 1000);
    }
}

// ============================================
// 7. QUICK ACTIONS
// ============================================

// Show document checklist
function showDocumentChecklist() {
    const allSchemes = getAllSchemes();
    const requiredDocs = new Set();
    
    allSchemes.forEach(scheme => {
        scheme.documents.forEach(doc => requiredDocs.add(doc));
    });
    
    const docsList = Array.from(requiredDocs).map(doc => `• ${doc}`).join('\n');
    
    const modalContent = `
        <div class="modal-header">
            <h2><i class="fas fa-file-contract"></i> Common Document Checklist</h2>
            <span class="close-modal" onclick="closeModal('documentModal')">&times;</span>
        </div>
        <div class="modal-body">
            <h3>Essential Documents for Most Schemes</h3>
            <div class="documents-list">
                ${Array.from(requiredDocs).map(doc => `
                    <div class="document-item">
                        <i class="fas fa-file"></i>
                        <span>${doc}</span>
                    </div>
                `).join('')}
            </div>
            <div class="document-tips">
                <h4><i class="fas fa-lightbulb"></i> Preparation Tips</h4>
                <ul>
                    <li>Keep all documents in PDF format</li>
                    <li>Ensure Aadhaar is linked with bank account</li>
                    <li>Income certificates should be recent (within 6 months)</li>
                    <li>Keep both original and scanned copies</li>
                </ul>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-btn" onclick="printDocumentChecklist()">
                <i class="fas fa-print"></i> Print Checklist
            </button>
        </div>
    `;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('documentModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'documentModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;
    modal.style.display = 'block';
}

// Show deadline tracker
function showDeadlineTracker() {
    const allSchemes = getAllSchemes();
    const upcomingDeadlines = allSchemes
        .filter(scheme => scheme.deadline !== 'Ongoing')
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 10);
    
    const modalContent = `
        <div class="modal-header">
            <h2><i class="fas fa-calendar-check"></i> Deadline Tracker</h2>
            <span class="close-modal" onclick="closeModal('deadlineModal')">&times;</span>
        </div>
        <div class="modal-body">
            <h3>Upcoming Application Deadlines</h3>
            <div class="deadline-list">
                ${upcomingDeadlines.map(scheme => `
                    <div class="deadline-item ${isDeadlineApproaching(scheme.deadline) ? 'urgent' : ''}">
                        <div class="deadline-scheme">
                            <h4>${scheme.name}</h4>
                            <p>${scheme.category.toUpperCase()} • ${scheme.profile[0].toUpperCase()}</p>
                        </div>
                        <div class="deadline-date">
                            <i class="fas fa-calendar"></i>
                            <span>${formatDate(scheme.deadline)}</span>
                        </div>
                        <button class="small-btn" onclick="viewSchemeDetails(${scheme.id}); closeModal('deadlineModal')">
                            Apply Now
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Create modal
    let modal = document.getElementById('deadlineModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'deadlineModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;
    modal.style.display = 'block';
}

// Eligibility calculator
function showEligibilityCalculator() {
    const modalContent = `
        <div class="modal-header">
            <h2><i class="fas fa-calculator"></i> Eligibility Calculator</h2>
            <span class="close-modal" onclick="closeModal('eligibilityModal')">&times;</span>
        </div>
        <div class="modal-body">
            <h3>Check Your Eligibility</h3>
            <div class="calculator-form">
                <div class="form-group">
                    <label><i class="fas fa-rupee-sign"></i> Annual Family Income</label>
                    <input type="number" id="calcIncome" placeholder="Enter annual income" value="${appState.userData.familyIncome}">
                </div>
                <div class="form-group">
                    <label><i class="fas fa-user-tag"></i> Category</label>
                    <select id="calcCategory">
                        <option value="general" ${appState.userData.category === 'General' ? 'selected' : ''}>General</option>
                        <option value="obc" ${appState.userData.category === 'OBC' ? 'selected' : ''}>OBC</option>
                        <option value="sc" ${appState.userData.category === 'SC' ? 'selected' : ''}>SC</option>
                        <option value="st" ${appState.userData.category === 'ST' ? 'selected' : ''}>ST</option>
                        <option value="minority" ${appState.userData.category === 'Minority' ? 'selected' : ''}>Minority</option>
                    </select>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-birthday-cake"></i> Age</label>
                    <input type="number" id="calcAge" placeholder="Enter age" value="${appState.userData.age}">
                </div>
                <div class="form-group">
                    <label><i class="fas fa-map-marker-alt"></i> Location</label>
                    <select id="calcLocation">
                        <option value="all">All India</option>
                        <option value="maharashtra" ${appState.userData.location === 'Maharashtra' ? 'selected' : ''}>Maharashtra</option>
                        <option value="delhi">Delhi</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamilnadu">Tamil Nadu</option>
                    </select>
                </div>
                <button class="modal-btn" onclick="calculateEligibility()">
                    <i class="fas fa-calculator"></i> Calculate Eligibility
                </button>
            </div>
            <div class="calculator-results" id="eligibilityResults"></div>
        </div>
    `;
    
    // Create modal
    let modal = document.getElementById('eligibilityModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'eligibilityModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;
    modal.style.display = 'block';
}

// Calculate eligibility
function calculateEligibility() {
    const income = parseInt(document.getElementById('calcIncome').value) || 0;
    const category = document.getElementById('calcCategory').value;
    const age = parseInt(document.getElementById('calcAge').value) || 0;
    const location = document.getElementById('calcLocation').value;
    
    // Update user data
    appState.userData.familyIncome = income;
    appState.userData.category = category.charAt(0).toUpperCase() + category.slice(1);
    appState.userData.age = age;
    appState.userData.location = location.charAt(0).toUpperCase() + location.slice(1);
    
    // Find eligible schemes
    const allSchemes = getAllSchemes();
    const eligibleSchemes = allSchemes.filter(scheme => {
        // Income check
        if (scheme.incomeLimit > 0 && income > scheme.incomeLimit) return false;
        
        // Age check
        if (scheme.minAge && age < scheme.minAge) return false;
        
        // Category check (for SC/ST/OBC schemes)
        if (scheme.tags && scheme.tags.includes('scst') && !['sc', 'st'].includes(category)) return false;
        if (scheme.tags && scheme.tags.includes('obc') && category !== 'obc') return false;
        
        // Location check
        if (location !== 'all' && !scheme.location.includes('all') && !scheme.location.includes(location)) return false;
        
        return true;
    });
    
    // Display results
    const resultsDiv = document.getElementById('eligibilityResults');
    resultsDiv.innerHTML = `
        <h4><i class="fas fa-chart-bar"></i> Eligibility Results</h4>
        <div class="results-summary">
            <div class="result-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <span>Eligible Schemes</span>
                    <strong>${eligibleSchemes.length}</strong>
                </div>
            </div>
            <div class="result-item">
                <i class="fas fa-percentage"></i>
                <div>
                    <span>Eligibility Rate</span>
                    <strong>${Math.round((eligibleSchemes.length / allSchemes.length) * 100)}%</strong>
                </div>
            </div>
        </div>
        <div class="eligible-schemes">
            <h5>Top Eligible Schemes:</h5>
            <ul>
                ${eligibleSchemes.slice(0, 5).map(scheme => `
                    <li onclick="viewSchemeDetails(${scheme.id}); closeModal('eligibilityModal')">
                        <i class="fas fa-arrow-right"></i> ${scheme.name}
                    </li>
                `).join('')}
            </ul>
            ${eligibleSchemes.length > 5 ? 
                `<p>...and ${eligibleSchemes.length - 5} more schemes</p>` : ''}
        </div>
    `;
    
    showNotification('Eligibility calculation completed!', 'success');
    saveToLocalStorage();
}

// Compare schemes
function showCompareSchemes() {
    const savedSchemes = appState.savedSchemes;
    const allSchemes = getAllSchemes();
    const schemesToCompare = allSchemes.filter(scheme => savedSchemes.includes(scheme.id)).slice(0, 3);
    
    if (schemesToCompare.length < 2) {
        showNotification('Save at least 2 schemes to compare!', 'warning');
        return;
    }
    
    const modalContent = `
        <div class="modal-header">
            <h2><i class="fas fa-balance-scale"></i> Compare Schemes</h2>
            <span class="close-modal" onclick="closeModal('compareModal')">&times;</span>
        </div>
        <div class="modal-body">
            <div class="compare-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            ${schemesToCompare.map(scheme => `
                                <th>${scheme.name}</th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Category</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${scheme.category.toUpperCase()}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Benefits</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${scheme.benefits}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Deadline</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${formatDate(scheme.deadline)}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Income Limit</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${scheme.incomeLimit > 0 ? formatCurrency(scheme.incomeLimit) : 'None'}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Documents Required</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${scheme.documents.length}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Popularity</td>
                            ${schemesToCompare.map(scheme => `
                                <td>${scheme.popularity}/100</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Action</td>
                            ${schemesToCompare.map(scheme => `
                                <td>
                                    <button class="small-btn" onclick="viewSchemeDetails(${scheme.id}); closeModal('compareModal')">
                                        View Details
                                    </button>
                                </td>
                            `).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    elements.compareModal.innerHTML = `<div class="modal-content compare-modal">${modalContent}</div>`;
    elements.compareModal.style.display = 'block';
}

// Help desk
function showHelpDesk() {
    const modalContent = `
        <div class="modal-header">
            <h2><i class="fas fa-headset"></i> Help Desk & Support</h2>
            <span class="close-modal" onclick="closeModal('helpModal')">&times;</span>
        </div>
        <div class="modal-body">
            <div class="help-section">
                <h3><i class="fas fa-phone"></i> Contact Support</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <span>National Helpline</span>
                            <strong>1800-11-0001</strong>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <span>Email Support</span>
                            <strong>support@jansuvidha.gov.in</strong>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-comments"></i>
                        <div>
                            <span>Live Chat</span>
                            <strong>Available 9 AM - 6 PM</strong>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="help-section">
                <h3><i class="fas fa-question-circle"></i> Frequently Asked Questions</h3>
                <div class="faq-list">
                    <div class="faq-item">
                        <h4>How to apply for schemes?</h4>
                        <p>Click on "Apply Now" button on any scheme card. You'll be redirected to the official portal for application.</p>
                    </div>
                    <div class="faq-item">
                        <h4>What documents do I need?</h4>
                        <p>Common documents include Aadhaar, Income Certificate, Bank Details, and relevant category certificates.</p>
                    </div>
                    <div class="faq-item">
                        <h4>How to check application status?</h4>
                        <p>Visit the official scheme portal with your application ID to track status.</p>
                    </div>
                </div>
            </div>
            
            <div class="help-section">
                <h3><i class="fas fa-download"></i> Download Resources</h3>
                <div class="resource-links">
                    <a href="#" class="resource-link">
                        <i class="fas fa-file-pdf"></i> User Manual
                    </a>
                    <a href="#" class="resource-link">
                        <i class="fas fa-video"></i> Tutorial Videos
                    </a>
                    <a href="#" class="resource-link">
                        <i class="fas fa-file-excel"></i> Application Templates
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Create modal
    let modal = document.getElementById('helpModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'helpModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;
    modal.style.display = 'block';
}

// ============================================
// 8. FILTER FUNCTIONS
// ============================================

// Apply filters
function applyFilters() {
    // Update filters from UI
    appState.currentFilters.location = elements.locationFilter.value;
    appState.currentFilters.incomeRange = parseInt(elements.incomeRange.value);
    
    // Update categories
    appState.currentFilters.categories = Array.from(elements.categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Update status
    const selectedStatus = document.querySelector('input[name="status"]:checked');
    if (selectedStatus) {
        appState.currentFilters.status = selectedStatus.value;
    }
    
    // Reset to page 1
    appState.currentPage = 1;
    
    // Render schemes
    renderSchemeCards();
    showNotification('Filters applied successfully!', 'success');
}

// Reset filters
function resetFilters() {
    // Reset UI elements
    elements.locationFilter.value = 'all';
    elements.incomeRange.value = 800000;
    elements.incomeValue.textContent = formatCurrency(800000);
    elements.searchInput.value = '';
    elements.sortBy.value = 'relevance';
    
    // Reset category checkboxes
    elements.categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = ['scholarship', 'pension', 'agriculture', 'women', 'health', 'housing', 'employment']
            .includes(checkbox.value);
    });
    
    // Reset status radio
    document.querySelector('input[name="status"][value="all"]').checked = true;
    
    // Reset profile buttons
    elements.profileButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.profile-btn[data-profile="all"]').classList.add('active');
    
    // Reset app state
    appState.currentFilters = {
        profile: 'all',
        location: 'all',
        categories: ['scholarship', 'pension', 'agriculture', 'women', 'health', 'housing', 'employment'],
        incomeRange: 800000,
        status: 'all',
        searchTerm: '',
        sortBy: 'relevance'
    };
    
    appState.currentPage = 1;
    
    // Render schemes
    renderSchemeCards();
    showNotification('All filters reset to default!', 'info');
}

// Change profile
function changeProfile(profile) {
    // Update profile buttons
    elements.profileButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.profile-btn[data-profile="${profile}"]`).classList.add('active');
    
    // Update app state
    appState.currentFilters.profile = profile;
    appState.currentPage = 1;
    
    // Update user type
    if (profile !== 'all') {
        appState.userData.type = profile.charAt(0).toUpperCase() + profile.slice(1);
        elements.userType.textContent = appState.userData.type;
    }
    
    // Render schemes
    renderSchemeCards();
    showNotification(`Showing schemes for ${profile} profile`, 'info');
}

// Search schemes
function searchSchemes() {
    appState.currentFilters.searchTerm = elements.searchInput.value.trim();
    appState.currentPage = 1;
    renderSchemeCards();
}

// Clear search
function clearSearch() {
    elements.searchInput.value = '';
    appState.currentFilters.searchTerm = '';
    appState.currentPage = 1;
    renderSchemeCards();
}

// Sort schemes
function sortSchemesBy() {
    appState.currentFilters.sortBy = elements.sortBy.value;
    appState.currentPage = 1;
    renderSchemeCards();
}

// ============================================
// 9. LOCAL STORAGE FUNCTIONS
// ============================================

// Save to local storage
function saveToLocalStorage() {
    const data = {
        savedSchemes: appState.savedSchemes,
        appliedSchemes: appState.appliedSchemes,
        userData: appState.userData,
        currentProfile: appState.currentFilters.profile,
        lastUpdated: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('jansuvidhaData', JSON.stringify(data));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Load from local storage
function loadFromLocalStorage() {
    try {
        const data = JSON.parse(localStorage.getItem('jansuvidhaData'));
        
        if (data) {
            appState.savedSchemes = data.savedSchemes || [];
            appState.appliedSchemes = data.appliedSchemes || [];
            appState.userData = data.userData || appState.userData;
            appState.currentFilters.profile = data.currentProfile || 'student';
            
            // Update UI
            elements.userType.textContent = appState.userData.type;
            
            // Update saved count
            elements.savedCount.textContent = appState.savedSchemes.length;
            
            showNotification('Your data has been loaded', 'info');
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

// ============================================
// 10. PROFILE MANAGEMENT
// ============================================

// Show profile modal
function showProfileModal() {
    elements.profileModal.style.display = 'block';
}

// Change user profile
function changeUserProfile(profile) {
    // Update profile options
    document.querySelectorAll('.profile-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`.profile-option[data-profile="${profile}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        document.getElementById('currentProfileText').textContent = 
            profile.charAt(0).toUpperCase() + profile.slice(1);
        
        // Update user data
        appState.userData.type = profile.charAt(0).toUpperCase() + profile.slice(1);
        elements.userType.textContent = appState.userData.type;
        
        // Also change filter profile
        changeProfile(profile);
    }
}

// ============================================
// 11. INITIALIZATION
// ============================================

// Initialize application
function initApp() {
    // Load from local storage
    loadFromLocalStorage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up modal tabs
    setupModalTabs();
    
    // Initial render
    renderSchemeCards();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to JanSuvidha! Explore government schemes tailored for you.', 'info');
    }, 1000);
}

// Set up event listeners
function setupEventListeners() {
    // Search input
    elements.searchInput.addEventListener('input', debounce(searchSchemes, 300));
    elements.clearSearchBtn.addEventListener('click', clearSearch);
    
    // Filter buttons
    elements.applyFiltersBtn.addEventListener('click', applyFilters);
    elements.resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Profile buttons
    elements.profileButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            changeProfile(btn.dataset.profile);
        });
    });
    
    // Income slider
    elements.incomeRange.addEventListener('input', () => {
        elements.incomeValue.textContent = formatCurrency(elements.incomeRange.value);
    });
    
    // Sort by
    elements.sortBy.addEventListener('change', sortSchemesBy);
    
    // View toggle
    elements.gridViewBtn.addEventListener('click', () => {
        appState.isListView = false;
        elements.gridViewBtn.classList.add('active');
        elements.listViewBtn.classList.remove('active');
        elements.schemesContainer.classList.remove('list-view');
        renderSchemeCards();
    });
    
    elements.listViewBtn.addEventListener('click', () => {
        appState.isListView = true;
        elements.listViewBtn.classList.add('active');
        elements.gridViewBtn.classList.remove('active');
        elements.schemesContainer.classList.add('list-view');
        renderSchemeCards();
    });
    
    // Quick actions
    elements.documentChecklist.addEventListener('click', showDocumentChecklist);
    elements.deadlineTracker.addEventListener('click', showDeadlineTracker);
    elements.eligibilityCalculator.addEventListener('click', showEligibilityCalculator);
    elements.applyInBulk.addEventListener('click', applyForAllFiltered);
    elements.compareSchemes.addEventListener('click', showCompareSchemes);
    elements.helpDesk.addEventListener('click', showHelpDesk);
    
    // Profile modal
    elements.changeProfileBtn.addEventListener('click', showProfileModal);
    elements.userProfile.addEventListener('click', showProfileModal);
    
    // Profile options
    document.querySelectorAll('.profile-option').forEach(option => {
        option.addEventListener('click', () => {
            changeUserProfile(option.dataset.profile);
        });
    });
    
    // Confirm profile button
    document.getElementById('confirmProfile')?.addEventListener('click', () => {
        closeModal('profileModal');
        showNotification('Profile updated successfully!', 'success');
    });
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Print button in modal
    document.getElementById('printModal')?.addEventListener('click', printSchemeDetails);
    
    // Share button in modal
    document.getElementById('shareModal')?.addEventListener('click', shareScheme);
    
    // Navigation
    elements.navDashboard.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Dashboard refreshed', 'info');
        renderSchemeCards();
    });
    
    elements.navSaved.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Showing saved schemes', 'info');
        // In a real app, would filter to show only saved schemes
    });
    
    elements.navApplications.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification(`You have applied for ${appState.appliedSchemes.length} schemes`, 'info');
    });
    
    // Footer buttons
    elements.footerHome.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    elements.feedbackBtn.addEventListener('click', () => {
        showNotification('Thank you for your feedback!', 'success');
    });
    
    // Auto-save before unload
    window.addEventListener('beforeunload', saveToLocalStorage);
}

// ============================================
// 12. EXPORT FUNCTIONS TO GLOBAL SCOPE
// ============================================

// Export functions to global scope for onclick attributes
window.viewSchemeDetails = viewSchemeDetails;
window.toggleSaveScheme = toggleSaveScheme;
window.applyForScheme = applyForScheme;
window.applyForAllFiltered = applyForAllFiltered;
window.changePage = changePage;
window.closeModal = closeModal;
window.changeProfile = changeProfile;
window.changeUserProfile = changeUserProfile;
window.printSchemeDetails = printSchemeDetails;
window.shareScheme = shareScheme;
window.calculateEligibility = calculateEligibility;

// ============================================
// 13. START APPLICATION
// ============================================

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);