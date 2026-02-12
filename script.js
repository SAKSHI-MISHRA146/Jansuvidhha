/* ============================================
   JANSUVIDHA – COMPLETE JAVASCRIPT
   All Modules: Schemes Database, State Management,
   Filters, Sorting, Pagination, Directory,
   Eligibility Calculator, Comparison,
   Deadline Tracker, Documents, Profile (Pincode),
   Notifications, Modals, LocalStorage Persistence
   ============================================ */
// ============================================
// THEME SWITCHER (LIGHT / DARK)
// ============================================


// ============================================
// 1. COMPLETE SCHEMES DATABASE – 70+ SCHEMES
//    (Student, Senior, Farmer, Women, Entrepreneur)
// ============================================
const schemesDatabase = {
    // ----- STUDENT SCHEMES -----
    student: [
        // Existing central scholarships
        { id:1001, name:"National Means-cum-Merit Scholarship (NMMS)", description:"Scholarship for Class 9-12 students from low-income families.", category:"scholarship", icon:"graduation-cap", iconClass:"scholarship", eligibility:["Class 9-12","Income ≤ ₹1.5L","≥55% marks"], documents:["Income certificate","Caste certificate","Marksheet","Aadhaar","Bank passbook"], deadline:"2024-11-30", benefits:"₹12,000 per year", benefitsList:["Financial assistance","DBT","Encourages retention"], applyProcess:["Register on NSP","Upload documents","School verification"], officialPortal:"https://scholarships.gov.in", helpline:"0120-6619540", location:["all"], profile:["student"], incomeLimit:150000, minMarks:55, minAge:14, maxAge:18, popularity:95, tags:["merit","school"] },
        { id:1002, name:"Post-Matric Scholarship (SC/ST/OBC)", description:"Financial aid for SC/ST/OBC students after Class 10.", category:"scholarship", icon:"book-open", iconClass:"scholarship", eligibility:["SC/ST/OBC","Income ≤ ₹2.5L","Post-matric course"], documents:["Caste cert","Income cert","Admission proof","Fee receipt","Aadhaar"], deadline:"2024-10-31", benefits:"Full tuition + maintenance up to ₹1,200/month", benefitsList:["Fee reimbursement","Maintenance","Book grant"], applyProcess:["Apply on NSP","Institute verification"], officialPortal:"https://scholarships.gov.in", helpline:"1800-11-0001", location:["all"], profile:["student"], incomeLimit:250000, minAge:16, maxAge:25, popularity:92, tags:["scst","obc","postmatric"] },
        { id:1003, name:"Central Sector Scheme of Scholarships (CSSS)", description:"Merit-based scholarship for top UG/PG students.", category:"scholarship", icon:"university", iconClass:"scholarship", eligibility:["≥80% marks in Class 12","Income ≤ ₹8L","UG/PG regular course"], documents:["Income cert","Marksheets","Admission letter","Aadhaar"], deadline:"2024-12-15", benefits:"₹12,000/year (UG), ₹20,000/year (PG)", benefitsList:["Merit encouragement","Direct transfer"], applyProcess:["Apply on NSP","Income verification"], officialPortal:"https://scholarships.gov.in", helpline:"0120-6619540", location:["all"], profile:["student"], incomeLimit:800000, minMarks:80, minAge:17, maxAge:30, popularity:88, tags:["merit","ug","pg"] },
        { id:1004, name:"AICTE Pragati Scholarship (Girls)", description:"Scholarship for girl students in technical education.", category:"scholarship", icon:"female", iconClass:"scholarship", eligibility:["Girl student","B.Tech/Diploma","Income ≤ ₹8L","Not more than 2 girl children"], documents:["Income cert","Admission letter","Fee receipt","Girl child affidavit"], deadline:"2024-10-31", benefits:"₹50,000/year", benefitsList:["Tuition fee","Incidental charges"], applyProcess:["Apply on AICTE portal","Institute verification"], officialPortal:"https://www.aicte-india.org", helpline:"011-29581000", location:["all"], profile:["student","women"], incomeLimit:800000, minAge:17, maxAge:25, popularity:85, tags:["girls","technical"] },
        { id:1005, name:"Chief Minister Higher Education Scholarship (Maharashtra)", description:"State merit scholarship for Maharashtra students.", category:"scholarship", icon:"award", iconClass:"scholarship", eligibility:["Domicile of Maharashtra","Income ≤ ₹8L","≥75% in Class 12"], documents:["Domicile","Income cert","Marksheet","Admission proof"], deadline:"2024-11-30", benefits:"₹5,000-10,000 per year", benefitsList:["Financial assistance","State support"], applyProcess:["Apply on MahaDBT"], officialPortal:"https://mahadbt.maharashtra.gov.in", helpline:"1800-120-8040", location:["maharashtra"], profile:["student"], incomeLimit:800000, minMarks:75, minAge:17, maxAge:25, popularity:82, tags:["maharashtra","state"] },
        // NEW age/class wise scholarships
        { id:1010, name:"Pre-Matric Scholarship (SC/ST) – Class 1-5", description:"Financial assistance for SC/ST students in primary classes.", category:"scholarship", icon:"child", iconClass:"scholarship", eligibility:["SC/ST","Class 1-5","Income ≤ ₹2L"], documents:["Caste cert","Income cert","Aadhaar","School bonafide"], deadline:"2024-09-30", benefits:"₹500-1,500 per year", benefitsList:["Fee reimbursement","Encourage enrollment"], applyProcess:["Apply through school/NSP"], officialPortal:"https://scholarships.gov.in", helpline:"1800-11-0001", location:["all"], profile:["student"], incomeLimit:200000, minAge:6, maxAge:10, popularity:75, tags:["prematric","scst","primary"] },
        { id:1011, name:"Pre-Matric Scholarship (OBC) – Class 6-8", description:"Scholarship for OBC students in upper primary.", category:"scholarship", icon:"book", iconClass:"scholarship", eligibility:["OBC","Class 6-8","Income ≤ ₹2L"], documents:["Caste cert","Income cert","Aadhaar"], deadline:"2024-09-30", benefits:"₹1,000-2,000 per year", benefitsList:["Financial support","Reduce dropout"], applyProcess:["Apply on NSP"], officialPortal:"https://scholarships.gov.in", helpline:"1800-11-0001", location:["all"], profile:["student"], incomeLimit:200000, minAge:11, maxAge:14, popularity:76, tags:["prematric","obc"] },
        { id:1012, name:"National Scholarship for Persons with Disabilities", description:"Scholarship for students with disabilities (Class 1 to PG).", category:"scholarship", icon:"wheelchair", iconClass:"scholarship", eligibility:["Disability ≥40%","Class 1 to PG","Income ≤ ₹2.5L"], documents:["Disability cert","Income cert","Aadhaar","Admission proof"], deadline:"2024-10-31", benefits:"₹10,000-30,000 per year", benefitsList:["Inclusive education","Support allowance"], applyProcess:["Apply on disability affairs portal"], officialPortal:"https://disabilityaffairs.gov.in", helpline:"011-23234362", location:["all"], profile:["student"], incomeLimit:250000, popularity:70, tags:["disability","inclusive"] },
        { id:1013, name:"CBSE Single Girl Child Scholarship", description:"Promote girls' education – one girl child of family studying in CBSE schools.", category:"scholarship", icon:"female", iconClass:"scholarship", eligibility:["Only girl child","Class 6-12","CBSE affiliated","≥60% marks"], documents:["Birth cert","Class 5/10 marksheet","Admission proof"], deadline:"2024-11-30", benefits:"₹12,000 per year", benefitsList:["Encourage girl child education"], applyProcess:["Apply through CBSE"], officialPortal:"https://cbse.nic.in", helpline:"011-23234362", location:["all"], profile:["student"], minMarks:60, minAge:11, maxAge:18, popularity:78, tags:["girl child","cbse"] },
        { id:1014, name:"INSPIRE Award – MANAK", description:"For school students with innovative ideas (Class 6-10).", category:"scholarship", icon:"lightbulb", iconClass:"scholarship", eligibility:["Class 6-10","Innovative project idea"], documents:["Project proposal","School certificate","Aadhaar"], deadline:"2024-12-31", benefits:"₹10,000 for idea development", benefitsList:["Encourage innovation","Science & technology"], applyProcess:["Apply online on INSPIRE"], officialPortal:"https://online-inspire.gov.in", helpline:"011-26590360", location:["all"], profile:["student"], minAge:11, maxAge:16, popularity:72, tags:["innovation","stem"] },
        { id:1015, name:"RTE Entitlements + Pre-Matric Support", description:"Free education for economically weaker children under RTE Act.", category:"scholarship", icon:"school", iconClass:"scholarship", eligibility:["EWS","Class 1-8","Admission under RTE quota"], documents:["Income cert","Aadhaar","RTE admission letter"], deadline:"Ongoing", benefits:"Fee reimbursement + ₹1,000 annual", benefitsList:["Free education","Financial aid"], applyProcess:["Apply through school"], officialPortal:"https://rte.nic.in", helpline:"1800-11-0001", location:["all"], profile:["student"], incomeLimit:150000, minAge:6, maxAge:14, popularity:68, tags:["rte","ews"] }
    ],

    // ----- SENIOR CITIZEN SCHEMES -----
    senior: [
        { id:2001, name:"Pradhan Mantri Vaya Vandana Yojana (PMVVY)", description:"Guaranteed pension scheme for senior citizens by LIC.", category:"pension", icon:"hand-holding-usd", iconClass:"pension", eligibility:["Age 60+","Indian citizen"], documents:["Age proof","Aadhaar","PAN","Bank details"], deadline:"Ongoing", benefits:"7.4% p.a. guaranteed return", benefitsList:["10-year policy","Loan facility"], applyProcess:["Visit LIC office"], officialPortal:"https://licindia.in", helpline:"022-68276827", location:["all"], profile:["senior"], minAge:60, popularity:90, tags:["pension","investment"] },
        { id:2002, name:"Indira Gandhi National Old Age Pension (IGNOAPS)", description:"Social pension for senior citizens below poverty line.", category:"pension", icon:"heart", iconClass:"pension", eligibility:["Age 60+","BPL family","No other pension"], documents:["Age proof","BPL cert","Aadhaar","Bank details"], deadline:"Ongoing", benefits:"₹200-500 per month + state top-up", benefitsList:["Lifetime pension","DBT"], applyProcess:["Apply at Gram Panchayat"], officialPortal:"https://nsap.nic.in", helpline:"1800-11-0001", location:["all"], profile:["senior"], minAge:60, popularity:95, tags:["social","bpl"] },
        { id:2003, name:"Senior Citizens Savings Scheme (SCSS)", description:"Government-backed savings scheme with high interest.", category:"pension", icon:"piggy-bank", iconClass:"pension", eligibility:["Age 60+","55+ if retired"], documents:["Age proof","PAN","Address proof"], deadline:"Ongoing", benefits:"8.2% interest p.a., quarterly payable", benefitsList:["5-year term","Tax benefit"], applyProcess:["Open at post office/bank"], officialPortal:"https://indiapost.gov.in", helpline:"1800-266-6868", location:["all"], profile:["senior"], minAge:60, popularity:88, tags:["savings","investment"] },
        { id:2004, name:"Rashtriya Vayoshri Yojana (RVY)", description:"Free assistive devices for BPL senior citizens with disabilities.", category:"health", icon:"wheelchair", iconClass:"health", eligibility:["Age 60+","BPL","Age-related disability"], documents:["Age proof","BPL cert","Disability cert","Aadhaar"], deadline:"Ongoing", benefits:"Free walking sticks, hearing aids, wheelchairs, etc.", benefitsList:["Assistive devices","Need assessment"], applyProcess:["Register at district social welfare"], officialPortal:"https://socialjustice.gov.in", helpline:"011-23381087", location:["all"], profile:["senior"], minAge:60, popularity:85, tags:["health","disability"] },
        { id:2005, name:"Aasara Pension (Telangana)", description:"Social security pension for senior citizens in Telangana.", category:"pension", icon:"hands-helping", iconClass:"pension", eligibility:["Age 65+","5+ years resident","Income ≤ ₹2L"], documents:["Age proof","Residence proof","Income cert","Aadhaar"], deadline:"Ongoing", benefits:"₹2,016 per month (80+ : ₹2,500)", benefitsList:["Monthly pension","DBT"], applyProcess:["Apply at Mee Seva"], officialPortal:"https://aasara.telangana.gov.in", helpline:"1800-425-15151", location:["telangana"], profile:["senior"], incomeLimit:200000, minAge:65, popularity:92, tags:["telangana","state"] },
        { id:2006, name:"Himachal Pradesh Elderly Pension", description:"State pension for senior citizens of Himachal Pradesh.", category:"pension", icon:"mountain", iconClass:"pension", eligibility:["Age 60+","Resident of HP","Income ≤ ₹35,000"], documents:["Age proof","Domicile","Income cert","Aadhaar"], deadline:"Ongoing", benefits:"₹1,500/month (70+ : ₹1,700)", benefitsList:["Monthly pension","Medical camps"], applyProcess:["Apply at BDO office"], officialPortal:"https://hpsocialsecurity.nic.in", helpline:"0177-2623498", location:["himachalpradesh"], profile:["senior"], incomeLimit:35000, minAge:60, popularity:80, tags:["himachal","state"] },
        { id:2007, name:"Ayushman Bharat for Senior Citizens", description:"Cashless health insurance for senior citizens under PM-JAY.", category:"health", icon:"heartbeat", iconClass:"health", eligibility:["Age 60+","SECC database"], documents:["Aadhaar","Age proof","Ration card"], deadline:"Ongoing", benefits:"₹5 lakh per family per year", benefitsList:["Cashless treatment","Pre-existing diseases"], applyProcess:["Check eligibility at empanelled hospital"], officialPortal:"https://pmjay.gov.in", helpline:"14555", location:["all"], profile:["senior"], minAge:60, popularity:96, tags:["health","insurance"] },
        { id:2008, name:"Atal Vayo Abhyuday Yojana (AVYAY)", description:"Welfare for destitute senior citizens – old age homes, health care.", category:"pension", icon:"home", iconClass:"pension", eligibility:["Age 60+","No regular income"], documents:["Age proof","Income cert","Aadhaar"], deadline:"Ongoing", benefits:"Shelter, food, medical care", benefitsList:["Residential facilities","Counseling"], applyProcess:["Apply at district social welfare"], officialPortal:"https://socialjustice.gov.in", helpline:"011-23381087", location:["all"], profile:["senior"], minAge:60, popularity:83, tags:["welfare","oldagehome"] }
    ],

    // ----- FARMER SCHEMES -----
    farmer: [
        { id:3001, name:"Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)", description:"Direct income support of ₹6,000/year to landholding farmers.", category:"agriculture", icon:"rupee-sign", iconClass:"agriculture", eligibility:["Ownership of cultivable land","Aadhaar-seeded bank"], documents:["Land records","Aadhaar","Bank details"], deadline:"Ongoing", benefits:"₹6,000/year in 3 installments", benefitsList:["Direct transfer","Quarterly"], applyProcess:["Register at CSC"], officialPortal:"https://pmkisan.gov.in", helpline:"155261", location:["all"], profile:["farmer"], landRequired:true, popularity:98, tags:["income","support"] },
        { id:3002, name:"Pradhan Mantri Fasal Bima Yojana (PMFBY)", description:"Crop insurance against yield loss.", category:"agriculture", icon:"umbrella", iconClass:"agriculture", eligibility:["Farmers growing notified crops","Compulsory for loanee"], documents:["Aadhaar","Land records","Crop details"], deadline:"Seasonal (Kharif: Jul, Rabi: Dec)", benefits:"Low premium: 2% Kharif, 1.5% Rabi", benefitsList:["Coverage from sowing to harvest","Quick claims"], applyProcess:["Contact bank/insurance company"], officialPortal:"https://pmfby.gov.in", helpline:"1800-180-1551", location:["all"], profile:["farmer"], landRequired:true, popularity:95, tags:["insurance","crop"] },
        { id:3003, name:"Kisan Credit Card (KCC)", description:"Short-term credit at subsidised interest for farmers.", category:"agriculture", icon:"credit-card", iconClass:"agriculture", eligibility:["Individual farmers","Tenant farmers","SHGs"], documents:["Land records","Aadhaar","Bank details"], deadline:"Ongoing", benefits:"Credit limit based on landholding, 4% interest", benefitsList:["Flexible repayment","Crop loan"], applyProcess:["Apply at bank branch"], officialPortal:"https://rbi.org.in", helpline:"1800-425-3800", location:["all"], profile:["farmer"], landRequired:true, popularity:92, tags:["credit","loan"] },
        { id:3004, name:"Soil Health Card Scheme", description:"Free soil testing and fertilizer recommendations.", category:"agriculture", icon:"flask", iconClass:"agriculture", eligibility:["All farmers with agricultural land"], documents:["Land records","Aadhaar"], deadline:"Ongoing", benefits:"Soil health card every 3 years", benefitsList:["Fertilizer recommendation","Online access"], applyProcess:["Register at agriculture dept"], officialPortal:"https://soilhealth.dac.gov.in", helpline:"1800-180-1551", location:["all"], profile:["farmer"], landRequired:true, popularity:88, tags:["soil","testing"] },
        { id:3005, name:"Rythu Bandhu (Telangana)", description:"Investment support for Telangana farmers.", category:"agriculture", icon:"hand-holding-usd", iconClass:"agriculture", eligibility:["Landowner in Telangana","Min 1 acre"], documents:["Pattadar passbook","Aadhaar","Bank details"], deadline:"Seasonal", benefits:"₹5,000 per acre per season", benefitsList:["Direct cash","Timely assistance"], applyProcess:["Village revenue officer"], officialPortal:"https://rythubandhu.telangana.gov.in", helpline:"040-23385777", location:["telangana"], profile:["farmer"], landRequired:true, popularity:96, tags:["telangana","state"] },
        { id:3006, name:"KALIA (Odisha)", description:"Support for small & marginal farmers, landless households.", category:"agriculture", icon:"hands-helping", iconClass:"agriculture", eligibility:["Small & marginal farmers","Landless agri households"], documents:["Aadhaar","Bank details","Ration card"], deadline:"Ongoing", benefits:"₹25,000 over 5 seasons + livelihood support", benefitsList:["₹5,000 per season","Life insurance"], applyProcess:["Apply at Gram Panchayat"], officialPortal:"https://kalia.odisha.gov.in", helpline:"1800-345-6770", location:["odisha"], profile:["farmer"], landRequired:false, popularity:93, tags:["odisha","state"] },
        { id:3007, name:"PM Kisan Maandhan Yojana", description:"Voluntary pension for farmers aged 18-40.", category:"agriculture", icon:"user-clock", iconClass:"agriculture", eligibility:["Small/marginal farmers","Age 18-40","Aadhaar-seeded bank"], documents:["Aadhaar","Land records (if any)","Bank passbook"], deadline:"Ongoing", benefits:"₹3,000/month after 60", benefitsList:["Guaranteed pension","Government contribution"], applyProcess:["Visit CSC","Biometric verification"], officialPortal:"https://maandhan.in", helpline:"1800-180-1551", location:["all"], profile:["farmer"], minAge:18, maxAge:40, popularity:87, tags:["pension","voluntary"] },
        { id:3008, name:"Agriculture Infrastructure Fund (AIF)", description:"Credit for post-harvest infrastructure.", category:"agriculture", icon:"warehouse", iconClass:"agriculture", eligibility:["Farmers, FPOs","Projects like cold storage"], documents:["Project report","Land documents"], deadline:"Ongoing", benefits:"Interest subvention of 3% on loans up to ₹2 crore", benefitsList:["Credit guarantee","6% interest"], applyProcess:["Apply through bank"], officialPortal:"https://agriinfra.dac.gov.in", helpline:"011-23381091", location:["all"], profile:["farmer","entrepreneur"], popularity:79, tags:["infrastructure","credit"] },
        { id:3009, name:"PM-KUSUM", description:"Solar pumps and solar power plants for farmers.", category:"agriculture", icon:"solar-panel", iconClass:"agriculture", eligibility:["Farmers with cultivable land","Install solar pumps"], documents:["Land records","Aadhaar","Bank details"], deadline:"Ongoing", benefits:"60% subsidy on solar pumps", benefitsList:["Reduce diesel dependency","Income from power sales"], applyProcess:["Apply at State Nodal Agency"], officialPortal:"https://mnre.gov.in", helpline:"011-24363270", location:["all"], profile:["farmer"], landRequired:true, popularity:84, tags:["solar","energy"] }
    ],

    // ----- WOMEN SCHEMES (Age‑wise) -----
    women: [
        // Existing women schemes
        { id:4001, name:"Pradhan Mantri Matru Vandana Yojana (PMMVY)", description:"Maternity benefit for pregnant & lactating women.", category:"women", icon:"baby", iconClass:"women", eligibility:["Pregnant & lactating women","First child","Age 19+","Not govt employee"], documents:["Aadhaar","Husband's Aadhaar","Bank details","Pregnancy certificate"], deadline:"Ongoing", benefits:"₹5,000 + ₹6,000 = ₹11,000 total", benefitsList:["Wage compensation","Promotes institutional delivery"], applyProcess:["Register at Anganwadi"], officialPortal:"https://pmmvy-cas.nic.in", helpline:"011-23062493", location:["all"], profile:["women"], minAge:19, popularity:94, tags:["maternity","pregnant"] },
        { id:4002, name:"Mahila Samman Savings Certificate", description:"Savings scheme exclusively for women, 2-year tenor.", category:"women", icon:"piggy-bank", iconClass:"women", eligibility:["Women only","Age 18+"], documents:["Aadhaar","PAN","Address proof"], deadline:"Ongoing", benefits:"7.5% interest p.a., max ₹2 lakh", benefitsList:["Higher interest","Tax benefits"], applyProcess:["Open at post office/bank"], officialPortal:"https://indiapost.gov.in", helpline:"1800-266-6868", location:["all"], profile:["women"], minAge:18, popularity:89, tags:["savings","investment"] },
        { id:4003, name:"Pradhan Mantri Mudra Yojana (PMMY)", description:"Collateral-free loans for women entrepreneurs.", category:"women", icon:"business-time", iconClass:"women", eligibility:["Women entrepreneurs","Non-farm activities"], documents:["Aadhaar","PAN","Business proof","Bank statements"], deadline:"Ongoing", benefits:"Shishu (up to ₹50k), Kishor (₹50k-5L), Tarun (₹5L-10L)", benefitsList:["No collateral","Subsidized interest"], applyProcess:["Approach bank/NBFC"], officialPortal:"https://mudra.org.in", helpline:"1800-180-1111", location:["all"], profile:["women","entrepreneur"], minAge:18, popularity:91, tags:["loan","business"] },
        { id:4004, name:"One Stop Centre Scheme (Sakhi)", description:"Integrated support for women facing violence.", category:"women", icon:"shield-alt", iconClass:"women", eligibility:["All women and girls affected by violence"], documents:["Identity proof","Address proof"], deadline:"Ongoing", benefits:"Emergency response, medical aid, legal aid, counseling", benefitsList:["24x7 helpline","Temporary shelter"], applyProcess:["Walk-in or call 181"], officialPortal:"https://wcd.nic.in", helpline:"181", location:["all"], profile:["women"], popularity:87, tags:["violence","support"] },
        { id:4005, name:"Ladli Behna Yojana (Madhya Pradesh)", description:"Monthly financial assistance for women in MP.", category:"women", icon:"female", iconClass:"women", eligibility:["Women resident of MP","Age 23-60","Income ≤ ₹2.5L"], documents:["Aadhaar","Residence proof","Income cert","Bank details"], deadline:"Ongoing", benefits:"₹1,250 per month DBT", benefitsList:["Monthly assistance","Empowerment"], applyProcess:["Apply at Jan Seva Kendra"], officialPortal:"https://mpinfo.org", helpline:"181", location:["madhyapradesh"], profile:["women"], incomeLimit:250000, minAge:23, maxAge:60, popularity:95, tags:["mp","state","monthly"] },
        { id:4006, name:"Subhadra Yojana (Odisha)", description:"Direct cash assistance for women in Odisha.", category:"women", icon:"money-bill-wave", iconClass:"women", eligibility:["Women resident of Odisha","Age 21-60"], documents:["Aadhaar","Residence proof","Income cert","Bank details"], deadline:"Ongoing", benefits:"₹10,000 per year in two installments", benefitsList:["Financial assistance","Household support"], applyProcess:["Apply at Gram Panchayat"], officialPortal:"https://sse.odisha.gov.in", helpline:"1800-345-6770", location:["odisha"], profile:["women"], minAge:21, maxAge:60, popularity:90, tags:["odisha","state","cash"] },
        // NEW age-wise women schemes
        { id:4007, name:"Beti Bachao Beti Padhao", description:"National initiative to save girl child and educate her.", category:"women", icon:"child", iconClass:"women", eligibility:["Girl children aged 0-6 years","Parents","Communities"], documents:["Birth certificate","Aadhaar","Residence proof"], deadline:"Ongoing", benefits:"Awareness campaigns, conditional cash transfers", benefitsList:["Prevent female foeticide","Promote girls' education"], applyProcess:["Through Anganwadi/ASHA"], officialPortal:"https://wcd.nic.in/bbbp", helpline:"181", location:["all"], profile:["women"], minAge:0, maxAge:6, popularity:92, tags:["girl child","education","awareness"] },
        { id:4008, name:"Sukanya Samriddhi Yojana", description:"Savings scheme for girl child – highest interest rate.", category:"women", icon:"piggy-bank", iconClass:"women", eligibility:["Girl child (age 0-10)","Parents open account"], documents:["Birth certificate","Aadhaar of parent","Address proof"], deadline:"Ongoing", benefits:"8.2% interest, tax free, max ₹1.5L/year", benefitsList:["Partial withdrawal for education","Maturity at age 21"], applyProcess:["Open at post office/bank"], officialPortal:"https://indiapost.gov.in", helpline:"1800-266-6868", location:["all"], profile:["women"], minAge:0, maxAge:10, popularity:94, tags:["savings","girl child","tax benefit"] },
        { id:4009, name:"Scheme for Adolescent Girls (SABLA)", description:"Empowerment of adolescent girls (10-19) – nutrition, health, life skills.", category:"women", icon:"female", iconClass:"women", eligibility:["Adolescent girls aged 10-19","Out-of-school prioritised"], documents:["Aadhaar","Age proof","School certificate"], deadline:"Ongoing", benefits:"Supplementary nutrition, iron supplementation, vocational training", benefitsList:["Health check-ups","Life skill education"], applyProcess:["Enrol at Anganwadi"], officialPortal:"https://wcd.nic.in", helpline:"011-23381087", location:["all"], profile:["women"], minAge:10, maxAge:19, popularity:81, tags:["adolescent","nutrition","skill"] },
        { id:4010, name:"Rashtriya Mahila Kosh (RMK)", description:"Micro-credit for women entrepreneurs (18-55).", category:"women", icon:"rupee-sign", iconClass:"women", eligibility:["Women entrepreneurs","SHGs","Age 18-55"], documents:["Identity proof","SHG resolution","Business plan"], deadline:"Ongoing", benefits:"Loans up to ₹2 lakh at concessional rates", benefitsList:["No collateral","Flexible repayment"], applyProcess:["Approach RMK field office"], officialPortal:"https://rmk.nic.in", helpline:"011-24632680", location:["all"], profile:["women","entrepreneur"], minAge:18, maxAge:55, popularity:79, tags:["microcredit","self-employment","loan"] },
        { id:4011, name:"Mahila E-Haat", description:"Online marketing platform for women entrepreneurs.", category:"women", icon:"shopping-cart", iconClass:"women", eligibility:["Women entrepreneurs","SHGs","NGOs"], documents:["Registration on portal","Product details"], deadline:"Ongoing", benefits:"Free platform, direct connect with buyers", benefitsList:["Nationwide reach","No listing fee"], applyProcess:["Register on mahilaehaat-rmk.gov.in"], officialPortal:"https://mahilaehaat-rmk.gov.in", helpline:"011-24632680", location:["all"], profile:["women","entrepreneur"], minAge:18, maxAge:60, popularity:78, tags:["ecommerce","marketing"] },
        { id:4012, name:"Pradhan Mantri Ujjwala Yojana (PMUY)", description:"Free LPG connection for BPL women.", category:"women", icon:"fire", iconClass:"women", eligibility:["Adult women from BPL","No LPG connection"], documents:["Aadhaar","BPL cert","Ration card","Bank details"], deadline:"Ongoing", benefits:"Free LPG connection + first refill + stove (in some states)", benefitsList:["Clean cooking fuel","Health benefits"], applyProcess:["Apply at LPG distributor"], officialPortal:"https://pmuy.gov.in", helpline:"1800-233-355", location:["all"], profile:["women"], minAge:18, popularity:96, tags:["LPG","clean fuel","BPL"] },
        { id:4013, name:"Mahila Shakti Kendra", description:"One-stop centre for rural women – skill development, employment support.", category:"women", icon:"users", iconClass:"women", eligibility:["Rural women aged 18-59"], documents:["Aadhaar","Residence proof","Photo"], deadline:"Ongoing", benefits:"Vocational training, awareness camps, legal literacy", benefitsList:["Skill upgradation","Self-employment facilitation"], applyProcess:["Visit nearest MSK"], officialPortal:"https://wcd.nic.in/msk", helpline:"181", location:["all"], profile:["women"], minAge:18, maxAge:59, popularity:82, tags:["rural","skill","empowerment"] },
        { id:4014, name:"Women Helpline (181)", description:"24x7 toll-free helpline for women in distress.", category:"women", icon:"phone-alt", iconClass:"women", eligibility:["All women and girls"], documents:["None – immediate assistance"], deadline:"Ongoing", benefits:"Emergency response, referral, counselling", benefitsList:["Immediate support","Confidentiality"], applyProcess:["Call 181 from any phone"], officialPortal:"https://wcd.nic.in", helpline:"181", location:["all"], profile:["women"], popularity:91, tags:["helpline","emergency"] },
        { id:4015, name:"Indira Gandhi National Widow Pension Scheme (IGNWPS)", description:"Social pension for widows aged 40-59 from BPL families.", category:"women", icon:"heart", iconClass:"women", eligibility:["Widow aged 40-59","BPL","No other pension"], documents:["Age proof","Husband's death cert","BPL cert","Aadhaar"], deadline:"Ongoing", benefits:"₹300 per month + state top-up", benefitsList:["Lifetime pension","DBT"], applyProcess:["Apply at Gram Panchayat"], officialPortal:"https://nsap.nic.in", helpline:"1800-11-0001", location:["all"], profile:["women"], minAge:40, maxAge:59, popularity:88, tags:["widow","pension","social"] },
        { id:4016, name:"PM Employment Generation Programme (PMEGP)", description:"Credit-linked subsidy for women entrepreneurs.", category:"women", icon:"industry", iconClass:"women", eligibility:["Women entrepreneurs","Age 18+","New projects"], documents:["Project report","Aadhaar","Bank account"], deadline:"Ongoing", benefits:"Subsidy of 25-35% for women", benefitsList:["Margin money subsidy","Term loan"], applyProcess:["Apply at KVIC/KVIB/Bank"], officialPortal:"https://pmegp.kvic.gov.in", helpline:"1800-180-6767", location:["all"], profile:["women","entrepreneur"], minAge:18, popularity:86, tags:["subsidy","enterprise"] }
    ],

    // ----- ENTREPRENEUR SCHEMES -----
    entrepreneur: [
        { id:5001, name:"Startup India Seed Fund Scheme", description:"Financial assistance for early-stage startups.", category:"employment", icon:"seedling", iconClass:"employment", eligibility:["DPIIT recognized startup","Incorporated ≤2 years"], documents:["Company registration","DPIIT cert","Business plan"], deadline:"2024-03-31", benefits:"Up to ₹20 lakh grant / ₹50 lakh convertible debt", benefitsList:["Proof of concept funding","Market entry"], applyProcess:["Apply on Startup India portal"], officialPortal:"https://startupindia.gov.in", helpline:"1800-208-1600", location:["all"], profile:["entrepreneur"], minAge:18, popularity:86, tags:["startup","funding"] },
        { id:5002, name:"Stand-Up India Scheme", description:"Bank loans for SC/ST and women entrepreneurs.", category:"employment", icon:"user-tie", iconClass:"employment", eligibility:["SC/ST and/or woman entrepreneur","Greenfield project","Loan ₹10L-1Cr"], documents:["Caste certificate","Business plan","Project report"], deadline:"Ongoing", benefits:"Composite loan, 10% margin money", benefitsList:["No collateral","Interest as per RBI"], applyProcess:["Approach bank"], officialPortal:"https://standupmitra.in", helpline:"1800-180-1111", location:["all"], profile:["entrepreneur","women"], minAge:18, popularity:84, tags:["scst","women","loan"] }
    ]
};

