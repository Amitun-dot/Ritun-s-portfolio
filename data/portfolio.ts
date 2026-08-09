export const profile = {
  name: "Ritun Panigrahi",
  monogram: "RP",
  title: "Electronics & VLSI Engineer",
  eyebrow: "ECE GRADUATE • FPGA • VLSI • RTL DESIGN",
  tagline: "Building Hardware. Designing Logic. Engineering the Future.",
  intro:
    "Electronics & Telecommunication Engineering graduate specializing in VLSI, FPGA, RTL design, and embedded systems.",
  about: [
    "Electronics and Telecommunication Engineering graduate with a strong foundation in digital electronics, CMOS technology, and VLSI design fundamentals, built through FPGA and semiconductor internships.",
    "Hands-on experience in RTL design, functional verification, simulation, and timing analysis fundamentals using Verilog HDL, with project work spanning processor design, IP core development, DSP pipelines, and embedded systems.",
    "Proficient with Xilinx Vivado and EDA Playground for FPGA design flow — from RTL coding through synthesis and hardware validation — with exposure to CMOS fabrication and the VLSI design flow during a semiconductor internship.",
    "Comfortable with C/Embedded C and Python for automation and testing, with a strong interest in ASIC/VLSI design and verification roles.",
  ],
  email: "panigrahiritun@gmail.com",
  whatsapp: "9827054629",
  whatsappUrl: "https://wa.me/919827054629",
  linkedin: "https://www.linkedin.com/in/ritun-panigrahi-4755b02a3/",
  github: "https://github.com/ritun253254",
};

export const heroRotatingWords = [
  "VLSI Design",
  "FPGA Development",
  "RTL Design",
  "Embedded Systems",
];

export const heroStats = [
  { value: "9.11", label: "CGPA" },
  { value: "B.Tech", label: "E&TC" },
  { value: "2", label: "Internships" },
  { value: "7+", label: "Projects" },
];

export const floatingLabels = ["VERILOG", "FPGA", "RTL", "VLSI", "CMOS", "ASIC"];

