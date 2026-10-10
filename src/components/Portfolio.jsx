import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Mail, ExternalLink, Award, GraduationCap, Briefcase, FileText, Cpu, X, ChevronLeft, ChevronRight, Layers, Terminal, Compass } from 'lucide-react';

const LinkedInIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z" />
  </svg>
);

const GitHubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

const Portfolio = ({ onReplayCan }) => {
  const [activeExperience, setActiveExperience] = useState('rurboo');
  const [projectCategory, setProjectCategory] = useState('all');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'leadership', label: 'Leadership' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProjectModal) return;
      if (e.key === 'ArrowRight') {
        setActiveSlide(prev => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectModal, slides.length]);

  const experiences = {
    rurboo: {
      company: 'RURBOO',
      role: 'Founding Operations & Product Testing Intern',
      period: 'March 2024 - Present • On-ground Operations (U.P., India)',
      bullets: [
        'Led 0-to-1 Go-to-Market strategy and product vision for rural mobility apps, collaborating directly with the Founder to align product roadmap with business scaling metrics.',
        'Authored investor pitch decks for Google for Startups Immersion x ANTLER.',
        'Acted as the core cross-functional bridge between Engineering, Marketing and Operations teams, translating WhatsApp & on-ground operational feedback and behavioural observations into actionable product specs.',
        'Managed deployments via Google Play Console and engineered rigorous QA testing to resolve critical software bugs, scaling user acquisition to 500+ riders and 100+ drivers.'
      ]
    },
    isi: {
      company: 'ISI Kolkata',
      role: 'Data Science Intern @ Indian Statistical Institute',
      period: 'July 2024 - Oct 2024 • Kolkata, India',
      bullets: [
        'Benchmarked 5+ enterprise BI platforms including Tableau, Power BI, and QlikSense.',
        'Executed predictive sales analysis by building interactive dashboards and project analysis reports using data visualization.',
        'Structured predictive models in Excel and presented strategic decks in PowerPoint to stakeholders.'
      ]
    }
  };

  const projects = [
    // CATEGORY 1: CASE STUDIES & PPT DECKS
    {
      id: 'youtube-teardown',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Product Teardown',
      title: 'YouTube Product Teardown',
      subtitle: 'An in-depth look at Google\'s video platform • By Srijita Chakraborty',
      thumbnail: '/youtube_teardown_thumb.png',
      tags: ['Product Teardown', 'User Experience', 'Feature Analysis', 'Google YouTube', 'PM Case Study'],
      desc: 'An in-depth strategic product teardown of Google\'s video platform (YouTube), analyzing user friction, core engagement loops, feature architecture, and product growth opportunities.',
      bullets: [
        'Deconstructed YouTube\'s core user journeys, content discovery algorithms, and creator-to-viewer engagement funnel.',
        'Identified key user friction points in mobile video consumption and recommendations.',
        'Formulated actionable feature recommendations & product enhancement strategies.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/YouTube-Product-Teardown-39eb6ed403f98084ae3cf5246cf8b534',
      linkText: 'View Product Teardown'
    },
    {
      id: 'pinterest-affiliate-strategy',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Business Strategy',
      title: 'Pinterest Affiliate Business Strategy',
      subtitle: 'A scalable, replicable model, using fashion as the working profile • By Srijita Chakraborty',
      thumbnail: '/pinterest_strategy_thumb.png',
      tags: ['Business Strategy', 'Affiliate Marketing', 'Growth Model', 'User Funnel', 'Fashion Tech'],
      desc: 'Designed a scalable, replicable affiliate business strategy leveraging Pinterest user behavior and aesthetic curation, using fashion as a primary working profile to optimize conversion funnels.',
      bullets: [
        'Built a high-converting affiliate marketing framework utilizing Pinterest visual search & board curation.',
        'Mapped end-to-end user traffic flow from pin discovery to affiliate click-through and monetization.',
        'Formulated scalable content automation & audience growth benchmarks for fashion e-commerce.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/Pinterest-Affiliate-Business-Strategy-384b6ed403f98052a51dde54049a42a3',
      linkText: 'View Pinterest Strategy'
    },
    {
      id: 'rurboo-case-study',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Pitch Deck',
      title: 'RURBOO: Connecting Rural India',
      subtitle: 'India\'s First Dedicated Rural Mobility Platform • Google for Startups Immersion x ANTLER',
      thumbnail: '/rurboo_deck_thumb.png',
      tags: ['0-to-1 Product Strategy', 'Rural Mobility', 'Google for Startups', 'Investor Pitch Deck', 'Operations'],
      desc: 'India\'s first dedicated rural mobility platform bringing reliable, affordable, and accessible transport to 600 million underserved rural Indians. Scaled to 500+ riders and 100+ drivers.',
      bullets: [
        'Led 0-to-1 Go-to-Market strategy, product vision, and investor deck for Google for Startups Immersion x ANTLER.',
        'Translated on-ground operational feedback into actionable product roadmap and user story maps.',
        'Engineered QA deployments via Google Play Console to drive acquisition and driver onboarding.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/RURBOO-Rural-Mobility-platform-in-India-3f4b6ed403f98030858df0d3400d8aa9',
      linkText: 'View RURBOO Case Study'
    },
    {
      id: 'habit-tracker-teens',
      category: 'case-study',
      categoryLabel: 'PM Case Study / User Research',
      title: 'Habit Tracking Behaviour in Teenagers',
      subtitle: 'Behavioral Research & Product Design for Teen Routine Building • By Srijita Chakraborty',
      thumbnail: '/habit_tracker_thumb.png',
      tags: ['User Research', 'Behavioral Science', 'Product Design', 'Teen Demographics', 'Habit Loops'],
      desc: 'Conducted qualitative on-ground behavioral research and user interviews to analyze habit formation patterns in teenagers, designing a high-retention routine building app tailored to teen psychology.',
      bullets: [
        'Executed field interviews and observational studies to identify friction in teen habit consistency.',
        'Mapped core motivation triggers, social accountability loops, and gamification reward mechanics.',
        'Formulated end-to-end product requirements (PRD) and UI wireframes for teen routine management.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/Habit-Tracking-Habits-in-Teens-3f4b6ed403f980f092d5cca8870e36f0',
      linkText: 'View Habit Tracking Study'
    },
    {
      id: 'nykaa-growth-retention',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Product Strategy',
      title: 'User Growth & Retention Strategy - Nykaa',
      subtitle: 'Introducing "Rituals" & Beauty Circles PM Deck • By Srijita Chakraborty',
      thumbnail: '/nykaa_strategy_thumb.png',
      tags: ['User Retention', 'Growth Strategy', 'E-Commerce', 'Personalization', 'Nykaa'],
      desc: 'Formulated a comprehensive user growth and retention strategy for Nykaa by introducing "Rituals" — a personalized daily content & skincare recommendation engine designed to increase daily active user (DAU) engagement and repeat purchase frequency.',
      bullets: [
        'Designed "Rituals" home-screen engagement module delivering curated skincare tips and personalized product recommendations.',
        'Formulated "Beauty Circles" social community features to drive user-generated content (UGC) and organic retention loops.',
        'Mapped key retention metrics (DAU/MAU ratio, repeat purchase rate, and LTV optimization) for Nykaa e-commerce.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/User-Growth-Retention-Strategy-Nykaa-3f4b6ed403f98061ac5ddd4221633a92',
      linkText: 'View Nykaa Growth Strategy'
    },
    {
      id: 'market-masters-commodities',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Corporate Strategy',
      title: 'Market Masters : Winning with Commodities',
      subtitle: 'EY CAFTA 2026 Case Competition Submission • By Srijita Chakraborty',
      thumbnail: '/ey_cafta_thumb.png',
      tags: ['Commodities Trading', 'Corporate Strategy', 'EY CAFTA 2026', 'Financial Modeling', 'Market Analysis'],
      desc: 'Developed a strategic commodities trading and market analysis framework for the EY CAFTA 2026 Case Challenge, optimizing supply chain risk, hedging mechanisms, and commodity market expansion.',
      bullets: [
        'Benchmarked global commodity market trends and price volatility patterns for strategic positioning.',
        'Formulated risk mitigation strategies and hedging models for enterprise supply chain operations.',
        'Presented executive deck detailing financial projections and market entry roadmaps for EY CAFTA.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/Market-Masters-Winning-with-commodities-3f4b6ed403f9801b8b8ff8398d7fee30',
      linkText: 'View EY CAFTA Case Strategy'
    },
    {
      id: 'pharmashe-case-study',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Healthcare Strategy',
      title: 'PharmaShe: Women Cancer Pharmaceutical Platform',
      subtitle: 'Birth of A New Paradigm in Pharma Innovation • Women in AI Accelerator',
      thumbnail: '/pharmashe_deck_thumb.png',
      tags: ['Healthcare Strategy', 'Women Cancer AI', 'Pharma Innovation', 'Clinical Research', 'Agentic AI'],
      desc: 'Accelerating clinical research & commercialization in women cancer pharmaceuticals by replacing traditional high-cost R&D with agentic AI swarm architectures, reducing oncology drug trial latency and failure rates.',
      bullets: [
        'Engineered strategic framework for AI agent swarms in women oncology clinical research & drug repurposing.',
        'Understood patient & researcher pain points through qualitative interviews in Women in AI Accelerator.',
        'Formulated commercialization roadmaps to decrease R&D lead times and variant matching accuracy.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/PharmaShe-Women-Cancer-Pharmaceutical-platform-3f4b6ed403f9808486fdc46b5b3735bb',
      linkText: 'View PharmaShe Case Study'
    },
    {
      id: 'mobilab-case-study',
      category: 'case-study',
      categoryLabel: 'PM Case Study / Healthcare Strategy',
      title: 'MOBILAB: Smarter Health For All',
      subtitle: 'Business Case Study • IIT Guwahati',
      thumbnail: '/mobilab_deck_thumb.png',
      tags: ['Healthcare Strategy', 'Business Case Study', 'IIT Guwahati', 'HealthTech', 'Go-to-Market'],
      desc: 'Formulated a comprehensive business case study for MOBILAB, a point-of-care medical diagnostics platform delivering affordable and accessible healthcare testing across underserved regions.',
      bullets: [
        'Developed business model framework and market entry strategy for MOBILAB point-of-care diagnostic devices presented at IIT Guwahati.',
        'Analyzed healthcare accessibility gaps, unit economics, and diagnostic distribution networks across rural and tier-2/3 Indian markets.',
        'Formulated strategic scaling roadmaps to lower diagnostic testing latency and cost for primary healthcare providers.'
      ],
      externalUrl: 'https://breezy-shade-b78.notion.site/MOBILAB-Case-Study-3f5b6ed403f980eb8ef7c3abf92d2bb1',
      linkText: 'View MOBILAB Case Study'
    },

    // CATEGORY 2: TECH & AI PROJECTS
    {
      id: 'pharmashe-ai',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'PharmaShe: AI Women Cancer Research & Wellness Hub',
      subtitle: 'Dual-Portal Agentic AI Platform • Women in AI Accelerator',
      thumbnail: '/pharmashe_build_thumb.png',
      tags: ['Google Gemini Flash 1.5', 'Agentic AI', 'ReactJS', 'FastAPI', 'Python', 'PostgreSQL'],
      desc: 'Developed a dual-portal AI Women Cancer Pharmaceutical research & wellness hub powered by Google Gemini Flash 1.5. Understood user pain points through 6+ qualitative user interviews during the Women in AI Accelerator.',
      bullets: [
        'Engineered a 7-agent swarm backend powered by Google Gemini Flash 1.5 that cut query latency by 40% and achieved 99.4% variant matching accuracy.',
        'Built empathetic voice-bot interface for patients and an agentic drug repurposing hub for researchers.'
      ],
      demoUrl: 'https://pharma-she-oqxo.vercel.app/dashboard',
      githubUrl: 'https://github.com/srijitachakrabortyy/PharmaShe',
      externalUrl: 'https://pharma-she-oqxo.vercel.app/dashboard',
      linkText: 'Explore Live Demo & Code'
    },
    {
      id: 'uhi-prediction',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'Urban Heat Island (UHI) Surface Temperature Prediction',
      subtitle: 'Geospatial Machine Learning & Microclimate Analytics • Satellite Data',
      thumbnail: '/uhi_prediction_thumb.jpg',
      tags: ['Python', 'Machine Learning', 'Geospatial Analytics', 'Remote Sensing', 'Satellite Data', 'Environmental AI'],
      desc: 'Engineered a machine learning and geospatial analytics framework to predict Urban Heat Island (UHI) effects and Land Surface Temperatures (LST) from satellite imagery, enabling data-driven climate-resilient urban planning.',
      bullets: [
        'Processed multispectral satellite remote sensing imagery to extract Land Surface Temperature (LST), NDVI, and NDBI indices across urban microclimates.',
        'Trained predictive ML algorithms to map urban heat hotspots, analyze land cover correlations, and quantify microclimate temperature variations.'
      ],
      githubUrl: 'https://github.com/srijitachakrabortyy/Urban-Heat-Island-UHI_Prediction',
      externalUrl: 'https://github.com/srijitachakrabortyy/Urban-Heat-Island-UHI_Prediction',
      linkText: 'Explore GitHub Repo & Code'
    },
    {
      id: 'music-soul',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'MusicSoul: Iconic Character x Music Match',
      subtitle: 'Interactive Music Personality & Character Discovery App',
      thumbnail: '/musicsoul_thumb.png',
      tags: ['ReactJS', 'Web App', 'UI/UX Design', 'Music Analytics', 'Vercel', 'JavaScript'],
      desc: 'Built MusicSoul, an engaging interactive web application that analyzes user musical taste and matches them with iconic movie characters who share their musical soul.',
      bullets: [
        'Engineered dynamic interactive quiz & matching logic pairing user audio preferences with cinematic character archetypes.',
        'Designed sleek, dark-mode user interface featuring neon glow accents, micro-animations, and responsive layout deployed on Vercel.'
      ],
      demoUrl: 'https://music-soul-murex.vercel.app/',
      githubUrl: 'https://github.com/srijitachakrabortyy/MusicSoul',
      externalUrl: 'https://music-soul-murex.vercel.app/',
      linkText: 'Explore Live App & Code'
    },
    {
      id: 'whatsapp-tts',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'WhatsApp Chat Text-to-Speech (TTS)',
      subtitle: 'Accessibility & Voice Synthesis Tool • Web Application',
      thumbnail: '/whatsapp_tts_thumb.png',
      tags: ['Text-to-Speech (TTS)', 'Speech Synthesis', 'Web Audio API', 'ReactJS', 'Vercel', 'Accessibility UI'],
      desc: 'Developed a web application that converts long WhatsApp chat threads and itinerary messages into natural-sounding audio playback using Text-to-Speech (TTS) synthesis.',
      bullets: [
        'Engineered seamless audio playback engine with "Listen to Chat" controls for hands-free WhatsApp message listening.',
        'Designed authentic WhatsApp UI experience with real-time text parsing and audio synthesis for accessibility.'
      ],
      demoUrl: 'https://whats-app-chat-text-to-speech-tts.vercel.app/',
      githubUrl: 'https://github.com/srijitachakrabortyy/WhatsApp-Chat-Text-to-Speech-TTS',
      externalUrl: 'https://whats-app-chat-text-to-speech-tts.vercel.app/',
      linkText: 'Explore Live App & Code'
    },
    {
      id: 'baml-treasury',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'BAML: Global Risk & Algorithmic Execution Engine',
      subtitle: 'Institutional Treasury, 3D Multilateral Netting & Volatility Platform',
      thumbnail: '/baml_thumb.png',
      tags: ['Full-Stack', 'FinTech Engine', '3D Topology Graph', 'Options Volatility', 'Basel III Gauges', 'ReactJS', 'Vercel'],
      desc: 'Built BAML, a full-stack corporate treasury settlement, global risk analytics, and algorithmic execution engine featuring 3D multilateral netting topology graphs and real-time Basel III risk gauges.',
      bullets: [
        'Engineered 3D multilateral netting node topology graphs optimizing cross-border capital settlement cycles across international hubs.',
        'Integrated real-time options volatility surface matrices, LME commodity trackers, and corporate risk metrics (Liquidity, Credit, VaR).'
      ],
      demoUrl: 'https://baml-liard.vercel.app/',
      githubUrl: 'https://github.com/srijitachakrabortyy/BAML',
      externalUrl: 'https://baml-liard.vercel.app/',
      linkText: 'Explore Live App & Code'
    },
    {
      id: 'glaucoma-roi',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'Glaucoma ROI Detection & Retinal Image Segmentation',
      subtitle: 'Medical Image Processing & Computer Vision Pipeline • Python',
      thumbnail: '/glaucoma_roi_thumb.png',
      tags: ['Python', 'Computer Vision', 'OpenCV', 'Medical Imaging', 'Optic Disc Extraction', 'Biomedical AI'],
      desc: 'Developed an automated computer vision pipeline for Glaucoma Region of Interest (ROI) detection, segmenting the optic disc and cup regions from fundus retinal image scans.',
      bullets: [
        'Engineered image preprocessing & thresholding techniques to automatically isolate the optic disc ROI from full retinal fundus scans.',
        'Optimized localized feature extraction to accelerate downstream clinical glaucoma risk assessment and cup-to-disc ratio (CDR) calculations.'
      ],
      githubUrl: 'https://github.com/srijitachakrabortyy/Glaucoma-ROI-Detection',
      externalUrl: 'https://github.com/srijitachakrabortyy/Glaucoma-ROI-Detection',
      linkText: 'Explore GitHub Repo & Pipeline'
    },
    {
      id: 'iris-visualization',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'Iris Dataset Exploratory Data Analysis & Visualization',
      subtitle: 'Statistical Data Analytics & Pair Plot Feature Exploration • Python',
      thumbnail: '/iris_viz_thumb.png',
      tags: ['Python', 'Exploratory Data Analysis', 'Seaborn', 'Matplotlib', 'Pandas', 'Feature Engineering'],
      desc: 'Built comprehensive exploratory data analysis (EDA) and multivariate visualization suites analyzing Iris flower morphological feature distributions across species classification clusters.',
      bullets: [
        'Constructed multi-dimensional Seaborn pair plots and KDE distribution matrices to analyze feature variance and class separability.',
        'Extracted statistical correlation insights between sepal/petal dimensions to inform baseline machine learning classification models.'
      ],
      githubUrl: 'https://github.com/srijitachakrabortyy/Iris-dataset-visualization',
      externalUrl: 'https://github.com/srijitachakrabortyy/Iris-dataset-visualization',
      linkText: 'Explore GitHub Repo & Notebook'
    },
    {
      id: 'sales-report',
      category: 'tech-ai',
      categoryLabel: 'Tech & AI Build Project',
      title: 'Enterprise Sales Analysis & BI Executive Dashboard',
      subtitle: 'Predictive Sales Modeling, Segment Profitability & BI Dashboards',
      thumbnail: '/sales_report_thumb.png',
      tags: ['Business Intelligence', 'Sales Analytics', 'Power BI / Tableau', 'Data Visualization', 'Profitability Modeling', 'Python / Excel'],
      desc: 'Built an interactive enterprise Sales Analysis Dashboard tracking multi-million sales revenues, regional profit distributions, and product category performance metrics.',
      bullets: [
        'Engineered executive KPI modules tracking $12.64M total sales, annual growth trends (43.00L in 2014), and category-level profit margins.',
        'Constructed regional profitability breakdowns and customer segment sales share (Consumer, Corporate, Home Office) to optimize revenue strategy.'
      ],
      githubUrl: 'https://github.com/srijitachakrabortyy/Sales-report',
      externalUrl: 'https://github.com/srijitachakrabortyy/Sales-report',
      linkText: 'Explore GitHub Repo & Dashboard'
    }
  ];

  const achievements = [
    {
      title: 'Amazon ML Summer School Mentee 2026',
      desc: 'Selected among Top 3000 students nationally out of a 1.4 Lakh applicant pool.',
      tag: 'National Top 2%'
    },
    {
      title: 'Google for Startups Immersion x ANTLER Mentee - Phase 1 2026',
      desc: 'Represented RURBOO (Selected among Top 500 Startups nationally).',
      tag: 'Google Accelerator'
    },
    {
      title: 'Women in AI Accelerator Mentee - Build Club 2026',
      desc: 'Selected for the selective Accelerator program worldwide.',
      tag: 'Global Accelerator'
    },
    {
      title: 'IdeaXchange Product Management Mentee 2026',
      desc: 'Selected among Top 12 candidates for phase 2 out of 70 selected candidates.',
      tag: 'Top 12 Select'
    },
    {
      title: 'IMC Trading Prosperity 4 Finalist 2026',
      desc: 'Selected as World Finalist (Rank: 3895 Semifinals & Rank: 3344 Finals).',
      tag: 'World Finalist'
    },
    {
      title: 'Economic Times GenAI Hackathon Semi-Finalist 2026',
      desc: 'Selected among Top semi-finalists nationally.',
      tag: 'National GenAI'
    },
    {
      title: 'EY Techathon Pre-Finalist 2025 & ICPC AlgoQueen Finalist 2024',
      desc: 'Recognized among top competitive coding and techathon finalists in India.',
      tag: 'National Finalist'
    }
  ];

  const skillCategories = [
    {
      title: 'Product Management & Strategy',
      icon: Layers,
      skills: [
        { name: 'SDLC & PRD Writing', bg: '#E2F7E2', text: '#2D7A2D' },
        { name: '0→1 Go-To-Market Strategy', bg: '#E0F2FE', text: '#0369A1' },
        { name: 'Feature Prioritization', bg: '#FFECE5', text: '#C2410C' },
        { name: 'User Story Mapping', bg: '#FFF7ED', text: '#EA580C' },
        { name: 'Product Vision & Roadmap', bg: '#F3E8FF', text: '#7E22CE' },
        { name: 'Cross-functional Leadership', bg: '#FEF3C7', text: '#B45309' }
      ]
    },
    {
      title: 'AI, ML & Engineering',
      icon: Cpu,
      skills: [
        { name: 'Agentic AI Architecture', bg: '#F3E8FF', text: '#7E22CE' },
        { name: 'Google Gemini Flash 1.5', bg: '#E0F2FE', text: '#0284C7' },
        { name: 'LLM Prompting & API Integration', bg: '#FCE7F3', text: '#BE185D' },
        { name: 'Python, SQL & FastAPI', bg: '#FFE4E6', text: '#E11D48' },
        { name: 'Play Console Deployment & QA', bg: '#DCFCE7', text: '#15803D' }
      ]
    },
    {
      title: 'Analytics & Business Intelligence',
      icon: Terminal,
      skills: [
        { name: 'Enterprise BI Benchmarking', bg: '#FEF3C7', text: '#B45309' },
        { name: 'Power BI & Tableau', bg: '#E0F2FE', text: '#0369A1' },
        { name: 'Predictive Sales Modeling (Excel)', bg: '#E2F7E2', text: '#2D7A2D' },
        { name: 'QlikSense & Dashboarding', bg: '#FFF7ED', text: '#C2410C' }
      ]
    },
    {
      title: 'Domain & Venture Scaling',
      icon: Compass,
      skills: [
        { name: 'Rural Mobility & Logistics', bg: '#E2F7E2', text: '#15803D' },
        { name: 'Healthcare & Cancer AI', bg: '#FCE7F3', text: '#BE185D' },
        { name: 'Google for Startups Pitching', bg: '#E0F2FE', text: '#0369A1' },
        { name: 'Investor Deck Authoring', bg: '#F3E8FF', text: '#6B21A8' }
      ]
    }
  ];

  const filteredProjects = projectCategory === 'all'
    ? projects
    : projects.filter(p => p.category === projectCategory);

  return (
    <div className="pokemon-portfolio-container">

      {/* Top Navigation Header */}
      <header className="pokemon-nav-bar flex-between">
        <button
          className="back-to-can-btn"
          onClick={() => {
            onReplayCan();
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Can</span>
        </button>
      </header>

      {/* Main Grid Layout */}
      <main className="pokemon-grid-layout">

        {/* LEFT SIDEBAR CARD */}
        <aside className="pokemon-sidebar-card">
          <div className="card-header-badge">
            <div className="google-dots mini">
              <span className="g-dot blue"></span>
              <span className="g-dot red"></span>
              <span className="g-dot yellow"></span>
              <span className="g-dot green"></span>
            </div>
            <span className="badge-text">PRODUCT MANAGEMENT PORTFOLIO</span>
          </div>

          {/* Profile Photo */}
          <div className="avatar-frame-container">
            <img
              src="/srijita_avatar.jpg"
              alt="Srijita Chakraborty"
              className="srijita-avatar-img"
            />
          </div>

          {/* Profile Name & Credentials */}
          <div className="profile-info-block">
            <h1 className="profile-name">Srijita Chakraborty</h1>
            <p className="profile-role">B.E. IT @ UIT Burdwan University</p>
            <p className="profile-years">(2023 – 2027)</p>
            <p className="profile-tagline">0-to-1 Product Builder • Focused on User Impact & Problem Solving</p>

            <div className="location-pill">
              <MapPin size={14} className="location-icon" />
              <span>West Bengal, India</span>
            </div>
          </div>

          {/* Links & Contact Section */}
          <div className="sidebar-skills-block">
            <h3 className="skills-heading">LINKS & CONTACT</h3>
            <div className="links-list-wrapper">
              <a 
                href="https://www.linkedin.com/in/srijitachakrabortyy/" 
                target="_blank" 
                rel="noreferrer" 
                className="sidebar-link-item"
              >
                <div className="flex-align-gap">
                  <LinkedInIcon size={14} />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink size={14} />
              </a>

              <a 
                href="https://github.com/srijitachakrabortyy" 
                target="_blank" 
                rel="noreferrer" 
                className="sidebar-link-item"
              >
                <div className="flex-align-gap">
                  <GitHubIcon size={14} />
                  <span>GitHub Repos</span>
                </div>
                <ExternalLink size={14} />
              </a>

              <a 
                href="mailto:csrijita10@gmail.com" 
                className="sidebar-link-item"
              >
                <div className="flex-align-gap">
                  <Mail size={14} />
                  <span>csrijita10@gmail.com</span>
                </div>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT FLASHCARD SLIDE DECK */}
        <section className="flashcard-deck-wrapper">

          {/* Top Slide Selector Tabs */}
          <div className="flashcard-tabs-bar">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`flashcard-tab-btn ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <span className="tab-num-badge">{index + 1}</span>
                <span>{slide.label}</span>
              </button>
            ))}
          </div>

          {/* Active Flashcard Slide Container */}
          <div key={activeSlide} className="flashcard-slide-box">
            <div className="flashcard-slide-content">

              {/* SLIDE 0: ABOUT */}
              {activeSlide === 0 && (
                <div className="about-slide-wrap">
                  <div className="card-title-header">
                    <div className="google-dots">
                      <span className="g-dot blue"></span>
                      <span className="g-dot red"></span>
                      <span className="g-dot yellow"></span>
                      <span className="g-dot green"></span>
                    </div>
                    <h2>About Me</h2>
                  </div>

                  <div className="about-text-content">
                    <p>
                      I'm <strong>Srijita</strong>, an Information Technology Engineering student at <strong>University Institute of Technology, Burdwan University</strong>, an aspiring Product Manager and an AI/ML enthusiast.
                    </p>
                    <p>
                      I specialize in taking products from <strong>0 to 1</strong> — combining Go-To-Market strategy, user story mapping, behavioral operations observations, and agentic AI architectures to build scalable digital experiences.
                    </p>
                    <p>
                      From leading product vision for rural mobility apps at <strong>RURBOO</strong> as an intern (scaling to 500+ riders and 100+ drivers; selected for <strong>Google for Startups Immersion x ANTLER - Phase 1</strong>) to benchmarking enterprise BI platforms at <strong>Indian Statistical Institute, Kolkata</strong> and building side projects, I build at the intersection of product vision and emerging tech. Currently for my final year project I'm working on <em>Statistical Comparison of Vision Transformer models for Medical Image Segmentation.</em>
                    </p>
                    <p>
                      Throughout my college years, I tried to participate in various competitions and collaborated with amazing people out there :)
                    </p>
                    <p>
                      My favourite product is <strong>YouTube</strong> because I use it 24x7 for all purposes!
                    </p>
                    <p className="talk-line">
                      Want to talk product, AI, or collaborations? Reach out at{' '}
                      <a href="mailto:csrijita10@gmail.com" className="email-link">
                        csrijita10@gmail.com
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 1: EXPERIENCE */}
              {activeSlide === 1 && (
                <div className="experience-slide-wrap">
                  <div className="card-title-header">
                    <div className="google-dots">
                      <span className="g-dot blue"></span>
                      <span className="g-dot red"></span>
                      <span className="g-dot yellow"></span>
                      <span className="g-dot green"></span>
                    </div>
                    <h2>Work Experience</h2>
                  </div>

                  <div className="experience-split-view">
                    <div className="company-tab-list">
                      {Object.keys(experiences).map((key) => {
                        const item = experiences[key];
                        const isActive = activeExperience === key;
                        return (
                          <button
                            key={key}
                            className={`company-tab-item ${isActive ? 'active' : ''}`}
                            onClick={() => setActiveExperience(key)}
                          >
                            {item.company}
                          </button>
                        );
                      })}
                    </div>

                    <div className="experience-detail-panel">
                      <h3 className="role-headline">
                        {experiences[activeExperience].role}
                      </h3>
                      <div className="role-period">
                        {experiences[activeExperience].period}
                      </div>

                      <ul className="role-bullets-list">
                        {experiences[activeExperience].bullets.map((bullet, idx) => (
                          <li key={idx}>
                            <span className="green-arrow">▷</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: PROJECTS */}
              {activeSlide === 2 && (
                <div className="projects-slide-wrap">
                  <div className="card-title-header flex-between">
                    <div className="flex-title">
                      <div className="google-dots">
                        <span className="g-dot blue"></span>
                        <span className="g-dot red"></span>
                        <span className="g-dot yellow"></span>
                        <span className="g-dot green"></span>
                      </div>
                      <h2>Projects & Case Studies</h2>
                    </div>

                    <div className="project-category-tabs">
                      <button
                        className={`proj-tab-pill ${projectCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setProjectCategory('all')}
                      >
                        All ({projects.length})
                      </button>
                      <button
                        className={`proj-tab-pill ${projectCategory === 'case-study' ? 'active' : ''}`}
                        onClick={() => setProjectCategory('case-study')}
                      >
                        <FileText size={14} />
                        Case Studies & Decks
                      </button>
                      <button
                        className={`proj-tab-pill ${projectCategory === 'tech-ai' ? 'active' : ''}`}
                        onClick={() => setProjectCategory('tech-ai')}
                      >
                        <Cpu size={14} />
                        Tech & AI Builds
                      </button>
                    </div>
                  </div>

                  <div className="projects-cards-grid">
                    {filteredProjects.map((p) => (
                      <div
                        key={p.id}
                        className="project-item-card"
                      >
                        {p.thumbnail && (
                          <div className="proj-card-thumb-container">
                            <img src={p.thumbnail} alt={p.title} className="proj-card-thumb-img" />
                          </div>
                        )}
                        <div className="proj-card-top">
                          <span className="proj-category-badge">{p.categoryLabel}</span>
                        </div>

                        <h3 className="proj-card-title">{p.title}</h3>
                        <p className="proj-card-subtitle">{p.subtitle}</p>
                        <p className="proj-card-desc">{p.desc}</p>

                        <div className="project-tech-tags">
                          {p.tags.map((tag, idx) => (
                            <span key={idx} className="tech-chip">{tag}</span>
                          ))}
                        </div>

                        <ul className="role-bullets-list mt-12">
                          {p.bullets.map((bullet, idx) => (
                            <li key={idx}>
                              <span className="green-arrow">▷</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          className="proj-action-btn"
                          onClick={() => setSelectedProjectModal(p)}
                        >
                          <span>{p.linkText}</span>
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3: SKILLS */}
              {activeSlide === 3 && (
                <div className="skills-slide-wrap">
                  <div className="card-title-header">
                    <div className="google-dots">
                      <span className="g-dot blue"></span>
                      <span className="g-dot red"></span>
                      <span className="g-dot yellow"></span>
                      <span className="g-dot green"></span>
                    </div>
                    <h2>Core Skills & Competencies</h2>
                  </div>

                  <div className="skills-category-grid">
                    {skillCategories.map((cat, idx) => {
                      const IconComp = cat.icon;
                      return (
                        <div key={idx} className="skills-category-card">
                          <div className="skills-cat-header">
                            <IconComp size={18} className="skills-cat-icon" />
                            <h3 className="skills-cat-title">{cat.title}</h3>
                          </div>
                          <div className="skills-pills-row">
                            {cat.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="skill-pill-chip"
                                style={{ backgroundColor: skill.bg, color: skill.text }}
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SLIDE 4: ACHIEVEMENTS */}
              {activeSlide === 4 && (
                <div className="achievements-slide-wrap">
                  <div className="card-title-header">
                    <div className="google-dots">
                      <span className="g-dot blue"></span>
                      <span className="g-dot red"></span>
                      <span className="g-dot yellow"></span>
                      <span className="g-dot green"></span>
                    </div>
                    <h2>Honours & Achievements</h2>
                  </div>

                  <div className="achievements-list-grid">
                    {achievements.map((item, idx) => (
                      <div key={idx} className="achievement-item-row">
                        <div className="achieve-left">
                          <Award size={18} className="achieve-icon" />
                          <div>
                            <h4 className="achieve-title">{item.title}</h4>
                            <p className="achieve-desc">{item.desc}</p>
                          </div>
                        </div>
                        <span className="achieve-tag">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 5: LEADERSHIP */}
              {activeSlide === 5 && (
                <div className="leadership-slide-wrap">
                  <div className="card-title-header">
                    <div className="google-dots">
                      <span className="g-dot blue"></span>
                      <span className="g-dot red"></span>
                      <span className="g-dot yellow"></span>
                      <span className="g-dot green"></span>
                    </div>
                    <h2>Leadership & Education</h2>
                  </div>

                  <div className="leadership-content-grid">
                    <div className="leadership-block">
                      <h3><GraduationCap size={18} /> Education</h3>
                      <p><strong>University Institute of Technology, Burdwan University</strong> (2023 - 2027)</p>
                      <p className="sub-text">B.E. Information Technology • Burdwan, West Bengal</p>
                    </div>

                    <div className="leadership-block">
                      <h3><Briefcase size={18} /> Leadership & Open Source</h3>
                      <p><strong>Core Member (AI/ML & PR Lead) — Coding Junction (UIT, BU)</strong> (April 2025 - Present)</p>
                      <p className="sub-text">Organized tech events, taught tech skills & AI concepts to 100+ UG students.</p>

                      <p className="mt-12"><strong>Open Source Contributor — OHC Network / docs.getbindu.com</strong></p>
                      <p className="sub-text">Contributed AI-assisted plagiarism API, integration tests, and LLM extraction scripts.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Flashcard Slide Navigation Footer */}
            <div className="flashcard-footer-nav">
              <button
                className="slide-nav-btn"
                onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                disabled={activeSlide === 0}
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="slide-indicators-group">
                <span className="slide-counter-label">{activeSlide + 1} of {slides.length}</span>
                <div className="slide-dots-row">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      className={`slide-dot-indicator ${activeSlide === idx ? 'active' : ''}`}
                      onClick={() => setActiveSlide(idx)}
                      title={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                className="slide-nav-btn"
                onClick={() => setActiveSlide(prev => Math.min(slides.length - 1, prev + 1))}
                disabled={activeSlide === slides.length - 1}
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </section>

      </main>

      {/* PORTFOLIO MAIN PAGE FOOTER */}
      <footer className="portfolio-main-footer">
        {/* Lace Border Top Accent */}
        <div className="lace-border-trim lace-top">
          <img src="/lace_border.png" alt="Lace Border" className="lace-border-img" />
        </div>

        <div className="footer-container-inner">
          {/* Centered Pink Flower */}
          <div className="pink-flower-center-wrapper">
            <img src="/pink_flower.png" alt="Pink Flower" className="pink-flower-center-img" />
          </div>

          <div className="footer-details-group">
            <p className="footer-copy-line">Diet Coke © The Coca-Cola Company. An unofficial fan project.</p>
            <p className="footer-copy-line">In 2026, Srijita Chakraborty. Writing, art & code are mine, made with love. No personal data collected.</p>
            <p className="footer-handle-line">Srijitachakrabortyy 🤍</p>
          </div>
        </div>

        {/* Lace Border Bottom Accent */}
        <div className="lace-border-trim lace-bottom">
          <img src="/lace_border.png" alt="Lace Border" className="lace-border-img" />
        </div>
      </footer>

      {/* PROJECT PREVIEW MODAL */}
      {selectedProjectModal && (
        <div className="modal-backdrop" onClick={() => setSelectedProjectModal(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon-btn" onClick={() => setSelectedProjectModal(null)}>
              <X size={20} />
            </button>

            {selectedProjectModal.thumbnail && (
              <div className="modal-thumb-box">
                <img src={selectedProjectModal.thumbnail} alt={selectedProjectModal.title} className="modal-thumb-img" />
              </div>
            )}

            <span className="proj-category-badge">{selectedProjectModal.categoryLabel}</span>
            <h2 className="modal-proj-title">{selectedProjectModal.title}</h2>
            <p className="modal-proj-subtitle">{selectedProjectModal.subtitle}</p>

            <div className="modal-tech-tags">
              {selectedProjectModal.tags.map((tag, idx) => (
                <span key={idx} className="tech-chip">{tag}</span>
              ))}
            </div>

            <div className="modal-body-section">
              <h4>Project Overview</h4>
              <p>{selectedProjectModal.desc}</p>
            </div>

            <div className="modal-body-section">
              <h4>Key Highlights & Deliverables</h4>
              <ul>
                {selectedProjectModal.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="modal-action-footer flex-gap-row">
              {selectedProjectModal.demoUrl && (
                <a
                  href={selectedProjectModal.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn primary-btn"
                >
                  <span>Launch Live App</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {selectedProjectModal.githubUrl && (
                <a
                  href={selectedProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn secondary-btn"
                >
                  <span>View GitHub Repo</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {!selectedProjectModal.demoUrl && !selectedProjectModal.githubUrl && (
                <a
                  href={selectedProjectModal.externalUrl || "https://github.com/srijitachakrabortyy"}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn"
                >
                  <span>Open {selectedProjectModal.title}</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;