// ============================================
// 2. STATE MANAGEMENT & UTILITIES
// ============================================
const defaultState = {
    currentProfile: "student",
    currentFilters: {
        profile: "all",
        location: "all",
        categories: ["scholarship", "pension", "agriculture", "women", "health"],
        incomeRange: 800000,
        status: "all",
        searchTerm: "",
        sortBy: "relevance"
    },
    savedSchemes: [],
    appliedSchemes: [],
    userData: {
        name: "Indian Citizen",
        type: "Student",
        familyIncome: 500000,
        category: "General",
        age: 30,
        location: "Maharashtra",
        pincode: "400001"
    }
};

function loadState() {
    try {
        const stored = localStorage.getItem('jansuvidhaState');
        return stored ? JSON.parse(stored) : defaultState;
    } catch {
        return defaultState;
    }
}

function saveState(state) {
    localStorage.setItem('jansuvidhaState', JSON.stringify(state));
}

let appState = loadState();

// ---------- Helper Functions ----------
function formatCurrency(amt) {
    return '₹' + amt.toLocaleString('en-IN');
}

function formatDate(dateStr) {
    if (dateStr === 'Ongoing') return 'Ongoing';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function isDeadlineApproaching(dateStr) {
    if (dateStr === 'Ongoing') return false;
    const days = (new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24);
    return days <= 30 && days >= 0;
}

// ============================================
// 3. NOTIFICATION & LOADING
// ============================================
function showNotification(message, type = 'info', duration = 5000) {
    const area = document.getElementById('notificationArea');
    if (!area) return;
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    const icon = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    }[type];
    notif.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    area.appendChild(notif);
    notif.querySelector('.close-notification').onclick = () => notif.remove();
    setTimeout(() => notif.remove(), duration);
}
window.showNotification = showNotification;

