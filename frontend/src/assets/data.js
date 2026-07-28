import reactImg from "../assets/react.jpg";
import nodeImg from "../assets/node.jpg";
import mongodbImg from "../assets/mongodb.jpg";
import flutterImg from "../assets/flutter.jpg";
import aiImg from "../assets/ai.jpg";
import uiuxImg from "../assets/uiux.jpg";
import dataScienceImg from "../assets/data-science.jpg";
import cloudImg from "../assets/cloud.jpg";
import pythonImg from "../assets/pythonImg.jpg";
import cyberImg from "../assets/cyberImg.jpg";
import upload_icon from "../assets/upload_icon.png";
//Instructor images
import instructor1 from "./instructor1.jpg";
import instructor2 from "./instructor2.jpg";
import instructor3 from "./instructor3.jpg";
import instructor4 from "./instructor4.jpg";
import instructor5 from "./instructor5.jpg";
import instructor6 from "./instructor6.jpg";
import instructor7 from "./instructor7.jpg";
import instructor8 from "./instructor8.jpg";

//Students image
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";

export { upload_icon };

// Icons for static
import {
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    image: reactImg,
    title: "React.js Complete Bootcamp",
    instructor: "John Smith",
    instructorImage: instructor1,

    category: "Web Development",
    level: "Intermediate",
    language: "English",

    rating: 4.9,
    students: 3250,

    duration: "18 Hours",
    lessons: 45,

    price: 49,
    discountPrice: 29,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 12,
    projects: 8,
    progress: 70,

    description:
      "Learn React from beginner to advanced by building modern real-world applications using React.js.",

    content: [
      {
        title: "Getting Started with React",
        lessons: [
          {
            id: 1,
            title: "What is React and Why Use It?",
            duration: "08:25",
            video: "https://youtu.be/N3AkSS5hXMA?si=2Tl-Y-0YluG8vuAK",
            description:
              "Learn what React is, why it was created by Facebook, and how it simplifies building modern user interfaces using reusable components.",
            objectives: [
              "Understand React",
              "Learn Virtual DOM",
              "Know React advantages",
            ],
            resources: [
              { name: "Lesson Slides.pdf", type: "PDF" },
              { name: "Introduction Notes.pdf", type: "PDF" },
            ],
            completed: false,
          },

          {
            id: 2,
            title: "React vs Vanilla JavaScript",
            duration: "12:10",
            video: "https://youtu.be/rmNMBjse-m0?si=vuve3Wi7BQv7dSSW",
            description:
              "Compare React with Vanilla JavaScript and understand when React is the better choice for building applications.",
            objectives: [
              "Compare React and JavaScript",
              "Understand SPA",
              "Learn Component-based Architecture",
            ],
            resources: [
              { name: "Comparison Sheet.pdf", type: "PDF" },
              { name: "Example Code.zip", type: "ZIP" },
            ],
            completed: false,
          },

          {
            id: 3,
            title: "Installing Node.js and Creating React App",
            duration: "15:30",
            video: "https://youtu.be/RlVNMdY2xpg?si=eJCzqSrxN_rx44FN",
            description:
              "Install Node.js, npm, and create your first React project using Vite.",
            objectives: [
              "Install Node.js",
              "Install npm",
              "Create React Project",
            ],
            resources: [
              { name: "Installation Guide.pdf", type: "PDF" },
              { name: "Starter Project.zip", type: "ZIP" },
            ],
            completed: false,
          },

          {
            id: 4,
            title: "Understanding React Project Structure",
            duration: "10:45",
            video: "https://youtu.be/ANrYhHN8Dl4?si=acMsEEeI2uzXlLnA",
            description:
              "Explore the folders and files inside a React project and understand the purpose of each one.",
            objectives: [
              "Understand src folder",
              "Understand public folder",
              "Learn project organization",
            ],
            resources: [{ name: "Project Structure.pdf", type: "PDF" }],
            completed: false,
          },
        ],
      },

      {
        title: "React Fundamentals",
        lessons: [
          {
            id: 5,
            title: "Understanding JSX",
            duration: "18:20",
            video: "https://youtu.be/gAhPk7djdwI?si=2UKlHisMpSg41919",
            description:
              "Learn JSX syntax and how it combines JavaScript with HTML to create React components.",
            objectives: [
              "Learn JSX",
              "Embed JavaScript in JSX",
              "Render Elements",
            ],
            resources: [{ name: "JSX Examples.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 6,
            title: "Creating Functional Components",
            duration: "20:10",
            video: "",
            description:
              "Build reusable functional components and understand component composition.",
            objectives: [
              "Create Components",
              "Reuse Components",
              "Export and Import Components",
            ],
            resources: [{ name: "Component Examples.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 7,
            title: "Props and Component Communication",
            duration: "22:40",
            video: "",
            description:
              "Pass data between components using props and create dynamic user interfaces.",
            objectives: ["Understand Props", "Pass Data", "Reuse Components"],
            resources: [{ name: "Props Notes.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 8,
            title: "Reusable Components",
            duration: "16:30",
            video: "",
            description:
              "Design reusable UI components to make applications cleaner and easier to maintain.",
            objectives: [
              "Reuse Components",
              "Organize UI",
              "Improve Maintainability",
            ],
            resources: [{ name: "Reusable Components.zip", type: "ZIP" }],
            completed: false,
          },
        ],
      },

      {
        title: "React State Management",
        lessons: [
          {
            id: 9,
            title: "Introduction to State",
            duration: "15:20",
            video: "",
            description:
              "Learn what state is in React and why it is essential for building interactive user interfaces.",
            objectives: [
              "Understand State",
              "Difference Between State and Variables",
              "Update UI Dynamically",
            ],
            resources: [{ name: "State Notes.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 10,
            title: "useState Hook",
            duration: "25:10",
            video: "",
            description:
              "Master the useState Hook to create and update state inside functional components.",
            objectives: ["Create State", "Update State", "Handle User Input"],
            resources: [{ name: "useState Examples.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 11,
            title: "Handling Events in React",
            duration: "18:45",
            video: "",
            description:
              "Handle click, change, submit, and keyboard events in React applications.",
            objectives: ["Button Events", "Input Events", "Form Events"],
            resources: [{ name: "Event Handling.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 12,
            title: "Managing Multiple States",
            duration: "20:30",
            video: "",
            description:
              "Learn techniques for managing multiple pieces of state efficiently.",
            objectives: [
              "Multiple States",
              "State Organization",
              "Best Practices",
            ],
            resources: [{ name: "State Management.zip", type: "ZIP" }],
            completed: false,
          },
        ],
      },

      {
        title: "React Hooks",
        lessons: [
          {
            id: 13,
            title: "useEffect Hook",
            duration: "30:20",
            video: "",
            description:
              "Learn how to perform side effects like API calls and timers using useEffect.",
            objectives: [
              "Understand Effects",
              "Dependency Array",
              "Cleanup Function",
            ],
            resources: [{ name: "useEffect Guide.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 14,
            title: "useRef Hook",
            duration: "18:10",
            video: "",
            description:
              "Store mutable values and directly access DOM elements with useRef.",
            objectives: ["Access DOM", "Persist Values", "Focus Inputs"],
            resources: [{ name: "useRef Examples.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 15,
            title: "useContext Hook",
            duration: "22:40",
            video: "",
            description:
              "Share data across components without prop drilling using Context API.",
            objectives: ["Create Context", "Provide Data", "Consume Context"],
            resources: [{ name: "Context API.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 16,
            title: "Creating Custom Hooks",
            duration: "25:00",
            video: "",
            description:
              "Build reusable custom hooks to simplify complex logic across components.",
            objectives: ["Custom Hooks", "Reuse Logic", "Organize Code"],
            resources: [{ name: "Custom Hooks.zip", type: "ZIP" }],
            completed: false,
          },
        ],
      },

      {
        title: "React Router",
        lessons: [
          {
            id: 17,
            title: "Installing React Router",
            duration: "10:00",
            video: "",
            description:
              "Learn how to install React Router and configure it in a React application.",
            objectives: [
              "Install React Router",
              "Configure BrowserRouter",
              "Understand Routing",
            ],
            resources: [{ name: "React Router Setup.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 18,
            title: "Creating Routes",
            duration: "18:30",
            video: "",
            description:
              "Create multiple pages using Route and Routes components.",
            objectives: ["Create Routes", "Render Pages", "Nested Layout"],
            resources: [{ name: "Routes Examples.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 19,
            title: "Dynamic Routing with useParams",
            duration: "20:15",
            video: "",
            description:
              "Pass dynamic parameters through URLs and access them using useParams.",
            objectives: [
              "Dynamic Routes",
              "URL Parameters",
              "Course Details Page",
            ],
            resources: [{ name: "useParams.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 20,
            title: "Navigation with useNavigate",
            duration: "15:40",
            video: "",
            description:
              "Navigate between pages programmatically using useNavigate.",
            objectives: [
              "Navigate Programmatically",
              "Redirect Users",
              "History Navigation",
            ],
            resources: [{ name: "Navigation Guide.pdf", type: "PDF" }],
            completed: false,
          },
        ],
      },

      {
        title: "API Integration",
        lessons: [
          {
            id: 21,
            title: "Fetching Data from API",
            duration: "20:00",
            video: "",
            description:
              "Learn how to fetch data from REST APIs using JavaScript fetch().",
            objectives: ["REST API", "Fetch Data", "Display Results"],
            resources: [{ name: "Fetch API.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 22,
            title: "Using Axios in React",
            duration: "18:45",
            video: "",
            description:
              "Use Axios to send GET, POST, PUT, and DELETE requests.",
            objectives: ["Axios Installation", "GET Request", "POST Request"],
            resources: [{ name: "Axios Examples.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 23,
            title: "Loading and Error Handling",
            duration: "22:10",
            video: "",
            description:
              "Handle loading states and API errors to improve user experience.",
            objectives: [
              "Loading Spinner",
              "Error Handling",
              "Conditional Rendering",
            ],
            resources: [{ name: "Loading UI.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 24,
            title: "Working with Backend APIs",
            duration: "30:00",
            video: "",
            description:
              "Connect React applications with Express.js and MongoDB backend services.",
            objectives: [
              "Express API",
              "Backend Integration",
              "CRUD Operations",
            ],
            resources: [{ name: "Backend Source Code.zip", type: "ZIP" }],
            completed: false,
          },
        ],
      },

      {
        title: "State Management with Redux Toolkit",
        lessons: [
          {
            id: 25,
            title: "Introduction to Redux",
            duration: "15:00",
            video: "",
            description:
              "Learn why Redux exists and how it helps manage application state in large React projects.",
            objectives: ["Understand Redux", "Global State", "Redux Workflow"],
            resources: [{ name: "Redux Notes.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 26,
            title: "Redux Store and Slice",
            duration: "25:30",
            video: "",
            description: "Create Redux Store and Slices using Redux Toolkit.",
            objectives: ["Create Store", "Create Slice", "Configure Store"],
            resources: [{ name: "Redux Toolkit.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 27,
            title: "useSelector and useDispatch",
            duration: "22:20",
            video: "",
            description:
              "Access and update global state using useSelector and useDispatch.",
            objectives: [
              "Read State",
              "Dispatch Actions",
              "Connect Components",
            ],
            resources: [{ name: "Redux Hooks.pdf", type: "PDF" }],
            completed: false,
          },

          {
            id: 28,
            title: "Building Global State Management",
            duration: "30:40",
            video: "",
            description:
              "Build a complete global state management system for a React application.",
            objectives: [
              "Advanced Redux",
              "Global State",
              "Project Integration",
            ],
            resources: [{ name: "Redux Project.zip", type: "ZIP" }],
            completed: false,
          },
        ],
      },

      {
        title: "Real World React Projects",
        lessons: [
          {
            id: 29,
            title: "Build Todo Application",
            duration: "2 Hours",
            video: "",
            description:
              "Build a complete Todo application using React Hooks and local storage.",
            objectives: [
              "CRUD Operations",
              "State Management",
              "Local Storage",
            ],
            resources: [{ name: "Todo Source Code.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 30,
            title: "Build E-commerce Website",
            duration: "6 Hours",
            video: "",
            description:
              "Develop a modern e-commerce website with product pages, shopping cart, and checkout.",
            objectives: ["Product Listing", "Shopping Cart", "Checkout Page"],
            resources: [{ name: "E-commerce Project.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 31,
            title: "Build Admin Dashboard",
            duration: "5 Hours",
            video: "",
            description:
              "Create a responsive admin dashboard with charts, tables, authentication, and analytics.",
            objectives: ["Dashboard UI", "Authentication", "Analytics"],
            resources: [{ name: "Admin Dashboard.zip", type: "ZIP" }],
            completed: false,
          },

          {
            id: 32,
            title: "Deploy React Application",
            duration: "1 Hour",
            video: "",
            description:
              "Deploy a React application to Vercel and Netlify with production best practices.",
            objectives: [
              "Build Production",
              "Deploy Project",
              "Configure Environment Variables",
            ],
            resources: [{ name: "Deployment Guide.pdf", type: "PDF" }],
            completed: false,
          },
        ],
      },
    ],

    skills: [
      "React.js",
      "JSX",
      "Components",
      "Props",
      "Hooks",
      "React Router",
      "Context API",
      "Redux Toolkit",
      "API Integration",
    ],

    requirements: [
      "Basic HTML",
      "Basic CSS",
      "Basic JavaScript",
      "Computer Knowledge",
    ],

    includes: [
      "18 Hours On-demand Video",
      "45 Lessons",
      "8 Real Projects",
      "12 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },
  {
    id: 2,
    image: nodeImg,
    title: "Node.js & Express Masterclass",

    instructor: "Alex Brown",
    instructorImage: instructor2,

    category: "Backend Development",
    level: "Intermediate",
    language: "English",

    rating: 4.8,
    students: 2800,

    lessons: 40,
    duration: "20 Hours",

    price: 59,
    discountPrice: 39,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 10,
    projects: 7,

    description:
      "Build scalable backend applications using Node.js, Express, MongoDB and modern backend technologies.",

    content: [
      {
        title: "Getting Started with Node.js",
        lessons: [
          {
            title: "What is Node.js and Why Use It?",
            duration: "10:20",
          },
          {
            title: "Installing Node.js and npm",
            duration: "12:15",
          },
          {
            title: "Understanding Node.js Runtime",
            duration: "14:30",
          },
          {
            title: "Node.js vs Browser JavaScript",
            duration: "11:40",
          },
          {
            title: "Creating Your First Node.js Project",
            duration: "15:25",
          },
        ],
      },

      {
        title: "Node.js Core Concepts",
        lessons: [
          {
            title: "Modules in Node.js",
            duration: "18:20",
          },
          {
            title: "CommonJS and ES Modules",
            duration: "20:10",
          },
          {
            title: "Working with File System (fs)",
            duration: "22:30",
          },
          {
            title: "Path Module in Node.js",
            duration: "12:45",
          },
          {
            title: "Events and EventEmitter",
            duration: "19:00",
          },
        ],
      },

      {
        title: "Express.js Framework",
        lessons: [
          {
            title: "Introduction to Express.js",
            duration: "15:20",
          },
          {
            title: "Creating Express Server",
            duration: "18:40",
          },
          {
            title: "Routing and HTTP Methods",
            duration: "25:10",
          },
          {
            title: "Express Middleware",
            duration: "30:00",
          },
          {
            title: "Error Handling in Express",
            duration: "20:30",
          },
        ],
      },

      {
        title: "Building REST APIs",
        lessons: [
          {
            title: "What is REST API?",
            duration: "15:00",
          },
          {
            title: "Creating GET Requests",
            duration: "18:20",
          },
          {
            title: "Creating POST Requests",
            duration: "22:40",
          },
          {
            title: "PUT and DELETE Requests",
            duration: "18:45",
          },
          {
            title: "Testing APIs with Postman",
            duration: "20:20",
          },
        ],
      },

      {
        title: "MongoDB and Mongoose",
        lessons: [
          {
            title: "Introduction to MongoDB",
            duration: "18:30",
          },
          {
            title: "Connecting MongoDB with Node.js",
            duration: "25:00",
          },
          {
            title: "Creating Mongoose Models",
            duration: "22:15",
          },
          {
            title: "CRUD Operations with Mongoose",
            duration: "35:40",
          },
        ],
      },

      {
        title: "Authentication and Security",
        lessons: [
          {
            title: "User Registration System",
            duration: "30:20",
          },
          {
            title: "Password Hashing with bcrypt",
            duration: "18:10",
          },
          {
            title: "JWT Authentication",
            duration: "28:40",
          },
          {
            title: "Protecting Routes with Middleware",
            duration: "25:30",
          },
        ],
      },

      {
        title: "File Upload and Advanced Features",
        lessons: [
          {
            title: "Uploading Files with Multer",
            duration: "25:10",
          },
          {
            title: "Using Cloudinary Storage",
            duration: "20:40",
          },
          {
            title: "Environment Variables with dotenv",
            duration: "12:30",
          },
          {
            title: "Production Backend Structure",
            duration: "35:00",
          },
        ],
      },

      {
        title: "Real World Backend Projects",
        lessons: [
          {
            title: "Build Authentication API",
            duration: "3 Hours",
          },
          {
            title: "Build E-commerce Backend",
            duration: "8 Hours",
          },
          {
            title: "Build Blog REST API",
            duration: "5 Hours",
          },
          {
            title: "Deploy Node.js Application",
            duration: "1 Hour",
          },
        ],
      },
    ],

    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "JWT Authentication",
      "bcrypt",
      "Multer",
      "Cloudinary",
      "Backend Deployment",
    ],

    requirements: [
      "Basic JavaScript",
      "HTML Basics",
      "CSS Basics",
      "Basic Programming Knowledge",
    ],

    includes: [
      "20 Hours On-demand Video",
      "40 Lessons",
      "7 Real Projects",
      "10 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 3,
    image: pythonImg,
    title: "Python Programming Bootcamp",

    instructor: "Emma Wilson",
    instructorImage: instructor3,

    category: "Programming",
    level: "Beginner",
    language: "English",

    rating: 4.9,
    students: 4100,

    lessons: 55,
    duration: "24 Hours",

    price: 45,
    discountPrice: 25,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 15,
    projects: 10,

    description:
      "Master Python from beginner to advanced with practical exercises, real-world projects, and automation tasks.",

    content: [
      {
        title: "Introduction to Python",
        lessons: [
          {
            title: "What is Python and Why Learn It?",
            duration: "10:15",
          },
          {
            title: "Installing Python and Setting Up Environment",
            duration: "12:30",
          },
          {
            title: "Running Your First Python Program",
            duration: "08:45",
          },
          {
            title: "Python Syntax and Code Structure",
            duration: "15:20",
          },
        ],
      },

      {
        title: "Python Fundamentals",
        lessons: [
          {
            title: "Variables and Data Types",
            duration: "18:20",
          },
          {
            title: "Numbers, Strings and Booleans",
            duration: "20:10",
          },
          {
            title: "Lists and Tuples",
            duration: "22:40",
          },
          {
            title: "Dictionaries and Sets",
            duration: "19:30",
          },
          {
            title: "Type Conversion",
            duration: "12:15",
          },
        ],
      },

      {
        title: "Control Flow in Python",
        lessons: [
          {
            title: "Conditional Statements (if, elif, else)",
            duration: "20:00",
          },
          {
            title: "For Loops and While Loops",
            duration: "25:30",
          },
          {
            title: "Break and Continue",
            duration: "12:40",
          },
          {
            title: "Python Pattern Problems",
            duration: "18:20",
          },
        ],
      },

      {
        title: "Functions and Modules",
        lessons: [
          {
            title: "Creating Functions",
            duration: "20:10",
          },
          {
            title: "Function Arguments",
            duration: "18:30",
          },
          {
            title: "Lambda Functions",
            duration: "15:45",
          },
          {
            title: "Importing Modules",
            duration: "17:20",
          },
          {
            title: "Creating Custom Modules",
            duration: "22:00",
          },
        ],
      },

      {
        title: "Object Oriented Programming (OOP)",
        lessons: [
          {
            title: "Introduction to OOP",
            duration: "18:40",
          },
          {
            title: "Classes and Objects",
            duration: "25:10",
          },
          {
            title: "Constructors (__init__)",
            duration: "20:20",
          },
          {
            title: "Inheritance",
            duration: "24:30",
          },
          {
            title: "Encapsulation and Polymorphism",
            duration: "30:00",
          },
        ],
      },

      {
        title: "File Handling and Exceptions",
        lessons: [
          {
            title: "Reading and Writing Files",
            duration: "22:15",
          },
          {
            title: "Working with CSV Files",
            duration: "18:40",
          },
          {
            title: "Exception Handling",
            duration: "20:30",
          },
          {
            title: "Working with JSON Data",
            duration: "16:20",
          },
        ],
      },

      {
        title: "Python Advanced Topics",
        lessons: [
          {
            title: "List Comprehensions",
            duration: "18:30",
          },
          {
            title: "Decorators",
            duration: "25:40",
          },
          {
            title: "Generators",
            duration: "20:10",
          },
          {
            title: "Virtual Environments",
            duration: "15:50",
          },
        ],
      },

      {
        title: "Automation and Real Projects",
        lessons: [
          {
            title: "Automating Tasks with Python",
            duration: "40:00",
          },
          {
            title: "Web Scraping Basics",
            duration: "45:20",
          },
          {
            title: "Building a Python Automation Tool",
            duration: "2 Hours",
          },
          {
            title: "Final Python Project",
            duration: "3 Hours",
          },
        ],
      },
    ],

    skills: [
      "Python",
      "OOP",
      "Data Structures",
      "File Handling",
      "Modules",
      "Automation",
      "Web Scraping",
      "Problem Solving",
    ],

    requirements: ["No Programming Experience", "Basic Computer Knowledge"],

    includes: [
      "24 Hours On-demand Video",
      "55 Lessons",
      "10 Real Projects",
      "15 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 4,
    image: flutterImg,
    title: "Flutter Mobile Development",

    instructor: "Sarah Johnson",
    instructorImage: instructor4,

    category: "Mobile Development",
    level: "Advanced",
    language: "English",

    rating: 4.9,
    students: 3600,

    lessons: 52,
    duration: "26 Hours",

    price: 69,
    discountPrice: 49,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 14,
    projects: 9,

    description:
      "Build beautiful Android and iOS applications with Flutter and Dart by creating real-world mobile applications.",

    content: [
      {
        title: "Getting Started with Flutter",
        lessons: [
          {
            title: "What is Flutter and Why Use It?",
            duration: "12:20",
          },
          {
            title: "Flutter vs Native Development",
            duration: "15:10",
          },
          {
            title: "Installing Flutter SDK",
            duration: "18:30",
          },
          {
            title: "Setting Up Android Studio and VS Code",
            duration: "14:40",
          },
        ],
      },

      {
        title: "Dart Programming Fundamentals",
        lessons: [
          {
            title: "Introduction to Dart Language",
            duration: "15:20",
          },
          {
            title: "Variables and Data Types",
            duration: "20:10",
          },
          {
            title: "Functions in Dart",
            duration: "18:45",
          },
          {
            title: "Classes and Objects",
            duration: "25:30",
          },
          {
            title: "Dart Null Safety",
            duration: "22:15",
          },
        ],
      },

      {
        title: "Flutter Basics",
        lessons: [
          {
            title: "Flutter Project Structure",
            duration: "12:40",
          },
          {
            title: "Understanding Widgets",
            duration: "25:20",
          },
          {
            title: "StatelessWidget and StatefulWidget",
            duration: "30:00",
          },
          {
            title: "Building User Interfaces",
            duration: "35:10",
          },
        ],
      },

      {
        title: "Flutter Layout and UI Design",
        lessons: [
          {
            title: "Rows and Columns",
            duration: "20:30",
          },
          {
            title: "Container and Padding",
            duration: "18:20",
          },
          {
            title: "Images and Assets",
            duration: "15:40",
          },
          {
            title: "Responsive UI Design",
            duration: "30:20",
          },
        ],
      },

      {
        title: "Navigation and State Management",
        lessons: [
          {
            title: "Flutter Navigation",
            duration: "22:10",
          },
          {
            title: "Named Routes",
            duration: "18:30",
          },
          {
            title: "Provider State Management",
            duration: "35:00",
          },
          {
            title: "Riverpod Introduction",
            duration: "25:20",
          },
        ],
      },

      {
        title: "Working with APIs and Data",
        lessons: [
          {
            title: "HTTP Requests in Flutter",
            duration: "25:10",
          },
          {
            title: "Connecting REST APIs",
            duration: "30:40",
          },
          {
            title: "JSON Parsing",
            duration: "22:30",
          },
          {
            title: "Displaying Dynamic Data",
            duration: "28:00",
          },
        ],
      },

      {
        title: "Firebase Integration",
        lessons: [
          {
            title: "Introduction to Firebase",
            duration: "18:20",
          },
          {
            title: "Firebase Authentication",
            duration: "30:10",
          },
          {
            title: "Cloud Firestore Database",
            duration: "35:30",
          },
          {
            title: "Firebase Storage",
            duration: "25:00",
          },
        ],
      },

      {
        title: "Real World Flutter Projects",
        lessons: [
          {
            title: "Build Food Delivery App",
            duration: "6 Hours",
          },
          {
            title: "Build Chat Application",
            duration: "5 Hours",
          },
          {
            title: "Build E-commerce Mobile App",
            duration: "8 Hours",
          },
          {
            title: "Publish Flutter App",
            duration: "2 Hours",
          },
        ],
      },
    ],

    skills: [
      "Flutter",
      "Dart",
      "Widgets",
      "Firebase",
      "REST API",
      "State Management",
      "Mobile UI Design",
      "App Deployment",
    ],

    requirements: [
      "Basic Programming Knowledge",
      "Dart Basics",
      "Computer Skills",
    ],

    includes: [
      "26 Hours On-demand Video",
      "52 Lessons",
      "9 Real Projects",
      "14 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 5,
    image: aiImg,
    title: "AI & Machine Learning",

    instructor: "Michael Lee",
    instructorImage: instructor5,

    category: "Artificial Intelligence",
    level: "Advanced",
    language: "English",

    rating: 4.9,
    students: 2950,

    lessons: 48,
    duration: "22 Hours",

    price: 79,
    discountPrice: 59,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 14,
    projects: 9,

    description:
      "Learn Artificial Intelligence and Machine Learning with Python, data analysis, neural networks, and real-world AI projects.",

    content: [
      {
        title: "Introduction to Artificial Intelligence",
        lessons: [
          {
            title: "What is Artificial Intelligence?",
            duration: "12:20",
          },
          {
            title: "History and Evolution of AI",
            duration: "15:30",
          },
          {
            title: "AI Applications in Real Life",
            duration: "18:10",
          },
          {
            title: "Machine Learning vs Deep Learning",
            duration: "20:40",
          },
        ],
      },

      {
        title: "Python for AI and Data Science",
        lessons: [
          {
            title: "Python Review for AI",
            duration: "20:00",
          },
          {
            title: "NumPy Fundamentals",
            duration: "25:30",
          },
          {
            title: "Pandas Data Analysis",
            duration: "30:20",
          },
          {
            title: "Data Cleaning Techniques",
            duration: "22:10",
          },
        ],
      },

      {
        title: "Machine Learning Fundamentals",
        lessons: [
          {
            title: "What is Machine Learning?",
            duration: "18:30",
          },
          {
            title: "Supervised Learning",
            duration: "25:40",
          },
          {
            title: "Unsupervised Learning",
            duration: "22:20",
          },
          {
            title: "Training and Testing Models",
            duration: "30:10",
          },
        ],
      },

      {
        title: "Machine Learning Algorithms",
        lessons: [
          {
            title: "Linear Regression",
            duration: "28:20",
          },
          {
            title: "Decision Trees",
            duration: "25:10",
          },
          {
            title: "Random Forest Algorithm",
            duration: "30:30",
          },
          {
            title: "K-Means Clustering",
            duration: "24:40",
          },
        ],
      },

      {
        title: "Deep Learning and Neural Networks",
        lessons: [
          {
            title: "Introduction to Neural Networks",
            duration: "25:20",
          },
          {
            title: "Artificial Neural Networks",
            duration: "30:10",
          },
          {
            title: "Convolutional Neural Networks (CNN)",
            duration: "35:40",
          },
          {
            title: "Recurrent Neural Networks (RNN)",
            duration: "32:20",
          },
        ],
      },

      {
        title: "TensorFlow and AI Tools",
        lessons: [
          {
            title: "Introduction to TensorFlow",
            duration: "20:30",
          },
          {
            title: "Building AI Models with TensorFlow",
            duration: "35:20",
          },
          {
            title: "Model Training and Evaluation",
            duration: "28:40",
          },
          {
            title: "Using Keras Framework",
            duration: "25:00",
          },
        ],
      },

      {
        title: "AI Projects",
        lessons: [
          {
            title: "Image Classification Project",
            duration: "3 Hours",
          },
          {
            title: "Spam Detection AI Project",
            duration: "2 Hours",
          },
          {
            title: "Recommendation System Project",
            duration: "4 Hours",
          },
          {
            title: "Final Machine Learning Project",
            duration: "5 Hours",
          },
        ],
      },
    ],

    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Data Analysis",
    ],

    requirements: [
      "Python Basics",
      "Basic Mathematics",
      "Basic Programming Knowledge",
    ],

    includes: [
      "22 Hours On-demand Video",
      "48 Lessons",
      "9 Real Projects",
      "14 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 6,
    image: uiuxImg,
    title: "UI/UX Design Masterclass",

    instructor: "Sophia Davis",
    instructorImage: instructor6,

    category: "Design",
    level: "Beginner",
    language: "English",

    rating: 4.8,
    students: 2600,

    lessons: 38,
    duration: "16 Hours",

    price: 39,
    discountPrice: 25,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 8,
    projects: 6,

    description:
      "Learn UI/UX design from scratch and create modern user interfaces using Figma, wireframes, prototypes, and design principles.",

    content: [
      {
        title: "Introduction to UI/UX Design",
        lessons: [
          {
            title: "What is UI Design?",
            duration: "10:20",
          },
          {
            title: "What is UX Design?",
            duration: "12:40",
          },
          {
            title: "UI vs UX Differences",
            duration: "15:30",
          },
          {
            title: "Understanding Design Thinking",
            duration: "18:20",
          },
        ],
      },

      {
        title: "Design Principles",
        lessons: [
          {
            title: "Visual Design Principles",
            duration: "20:10",
          },
          {
            title: "Color Theory and Psychology",
            duration: "25:30",
          },
          {
            title: "Typography Basics",
            duration: "18:45",
          },
          {
            title: "Spacing and Layout Rules",
            duration: "16:20",
          },
        ],
      },

      {
        title: "Figma Fundamentals",
        lessons: [
          {
            title: "Introduction to Figma",
            duration: "12:30",
          },
          {
            title: "Creating Frames and Layers",
            duration: "20:40",
          },
          {
            title: "Using Components in Figma",
            duration: "25:10",
          },
          {
            title: "Auto Layout in Figma",
            duration: "22:30",
          },
        ],
      },

      {
        title: "Wireframing and Prototyping",
        lessons: [
          {
            title: "Creating Low Fidelity Wireframes",
            duration: "20:00",
          },
          {
            title: "High Fidelity Design",
            duration: "30:20",
          },
          {
            title: "Interactive Prototypes",
            duration: "25:40",
          },
          {
            title: "User Flow Design",
            duration: "18:30",
          },
        ],
      },

      {
        title: "User Experience Research",
        lessons: [
          {
            title: "Understanding User Needs",
            duration: "20:10",
          },
          {
            title: "Creating User Personas",
            duration: "18:50",
          },
          {
            title: "User Testing Methods",
            duration: "25:30",
          },
          {
            title: "Improving User Experience",
            duration: "22:20",
          },
        ],
      },

      {
        title: "Responsive Design",
        lessons: [
          {
            title: "Mobile First Design",
            duration: "20:40",
          },
          {
            title: "Responsive Web Layouts",
            duration: "25:00",
          },
          {
            title: "Design Systems",
            duration: "30:10",
          },
        ],
      },

      {
        title: "Real World UI/UX Projects",
        lessons: [
          {
            title: "Design a Mobile App UI",
            duration: "3 Hours",
          },
          {
            title: "Design an E-commerce Website",
            duration: "4 Hours",
          },
          {
            title: "Create Complete Figma Prototype",
            duration: "3 Hours",
          },
        ],
      },
    ],

    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Typography",
      "Color Theory",
      "Design Systems",
    ],

    requirements: ["No Experience Required", "Basic Computer Knowledge"],

    includes: [
      "16 Hours On-demand Video",
      "38 Lessons",
      "6 Real Projects",
      "8 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 7,
    image: cloudImg,
    title: "Cloud Computing Essentials",

    instructor: "David Wilson",
    instructorImage: instructor7,

    category: "Cloud Computing",
    level: "Intermediate",
    language: "English",

    rating: 4.8,
    students: 1850,

    lessons: 36,
    duration: "19 Hours",

    price: 65,
    discountPrice: 45,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 10,
    projects: 7,

    description:
      "Master cloud computing concepts with AWS, Azure, Google Cloud, Docker, and Kubernetes by building real-world cloud solutions.",

    content: [
      {
        title: "Introduction to Cloud Computing",
        lessons: [
          {
            title: "What is Cloud Computing?",
            duration: "12:20",
          },
          {
            title: "Benefits of Cloud Technology",
            duration: "15:40",
          },
          {
            title: "Cloud Computing Service Models (IaaS, PaaS, SaaS)",
            duration: "22:30",
          },
          {
            title: "Public, Private and Hybrid Cloud",
            duration: "18:10",
          },
        ],
      },

      {
        title: "Cloud Infrastructure Basics",
        lessons: [
          {
            title: "Understanding Data Centers",
            duration: "20:15",
          },
          {
            title: "Virtual Machines Explained",
            duration: "25:30",
          },
          {
            title: "Storage and Networking in Cloud",
            duration: "28:20",
          },
          {
            title: "Cloud Security Fundamentals",
            duration: "22:40",
          },
        ],
      },

      {
        title: "Amazon Web Services (AWS)",
        lessons: [
          {
            title: "Introduction to AWS",
            duration: "15:20",
          },
          {
            title: "AWS Console and Account Setup",
            duration: "18:30",
          },
          {
            title: "EC2 Virtual Servers",
            duration: "30:40",
          },
          {
            title: "AWS S3 Cloud Storage",
            duration: "25:10",
          },
          {
            title: "AWS Database Services",
            duration: "28:20",
          },
        ],
      },

      {
        title: "Microsoft Azure",
        lessons: [
          {
            title: "Introduction to Azure",
            duration: "15:30",
          },
          {
            title: "Azure Virtual Machines",
            duration: "25:20",
          },
          {
            title: "Azure Storage Services",
            duration: "20:40",
          },
          {
            title: "Azure Cloud Management",
            duration: "22:10",
          },
        ],
      },

      {
        title: "Google Cloud Platform (GCP)",
        lessons: [
          {
            title: "Introduction to Google Cloud",
            duration: "14:20",
          },
          {
            title: "Google Compute Engine",
            duration: "25:30",
          },
          {
            title: "Google Cloud Storage",
            duration: "20:10",
          },
          {
            title: "Cloud Deployment Basics",
            duration: "22:40",
          },
        ],
      },

      {
        title: "Docker and Containers",
        lessons: [
          {
            title: "What is Docker?",
            duration: "18:20",
          },
          {
            title: "Installing and Using Docker",
            duration: "25:40",
          },
          {
            title: "Creating Docker Images",
            duration: "30:00",
          },
          {
            title: "Running Containers",
            duration: "22:30",
          },
        ],
      },

      {
        title: "Kubernetes and Cloud Deployment",
        lessons: [
          {
            title: "Introduction to Kubernetes",
            duration: "25:20",
          },
          {
            title: "Kubernetes Architecture",
            duration: "30:10",
          },
          {
            title: "Deploying Applications with Kubernetes",
            duration: "35:40",
          },
          {
            title: "Cloud Deployment Project",
            duration: "2 Hours",
          },
        ],
      },

      {
        title: "Real World Cloud Projects",
        lessons: [
          {
            title: "Deploy a Web Application on AWS",
            duration: "4 Hours",
          },
          {
            title: "Create Cloud Storage System",
            duration: "3 Hours",
          },
          {
            title: "Dockerize a Full Stack Application",
            duration: "4 Hours",
          },
          {
            title: "Final Cloud Infrastructure Project",
            duration: "5 Hours",
          },
        ],
      },
    ],

    skills: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Cloud Security",
      "Virtual Machines",
      "Cloud Deployment",
    ],

    requirements: [
      "Basic Networking",
      "Basic Linux",
      "Basic Computer Knowledge",
    ],

    includes: [
      "19 Hours On-demand Video",
      "36 Lessons",
      "7 Real Projects",
      "10 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },

  {
    id: 8,
    image: cyberImg,
    title: "Cyber Security Essentials",

    instructor: "James Anderson",
    instructorImage: instructor8,

    category: "Cyber Security",
    level: "Intermediate",
    language: "English",

    rating: 5.0,
    students: 2400,

    lessons: 44,
    duration: "21 Hours",

    price: 69,
    discountPrice: 49,

    certificate: true,
    lifetimeAccess: true,

    quizzes: 12,
    projects: 8,

    description:
      "Protect systems and networks by learning cyber security fundamentals, ethical hacking concepts, network defense, and security best practices.",

    content: [
      {
        title: "Introduction to Cyber Security",
        lessons: [
          {
            title: "What is Cyber Security?",
            duration: "12:20",
          },
          {
            title: "Why Cyber Security is Important",
            duration: "15:30",
          },
          {
            title: "Types of Cyber Threats",
            duration: "18:40",
          },
          {
            title: "Understanding Security Principles",
            duration: "20:10",
          },
        ],
      },

      {
        title: "Networking Fundamentals",
        lessons: [
          {
            title: "How Computer Networks Work",
            duration: "22:30",
          },
          {
            title: "IP Addresses and Ports",
            duration: "18:20",
          },
          {
            title: "TCP/IP Protocol Explained",
            duration: "25:40",
          },
          {
            title: "DNS and HTTP Fundamentals",
            duration: "20:30",
          },
        ],
      },

      {
        title: "Linux for Cyber Security",
        lessons: [
          {
            title: "Introduction to Linux",
            duration: "15:20",
          },
          {
            title: "Linux Terminal Commands",
            duration: "25:10",
          },
          {
            title: "File Permissions and Users",
            duration: "22:40",
          },
          {
            title: "Linux Security Basics",
            duration: "18:30",
          },
        ],
      },

      {
        title: "Ethical Hacking Fundamentals",
        lessons: [
          {
            title: "What is Ethical Hacking?",
            duration: "15:40",
          },
          {
            title: "Security Testing Concepts",
            duration: "20:20",
          },
          {
            title: "Understanding Vulnerabilities",
            duration: "25:30",
          },
          {
            title: "Security Assessment Process",
            duration: "22:10",
          },
        ],
      },

      {
        title: "Network Security",
        lessons: [
          {
            title: "Firewalls and Protection Systems",
            duration: "25:20",
          },
          {
            title: "Encryption Basics",
            duration: "28:30",
          },
          {
            title: "Authentication and Authorization",
            duration: "22:40",
          },
          {
            title: "Secure Network Design",
            duration: "30:10",
          },
        ],
      },

      {
        title: "Security Tools and Practices",
        lessons: [
          {
            title: "Introduction to Security Tools",
            duration: "18:20",
          },
          {
            title: "Using Security Monitoring Tools",
            duration: "25:40",
          },
          {
            title: "Log Analysis Fundamentals",
            duration: "22:30",
          },
          {
            title: "Security Best Practices",
            duration: "20:10",
          },
        ],
      },

      {
        title: "Web Application Security",
        lessons: [
          {
            title: "Common Web Security Issues",
            duration: "25:00",
          },
          {
            title: "Understanding OWASP Top Risks",
            duration: "30:20",
          },
          {
            title: "Protecting Web Applications",
            duration: "28:40",
          },
          {
            title: "Secure Coding Principles",
            duration: "24:30",
          },
        ],
      },

      {
        title: "Real World Cyber Security Projects",
        lessons: [
          {
            title: "Network Security Analysis Project",
            duration: "4 Hours",
          },
          {
            title: "Security Audit Project",
            duration: "3 Hours",
          },
          {
            title: "Build a Secure Web Application",
            duration: "5 Hours",
          },
          {
            title: "Final Cyber Security Project",
            duration: "6 Hours",
          },
        ],
      },
    ],

    skills: [
      "Network Security",
      "Ethical Hacking",
      "Linux",
      "Firewalls",
      "Security Analysis",
      "Web Security",
      "Encryption",
      "Penetration Testing",
    ],

    requirements: [
      "Basic Computer Knowledge",
      "Networking Basics",
      "Basic Linux Knowledge",
    ],

    includes: [
      "21 Hours On-demand Video",
      "44 Lessons",
      "8 Real Projects",
      "12 Quizzes",
      "Certificate of Completion",
      "Lifetime Access",
    ],
  },
];

export { courses };

const instructors = [
  {
    id: 1,
    image: instructor1,
    follow: 0,
    name: "John Smith",
    specialization: "React.js Developer",
    experience: "7 Years",
    rating: 4.9,
    students: "12K",
    courses: 18,
    country: "United States",
    description:
      "John Smith is a senior React.js developer with over 7 years of experience building modern web applications. He enjoys teaching practical skills and helping students become professional developers.",

    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Next.js",
      "Node.js",
    ],
  },
  {
    id: 2,
    image: instructor2,
    follow: 0,
    name: "Sarah Johnson",
    specialization: "UI/UX Designer",
    experience: "6 Years",
    rating: 4.8,
    students: "9K",
    courses: 12,
    country: "Canada",
    description:
      "Sarah Johnson is a creative UI/UX designer with years of experience designing user-friendly websites and mobile applications for startups and global companies.",

    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    id: 3,
    image: instructor3,
    name: "Michael Brown",
    follow: 0,
    specialization: "Node.js Expert",
    experience: "8 Years",
    rating: 5.0,
    students: "15K",
    courses: 20,
    country: "United Kingdom",
    description:
      "Michael Brown is a backend engineer specializing in Node.js. He teaches scalable backend development, REST APIs, and database design using real-world projects.",

    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Socket.io",
    ],
  },
  {
    id: 4,
    image: instructor4,
    follow: 0,
    name: "Emily Davis",
    specialization: "Flutter Developer",
    experience: "5 Years",
    rating: 4.9,
    students: "11K",
    courses: 14,
    country: "Australia",
    description:
      "Emily Davis is a Flutter developer passionate about building beautiful cross-platform mobile applications for Android and iOS.",

    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "State Management",
      "Mobile UI",
    ],
  },
  {
    id: 5,
    image: instructor5,
    follow: 0,
    name: "David Wilson",
    specialization: "AI Engineer",
    experience: "9 Years",
    rating: 4.7,
    students: "8K",
    courses: 10,
    country: "Germany",
    description:
      "David Wilson is an AI engineer with experience in machine learning, deep learning, and computer vision. He enjoys simplifying complex AI concepts.",

    skills: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "Data Analysis",
    ],
  },
  {
    id: 6,
    image: instructor6,
    follow: 0,
    name: "Jessica Taylor",
    specialization: "Data Scientist",
    experience: "7 Years",
    rating: 4.9,
    students: "13K",
    courses: 16,
    country: "France",
    description:
      "Jessica Taylor is a professional data scientist helping businesses make data-driven decisions through analytics and visualization.",

    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Power BI",
      "Data Visualization",
    ],
  },
  {
    id: 7,
    image: instructor7,
    follow: 0,
    name: "Daniel Miller",
    specialization: "Cyber Security",
    experience: "10 Years",
    rating: 4.8,
    students: "7K",
    courses: 11,
    country: "Singapore",
    description:
      "Daniel Miller is a cybersecurity specialist focused on ethical hacking, penetration testing, and network security best practices.",

    skills: [
      "Cyber Security",
      "Ethical Hacking",
      "Network Security",
      "Linux",
      "Kali Linux",
      "OWASP",
    ],
  },
  {
    id: 8,
    image: instructor8,
    follow: 0,
    name: "Sophia Anderson",
    specialization: "Cloud Computing",
    experience: "8 Years",
    rating: 5.0,
    students: "14K",
    courses: 17,
    country: "Netherlands",
    description:
      "Sophia Anderson is a cloud computing expert with years of experience deploying scalable applications using modern cloud technologies.",

    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Computing",
      "Linux",
    ],
  },
];

export { instructors };

const testimonials = [
  {
    id: 1,
    image: student1,
    name: "Ali Ahmad",
    profession: "Frontend Developer",
    rating: 5,
    review:
      "EduHub helped me improve my React skills and land my first developer job.",
  },
  {
    id: 2,
    image: student2,
    name: "Sara Johnson",
    profession: "UI/UX Designer",
    rating: 5,
    review:
      "The instructors are amazing and the lessons are very easy to follow.",
  },
  {
    id: 3,
    image: student3,
    name: "Michael Brown",
    profession: "Mobile Developer",
    rating: 4,
    review:
      "I learned Flutter from scratch and built my first mobile application.",
  },
  {
    id: 4,
    image: student4,
    name: "Emily Davis",
    profession: "Data Analyst",
    rating: 5,
    review:
      "Excellent platform with high-quality courses and practical projects.",
  },
];

export { testimonials };

const statistics = [
  {
    id: 1,
    number: "20K+",
    title: "Active Students",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    number: "500+",
    title: "Online Courses",
    icon: FaBookOpen,
  },
  {
    id: 3,
    number: "100+",
    title: "Expert Instructors",
    icon: FaChalkboardTeacher,
  },
  {
    id: 4,
    number: "95%",
    title: "Success Rate",
    icon: FaAward,
  },
];

export { statistics };

const quizzes = [
  {
    courseId: 1,
    sectionId: 0,
    lessonId: 0,
    questions: [
      {
        question: "What is React.js?",
        options: [
          "A database",
          "A JavaScript library for building user interfaces",
          "A CSS framework",
          "A backend language",
        ],
        answer: "A JavaScript library for building user interfaces",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 0,
    lessonId: 1,
    questions: [
      {
        question: "Which method is used to create a React application?",
        options: ["createReact()", "createApp()", "createRoot()", "newReact()"],
        answer: "createRoot()",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 0,
    lessonId: 2,
    questions: [
      {
        question: "What is JSX in React?",
        options: [
          "A database language",
          "A syntax extension for JavaScript",
          "A CSS library",
          "A backend tool",
        ],
        answer: "A syntax extension for JavaScript",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 0,
    lessonId: 3,
    questions: [
      {
        question: "Which hook is used to manage state in React?",
        options: ["useEffect", "useState", "useRouter", "useFetch"],
        answer: "useState",
      },
    ],
  },

  // Section 2

  {
    courseId: 1,
    sectionId: 1,
    lessonId: 0,
    questions: [
      {
        question: "What are React components?",
        options: [
          "Reusable UI building blocks",
          "Database tables",
          "CSS files",
          "Server routes",
        ],
        answer: "Reusable UI building blocks",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 1,
    lessonId: 1,
    questions: [
      {
        question: "Which hook runs code after rendering?",
        options: ["useState", "useEffect", "useMemo", "useContext"],
        answer: "useEffect",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 1,
    lessonId: 2,
    questions: [
      {
        question: "Props in React are used for?",
        options: [
          "Passing data between components",
          "Creating databases",
          "Styling pages",
          "Installing packages",
        ],
        answer: "Passing data between components",
      },
    ],
  },

  {
    courseId: 1,
    sectionId: 1,
    lessonId: 3,
    questions: [
      {
        question: "Which tool is commonly used to create React projects?",
        options: ["Vite", "MongoDB", "Express", "Node only"],
        answer: "Vite",
      },
    ],
  },
];

export { quizzes };