export const experiences = [
  {
    id: "01",
    role: "FPGA Design Intern",
    company: "NIT Rourkela",
    period: "May 2025 – June 2025",
    responsibilities: [
      "Designed a parameterized PWM IP core in Verilog for DC motor control on Basys-3 FPGA.",
      "Performed simulation, synthesis, and hardware validation using Xilinx Vivado.",
    ],
    tags: ["Verilog HDL", "FPGA", "Xilinx Vivado", "PWM", "Basys-3", "RTL Design"],
  },
  {
    id: "02",
    role: "VLSI Design Intern",
    company: "CTTC (MSME), Bhubaneswar",
    period: "May 2024 – June 2024",
    responsibilities: [
      "Studied CMOS fabrication and implemented digital circuits using HDL.",
      "Designed combinational and sequential circuits using EDA tools.",
    ],
    tags: ["CMOS", "VLSI", "HDL", "Digital Design", "EDA", "Semiconductor"],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  tags: string[];
  highlights: string[];
  architecture: string[];
  keyLearning: string;
  visualType:
    | "riscv"
    | "pwm"
    | "dsp"
    | "esp32"
    | "radar"
    | "recommendation"
    | "testing";
  image?: string;
};

export const projects: Project[] = [
  {
    id: "riscv-processor",
    number: "01",
    title: "Single Cycle RISC-V Processor Design (RV32I)",
    category: "RTL DESIGN / COMPUTER ARCHITECTURE",
    shortDescription:
      "A 32-bit single-cycle RISC-V processor designed and implemented from scratch in Verilog HDL, covering the RV32I base instruction set.",
    detailedDescription:
      "The design includes all core modules — Program Counter, ALU, Control Unit, Register File, Immediate Generator, and Memory — built to correctly execute R-type, I-type, Load/Store, and Branch instructions. Functional simulation and verification were carried out in Xilinx Vivado to confirm instruction-level correctness. This project reflects a ground-up understanding of computer architecture and how instruction execution maps to hardware.",
    tags: [
      "Verilog HDL",
      "RV32I",
      "RTL Design",
      "ALU",
      "Register File",
      "Control Unit",
      "Xilinx Vivado",
      "Computer Architecture",
    ],
    highlights: [
      "Complete RV32I base instruction set implementation",
      "Single-cycle datapath with PC, ALU, Control Unit, Register File",
      "R-type, I-type, Load/Store, and Branch instruction support",
      "Functional verification in Xilinx Vivado",
    ],
    architecture: ["PC", "Instruction Memory", "Control Unit", "ALU", "Register File", "Memory"],
    keyLearning:
      "Gained a ground-up understanding of computer architecture and how instruction execution maps to physical hardware.",
    visualType: "riscv",
  },
  {
    id: "pwm-ip-core",
    number: "02",
    title: "PWM IP Core Design for Motor Control",
    category: "FPGA / IP CORE",
    shortDescription:
      "A parameterized Pulse Width Modulation (PWM) IP core built in Verilog for DC motor speed control and implemented on a Basys-3 FPGA board.",
    detailedDescription:
      "The core supports configurable duty-cycle logic, allowing motor speed to be adjusted precisely and reused across different frequency and resolution requirements. The project was taken through the complete FPGA design flow — RTL coding, simulation, synthesis, and real hardware validation using Xilinx Vivado — with observed motor behavior confirming correct timing and functionality.",
    tags: ["Verilog", "PWM", "FPGA", "Basys-3", "Xilinx Vivado", "IP Core", "RTL", "Hardware Validation"],
    highlights: [
      "Parameterized duty-cycle logic for flexible motor control",
      "Complete FPGA design flow: RTL → simulation → synthesis → hardware",
      "Hardware validation on Basys-3 with observed motor behavior",
      "Reusable across different frequency and resolution requirements",
    ],
    architecture: ["Duty Cycle Config", "Counter", "Comparator", "PWM Output", "DC Motor"],
    keyLearning:
      "Experienced the complete FPGA design flow from RTL coding through real hardware validation on a physical board.",
    visualType: "pwm",
image: "/motor.png",
  },
  {
    id: "dsp-pipeline",
    number: "03",
    title: "Multirate DSP/FPGA Signal Processing Pipeline",
    category: "DSP / FPGA",
    shortDescription:
      "A multirate digital signal processing pipeline designed in Verilog, featuring a decimator and interpolator alongside 51-tap FIR filters.",
    detailedDescription:
      "The design features a decimator (÷3) and interpolator (×12), alongside 51-tap FIR filters implemented using Q1.15 fixed-point arithmetic for hardware efficiency. The project demonstrates practical DSP hardware concepts including sample-rate conversion, filter design, and fixed-point precision trade-offs. Functionality was verified through simulation using Icarus Verilog.",
    tags: ["Verilog", "DSP", "FPGA", "FIR Filter", "Q1.15", "Decimation", "Interpolation", "Icarus Verilog"],
    highlights: [
      "Decimator (÷3) and interpolator (×12) for sample-rate conversion",
      "51-tap FIR filters with Q1.15 fixed-point arithmetic",
      "Practical DSP hardware concepts: filtering, rate conversion, precision",
      "Simulation verification using Icarus Verilog",
    ],
    architecture: ["INPUT SIGNAL", "DECIMATOR ÷3", "51-TAP FIR", "INTERPOLATOR ×12", "OUTPUT SIGNAL"],
    keyLearning:
      "Understood fixed-point precision trade-offs and sample-rate conversion in practical DSP hardware.",
    visualType: "dsp",
    image: "/DSP.png",
  },
  {
    id: "esp32-monitor",
    number: "04",
    title: "ESP32-Based Environmental Monitoring System",
    category: "EMBEDDED SYSTEMS / IoT",
    shortDescription:
      "An IoT-based embedded system built around the ESP32 microcontroller to monitor real-time temperature and humidity.",
    detailedDescription:
      "The system uses a DHT sensor for environmental measurements and Wi-Fi for continuous data transmission. MQTT provides lightweight communication with a cloud broker, publishing structured JSON sensor data to specific topics for remote monitoring. Built-in error handling manages sensor failures, Wi-Fi disconnections, and MQTT reconnections, allowing the system to continue operating reliably without manual intervention.",
    tags: ["ESP32", "Embedded C", "DHT Sensor", "Wi-Fi", "MQTT", "JSON", "IoT", "Embedded Systems"],
    highlights: [
      "Real-time temperature and humidity monitoring with DHT sensor",
      "MQTT-based cloud communication with structured JSON data",
      "Robust error handling for sensor, Wi-Fi, and MQTT failures",
      "Reliable autonomous operation without manual intervention",
    ],
    architecture: ["DHT SENSOR", "ESP32", "Wi-Fi", "MQTT", "CLOUD"],
    keyLearning:
      "Built a complete IoT system with resilient error handling for sensor, network, and protocol-level failures.",
   visualType: "esp32",
image: "/esp.png",
  },
  {
    id: "ultrasonic-radar",
    number: "05",
    title: "Arduino-Based Ultrasonic Radar System",
    category: "EMBEDDED SYSTEMS / ROBOTICS",
    shortDescription:
      "A radar-style object detection system built on Arduino using an ultrasonic sensor mounted on a servo motor.",
    detailedDescription:
      "The servo-controlled sweep mechanism scans the surrounding area while the ultrasonic sensor measures distances. The system processes and visualizes distance readings to map detected obstacles in real time. Careful debugging of sensor accuracy and motor timing was performed to achieve reliable real-time detection.",
    tags: [
      "Arduino",
      "Embedded C",
      "Ultrasonic Sensor",
      "Servo Motor",
      "GPIO",
      "Sensor Processing",
      "Real-Time Systems",
    ],
    highlights: [
      "Servo-controlled sweep mechanism for area scanning",
      "Real-time ultrasonic distance measurement",
      "Obstacle mapping with visualized readings",
      "Careful calibration of sensor accuracy and motor timing",
    ],
    architecture: ["SERVO SWEEP", "ULTRASONIC SENSOR", "DISTANCE CALC", "OBSTACLE MAP", "DISPLAY"],
    keyLearning:
      "Learned real-time sensor calibration and the importance of timing synchronization between mechanical and sensor subsystems.",
    visualType: "radar",
  },
  {
    id: "job-recommendation",
    number: "06",
    title: "Smart Job Recommendation System",
    category: "PYTHON / SOFTWARE",
    shortDescription:
      "A Python-based recommendation engine that matches user skills to relevant job roles using object-oriented programming and data structures.",
    detailedDescription:
      "SQLite handles data storage, with SQL queries powering efficient data retrieval. The recommendation logic uses keyword matching and basic similarity techniques to surface relevant job roles. The project provides practical experience in building a small but complete data-driven application end to end.",
    tags: ["Python", "SQLite", "SQL", "OOP", "Data Structures", "Recommendation System"],
    highlights: [
      "Keyword matching and similarity-based recommendation logic",
      "SQLite database with efficient SQL retrieval",
      "Object-oriented Python architecture",
      "Complete end-to-end data-driven application",
    ],
    architecture: ["USER SKILLS", "KEYWORD MATCHING", "SIMILARITY ANALYSIS", "DATABASE QUERY", "JOB RECOMMENDATIONS"],
    keyLearning:
      "Gained practical experience building a complete data-driven application end to end with OOP principles.",
    visualType: "recommendation",
image: "/smartjob.png",
  },
  {
    id: "test-automation",
    number: "07",
    title: "Automated Test Data & Unit Testing System",
    category: "PYTHON / TESTING / FLASK",
    shortDescription:
      "A Python + Flask-based system built to automate test data generation and validation.",
    detailedDescription:
      "Unit tests written with Python's unittest framework verify outputs against expected results. Test outcomes are logged in a structured format for easy analysis. The system also performs basic database accuracy checks, reducing manual testing effort and improving overall reliability.",
    tags: ["Python", "Flask", "unittest", "Testing", "SQLite", "Test Automation", "Database Validation"],
    highlights: [
      "Automated test data generation with unittest framework",
      "Structured logging of test outcomes",
      "Database accuracy validation checks",
      "Reduced manual testing effort and improved reliability",
    ],
    architecture: ["TEST CASES", "PASS / FAIL", "DATABASE CHECK", "RESULT LOG"],
    keyLearning:
      "Learned how structured test automation and database validation reduce manual effort and improve reliability.",
    visualType: "testing",
image: "/testing.png",
  },
];

export const skillCategories = [
  {
    title: "Core Hardware / VLSI",
    icon: "Cpu",
    skills: [
      "Verilog HDL",
      "VHDL",
      "RTL Design",
      "FPGA Design",
      "VLSI Design",
      "CMOS Fabrication Fundamentals",
      "Digital Electronics",
      "Analog Electronics",
      "Circuit Analysis",
      "STA Basics",
      "Microprocessor Concepts",
      "Microcontroller Concepts",
    ],
  },
  {
    title: "Embedded Systems",
    icon: "CircuitBoard",
    skills: [
      "Embedded C",
      "Arduino",
      "ESP32",
      "Microcontroller Programming",
      "Sensor Integration",
      "Peripheral Integration",
      "Embedded Hardware Debugging",
      "GPIO",
      "UART",
      "SPI",
      "I2C",
      "MQTT",
    ],
  },
  {
    title: "Software / Programming",
    icon: "Code2",
    skills: ["Python", "SQL", "SQLite", "C", "C++ — familiarity only"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      "Xilinx Vivado",
      "MATLAB",
      "EDA Playground",
      "Icarus Verilog",
      "Microwind3",
      "DSCH2",
      "Flask",
      "MS Excel",
    ],
  },
  {
    title: "Design & Verification",
    icon: "ShieldCheck",
    skills: [
      "Functional Simulation",
      "Synthesis",
      "Hardware Validation",
      "Timing Analysis",
      "Testbench-Level Debugging",
      "RTL Verification",
    ],
    note: "Formal UVM/SystemVerilog verification experience is not claimed.",
  },
  {
    title: "Testing / QA",
    icon: "TestTube",
    skills: [
      "Python unittest",
      "Test Data Preparation",
      "Structured Result Documentation",
      "Database Accuracy Checks",
    ],
  },
];

export const skillNetworkNodes = [
  "RTL",
  "FPGA",
  "VLSI",
  "VERILOG",
  "EMBEDDED",
  "DSP",
  "CMOS",
  "PYTHON",
];

export const education = [
  {
    id: "01",
    institution: "Indira Gandhi Institute of Technology (IGIT), Sarang",
    period: "2022 – 2026",
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    score: "9.11",
    scoreLabel: "CGPA",
  },
  {
    id: "02",
    institution: "Biraja Women's Higher Secondary School",
    period: "2019 – 2021",
    degree: "12th (CHSE)",
    score: "73.5%",
    scoreLabel: "",
  },
  {
    id: "03",
    institution: "Haripur High School",
    period: "2018 – 2019",
    degree: "10th (BSE)",
    score: "74.5%",
    scoreLabel: "",
  },
];

export const profileHighlights = [
  { value: "9.11", label: "CGPA" },
  { value: "2", label: "Engineering Internships" },
  { value: "7+", label: "Technical Projects" },
  { value: "FPGA", label: "Hands-on Hardware" },
  { value: "VLSI", label: "Semiconductor Exposure" },
  { value: "RTL", label: "Verilog Design" },
];

export const rtlToHardwareFlow = [
  "Specification",
  "RTL Coding",
  "Testbench",
  "Functional Simulation",
  "Synthesis",
  "Timing Analysis",
  "FPGA Implementation",
  "Hardware Validation",
];

export const rtlToHardwareTools = ["Verilog", "Vivado", "Icarus Verilog", "EDA Playground", "Basys-3"];

export const vlsiFpgaFlow = [
  "CMOS / VLSI",
  "Digital Design",
  "RTL",
  "Simulation",
  "Synthesis",
  "FPGA",
  "Hardware Validation",
];

export const aboutRtlFlow = ["SPECIFICATION", "RTL", "SIMULATION", "SYNTHESIS", "FPGA", "HARDWARE VALIDATION"];

export const softSkills = [
  { label: "Analytical & Problem-Solving Mindset", icon: "Brain" },
  { label: "Attention to Detail", icon: "ScanSearch" },
  { label: "Written & Verbal Communication", icon: "MessageSquare" },
  { label: "Cross-Functional Collaboration", icon: "Users" },
  { label: "Multitasking", icon: "Layers" },
];

export const languages = ["English", "Hindi", "Odia"];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