function showLoading() {
    const el = document.getElementById('loadingOverlay');
    if (el) el.style.display = 'flex';
}
function hideLoading() {
    const el = document.getElementById('loadingOverlay');
    if (el) el.style.display = 'none';
}
window.showLoading = showLoading;
window.hideLoading = hideLoading;

// ============================================
// 4. PAGE SWITCHING
// ============================================
function switchSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById('section-' + sectionId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Initialize page content
    if (sectionId === 'schemes') {
        currentPage = 1;
        renderSchemeCards();
    }
    if (sectionId === 'saved') renderSavedSchemes();
    if (sectionId === 'directory') renderDirectory();
    if (sectionId === 'eligibility') document.getElementById('eligibilityResults').innerHTML = '';
    if (sectionId === 'compare') renderCompareSelection();
    if (sectionId === 'deadlines') {
        renderDeadlines();
        updateLocalAlerts();
    }
    if (sectionId === 'documents') renderDocumentChecklist();
    if (sectionId === 'profile') loadProfileForm();
}
window.switchSection = switchSection;

// ============================================
// 5. PROFILE & LOCATION (PINCODE)
// ============================================
function getStateFromPincode(pincode) {
    if (!pincode) return 'all';
    const map = {
        '400001': 'maharashtra',
        '110001': 'delhi',
        '560001': 'karnataka',
        '600001': 'tamilnadu',
        '302001': 'rajasthan',
        '226001': 'up',
        '500001': 'telangana',
        '751001': 'odisha'
    };
    return map[pincode] || 'all';
}

