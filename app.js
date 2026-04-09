const A={};
const TOTAL=7;
const KTM=["Kathmandu Valley"];
const PKR=["Pokhara"];
const EAST=["Eastern Nepal"];
const CTR=["Central Nepal"];
const BUT=["Butwal"];
const BHR=["Bhairahawa"];
const NPG=["Nepalgunj"];

const stepLabels=["Faculty","Subject","Level","Location","Learning Style","Grades","Goal"];

const subjectMap={
  "Science":["Biology","Chemistry","Physics","Mathematics","Environmental Science","Microbiology"],
  "Engineering & Technology":["Computer Engineering","Civil Engineering","Electrical Engineering","Architecture","Mechanical Engineering","Electronics"],
  "IT & Computer Science":["BSc CSIT","BIT","BCA","Software Engineering","Networking & Security","E-Commerce & IT"],
  "Management & Business":["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship","Hotel Management","BBS"],
  "Humanities & Social Science":["Sociology","Psychology","Political Science","Journalism / Mass Communication","History","Anthropology"],
  "Medicine & Health":["MBBS","Nursing","Pharmacy","Dentistry","Public Health","Physiotherapy"],
  "Law":["LLB","International Law","Corporate Law"],
  "Education":["B.Ed","M.Ed","Early Childhood Education","Special Education"],
  "Forestry & Environment":["BSc Forestry","Environmental Science","Wildlife Management","Natural Resource Management"],
  "Agriculture":["BSc Agriculture","Animal Science","Agribusiness","Food Technology","Horticulture"],
  "Arts & Design":["Fine Arts","Graphic Design","Music","Film & Media","Fashion Design"]
};

