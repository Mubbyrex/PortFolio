// all the properties are optional - can be left empty or deleted
const header = {
  homepage: "https://github.com/Mubbyrex",
  title: "MubaraK",
};

const about = {
  name: "Mubarak Ibrahim",
  role: ["DevOps Engineer", "Cloud Developer"],
  description: [
    "I’m a DevOps Engineer specialized in building secure, scalable cloud infrastructures. From Terraform and Kubernetes to Jenkins and Docker, I love turning complex challenges into streamlined solutions. With multiple cloud certifications and a proven track record of designing, deploying, and optimizing cloud solutions that align with financial compliance, I bring both expertise and innovation to the table.",
    "When it comes to building in the cloud, I focus on creating scalable, serverless backend applications. With real-world experience developing software on leading cloud platforms, I’ve worked extensively with tools like Spring Boot and Node.js to deliver efficient, reliable solutions. My expertise lies in authentication and authorization, ensuring secure and smooth integrations with third-party authentication services.",
  ],
  resume:
    "https://drive.google.com/file/d/1moqGeAWtrzOZzq7v0AVgC5IpWhiC-kr4/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/mubarakibrahimofficial5/",
    github: "https://github.com/Mubbyrex",
  },
  image: "/images/dp.jpeg",
};

const projects = [
  {
    name: "Monolith to microservices project",
    description:
      "Converted a monolithic application into a microservices architecture to enhance scalability, maintainability, and deployment flexibility using AWS, CircleCI, Docker, and Kubernetes.",
    stack: [
      "AWS RDS",
      "AWS S3",
      "Nginx Reverse Proxy",
      "Docker",
      "Kubernetes",
      "CircleCI",
    ],
    sourceCode: "https://github.com/Mubbyrex/monolith-to-microservices-project",
  },
  {
    name: "Hosting Static Website on AWS using S3 and CloudFront",
    description:
      "Hosted a static website using Amazon S3 for storage and CloudFront for global content delivery, enabling low latency and fast load times. Configured S3 for website hosting and used AWS CLI for streamlined setup.",
    stack: ["AWS S3", "CloudFront", "AWS CLI"],
    sourceCode: "https://github.com/Mubbyrex/Deploy-Static-Website-on-AWS",
  },
  {
    name: "Serverless TODO App",
    description:
      "A serverless TODO app built with AWS Lambda, API Gateway, and DynamoDB, enabling seamless task management with minimal infrastructure overhead. Integrated Cognito for secure user authentication and authorization.",
    stack: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "Serverless",
      "Node.js",
    ],
    sourceCode: "https://github.com/Mubbyrex/Serverless_TODO",
  },
  {
    name: "Complete CI/CD Pipeline with Jenkins and Kubernetes",
    description:
      "Designed and implemented a complete CI/CD pipeline using Jenkins, Kubernetes, and Docker, enabling automated testing, building, and deployment of applications.",
    stack: ["Jenkins", "Kubernetes", "Docker", "Git", "Ansible"],
    sourceCode: "https://github.com/Mubbyrex/Jenkins-Project",
  },
];

const skills = [
  // Devops
  "Kubernetes",
  "Docker",
  "Jenkins",
  "Git",
  "Terraform",
  "AWS",
  "GCP",
  "OCI",
  "Istio",
  "Helm",
  "GitOps",
  "OpenTelemetry",

  // Backend
  "NodeJS",
  "ExpressJS",
  "Spring Boot",
  "OracleDB",
];

const contact = {
  email: "mubarak.olalekan.ibrahim@gmail.com",
};

const certifications = [
  {
    title: "AWS Certified SysOps Administrator - Associate",
    provider: "Amazon Web Services",
    year: "2024",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/672660aea75e4de3b81c1ed0b4ba24d0",
  },
  {
    title: "Oracle Cloud Infrastructure Certified DevOps Professional",
    provider: "Oracle",
    year: "2023",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C444A1B762BFF98856A3125DE4268059C980D372607D86340FB4DCA867FE769",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    provider: "Google Cloud",
    year: "2023",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C444A1B762BFF98856A3125DE4268059C980D372607D86340FB4DCA867FE769",
  },
];

const workExperience = [
  {
    jobTitle: "DevOps Engineer | Technical Analyst",
    company: "Seaico Technologies Limited",
    duration: "June 2023 - Present",
    description: [
      "Automated infrastructure provisioning with Ansible, reducing manual configuration efforts and ensuring consistent environment setups across on-premises servers and OCI compute instances.",
      "Enhanced observability by integrating CloudWatch logs with Prometheus and Grafana, improving issue detection and resolution efficiency through comprehensive metric-trace-log correlation.",
      "Streamlined system operations by automating repetitive tasks using Python and Bash, saving significant manual effort and improving reliability across critical systems.",
      "Designed and implemented scalable, high-availability cloud infrastructures and CI/CD pipelines using Jenkins, AWS, and Kubernetes, cutting deployment time nearly in half.",
      "Spearheaded the development of robust disaster recovery plans with AWS Route 53, Elastic Load Balancers, and EC2 instances, significantly enhancing system resilience and recovery capabilities.",
      "Collaborated with stakeholders to define and track service-level indicators (SLIs) and objectives (SLOs), aligning technical solutions with evolving business needs.",
      "Delivered tailored training on Calypso, a treasury management solution, enabling client teams to optimize system usage and maintain high operational performance.",
      "Led the migration from Jenkins to GitHub Actions, introducing seamless workflow integration and achieving more efficient version control management.",
      "Partnered with development teams to integrate Java and Node.js applications into CI/CD pipelines with Oracle Container Engine for Kubernetes, achieving end-to-end observability through OpenTelemetry, Prometheus, and Grafana.",
    ],
  },
  {
    jobTitle: "Software Developer",
    company: "Seaico Technologies Limited",
    duration: "June 2023 - Present",
    description: [
      "Collaborated with a team of four developers to design and develop a proprietary retail FX banking application, focusing on system architecture, authentication, authorization, and integration with third-party authentication systems like LDAP. Delivered containerized solutions on time, ensuring high-quality standards.",
      "Developed serverless cloud applications using AWS Lambda and Node.js, optimizing performance and scalability for critical workloads.",
      "Authored comprehensive software design and solution architecture documentation for the implementation of Calypso, a proprietary treasury management solution, used by major African banks.",
      "Contributed to the customization and extension of Calypso to meet the specific needs of leading African banks, enhancing its functionality and aligning it with client requirements.",
    ],
  },
  {
    jobTitle: "Cloud Engineer",
    company: "Cloud Heroes Africa",
    duration: "October 2022 - May 2023",
    description: [
      "Led the containerization of on-premises applications, enabling seamless migration to Linode Cloud and improving application scalability, performance, and maintainability.",
      "Conducted in-depth research and analysis to evaluate technology options, providing tailored recommendations to address diverse technical challenges effectively.",
      "Delivered technical support to clients, resolving cloud infrastructure issues and ensuring minimal downtime to maintain operational continuity and customer satisfaction.",
    ],
  },
];

export {
  header,
  about,
  projects,
  skills,
  contact,
  certifications,
  workExperience,
};