function updateLocalAlerts() {
    const pincode = appState.userData.pincode || '400001';
    const displayEl = document.getElementById('userPincodeDisplay');
    if (displayEl) displayEl.textContent = pincode;
    const state = getStateFromPincode(pincode);
    const all = getAllSchemes();
    const localSchemes = all.filter(s => s.location.includes(state) || s.location.includes('all')).slice(0,5);
    let html = '<ul>';
    localSchemes.forEach(s => html += `<li><i class="fas fa-bell"></i> ${s.name} – ${s.deadline !== 'Ongoing' ? 'Deadline: ' + formatDate(s.deadline) : 'Ongoing'}</li>`);
    html += '</ul>';
    const localContainer = document.getElementById('localAlertsContainer');
    if (localContainer) localContainer.innerHTML = html;

    // Nearby updates in dashboard
    let updatesHTML = '';
    const nearby = all.filter(s => s.location.includes(state)).slice(0,3);
    nearby.forEach(s => {
        updatesHTML += `<div class="update-card ${isDeadlineApproaching(s.deadline) ? 'new' : ''}">
            <span class="update-badge">NEAR YOU</span>
            <h4>${s.name}</h4>
            <p>${s.description.substring(0,80)}...</p>
            <span class="update-date">${formatDate(s.deadline)}</span>
        </div>`;
    });
    const nearbyContainer = document.getElementById('nearbyUpdatesContainer');
    if (nearbyContainer) nearbyContainer.innerHTML = updatesHTML || '<p>No updates for your pincode yet.</p>';
}

