const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const aiMLProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "AI Engineer",
        description: "Build, test, and deploy comprehensive Artificial Intelligence models and systems to automate tasks and solve complex business problems.",
        summary: "The core architects designing the smart algorithms and systems that power modern AI applications.",
        skills: ["Python", "TensorFlow / PyTorch", "Neural Networks", "Algorithm Design", "RESTful APIs"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $160K",
        educationPath: "B.Tech in CS/AI or equivalent",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech Giants", "Healthcare tech", "Finance", "Autonomous Vehicles"],
        futureScope: "Extremely high and continually expanding as AI integration becomes mandatory across all sectors.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["AWS Certified Machine Learning", "Microsoft Certified: Azure AI Engineer"],
        roadmap: ["Master Python and statistics", "Learn ML frameworks", "Build and deploy AI models", "Senior AI Systems Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "Machine Learning Engineer",
        description: "Focus on designing, building, and productionizing predictive models that allow computers to learn from massive datasets.",
        summary: "Specialists who feed raw data into models so computers can 'learn' and make predictions autonomously.",
        skills: ["Python/R", "Scikit-Learn", "Data Preprocessing", "Model Optimization", "XGBoost"],
        salaryRange: "India: ₹8L - ₹28L | Global: $100K - $165K",
        educationPath: "B.Tech CS/Data Science or specialized ML bootcamp",
        yearsOfStudy: "4 Years",
        industriesHiring: ["E-commerce", "Streaming Services (Netflix/Spotify)", "Fintech", "Marketing Tech"],
        futureScope: "The absolute backbone of recommendation algorithms, fraud detection, and modern predictive analytics.",
        jobDemandTrend: "Consistently High",
        certifications: ["Google Cloud Professional Machine Learning Engineer"],
        roadmap: ["CS/Math degree", "Master Scikit-Learn and predictions", "Deploy models to the cloud", "Lead ML Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "Deep Learning Engineer",
        description: "Specialize entirely in complex neural networks with many massive layers, mimicking the human brain to solve the hardest AI problems.",
        summary: "The engineers building the massive multi-layered neural networks behind modern generative AI.",
        skills: ["Deep Neural Networks (DNN)", "Keras / PyTorch / JAX", "GPU Optimization (CUDA)", "Mathematics (Linear Algebra)"],
        salaryRange: "India: ₹10L - ₹35L | Global: $110K - $180K+",
        educationPath: "M.Tech or Ph.D in Computer Science / AI",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Self-Driving Car companies", "OpenAI / Anthropic", "Advanced Medical Imaging"],
        futureScope: "Highly elite and heavily compensated. The direct creators of the generative AI revolution.",
        jobDemandTrend: "Specialized, Extremely High Demand",
        certifications: ["DeepLearning.AI Specialization"],
        roadmap: ["Master advanced calculus and linear algebra", "Build complex CNNs/RNNs", "Optimize models for GPUs", "Principal Deep Learning Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "NLP Engineer (Natural Language Processing)",
        description: "Teach computers to properly understand, interpret, and generate human language texts and speech seamlessly.",
        summary: "The language masters making chatbots, translators, and LLMs (like ChatGPT) actually understand human text.",
        skills: ["Transformers (BERT, GPT)", "Hugging Face", "Tokenization", "Text Classification", "Linguistics"],
        salaryRange: "India: ₹9L - ₹30L | Global: $105K - $170K",
        educationPath: "B.Tech/M.Tech CS focused on Computational Linguistics/AI",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Virtual Assistant Tech (Siri/Alexa)", "EdTech", "Customer Service Automation", "Social Media"],
        futureScope: "Massive demand post-ChatGPT. LLM fine-tuning is becoming a mandatory requirement globally.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Stanford NLP certifications (Coursera)"],
        roadmap: ["CS Degree", "Master text processing algorithms", "Fine-tune massive LLMs", "Lead NLP Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "Computer Vision Engineer",
        description: "Write algorithms that allow computers to extract high-level understanding and identify objects from digital images or videos.",
        summary: "Teaching computers how 'to see' by analyzing and identifying objects in images and live video streams.",
        skills: ["OpenCV", "Convolutional Neural Networks (CNNs)", "YOLO", "Image Segmentation", "PyTorch"],
        salaryRange: "India: ₹8L - ₹28L | Global: $100K - $160K",
        educationPath: "M.Tech or Ph.D focused on Image Processing/AI",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Autonomous Driving", "Medical Tech (MRI Analysis)", "Security/Surveillance", "Manufacturing QA"],
        futureScope: "Vital for the advancement of robotics, self-driving cars, and automated quality control.",
        jobDemandTrend: "High Demand",
        certifications: ["Advanced Computer Vision courses"],
        roadmap: ["Master image processing math", "Train object detection models", "Deploy in real-time edge devices", "Lead Vision Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "AI Research Scientist",
        description: "Conduct fundamental research to push the absolute boundaries of what AI is capable of, publishing papers and inventing entirely new model architectures.",
        summary: "The pure scientists theorizing and inventing the next generation of AI architectures before they hit the market.",
        skills: ["Advanced Mathematics", "Research Publication", "Novel Algorithm Design", "Pytorch / JAX", "Statistics"],
        salaryRange: "India: ₹15L - ₹50L+ | Global: $150K - $300K+",
        educationPath: "Ph.D in AI, Machine Learning, or Mathematics",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Corporate AI Labs (Google DeepMind, Meta AI)", "Top Universities"],
        futureScope: "Extremely prestigious. These are the individuals creating the algorithms (like Transformers) that change the world.",
        jobDemandTrend: "Elite Role, High Demand",
        certifications: ["Published research in NeurIPS, ICML, CVPR"],
        roadmap: ["Complete Ph.D", "Publish groundbreaking AI research", "Join elite corporate/academic lab", "Principal Research Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "ML Ops Engineer",
        description: "Combine Machine Learning with DevOps practices to reliably and efficiently deploy, scale, and monitor massive AI models in live production.",
        summary: "The essential bridge ensuring trained AI models are actually usable by millions of people online.",
        skills: ["Docker/Kubernetes", "MLflow / Kubeflow", "CI/CD for ML", "AWS SageMaker", "Model Monitoring"],
        salaryRange: "India: ₹10L - ₹32L | Global: $115K - $170K",
        educationPath: "B.Tech CS + Strong Cloud/DevOps tracking",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Any company deploying ML models", "SaaS platforms", "Fintech"],
        futureScope: "Currently the biggest bottleneck in AI is deployment; MLOps is rapidly becoming the most demanded AI engineering role.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["AWS Certified Machine Learning", "CKA (Kubernetes)"],
        roadmap: ["Learn heavy Devops/Cloud skills", "Understand ML model lifecycles", "Automate model deployment pipelines", "Head of MLOps"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "AI Solutions Architect",
        description: "Design comprehensive enterprise software-level architectures that seamlessly integrate heavy AI models into existing business infrastructure.",
        summary: "The high-level designers plotting out exactly how a massive corporation can integrate AI into its workflow securely.",
        skills: ["Enterprise Architecture", "Cloud AI Services", "System Design", "Cost Optimization", "Security/Compliance"],
        salaryRange: "India: ₹18L - ₹50L+ | Global: $150K - $250K+",
        educationPath: "B.Tech CS + 10+ years of software/AI experience",
        yearsOfStudy: "4 Years + 10 Years Experience",
        industriesHiring: ["Consulting Firms (McKinsey, Deloitte)", "Cloud Providers", "Fortune 500 Enterprises"],
        futureScope: "Extremely secure. Required to prevent companies from wasting millions of dollars on poorly integrated AI.",
        jobDemandTrend: "High Demand, Leadership Role",
        certifications: ["AWS Certified Solutions Architect – Professional (with AI spec)"],
        roadmap: ["Master Cloud Architecture", "Understand enterprise AI limitations", "Design massive integrated systems", "Chief AI Officer (CAIO)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "Robotics AI Engineer",
        description: "Write the 'brains' for physical robots, combining complex AI pathfinding, computer vision, and machine learning reinforcement.",
        summary: "Merging Artificial Intelligence directly with physical hardware to create smart, independent robots.",
        skills: ["Reinforcement Learning", "ROS (Robot Operating System)", "Sensor Fusion (Lidar/Camera)", "Kinematics", "C++"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $150K",
        educationPath: "B.Tech/M.Tech in Robotics, Mechatronics, or CS",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Advanced Manufacturing", "Logistics (Amazon Robotics)", "Space/Defense", "AgriTech"],
        futureScope: "Incredible growth. The next frontier of AI is embodying it within physical humanoid and industrial robots.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Advanced Robotics and Reinforcement Learning courses"],
        roadmap: ["Engineering degree", "Master reinforcement learning", "Program physical robots using ROS", "Lead Robotics Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "AI Data Engineer",
        description: "Build the massive data pipelines required to scrape, clean, parse, and store the petabytes of data that modern AI models need to train.",
        summary: "The essential data plumbers ensuring AI models have massive amounts of clean data to learn from.",
        skills: ["Apache Spark/Kafka", "SQL/NoSQL", "Python", "Data Warehousing (Snowflake/BigQuery)", "ETL Pipelines"],
        salaryRange: "India: ₹8L - ₹26L | Global: $100K - $160K",
        educationPath: "B.Tech in CS/IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Essentially all tech companies", "Social Media", "Healthcare", "Finance"],
        futureScope: "AI is completely useless without clean data. This role will remain highly demanded indefinitely.",
        jobDemandTrend: "Consistently High",
        certifications: ["Google Cloud Professional Data Engineer", "Databricks Certifications"],
        roadmap: ["Master SQL and Python", "Build massive distributed data pipelines", "Manage data lakes", "Chief Data Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "AI Product Manager",
        description: "Guide the lifecycle of an AI product, balancing what is technically possible via ML with what the customer actually wants to buy and use.",
        summary: "The business-minded leaders translating complex AI breakthroughs into profitable, usable consumer products.",
        skills: ["Product Strategy", "Basic ML Understanding", "Agile", "User Experience (UX)", "Stakeholder Management"],
        salaryRange: "India: ₹12L - ₹40L | Global: $120K - $180K",
        educationPath: "B.Tech in CS + MBA or dedicated PM track",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Tech Startups", "SaaS Platforms", "Consumer Electronics"],
        futureScope: "Highly critical role. A massive portion of AI models fail because they don't actually solve human problems—this role prevents that.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Scrum Product Owner", "AI for Business courses"],
        roadmap: ["Tech background", "Transition to product ownership", "Lead AI feature rollouts", "VP of Product (AI)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Artificial Intelligence & Machine Learning",
        title: "Prompt Engineer",
        description: "Design and continuously refine the exact text inputs required to coax optimal, accurate, and safe outputs from massive Large Language Models.",
        summary: "The 'AI Whisperers' figuring out the exact logical wording to make LLMs perform flawless tasks.",
        skills: ["Exceptional Logic & Linguistics", "LLM Behavior Understanding", "Python/API integration", "Few-shot prompting", "Chain-of-thought"],
        salaryRange: "India: ₹6L - ₹20L | Global: $75K - $130K",
        educationPath: "Varies widely. CS, Linguistics, or Philosophy degrees frequently succeed.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["AI Startups", "Marketing Agencies", "Media generation companies", "Legal Tech"],
        futureScope: "Highly debated. It's a massive boom currently, though it may evolve into a standard skill expected of all developers in the future.",
        jobDemandTrend: "Rapidly Emerging",
        certifications: ["Prompt Engineering / LLM Optimization certificates"],
        roadmap: ["Master advanced prompting techniques", "Integrate prompts into codebases via APIs", "Lead AI Output Optimization"]
    }
];

const seedAI = async () => {
    try {
        await Career.deleteMany({ branch: "Artificial Intelligence & Machine Learning" });
        await Career.insertMany(aiMLProfessions);
        console.log('AI/ML Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAI();