const colleges=[
  {name:"Kathmandu Medical College (KMC)",loc:"Sinamangal, Kathmandu",regions:KTM,type:"private",tags:["Medicine","Health","Dental"],website:"https://www.kmc.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Dentistry","Physiotherapy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"One of Kathmandu's well-established private medical colleges offering MBBS, BDS (Dentistry) and allied health programs with good clinical exposure at its teaching hospital."},

  {name:"Kathmandu Model College",loc:"Bagbazar, Kathmandu",regions:KTM,type:"private",tags:["+2","Management","Humanities"],website:"https://www.kmc.edu.np",
   courses:["BBS","BBA","Sociology","History","Political Science","Journalism / Mass Communication"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies"],
   why:"Popular private college in central Kathmandu especially strong in +2 Management and humanities programs with a large student community."},

  // ── KATHMANDU ──
  {name:"St. Xavier's College",loc:"Maitighar, Kathmandu",regions:KTM,type:"private",tags:["Science","+2","Top Ranked"],website:"https://www.sxc.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","Microbiology"],
   levels:["+2"],styles:["Research & theory","Hands-on & practical"],goals:["Further studies","Get a job quickly"],
   why:"One of Kathmandu's most prestigious +2 Science colleges, run by Jesuit priests. Known for exceptional board results, discipline, and producing top medical and engineering entrance scorers."},

  {name:"Pulchowk Campus (IOE)",loc:"Lalitpur, Kathmandu",regions:KTM,type:"public",tags:["Engineering","Top-ranked","IOE"],website:"https://pcampus.edu.np",
   courses:["Computer Engineering","Civil Engineering","Electrical Engineering","Mechanical Engineering","Electronics","Architecture"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Nepal's most prestigious engineering campus. Extremely competitive entrance but the gold standard for engineering graduates."},

  {name:"Islington College",loc:"Kathmandu",regions:KTM,type:"private",tags:["IT","UK Affiliated","Top IT College"],website:"https://islington.edu.np",
   courses:["BSc CSIT","Networking & Security","Software Engineering","BBA","MBA"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Nepal's top IT college with London Metropolitan University affiliation, best for computing and networking careers."},

  {name:"Deerwalk Institute of Technology",loc:"Kathmandu",regions:KTM,type:"private",tags:["IT","Top IT College"],website:"https://dit.edu.np",
   courses:["BSc CSIT","BIT","Software Engineering"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"One of Nepal's most respected IT-only institutes, known for BSc CSIT excellence and a strong tech alumni network."},

  {name:"Softwarica College of IT & E-Commerce",loc:"Kathmandu",regions:KTM,type:"private",tags:["IT","Coventry Affiliated"],website:"https://softwarica.edu.np",
   courses:["BSc CSIT","Software Engineering","E-Commerce & IT","Networking & Security"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Affiliated with Coventry University UK — excellent for software development and e-commerce careers."},

  {name:"Nepal Engineering College",loc:"Bhaktapur",regions:KTM,type:"private",tags:["Engineering","IT"],website:"https://nec.edu.np",
   courses:["Computer Engineering","Civil Engineering","Electrical Engineering","Electronics","BSc CSIT"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"One of Nepal's top private engineering colleges with modern labs and strong placement records."},

  {name:"Himalaya College of Engineering",loc:"Kathmandu",regions:KTM,type:"private",tags:["Engineering"],website:"https://hce.edu.np",
   courses:["Computer Engineering","Civil Engineering","Electrical Engineering","Electronics"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"IOE-affiliated engineering college with strong civil and computer engineering programs."},

  {name:"Kathmandu Engineering College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Engineering"],website:"https://kec.edu.np",
   courses:["Computer Engineering","Civil Engineering","Electrical Engineering","Mechanical Engineering"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"Private IOE-affiliated engineering college with a practical, hands-on approach to engineering education."},

  {name:"Advanced College of Engineering and Management",loc:"Kathmandu",regions:KTM,type:"private",tags:["Engineering","Management"],website:"https://acem.edu.np",
   courses:["Computer Engineering","Civil Engineering","BBA","BIT"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Offers engineering and management under one roof — good for students wanting a technical and business blend."},

  {name:"Ace Institute of Management",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","Top B-School"],website:"https://ace.edu.np",
   courses:["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"One of Nepal's top management institutes with strong BBA/MBA programs and excellent corporate internship networks."},

  {name:"Apex College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","Top B-School"],website:"https://apexcollege.edu.np",
   courses:["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"Leading business college affiliated with Pokhara University, consistently ranked among Nepal's best for BBA and MBA."},

  {name:"Kathmandu College of Management",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management"],website:"https://kcm.edu.np",
   courses:["BBA","MBA","BIT","Finance & Accounting","Marketing"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business"],
   why:"Popular management college with strong BBA/MBA programs and good industry connections."},

  {name:"GEMS B-School",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","Entrepreneurship"],website:"https://gems.edu.np",
   courses:["BBA","MBA","Entrepreneurship","Marketing"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical","Creative & expressive"],goals:["Start my own business","Get a job quickly"],
   why:"Focused entirely on business and entrepreneurship with industry mentors and a practical case-study approach."},

  {name:"Uniglobe College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","IT"],website:"https://uniglobe.edu.np",
   courses:["BBA","MBA","BIT","BCA","Finance & Accounting"],
   levels:["+2","Bachelor's","Master's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Popular private college for BBA and BIT with strong industry ties and a practical curriculum."},

  {name:"Thames International College",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","UK Affiliated","Management"],website:"https://thames.edu.np",
   courses:["BBA","MBA","BIT","Marketing","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"UK university-affiliated college ideal for students targeting international careers or further study abroad."},

  {name:"Xavier International College",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","Management"],website:"https://xic.edu.np",
   courses:["BBA","MBA","BCA","BIT","Marketing","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Internationally affiliated college known for quality BBA and management programs with a global curriculum approach."},

  {name:"Trinity International College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Science","Management"],website:"https://trinity.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BBA","BBS","BCA"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"One of Kathmandu's most reputed +2 colleges, especially strong in Science and Management board results."},

  {name:"KIST College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Science","IT"],website:"https://kistcollege.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BSc CSIT","BCA","BBA"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"Well-known private college with strong +2 Science and IT programs and modern lab facilities."},

  {name:"VS Niketan College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Science"],website:"https://vsniketan.edu.np",penalty:5,
   courses:["Biology","Chemistry","Physics","Mathematics","BBS"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Further studies","Get a job quickly"],
   why:"Long-established Kathmandu college strong in +2 Science stream results."},

  {name:"Premier College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Science","Management"],website:"https://premiercollege.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BBA","BCA"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"Well-regarded private college with strong +2 Science and BBA streams in Kathmandu."},

  {name:"Kathmandu Model College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Management"],website:"https://kmc.edu.np",
   courses:["BBS","BBA","Sociology","History","Political Science"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies"],
   why:"Popular private college especially strong in +2 Management and humanities programs."},

  {name:"DAV College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","Humanities"],website:"https://davcollege.edu.np",
   courses:["BBS","BBA","Sociology","History","Political Science","Biology","Physics"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"Well-established private college with broad offerings in science, management and humanities."},

  {name:"Triton International College",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","+2"],website:"https://triton.edu.np",
   courses:["BBA","BBS","BCA","Biology","Chemistry","Physics"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International curriculum college popular for +2 and BBA, known for English-medium instruction."},

  {name:"Reliance International Academy",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","+2"],website:"https://reliance.edu.np",
   courses:["BBA","BBS","Biology","Chemistry","Physics","Sociology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies"],
   why:"Reputed private academy for +2 and undergraduate programs with English-medium education."},

  {name:"St. Lawrence College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","Humanities"],website:"https://stlawrence.edu.np",
   courses:["BBA","BBS","BCA","Sociology","Journalism / Mass Communication"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies"],
   why:"Respected private college with solid management, humanities and IT programs."},

  {name:"Prasadi Academy",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Science","Management"],website:"https://prasadi.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BBS"],
   levels:["+2"],styles:["Hands-on & practical","Research & theory"],goals:["Further studies","Get a job quickly"],
   why:"Popular +2-only academy in Kathmandu with focused Science and Management streams."},

  {name:"Kathmandu Bernhardt College",loc:"Kathmandu",regions:KTM,type:"private",tags:["+2","Management"],website:"https://kbc.edu.np",
   courses:["BBS","BBA","Sociology","History"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"Established private college for +2 and bachelor's in management and humanities."},

  {name:"Global College International",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","Management"],website:"https://gci.edu.np",
   courses:["BBA","MBA","BIT","BCA","Marketing","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International-standard college with globally recognized management and IT programs."},

  {name:"Times International College",loc:"Kathmandu",regions:KTM,type:"private",tags:["International","Management"],website:"https://times.edu.np",
   courses:["BBA","MBA","BIT","Marketing","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International-standard management and IT college with English-medium programs."},

  {name:"Nepal Mega College",loc:"Kathmandu",regions:KTM,type:"private",tags:["Management","IT"],website:"https://nepalmegacollege.edu.np",
   courses:["BBA","BIT","BCA","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Growing private college offering management and IT programs with affordable fees."},

  {name:"Capital College and Research Center",loc:"Kathmandu",regions:KTM,type:"private",tags:["Research","Management"],website:"https://capitalcollege.edu.np",
   courses:["BBA","MBA","BIT","Finance & Accounting","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Further studies","Get a job quickly"],
   why:"Research-oriented private college, strong for BBA, MBA and postgraduate management studies."},

  {name:"Texas College of Management and IT",loc:"Kathmandu",regions:KTM,type:"private",tags:["IT","Management"],website:"https://texascollege.edu.np",
   courses:["BIT","BCA","BSc CSIT","BBA"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Focused on IT and management with practical curriculum and good placement support."},

  {name:"Informatics College Kathmandu",loc:"Kathmandu",regions:KTM,type:"private",tags:["IT","Management"],website:"https://informatics.edu.np",
   courses:["BSc CSIT","BIT","BCA","BBA","MBA","Software Engineering"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Well-known IT and management college with strong industry connections across Nepal."},

  {name:"Institute of Medicine (IOM)",loc:"Kathmandu",regions:KTM,type:"public",tags:["Medicine","Top Medical"],website:"https://iom.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Public Health","Physiotherapy"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"The premier public medical institution in Nepal — highly competitive but the most recognized medical degree nationally."},

  {name:"Amrit Science Campus",loc:"Kathmandu",regions:KTM,type:"public",tags:["TU Constituent","Science"],website:"https://amritcampus.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","Microbiology","BSc CSIT","BCA"],
   levels:["+2","Bachelor's"],styles:["Research & theory","Hands-on & practical"],goals:["Further studies","Get a job quickly"],
   why:"One of Kathmandu's most popular TU constituent campuses for +2 Science and BSc programs at low cost."},

  {name:"Tri-Chandra Multiple Campus",loc:"Kathmandu",regions:KTM,type:"public",tags:["TU Constituent","Humanities","Law"],website:"https://trichandra.edu.np",
   courses:["Sociology","History","Political Science","Journalism / Mass Communication","Anthropology","LLB","BBS"],
   levels:["+2","Bachelor's","Master's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"One of Nepal's oldest campuses, ideal for humanities, social science and law at affordable fees."},

  {name:"Padma Kanya Multiple Campus",loc:"Kathmandu",regions:KTM,type:"public",tags:["TU Constituent","Women's"],website:"https://padmakanya.edu.np",
   courses:["Sociology","History","Political Science","Biology","Chemistry","BBS","B.Ed"],
   levels:["+2","Bachelor's","Master's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Premier TU women's campus with strong programs in humanities, science and education."},

  {name:"Shanker Dev Campus",loc:"Kathmandu",regions:KTM,type:"public",tags:["TU Constituent","Commerce","Law"],website:"https://shankerdevcampus.edu.np",
   courses:["BBS","Finance & Accounting","LLB","Sociology","Journalism / Mass Communication"],
   levels:["+2","Bachelor's","Master's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"One of TU's busiest campuses, strong in commerce, BBS and law with affordable fees."},

  {name:"Nepal Commerce Campus",loc:"Kathmandu",regions:KTM,type:"public",tags:["TU Constituent","Commerce"],website:"https://ncc.edu.np",
   courses:["BBS","Finance & Accounting","Marketing","MBA"],
   levels:["Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"TU's dedicated commerce campus — best public option for BBS and MBS students."},

  {name:"Thapathali Campus (IOE)",loc:"Kathmandu",regions:KTM,type:"public",tags:["Engineering","IOE"],website:"https://tcioe.edu.np",
   courses:["Civil Engineering","Mechanical Engineering","Electrical Engineering","Electronics"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"IOE constituent campus with strong civil and mechanical engineering programs."},

  // ── POKHARA ──
  {name:"Manipal College of Medical Sciences",loc:"Pokhara",regions:PKR,type:"private",tags:["Medicine","Top Medical"],website:"https://manipal.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Physiotherapy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies","Serve my community"],
   why:"One of Nepal's most prestigious private medical colleges — internationally recognized with excellent clinical training."},

  {name:"Gandaki Medical College",loc:"Pokhara",regions:PKR,type:"private",tags:["Medicine","Health"],website:"https://gmc.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community"],
   why:"Established private medical college in Pokhara with solid MBBS and health science programs."},

  {name:"Pokhara Engineering College",loc:"Pokhara",regions:PKR,type:"private",tags:["Engineering"],website:"https://pec.edu.np",
   courses:["Civil Engineering","Computer Engineering","Electrical Engineering","Electronics"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"Leading private engineering college in Pokhara with IOE-affiliated programs and good placement records."},

  {name:"Informatics College Pokhara",loc:"Pokhara",regions:PKR,type:"private",tags:["IT","Management"],website:"https://informatics.edu.np",
   courses:["BSc CSIT","BIT","BCA","BBA","Software Engineering"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Well-known IT and management college in Pokhara with strong industry connections."},

  {name:"Pokhara College of Management",loc:"Pokhara",regions:PKR,type:"private",tags:["Management","Business"],website:"https://pcm.edu.np",
   courses:["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"A leading management college in Pokhara, popular for BBA and MBA programs."},

  {name:"LA Grande International College",loc:"Pokhara",regions:PKR,type:"private",tags:["International","Management"],website:"https://lagrandecollege.edu.np",
   courses:["BBA","BIT","BCA","Sociology","Journalism / Mass Communication"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International-standard college in Pokhara with globally oriented management and IT programs."},

  {name:"Linc School of Business",loc:"Pokhara",regions:PKR,type:"private",tags:["Management","Business"],website:"https://linc.edu.np",
   courses:["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business"],
   why:"Business-focused college in Pokhara emphasizing practical BBA and MBA skills."},

  {name:"Fishtail Academy",loc:"Pokhara",regions:PKR,type:"private",tags:["+2","Management","IT"],website:"https://fishtailacademy.edu.np",
   courses:["BBA","BCA","BBS","Biology","Physics"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"Growing private college in Pokhara for +2 and bachelor's in management, IT and science."},

  {name:"Siddhartha College",loc:"Pokhara",regions:PKR,type:"private",tags:["Science","Management"],website:"https://siddhartha.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Research & theory","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"Established private college in Pokhara with science, management and humanities programs."},

  {name:"Mount Annapurna Campus",loc:"Pokhara",regions:PKR,type:"private",tags:["Management","Arts"],website:"https://mac.edu.np",
   courses:["BBA","BBS","Fine Arts","Graphic Design","Sociology"],
   levels:["+2","Bachelor's"],styles:["Creative & expressive","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Notable private campus in Pokhara with management and arts programs in a creative environment."},

  {name:"SOS Hermann Gmeiner College",loc:"Pokhara",regions:PKR,type:"private",tags:["+2","Humanities"],website:"https://sosnepaleducation.org",
   courses:["Sociology","History","Political Science","BBS","Biology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Research & theory"],goals:["Serve my community","Get a job quickly","Further studies"],
   why:"Respected Pokhara college known for humanitarian values and strong +2 humanities programs."},

  {name:"Gandaki Boarding School",loc:"Pokhara",regions:PKR,type:"private",tags:["Boarding","+2"],website:"https://gandakiboarding.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BBS"],
   levels:["+2"],styles:["Hands-on & practical","Research & theory"],goals:["Further studies","Get a job quickly"],
   why:"Premier boarding school in Pokhara for focused +2 Science and Management."},

  {name:"Forestry Campus Pokhara",loc:"Pokhara",regions:PKR,type:"public",tags:["Forestry","Environment"],website:"https://forestrycampus.edu.np",
   courses:["BSc Forestry","Environmental Science","Wildlife Management","Natural Resource Management"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Nepal's premier forestry campus — the top destination for BSc Forestry and environmental career students."},

  {name:"Western Regional Campus (WRC)",loc:"Pokhara",regions:PKR,type:"public",tags:["Engineering","IOE"],website:"https://wrc.edu.np",
   courses:["Civil Engineering","Computer Engineering","Electrical Engineering","Mechanical Engineering","Electronics"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Further studies"],
   why:"The IOE campus for western Nepal. Highly respected for civil and computer engineering programs."},

  {name:"Prithvi Narayan Campus (PN Campus)",loc:"Pokhara",regions:PKR,type:"public",tags:["TU Constituent"],website:"https://pncampus.edu.np",
   courses:["Biology","Chemistry","Physics","Mathematics","BBS","Sociology","History","Political Science","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"The largest TU constituent campus in Pokhara offering broad programs at affordable government rates."},

  {name:"Janapriya Multiple Campus",loc:"Pokhara",regions:PKR,type:"public",tags:["TU Constituent","Humanities"],website:"https://janapriya.edu.np",
   courses:["Sociology","History","Political Science","BBS","B.Ed","Biology"],
   levels:["+2","Bachelor's","Master's"],styles:["Group discussions","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Popular TU campus in Pokhara for affordable humanities, management and education programs."},

  // ── EASTERN NEPAL ──
  {name:"B.P. Koirala Institute of Health Sciences (BPKIHS)",loc:"Dharan, Eastern Nepal",regions:EAST,type:"public",tags:["Medicine","Top Medical","Research"],website:"https://bpkihs.edu",
   courses:["MBBS","Nursing","Pharmacy","Dentistry","Public Health","Physiotherapy"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"One of Nepal's most prestigious public medical universities — top destination for MBBS and health research in eastern Nepal."},

  {name:"Nobel Medical College",loc:"Biratnagar",regions:EAST,type:"private",tags:["Medicine","Health"],website:"https://nobelmedicalcollege.com.np",
   courses:["MBBS","Nursing","Pharmacy","Public Health","Physiotherapy"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"A leading private medical college in eastern Nepal with MBBS, nursing and allied health programs."},

  {name:"Birat Medical College",loc:"Biratnagar",regions:EAST,type:"private",tags:["Medicine","Health"],website:"https://biratmedicalcollege.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community"],
   why:"Established private medical college in Biratnagar with MBBS and health science programs."},

  {name:"Aims College",loc:"Biratnagar",regions:EAST,type:"private",tags:["IT","Management"],website:"https://aimscollege.edu.np",
   courses:["BSc CSIT","BIT","BCA","BBA","Software Engineering"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"A popular IT and management college in Biratnagar with a practical curriculum and growing industry connections."},

  {name:"Biratnagar International College",loc:"Biratnagar",regions:EAST,type:"private",tags:["International","Management","IT"],website:"https://bic.edu.np",
   courses:["BBA","MBA","BIT","BCA","Marketing","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International-standard college in Biratnagar with management and IT programs and a global curriculum."},

  {name:"Koshi St. James College",loc:"Itahari, Eastern Nepal",regions:EAST,type:"private",tags:["International","+2"],website:"https://koshisjc.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Further studies","Get a job quickly"],
   why:"International-affiliated private college in eastern Nepal with quality +2 and undergraduate programs."},

  {name:"Greenland International College",loc:"Eastern Nepal",regions:EAST,type:"private",tags:["International","Management"],website:"https://greenlandcollege.edu.np",
   courses:["BBA","BIT","BCA","Marketing","Sociology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Growing international-standard college in eastern Nepal with management and IT programs."},

  {name:"Arniko College",loc:"Eastern Nepal",regions:EAST,type:"private",tags:["+2","Management","Science"],website:"https://arnikocollege.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Further studies","Get a job quickly"],
   why:"Well-known private college in eastern Nepal with solid +2 and bachelor's in science and management."},

  {name:"Mahendra Multiple Campus (Biratnagar)",loc:"Biratnagar",regions:EAST,type:"public",tags:["TU Constituent"],website:"https://mmc.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","Sociology","History","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"The largest TU campus in eastern Nepal, offering broad programs at affordable government fees."},

  {name:"Purbanchal University",loc:"Biratnagar",regions:EAST,type:"public",tags:["University","Health","Management"],website:"https://purbanchaluniversity.edu.np",
   courses:["MBBS","Nursing","BBA","MBA","BSc CSIT","B.Ed","Biology","Chemistry"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Eastern Nepal's regional university, strong in health sciences and management."},

  // ── CENTRAL NEPAL ──
  {name:"Chitwan Medical College",loc:"Bharatpur, Chitwan",regions:CTR,type:"private",tags:["Medicine","Top Medical"],website:"https://cmc.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Physiotherapy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical"],goals:["Get a job quickly","Serve my community"],
   why:"Leading private medical college in Chitwan with strong clinical training and modern facilities."},

  {name:"College of Medical Sciences (CMS)",loc:"Bharatpur, Chitwan",regions:CTR,type:"private",tags:["Medicine","Health"],website:"https://cmsnepal.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Dentistry","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Prominent private medical college in Chitwan with MBBS and allied health programs."},

  {name:"Rampur Campus",loc:"Chitwan",regions:CTR,type:"public",tags:["Agriculture","TU Constituent"],website:"https://rampuscampus.edu.np",
   courses:["BSc Agriculture","Animal Science","Agribusiness","Food Technology","Horticulture","BSc Forestry","Environmental Science"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Nepal's premier agriculture campus — a must-consider for students pursuing BSc Agriculture and related fields."},

  {name:"Balkumari College",loc:"Chitwan",regions:CTR,type:"private",tags:["Management","IT"],website:"https://balkumaricollege.edu.np",
   courses:["BBA","BIT","BCA","Finance & Accounting","Biology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"A growing private college in Chitwan with management, IT and science programs."},

  {name:"Orchid College",loc:"Chitwan",regions:CTR,type:"private",tags:["Management","IT"],website:"https://orchidcollege.edu.np",
   courses:["BBA","BIT","BCA","Sociology","Journalism / Mass Communication"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"Established private college in Chitwan with management, IT and humanities programs."},

  {name:"Aroma College",loc:"Chitwan",regions:CTR,type:"private",tags:["+2","Management","Science"],website:"https://aromacollege.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"Popular private college in Chitwan for +2 and bachelor's in science, management and humanities."},

  {name:"Birendra Multiple Campus",loc:"Bharatpur, Chitwan",regions:CTR,type:"public",tags:["TU Constituent"],website:"https://birendracampus.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","Sociology","History","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"The main TU campus in Chitwan, offering affordable programs across humanities, science and management."},

  // ── BUTWAL ──
  {name:"Crimson College of Technology",loc:"Butwal",regions:BUT,type:"private",tags:["IT","Engineering"],website:"https://crimsoncollege.edu.np",
   courses:["Computer Engineering","Civil Engineering","BSc CSIT","BIT","BCA","Software Engineering"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"A technology-focused private college in Butwal offering IT and engineering programs with strong practical training."},

  {name:"Oxford College Butwal",loc:"Butwal",regions:BUT,type:"private",tags:["International","+2","Management"],website:"https://oxfordcollegebutwal.edu.np",
   courses:["BBA","BBS","Biology","Chemistry","Physics","BCA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"International-standard private college in Butwal with quality +2 and undergraduate programs."},

  {name:"Tilottama Campus",loc:"Butwal",regions:BUT,type:"private",tags:["+2","Management","Science"],website:"https://tilottamacampus.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"A popular private college in Butwal with +2 and bachelor's across science, management and humanities."},

  {name:"New Horizon College",loc:"Butwal",regions:BUT,type:"private",tags:["+2","Management","IT"],website:"https://newhorizoncollege.edu.np",
   courses:["BBA","BIT","BCA","BBS","Biology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Further studies","Start my own business"],
   why:"Growing private college in Butwal with +2 and bachelor's programs in management and IT."},

  {name:"Nepathya College",loc:"Butwal",regions:BUT,type:"private",tags:["Management","IT"],website:"https://nepathyacollege.edu.np",
   courses:["BBA","BIT","BCA","Sociology","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business"],
   why:"Growing private college in Butwal offering management and IT programs with a practical curriculum."},

  {name:"Butwal Multiple Campus",loc:"Butwal",regions:BUT,type:"public",tags:["TU Constituent"],website:"https://butwalmultiplecampus.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","Sociology","History","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Main TU constituent campus in Butwal serving Rupandehi district students at affordable fees."},

  // ── BHAIRAHAWA ──
  {name:"Universal College of Medical Sciences",loc:"Bhairahawa",regions:BHR,type:"private",tags:["Medicine","Top Medical"],website:"https://ucms.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Physiotherapy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"One of western Nepal's most respected private medical colleges, offering MBBS and allied health programs."},

  {name:"Global College of Management",loc:"Bhairahawa",regions:BHR,type:"private",tags:["Management","Business"],website:"https://gcm.edu.np",
   courses:["BBA","MBA","Finance & Accounting","Marketing","Entrepreneurship"],
   levels:["Bachelor's","Master's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"A management-focused private college in Bhairahawa with solid BBA and MBA programs."},

  {name:"Lumbini City College",loc:"Bhairahawa",regions:BHR,type:"private",tags:["Management","IT"],website:"https://lumbinicc.edu.np",
   courses:["BBA","BIT","BCA","Sociology","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business"],
   why:"Growing private college in the Lumbini region offering management and IT programs."},

  {name:"Tilottama College Bhairahawa",loc:"Bhairahawa",regions:BHR,type:"private",tags:["+2","Management","Science"],website:"https://tilottamacollege.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"Established private college in Bhairahawa with +2 and bachelor's across science and management."},

  {name:"Paklihawa Campus",loc:"Bhairahawa",regions:BHR,type:"public",tags:["Agriculture","TU Constituent"],website:"https://paklihawacampus.edu.np",
   courses:["BSc Agriculture","Animal Science","Agribusiness","Food Technology","Horticulture","Environmental Science"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Leading agriculture campus in western Nepal — excellent for BSc Agriculture and agribusiness students."},

  {name:"Siddhartha Gautam Buddha Campus",loc:"Bhairahawa",regions:BHR,type:"public",tags:["TU Constituent"],website:"https://sgbc.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","Sociology","History","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Primary TU campus in Bhairahawa offering broad programs at affordable rates for Lumbini zone students."},

  {name:"Lumbini Buddhist University",loc:"Bhairahawa / Butwal",regions:[...BHR,...BUT],type:"public",tags:["Humanities","Culture"],
   courses:["Sociology","History","Political Science","Fine Arts","B.Ed","Anthropology"],
   levels:["Bachelor's","Master's"],styles:["Research & theory","Group discussions","Creative & expressive"],goals:["Serve my community","Further studies"],
   why:"Ideal for students passionate about culture, humanities and social impact in the Lumbini region."},

  // ── NEPALGUNJ ──
  {name:"Nepalgunj Medical College",loc:"Nepalgunj",regions:NPG,type:"private",tags:["Medicine","Health"],website:"https://ngmc.edu.np",
   courses:["MBBS","Nursing","Pharmacy","Public Health"],
   levels:["Bachelor's","Master's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"The primary private medical college in the Nepalgunj region for MBBS and health science programs."},

  {name:"Nepalgunj Technical College",loc:"Nepalgunj",regions:NPG,type:"private",tags:["Engineering","Technical","IT"],website:"https://ntc.edu.np",
   courses:["Computer Engineering","Civil Engineering","BSc CSIT","BIT","BCA"],
   levels:["Bachelor's"],styles:["Hands-on & practical","Research & theory"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"One of the few engineering colleges in far-western Nepal — a strong local option for technical students."},

  {name:"Banke Bageshwori College",loc:"Nepalgunj",regions:NPG,type:"private",tags:["Management","IT"],website:"https://bankebageshworicollege.edu.np",
   courses:["BBA","BIT","BCA","Sociology","Finance & Accounting"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Start my own business"],
   why:"Established private college in Nepalgunj offering management and IT at accessible fees."},

  {name:"Brightland College",loc:"Nepalgunj",regions:NPG,type:"private",tags:["+2","Management","IT"],website:"https://brightlandcollege.edu.np",
   courses:["BBA","BIT","BCA","BBS","Biology","Sociology"],
   levels:["+2","Bachelor's"],styles:["Group discussions","Hands-on & practical"],goals:["Get a job quickly","Start my own business","Further studies"],
   why:"Growing private college in Nepalgunj with management, IT and science programs."},

  {name:"Sagarmatha College Nepalgunj",loc:"Nepalgunj",regions:NPG,type:"private",tags:["+2","Management","Science"],website:"https://sagarmathacollege.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","BBA","Sociology"],
   levels:["+2","Bachelor's"],styles:["Hands-on & practical","Group discussions"],goals:["Get a job quickly","Further studies"],
   why:"A well-known private college in Nepalgunj with +2 and bachelor's in science, management and humanities."},

  {name:"Mahendra Multiple Campus Nepalgunj",loc:"Nepalgunj",regions:NPG,type:"public",tags:["TU Constituent"],website:"https://mmcnepalgunj.edu.np",
   courses:["Biology","Chemistry","Physics","BBS","Sociology","History","LLB","B.Ed","BSc CSIT"],
   levels:["+2","Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Get a job quickly","Serve my community","Further studies"],
   why:"Main TU campus in Nepalgunj serving far-western and mid-western students at affordable government fees."},

  {name:"Mid-Western University",loc:"Surkhet",regions:NPG,type:"public",tags:["University"],website:"https://mwu.edu.np",
   courses:["Biology","Chemistry","Sociology","History","B.Ed","BBA","BSc CSIT","Environmental Science"],
   levels:["Bachelor's","Master's"],styles:["Research & theory","Group discussions"],goals:["Serve my community","Further studies","Get a job quickly"],
   why:"The main university for mid-western Nepal students, growing rapidly with diverse faculties."},
];

// ── LOGIC ──
function buildSubjects(faculty){
  const c=document.getElementById('subject-opts');
  c.innerHTML='';
  (subjectMap[faculty]||[]).forEach(sub=>{
    const d=document.createElement('div');
    d.className='opt';d.dataset.s='2';d.dataset.v=sub;
    d.innerHTML=`<span class="lbl">${sub}</span>`;
    d.addEventListener('click',()=>toggleOpt(d,2,1));
    c.appendChild(d);
  });
  document.getElementById('n2').disabled=true;
}

function toggleOpt(el,step,max){
  const val=el.dataset.v;
  if(el.classList.contains('sel')){
    el.classList.remove('sel');
    A[step]=(A[step]||[]).filter(v=>v!==val);
  } else {
    if(max===1){
      document.querySelectorAll(`.opt[data-s="${step}"].sel,.loc-opt[data-s="${step}"].sel`).forEach(e=>e.classList.remove('sel'));
      A[step]=[val];
    } else {
      A[step]=A[step]||[];
      A[step].push(val);
    }
    el.classList.add('sel');
  }
  const nb=document.getElementById('n'+step);
  if(nb) nb.disabled=!(A[step]&&A[step].length>0);
}

document.querySelectorAll('.opt[data-s]').forEach(el=>{
  if(+el.dataset.s===2) return;
  el.addEventListener('click',()=>toggleOpt(el,+el.dataset.s,1));
});
document.querySelectorAll('.loc-opt[data-s]').forEach(el=>{
  el.addEventListener('click',()=>toggleOpt(el,4,6));
});

function go(n){
  if(n===2&&A[1]) buildSubjects(A[1][0]);
  document.querySelectorAll('.step').forEach(s=>s.classList.remove('active'));
  document.getElementById('s'+n).classList.add('active');
  const pct=((n-1)/TOTAL)*100;
  document.getElementById('prog').style.width=pct+'%';
  document.getElementById('prog-label').textContent=stepLabels[n-1]||'Results';
  document.getElementById('prog-count').textContent=n<=TOTAL?`Step ${n} of ${TOTAL}`:'Done';
  window.scrollTo({top:0,behavior:'smooth'});
}

function score(c){
  const course=A[2]?A[2][0]:null;
  const level=A[3]?A[3][0]:null;
  const locs=A[4]||[];
  const grade=A[6]?A[6][0]:null;
  const goal=A[7]?A[7][0]:null;
  const style=A[5]?A[5][0]:null;

  // ── HARD DISQUALIFIERS ──
  if(course&&!c.courses.includes(course)) return -1;
  if(level&&!c.levels.includes(level)) return -1;
  const locMatch=locs.includes('Any location')||locs.some(l=>c.regions.includes(l));
  if(!locMatch) return -1;

  let s=0;

  // ── STYLE MATCH (highest weight — most differentiating) ──
  if(style){
    if(c.styles[0]===style) s+=5;       // primary style exact match
    else if(c.styles.includes(style)) s+=3; // secondary match
  }

  // ── GOAL MATCH ──
  if(goal){
    if(c.goals[0]===goal) s+=5;
    else if(c.goals.includes(goal)) s+=3;
  }

  // ── GRADE-BASED FIT ──
  const isTop=c.tags.some(t=>['Top-ranked','Top Medical','Top B-School','Top IT College','Research'].includes(t));
  if(grade==='Excellent'){
    if(isTop) s+=4;
    else if(c.type==='private') s+=2;
    else s+=0;
  } else if(grade==='Good'){
    if(c.type==='private'&&!isTop) s+=3;
    else if(isTop) s+=2;
    else s+=1;
  } else if(grade==='Average'){
    if(c.type==='public') s+=4;
    else if(!isTop) s+=2;
  } else if(grade==='Needs improvement'){
    if(c.type==='public') s+=5;
    else s+=1;
  }

  // ── TYPE PREFERENCE (small nudge, not dominant) ──
  if(c.type==='private') s+=1;

  // ── INTERNATIONAL / AFFILIATION BONUS ──
  if(c.tags.includes('UK Affiliated')) s+=2;
  else if(c.tags.includes('International')) s+=1;

  // ── ENTREPRENEURSHIP GOAL → PREFER STARTUP-FRIENDLY ──
  if(goal==='Start my own business'&&c.tags.includes('Entrepreneurship')) s+=3;

  // ── COMMUNITY GOAL → PREFER PUBLIC ──
  if(goal==='Serve my community'&&c.type==='public') s+=2;

  // ── FURTHER STUDIES → PREFER RESEARCH/TOP ──
  if(goal==='Further studies'&&isTop) s+=2;

  // ── PER-COLLEGE PENALTY ──
  if(c.penalty) s-=c.penalty*0.2;

  // ── TIE-BREAKER: unique offset per college so no two ever tie exactly ──
  s+=colleges.indexOf(c)*0.0001;

  return s;
}

function showResults(){
  const course=A[2]?A[2][0]:'your subject';
  const level=A[3]?A[3][0]:'any level';
  const locs=(A[4]||['Nepal']).filter(l=>l!=='Any location');
  const locStr=locs.length?locs.join(', '):'anywhere in Nepal';

  const scored=colleges.map(c=>({...c,sc:score(c)})).filter(c=>c.sc>=0).sort((a,b)=>b.sc-a.sc);
  const top=scored.slice(0,5);

  document.getElementById('rsub').textContent=`Colleges that actually offer ${course} at ${level} level in ${locStr}.`;
  const cont=document.getElementById('rcont');
  cont.innerHTML='';

  if(top.length===0){
    cont.innerHTML=`<div class="nomatch"><strong>No colleges found</strong>No colleges in our database match this combination for the selected region. Try selecting "Any location" or a different area.</div>`;
  } else {
    const maxSc=top[0].sc;
    const minSc=top[top.length-1].sc;
    const range=Math.max(maxSc-minSc,1);
    top.forEach((c,i)=>{
      const basePct=Math.round(95-((maxSc-c.sc)/range)*35);
      const pct=Math.max(45,Math.min(98,basePct-(c.penalty||0)));
      const d=document.createElement('div');
      d.className='rcard'+(i===0?' top':'');
      d.innerHTML=`
        ${i===0?'<div class="btag">Best match</div>':''}
        <div class="rcard-hd">
          <div class="rcard-title">
            <div class="rname">${c.name}</div>
            <div class="rloc">${c.loc}</div>
          </div>
          <span class="mbadge">${pct}% match</span>
        </div>
        <div class="tags">
          <span class="tag ${c.type}">${c.type==='private'?'Private':'Government'}</span>
          ${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="rwhy">${c.why}</div>
        ${c.website
          ? `<a class="visit-btn" href="${c.website}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Visit website
            </a>`
          : `<span class="no-site">No public website available</span>`
        }`;
      cont.appendChild(d);
    });
  }

  document.querySelectorAll('.step').forEach(s=>s.classList.remove('active'));
  document.getElementById('sR').classList.add('active');
  document.getElementById('prog').style.width='100%';
  document.getElementById('prog-label').textContent='Results';
  document.getElementById('prog-count').textContent='Done';
  window.scrollTo({top:0,behavior:'smooth'});
}

function restart(){
  Object.keys(A).forEach(k=>delete A[k]);
  document.querySelectorAll('.opt,.loc-opt').forEach(el=>el.classList.remove('sel'));
  document.querySelectorAll('button[id^="n"]').forEach(b=>b.disabled=true);
  go(1);
}