// ============================================
// 6. FILTER & SORT FUNCTIONS
// ============================================
function getAllSchemes() {
    if (appState.currentFilters.profile === 'all') {
        return Object.values(schemesDatabase).flat();
    }
    return schemesDatabase[appState.currentFilters.profile] || [];
}

function filterSchemes(schemes) {
    const f = appState.currentFilters;
    return schemes.filter(s => {
        // Location
        if (f.location !== 'all' && !s.location.includes('all') && !s.location.includes(f.location)) return false;
        // Category
        if (f.categories.length && !f.categories.includes(s.category)) return false;
        // Income
        if (s.incomeLimit && s.incomeLimit < f.incomeRange) return false;
        // Search
        if (f.searchTerm && !s.name.toLowerCase().includes(f.searchTerm.toLowerCase()) &&
            !s.description.toLowerCase().includes(f.searchTerm.toLowerCase())) return false;
        return true;
    });
}

function sortSchemes(schemes) {
    const sort = appState.currentFilters.sortBy;
    return [...schemes].sort((a, b) => {
        if (sort === 'deadline') {
            if (a.deadline === 'Ongoing') return 1;
            if (b.deadline === 'Ongoing') return -1;
            return new Date(a.deadline) - new Date(b.deadline);
        }
        if (sort === 'benefits') {
            const getVal = (ben) => parseInt(ben.replace(/[^\d]/g, '')) || 0;
            return getVal(b.benefits) - getVal(a.benefits);
        }
        if (sort === 'popularity') return b.popularity - a.popularity;
        // relevance: saved first, then deadline approaching, then popularity
        const aSaved = appState.savedSchemes.includes(a.id);
        const bSaved = appState.savedSchemes.includes(b.id);
        if (aSaved && !bSaved) return -1;
        if (!aSaved && bSaved) return 1;
        const aUrgent = isDeadlineApproaching(a.deadline);
        const bUrgent = isDeadlineApproaching(b.deadline);
        if (aUrgent && !bUrgent) return -1;
        if (!aUrgent && bUrgent) return 1;
        return b.popularity - a.popularity;
    });
}

// ============================================
// 7. SCHEME CARD RENDERER
// ============================================
function createSchemeCard(scheme) {
    const isSaved = appState.savedSchemes.includes(scheme.id);
    const isApplied = appState.appliedSchemes.includes(scheme.id);
    const urgent = isDeadlineApproaching(scheme.deadline);
    return `<div class="scheme-card">
        <div class="scheme-header">
            <div class="scheme-icon ${scheme.iconClass}"><i class="fas fa-${scheme.icon}"></i></div>
            <div class="scheme-title">
                <h3>${scheme.name}</h3>
                <span class="scheme-category">${scheme.category.toUpperCase()}</span>
                <p class="scheme-description">${scheme.description.substring(0,100)}...</p>
            </div>
        </div>
        <div class="scheme-highlight">
            <div class="highlight-item"><span class="highlight-label">Benefits:</span><span class="highlight-value">${scheme.benefits}</span></div>
            <div class="highlight-item"><span class="highlight-label">Deadline:</span><span class="highlight-value ${urgent ? 'deadline-warning' : ''}">${formatDate(scheme.deadline)}</span></div>
        </div>
        <div class="scheme-footer">
            <div class="scheme-actions">
                <button class="action-btn-small view-btn-small" onclick="viewSchemeDetails(${scheme.id})"><i class="fas fa-eye"></i> View</button>
                <button class="action-btn-small save-btn-small ${isSaved ? 'saved' : ''}" onclick="toggleSaveScheme(${scheme.id})"><i class="fas fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save'}</button>
                <button class="action-btn-small apply-btn-small ${isApplied ? 'applied' : ''}" onclick="applyForScheme(${scheme.id})"><i class="fas fa-paper-plane"></i> ${isApplied ? 'Applied' : 'Apply'}</button>
            </div>
        </div>
    </div>`;
}

// ============================================
// 8. SCHEMES PAGE – RENDER & PAGINATION
// ============================================
let currentPage = 1;
const schemesPerPage = 6;

function renderSchemeCards() {
    showLoading();
    setTimeout(() => {
        const all = getAllSchemes();
        const filtered = filterSchemes(all);
        const sorted = sortSchemes(filtered);
        const totalPages = Math.ceil(sorted.length / schemesPerPage);
        const start = (currentPage - 1) * schemesPerPage;
        const end = start + schemesPerPage;
        const pageSchemes = sorted.slice(start, end);
        const container = document.getElementById('schemesContainer');
        if (container) {
            if (pageSchemes.length === 0) {
                container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><h3>No schemes found</h3><p>Try adjusting filters</p></div>';
            } else {
                container.innerHTML = pageSchemes.map(s => createSchemeCard(s)).join('');
            }
        }
        // Pagination
        const pagi = document.getElementById('pagination');
        if (pagi) {
            if (totalPages <= 1) {
                pagi.innerHTML = '';
            } else {
                let html = `<button class="pagination-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
                for (let i = 1; i <= totalPages; i++) {
                    html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
                }
                html += `<button class="pagination-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
                pagi.innerHTML = html;
            }
        }
        hideLoading();
    }, 300);
}

window.changePage = function(p) {
    if (p >= 1) {
        currentPage = p;
        renderSchemeCards();
    }
};

// ============================================
// 9. SAVE / APPLY / VIEW DETAILS
// ============================================
function toggleSaveScheme(id) {
    const idx = appState.savedSchemes.indexOf(id);
    if (idx === -1) {
        appState.savedSchemes.push(id);
        showNotification('Scheme saved!', 'success');
    } else {
        appState.savedSchemes.splice(idx, 1);
        showNotification('Scheme removed', 'info');
    }
    saveState(appState);
    const badge = document.getElementById('savedCountNav');
    if (badge) badge.textContent = appState.savedSchemes.length;
    if (document.getElementById('section-saved')?.classList.contains('active')) renderSavedSchemes();
    else if (document.getElementById('section-schemes')?.classList.contains('active')) renderSchemeCards();
}
window.toggleSaveScheme = toggleSaveScheme;

function applyForScheme(id) {
    if (appState.appliedSchemes.includes(id)) {
        showNotification('Already applied', 'info');
        return;
    }
    const scheme = getAllSchemes().find(s => s.id === id);
    if (!scheme) return;
    showLoading();
    setTimeout(() => {
        appState.appliedSchemes.push(id);
        saveState(appState);
        showNotification(`Redirecting to ${scheme.name} portal...`, 'success');
        window.open(scheme.officialPortal, '_blank');
        hideLoading();
    }, 1000);
}
window.applyForScheme = applyForScheme;

function viewSchemeDetails(id) {
    const scheme = getAllSchemes().find(s => s.id === id);
    if (!scheme) return;
    document.getElementById('modalSchemeName').textContent = scheme.name;
    document.getElementById('modalIcon').innerHTML = `<i class="fas fa-${scheme.icon}"></i>`;
    document.getElementById('modalTags').innerHTML = scheme.tags ? scheme.tags.map(t => `<span class="scheme-tag">${t}</span>`).join('') : '';
    document.getElementById('modalDescription').innerHTML = scheme.description;
    document.getElementById('modalBenefitAmount').textContent = scheme.benefits;
    document.getElementById('modalDeadline').textContent = formatDate(scheme.deadline);
    document.getElementById('modalEligibleFor').textContent = scheme.profile.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ');

    let elig = '<ul>';
    scheme.eligibility.forEach(e => elig += `<li>${e}</li>`);
    elig += '</ul>';
    document.getElementById('modalEligibilityList').innerHTML = elig;

    let docs = '<ul>';
    scheme.documents.forEach(d => docs += `<li>${d}</li>`);
    docs += '</ul>';
    document.getElementById('modalDocumentsList').innerHTML = docs;

    let ben = '<ul>';
    (scheme.benefitsList || []).forEach(b => ben += `<li>${b}</li>`);
    ben += '</ul>';
    document.getElementById('modalBenefitsList').innerHTML = ben;

    let steps = '<ol>';
    (scheme.applyProcess || []).forEach(s => steps += `<li>${s}</li>`);
    steps += '</ol>';
    document.getElementById('modalApplySteps').innerHTML = steps;

    document.getElementById('officialPortalLink').href = scheme.officialPortal;
    document.getElementById('applicationFormLink').href = scheme.officialPortal + '/apply';
    document.getElementById('helplineLink').href = `tel:${scheme.helpline}`;

    const isSaved = appState.savedSchemes.includes(scheme.id);
    document.getElementById('saveModalBtn').innerHTML = `<i class="fas fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save'}`;
    document.getElementById('saveModalBtn').className = `modal-btn ${isSaved ? 'saved' : 'secondary'}`;
    document.getElementById('saveModalBtn').onclick = () => toggleSaveScheme(scheme.id);

    const isApplied = appState.appliedSchemes.includes(scheme.id);
    document.getElementById('applyModalBtn').innerHTML = `<i class="fas fa-rocket"></i> ${isApplied ? 'Already Applied' : 'Apply Now'}`;
    document.getElementById('applyModalBtn').disabled = isApplied;
    document.getElementById('applyModalBtn').onclick = () => applyForScheme(scheme.id);

    document.getElementById('schemeModal').style.display = 'block';
}
window.viewSchemeDetails = viewSchemeDetails;

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
window.closeModal = closeModal;

function printSchemeDetails() {
    const name = document.getElementById('modalSchemeName').textContent;
    const desc = document.getElementById('modalDescription').innerHTML;
    const elig = document.getElementById('modalEligibilityList').innerHTML;
    const docs = document.getElementById('modalDocumentsList').innerHTML;
    const ben = document.getElementById('modalBenefitsList').innerHTML;
    const steps = document.getElementById('modalApplySteps').innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>${name}</title><style>body{font-family:Poppins;padding:20px;}</style></head><body><h1>${name}</h1>${desc}<h3>Eligibility</h3>${elig}<h3>Documents</h3>${docs}<h3>Benefits</h3>${ben}<h3>Apply Process</h3>${steps}</body></html>`);
    win.document.close();
    win.print();
}
window.printSchemeDetails = printSchemeDetails;

function shareScheme() {
    const name = document.getElementById('modalSchemeName').textContent;
    if (navigator.share) {
        navigator.share({ title: name, text: `Check out ${name} on JanSuvidha` }).catch(() => {});
    } else {
        navigator.clipboard.writeText(name + ' - https://jansuvidha.in').then(() => showNotification('Link copied', 'success'));
    }
}
window.shareScheme = shareScheme;

// ============================================
// 10. SAVED SCHEMES PAGE
// ============================================
function renderSavedSchemes() {
    const savedIds = appState.savedSchemes;
    const all = Object.values(schemesDatabase).flat();
    const saved = all.filter(s => savedIds.includes(s.id));
    const container = document.getElementById('savedSchemesContainer');
    if (!container) return;
    if (saved.length === 0) {
        container.innerHTML = '<div class="no-results"><i class="fas fa-bookmark"></i><h3>No saved schemes</h3><p>Go to Schemes and click Save.</p></div>';
    } else {
        container.innerHTML = saved.map(s => createSchemeCard(s)).join('');
    }
}

// ============================================
// 11. DIRECTORY PAGE
// ============================================
function renderDirectory() {
    const all = Object.values(schemesDatabase).flat();
    // Student directory – 7 key student schemes
    const studentSchemes = all.filter(s => s.profile.includes('student') && s.id >= 1000 && s.id < 2000).slice(0,7);
    let shtml = '';
    studentSchemes.forEach(s => {
        shtml += `<div class="scheme-listing">
            <h3>${s.name}</h3>
            <p><strong>Description:</strong> ${s.description}</p>
            <p><strong>Eligibility:</strong> ${s.eligibility.join(', ')}</p>
            <p><strong>Documents:</strong></p>
            <ul class="doc-list">${s.documents.slice(0,4).map(d => `<li><i class="fas fa-file-alt"></i> ${d}</li>`).join('')}</ul>
            <p><strong>Benefits:</strong> ${s.benefits}</p>
            <a href="${s.officialPortal}" target="_blank" class="official-link"><i class="fas fa-external-link-alt"></i> Apply / Portal</a>
            <span style="display:block;margin-top:.5rem;"><i class="fas fa-phone-alt"></i> Helpline: ${s.helpline}</span>
        </div>`;
    });
    const studentDir = document.getElementById('studentDirectoryList');
    if (studentDir) studentDir.innerHTML = shtml;

    // Senior directory
    const seniorSchemes = all.filter(s => s.profile.includes('senior')).slice(0,7);
    let senhtml = '';
    seniorSchemes.forEach(s => {
        senhtml += `<div class="scheme-listing">
            <h3>${s.name}</h3>
            <p>${s.description}</p>
            <p><strong>Eligibility:</strong> ${s.eligibility.join(', ')}</p>
            <ul class="doc-list">${s.documents.slice(0,4).map(d => `<li><i class="fas fa-file-alt"></i> ${d}</li>`).join('')}...</ul>
            <p><strong>Benefits:</strong> ${s.benefits}</p>
            <a href="${s.officialPortal}" target="_blank" class="official-link">Official Portal</a>
        </div>`;
    });
    const seniorDir = document.getElementById('seniorDirectoryList');
    if (seniorDir) seniorDir.innerHTML = senhtml;

    // Farmer directory
    const farmerSchemes = all.filter(s => s.profile.includes('farmer')).slice(0,7);
    let fhtml = '';
    farmerSchemes.forEach(s => {
        fhtml += `<div class="scheme-listing">
            <h3>${s.name}</h3>
            <p>${s.description}</p>
            <p><strong>Eligibility:</strong> ${s.eligibility.join(', ')}</p>
            <ul class="doc-list">${s.documents.slice(0,4).map(d => `<li><i class="fas fa-file-alt"></i> ${d}</li>`).join('')}...</ul>
            <p><strong>Benefits:</strong> ${s.benefits}</p>
            <a href="${s.officialPortal}" target="_blank" class="official-link">Official Portal</a>
        </div>`;
    });
    const farmerDir = document.getElementById('farmerDirectoryList');
    if (farmerDir) farmerDir.innerHTML = fhtml;
}

// ============================================
// 12. ELIGIBILITY CALCULATOR
// ============================================
function calculateEligibility() {
    const income = parseInt(document.getElementById('calcIncome').value) || 0;
    const category = document.getElementById('calcCategory').value;
    const age = parseInt(document.getElementById('calcAge').value) || 0;
    const location = document.getElementById('calcLocation').value;
    const all = Object.values(schemesDatabase).flat();
    const eligible = all.filter(s => {
        if (s.incomeLimit && s.incomeLimit < income) return false;
        if (s.minAge && age < s.minAge) return false;
        if (s.maxAge && age > s.maxAge) return false;
        if (s.tags && s.tags.includes('scst') && !['sc','st'].includes(category)) return false;
        if (s.tags && s.tags.includes('obc') && category !== 'obc') return false;
        if (location !== 'all' && !s.location.includes('all') && !s.location.includes(location)) return false;
        return true;
    });
    let html = `<h4>You are eligible for ${eligible.length} schemes</h4>`;
    if (eligible.length > 0) {
        html += '<ul>';
        eligible.slice(0,10).forEach(s => html += `<li onclick="viewSchemeDetails(${s.id})"><strong>${s.name}</strong> – ${s.benefits}</li>`);
        html += '</ul>';
        if (eligible.length > 10) html += `<p>...and ${eligible.length - 10} more</p>`;
    }
    document.getElementById('eligibilityResults').innerHTML = html;
}
window.calculateEligibility = calculateEligibility;

// ============================================
// 13. COMPARE SCHEMES
// ============================================
function renderCompareSelection() {
    const savedIds = appState.savedSchemes;
    const all = Object.values(schemesDatabase).flat();
    const saved = all.filter(s => savedIds.includes(s.id));
    const container = document.getElementById('compareSelection');
    if (!container) return;
    if (saved.length === 0) {
        container.innerHTML = '<p>No saved schemes to compare.</p>';
        document.getElementById('compareBtn').disabled = true;
        return;
    }
    let html = '<div class="compare-grid">';
    saved.forEach(s => html += `<label><input type="checkbox" class="compare-checkbox" value="${s.id}"> ${s.name}</label>`);
    html += '</div>';
    container.innerHTML = html;
    document.getElementById('compareBtn').disabled = saved.length < 2;
}

function compareSchemes() {
    const selected = Array.from(document.querySelectorAll('.compare-checkbox:checked')).map(cb => parseInt(cb.value));
    if (selected.length < 2 || selected.length > 3) {
        showNotification('Select 2 or 3 schemes', 'warning');
        return;
    }
    const all = Object.values(schemesDatabase).flat();
    const schemes = all.filter(s => selected.includes(s.id));
    let table = '<table class="compare-table"><tr><th>Feature</th>';
    schemes.forEach(s => table += `<th>${s.name}</th>`);
    table += '</tr>';
    const rows = [
        { key: 'Category', fn: s => s.category },
        { key: 'Benefits', fn: s => s.benefits },
        { key: 'Deadline', fn: s => formatDate(s.deadline) },
        { key: 'Income Limit', fn: s => s.incomeLimit ? formatCurrency(s.incomeLimit) : 'None' },
        { key: 'Documents', fn: s => s.documents.length },
        { key: 'Popularity', fn: s => `${s.popularity}/100` },
        { key: 'Action', fn: s => `<button class="small-btn" onclick="viewSchemeDetails(${s.id}); closeModal('compareModal')">View</button>` }
    ];
    rows.forEach(row => {
        table += `<tr><td>${row.key}</td>`;
        schemes.forEach(s => table += `<td>${row.fn(s)}</td>`);
        table += '</tr>';
    });
    table += '</table>';
    document.getElementById('compareTableContainer').innerHTML = table;
}
window.compareSchemes = compareSchemes;

// ============================================
// 14. DEADLINES PAGE
// ============================================
function renderDeadlines() {
    const all = Object.values(schemesDatabase).flat().filter(s => s.deadline !== 'Ongoing');
    const sorted = all.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
    const list = document.getElementById('deadlineList');
    if (!list) return;
    let html = '';
    sorted.forEach(s => {
        const days = Math.ceil((new Date(s.deadline) - new Date()) / (1000 * 60 * 60 * 24));
        html += `<div class="deadline-item ${days <= 30 ? 'urgent' : ''}">
            <div><h4>${s.name}</h4><p>Deadline: ${formatDate(s.deadline)} (${days} days left)</p></div>
            <button class="small-btn" onclick="viewSchemeDetails(${s.id})">View</button>
        </div>`;
    });
    list.innerHTML = html || '<p>No upcoming deadlines</p>';
}

// ============================================
// 15. DOCUMENTS PAGE
// ============================================
function renderDocumentChecklist() {
    const all = Object.values(schemesDatabase).flat();
    const docSet = new Set();
    all.forEach(s => s.documents.forEach(d => docSet.add(d)));
    const list = document.getElementById('documentChecklist');
    if (!list) return;
    let html = '<ul class="doc-list-grid">';
    Array.from(docSet).sort().forEach(d => html += `<li><i class="fas fa-file-alt"></i> ${d}</li>`);
    html += '</ul>';
    list.innerHTML = html;
}

function printChecklist() {
    const content = document.getElementById('documentChecklist').innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>JanSuvidha Document Checklist</title><style>body{font-family:Poppins;padding:20px;} li{padding:8px;background:#f0f7ff;margin:5px;}</style></head><body><h1>Common Document Checklist</h1>${content}</body></html>`);
    win.document.close();
    win.print();
}
window.printChecklist = printChecklist;

// ============================================
// 16. PROFILE PAGE
// ============================================
function loadProfileForm() {
    const u = appState.userData;
    document.getElementById('profileName').value = u.name;
    document.getElementById('profileType').value = u.type.toLowerCase();
    document.getElementById('profileIncome').value = u.familyIncome;
    document.getElementById('profileCategory').value = u.category.toLowerCase();
    document.getElementById('profileAge').value = u.age;
    document.getElementById('profileLocation').value = u.location.toLowerCase();
    document.getElementById('profilePincode').value = u.pincode || '400001';
}

function saveProfile() {
    appState.userData.name = document.getElementById('profileName').value;
    appState.userData.type = document.getElementById('profileType').value;
    appState.userData.familyIncome = parseInt(document.getElementById('profileIncome').value) || 0;
    appState.userData.category = document.getElementById('profileCategory').value;
    appState.userData.age = parseInt(document.getElementById('profileAge').value) || 0;
    appState.userData.location = document.getElementById('profileLocation').value;
    appState.userData.pincode = document.getElementById('profilePincode').value;
    appState.currentFilters.profile = appState.userData.type;
    saveState(appState);
    document.getElementById('userNameNav').textContent = appState.userData.name;
    document.getElementById('userTypeNav').textContent = appState.userData.type;
    showNotification('Profile saved!', 'success');
    updateLocalAlerts();
}
window.saveProfile = saveProfile;

// ============================================
// 17. PROFILE CHANGE FROM DASHBOARD
// ============================================
function changeProfile(profile) {
    appState.currentFilters.profile = profile;
    appState.userData.type = profile.charAt(0).toUpperCase() + profile.slice(1);
    saveState(appState);
    showNotification(`Profile set to ${profile}`, 'success');
    switchSection('schemes');
}
window.changeProfile = changeProfile;

// ============================================
// 18. INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Update navbar
    const savedCountNav = document.getElementById('savedCountNav');
    if (savedCountNav) savedCountNav.textContent = appState.savedSchemes.length;
    const userNameNav = document.getElementById('userNameNav');
    if (userNameNav) userNameNav.textContent = appState.userData.name;
    const userTypeNav = document.getElementById('userTypeNav');
    if (userTypeNav) userTypeNav.textContent = appState.userData.type;

    // Dashboard counts
    const studentCount = document.getElementById('studentCountStat');
    if (studentCount) studentCount.textContent = schemesDatabase.student.length;
    const seniorCount = document.getElementById('seniorCountStat');
    if (seniorCount) seniorCount.textContent = schemesDatabase.senior.length;
    const farmerCount = document.getElementById('farmerCountStat');
    if (farmerCount) farmerCount.textContent = schemesDatabase.farmer.length;
    const womenCount = document.getElementById('womenCountStat');
    if (womenCount) womenCount.textContent = schemesDatabase.women.length;
    const welcomeName = document.getElementById('welcomeName');
    if (welcomeName) welcomeName.textContent = appState.userData.name.split(' ')[0];

    // Profile pincode
    const pincodeInput = document.getElementById('profilePincode');
    if (pincodeInput) pincodeInput.value = appState.userData.pincode || '400001';

    // Navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.section);
        });
    });

    // ---------- SCHEMES PAGE FILTERS ----------
    if (document.getElementById('applyFiltersBtn')) {
        document.getElementById('applyFiltersBtn').addEventListener('click', function() {
            appState.currentFilters.profile = document.getElementById('profileFilter').value;
            appState.currentFilters.location = document.getElementById('locationFilter').value;
            appState.currentFilters.incomeRange = parseInt(document.getElementById('incomeRange').value);
            appState.currentFilters.categories = Array.from(document.querySelectorAll('#categoryFilterGroup input:checked')).map(cb => cb.value);
            currentPage = 1;
            renderSchemeCards();
            saveState(appState);
            showNotification('Filters applied', 'success');
        });

        document.getElementById('resetFiltersBtn').addEventListener('click', function() {
            appState.currentFilters = { ...defaultState.currentFilters };
            document.getElementById('profileFilter').value = appState.currentFilters.profile;
            document.getElementById('locationFilter').value = appState.currentFilters.location;
            document.getElementById('incomeRange').value = appState.currentFilters.incomeRange;
            document.getElementById('incomeValue').textContent = formatCurrency(appState.currentFilters.incomeRange);
            document.querySelectorAll('#categoryFilterGroup input').forEach(cb => {
                cb.checked = appState.currentFilters.categories.includes(cb.value);
            });
            document.getElementById('searchInput').value = '';
            appState.currentFilters.searchTerm = '';
            currentPage = 1;
            renderSchemeCards();
            saveState(appState);
            showNotification('Filters reset', 'info');
        });

        document.getElementById('incomeRange').addEventListener('input', function(e) {
            document.getElementById('incomeValue').textContent = formatCurrency(e.target.value);
        });

        document.getElementById('searchInput').addEventListener('input', function(e) {
            appState.currentFilters.searchTerm = e.target.value;
            currentPage = 1;
            renderSchemeCards();
        });

        document.getElementById('sortBySelect').addEventListener('change', function(e) {
            appState.currentFilters.sortBy = e.target.value;
            renderSchemeCards();
        });
    }

    // ---------- ELIGIBILITY ----------
    const calcBtn = document.getElementById('calcEligibilityBtn');
    if (calcBtn) calcBtn.addEventListener('click', calculateEligibility);

    // ---------- COMPARE ----------
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) compareBtn.addEventListener('click', compareSchemes);

    // ---------- PRINT CHECKLIST ----------
    const printBtn = document.getElementById('printChecklistBtn');
    if (printBtn) printBtn.addEventListener('click', printChecklist);

    // ---------- SAVE PROFILE ----------
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);

    // ---------- USER PROFILE CLICK ----------
    const userProfileBtn = document.getElementById('userProfileBtn');
    if (userProfileBtn) {
        userProfileBtn.addEventListener('click', function() {
            switchSection('profile');
        });
    }

    // ---------- MODAL CLOSE ----------
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // ---------- PRINT / SHARE IN MODAL ----------
    const printModal = document.getElementById('printModal');
    if (printModal) printModal.addEventListener('click', printSchemeDetails);
    const shareModal = document.getElementById('shareModal');
    if (shareModal) shareModal.addEventListener('click', shareScheme);

    // ---------- FEEDBACK BUTTON ----------
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) feedbackBtn.addEventListener('click', () => showNotification('Thank you for your feedback!', 'success'));

    // ---------- INITIAL RENDERS ----------
    renderDirectory();
    updateLocalAlerts();

    // ---------- AUTO-SAVE BEFORE UNLOAD ----------
    window.addEventListener('beforeunload', function() {
        saveState(appState);
    });
});