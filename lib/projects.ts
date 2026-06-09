export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    tags: string[];
    role: string;
    client: string;
    year: string;
    links: {
        github?: string;
        live?: string;
    };
    caseStudy: {
        challenge: string;
        solution: string;
        techDetail: string;
        retrospective: string;
    };
}

export const projects: Project[] = [
    {
        slug: "shodaighorbd",
        title: "Shodai Ghor BD",
        subtitle: "Modern e-commerce platform with 3D product visualizations",
        description:
            "A fast, responsive e-commerce web application featuring dynamic animations and 3D product views, built with Next.js 16 and React 19.",
        longDescription:
            "Shodai Ghor BD is a proprietary, full-scale e-commerce platform leveraging the Next.js App Router. It combines powerful technologies like Firebase, MongoDB, and Framer Motion to deliver a fast, responsive, and visually appealing user experience. It features rich UI components, 3D product visualizations, transactional emails, and robust data handling.",
        tags: [
            "Next.js",
            "React",
            "Three.js",
            "React Query",
            "shadcn/ui",
            "Firebase",
            "MongoDB",
        ],
        role: "Lead Fullstack Developer",
        client: "Shodai Ghor BD",
        year: "2025",
        links: {
            live: "https://shodaighorbd.com",
            github: "https://github.com/arefur-rahman/shodaighorbd.git",
        },
        caseStudy: {
            challenge:
                "Modern e-commerce requires highly engaging user interfaces that don't compromise on performance. Balancing rich features like 3D product rendering and complex animations with fast load times and SEO was critical.",
            solution:
                "Leveraged Next.js 16 App Router for optimized rendering and routing. Integrated Three.js and React Three Fiber for lightweight, interactive 3D product visualizations. Utilized Motion for smooth, dynamic UI transitions while keeping the core experience highly accessible using shadcn/ui and Radix UI.",
            techDetail:
                "State and data fetching are handled efficiently via React Query. The backend relies on Firebase for authentication, alongside MongoDB (via Mongoose) for robust catalog and order management. Forms are strictly validated using React Hook Form, and transactional emails are dispatched via Resend.",
            retrospective:
                "Integrating 3D elements inside a fast Next.js application taught me how to properly lazy-load heavy webGL contexts. Managing complex state across a full-stack application became significantly easier using React Query compared to traditional context-heavy approaches. The end result is a premium, high-performance shopping experience.",
        },
    },
    {
        slug: "warmup",
        title: "WarmUp",
        subtitle:
            "Modern donation platform connecting donors with meaningful causes",
        description:
            "A responsive, community-driven platform facilitating both monetary and in-kind donations across diverse charitable campaigns.",
        longDescription:
            "WarmUp is a comprehensive donation platform built to bridge the gap between donors and causes like education, disaster relief, and healthcare. It features secure Firebase authentication, detailed campaign management, and a highly polished UI. Utilizing modern 'glassmorphism' effects and a sky blue color palette, it creates a premium, trustworthy experience that encourages community engagement.",
        tags: [
            "React 19",
            "Vite",
            "Tailwind CSS v4",
            "DaisyUI",
            "Firebase",
            "Radix UI",
            "Material-UI",
        ],
        role: "Frontend Developer & UI Designer",
        client: "Academic Project",
        year: "2024",
        links: {
            github: "https://github.com/arefur-rahman/warm-up-sourceCode.git",
            live: "https://warm-up-delta.vercel.app",
        },
        caseStudy: {
            challenge:
                "Charitable platforms often struggle with outdated interfaces and a lack of transparency, which can deter younger demographics from engaging or trusting the platform with their donations.",
            solution:
                "Designed a 'LiquidGlass' UI featuring advanced CSS backdrop-blur filters to create an elegant, modern aesthetic. Integrated Firebase for secure user management and built a robust campaign categorization system to make discovering and tracking donations seamless and transparent.",
            techDetail:
                "Built with React 19 and Vite. The UI leverages Tailwind CSS v4 alongside DaisyUI, Radix UI primitives, and Material-UI for accessible, rich components. Integrated Firebase 11 for real-time database and auth capabilities, plus Howler.js for interactive audio feedback.",
            retrospective:
                "Combining multiple UI libraries (DaisyUI, Radix, MUI) taught me how to strictly manage component styling without class collisions. Rebuilding the registration and donation flows to be mobile-first and touch-friendly drastically improved usability, proving that aesthetics should never block core functionality.",
        },
    },
    {
        slug: "thaprathapri",
        title: "Thaprathapri",
        subtitle:
            "Satirical 'Personal Problem Solving' service with a premium UI",
        description:
            "A high-performance parody web application offering fictional score-settling services wrapped in a sleek, modern interface.",
        longDescription:
            "Thaprathapri (থাপড়াথাপড়ি) is a satirical web application designed to look like a premium personal problem-solving agency. Whether it's a friend who won't return borrowed money or a cheating ex, it offers 'services' organized into tiers (Basic, Standard, Premium, Combo). The joke is delivered through a hyper-polished, serious interface built with vibrant gradients and glassmorphism.",
        tags: [
            "Next.js 16",
            "React 19",
            "Tailwind CSS 4",
            "Framer Motion",
            "Shadcn/UI",
        ],
        role: "Creator",
        client: "Personal Project",
        year: "2025",
        links: {
            github: "https://github.com/arefur-rahman/thaprathapri.git",
            live: "https://thaprathapri.vercel.app/",
        },
        caseStudy: {
            challenge:
                "Satire only works if the presentation is completely believable. The challenge was to build a UI so premium and fast that users momentarily question if these ridiculous 'services' are actually real.",
            solution:
                "Built a high-performance frontend using Next.js 16 App Router and React 19. Designed a dark/light mode balanced aesthetic with Tailwind CSS 4, and used Framer Motion for smooth, serious-feeling entrance animations and hover states.",
            techDetail:
                "Leveraged Shadcn/UI and Radix UI primitives to rapidly build accessible, complex components like tiered pricing cards and modals. Custom React hooks handle the state logic for browsing and 'selecting' the fake services.",
            retrospective:
                "Building a joke project with production-grade tools was incredibly fun. It proved that applying strict TypeScript types and robust Next.js routing to ridiculous content is great practice for actual client work—and it makes the punchline land much harder.",
        },
    },
    {
        slug: "qibla-direction",
        title: "Qibla Direction Finders",
        subtitle: "High-precision real-time compass with premium aesthetics",
        description:
            "A beautifully crafted web application calculating Kaaba bearing from exact coordinates using device GPS and magnetometer APIs.",
        longDescription:
            "Qibla Direction is a sleek, mobile-first utility web application. It determines the exact direction of the Kaaba from any location worldwide using the Great Circle Distance (Haversine-like) formula. Featuring a 'hybrid compass' rotating dial system and a premium dark mode aesthetic with emerald accents, it delivers precise live heading updates straight from the browser.",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "Tailwind CSS v4",
            "Geolocation API",
            "Device Orientation",
        ],
        role: "Creator",
        client: "Personal Utility",
        year: "2025",
        links: {
            live: "https://direction-to-qibla.vercel.app",
            github: "https://github.com/arefur-rahman/direction-to-qibla.git",
        },
        caseStudy: {
            challenge:
                "Most compass apps either require native installation or feature bloated interfaces with ads. Building a seamless, high-precision compass entirely on the web—especially one that handles real-time sensor streams smoothly—is notoriously difficult due to mobile browser security limitations.",
            solution:
                "Developed a highly optimized React 19 application utilizing Vite and Tailwind CSS v4. It securely requests location permissions and leverages device GPS alongside the magnetometer to construct a hybrid, real-time rotating dial system that strictly mimics a physical compass.",
            techDetail:
                "Calculates exact bearings via the Great Circle Distance formula. It hooks into the browser's Geolocation and DeviceOrientation event listeners to constantly update the CSS transform rotation of the compass dial, applying glassmorphism and emerald accents for a premium feel.",
            retrospective:
                "Handling `DeviceOrientationEvent.requestPermission` on iOS Safari requires explicit user gestures and careful error handling. Overcoming these strict security measures on physical devices without a native console was challenging, but the resulting pure-client, install-free experience proved completely worth the effort.",
        },
    },
    {
        slug: "napa-counter",
        title: "NaPa Counter",
        subtitle: "The Ultimate Dose Tracker with premium dark-mode aesthetics",
        description:
            "A sleek, high-performing web application designed to track pill intake with native Bengali numerals and hardware-accelerated animations.",
        longDescription:
            "NaPa Counter transforms the mundane task of tracking medication into a premium, tactile experience. Designed with a custom Dark Teal palette, it features dynamic progress bars, keyboard 'God Mode' shortcuts, and persistent LocalStorage sessions. It completely ditches boring spreadsheets for a highly aesthetic, fluid counting experience.",
        tags: [
            "React 19",
            "Vite",
            "Tailwind CSS 4",
            "Shadcn UI",
            "Framer Motion",
            "LocalStorage",
        ],
        role: "Creator",
        client: "Personal Project",
        year: "2025",
        links: {
            live: "https://napa-counter.vercel.app",
            github: "https://github.com/arefur-rahman/napa-counter.git",
        },
        caseStudy: {
            challenge:
                "Tracking daily doses or repetitive tasks is usually handled by clunky apps or boring spreadsheets. The goal was to build a tracker that feels as premium, fast, and satisfying to use as a high-end code editor.",
            solution:
                "Developed a highly responsive Vite + React 19 application utilizing Framer Motion for smooth, hardware-accelerated transitions. Implemented strict keyboard listeners for a 'God Mode' navigation experience (Space to tap, Escape to abort) and integrated native Bengali numeral formatting.",
            techDetail:
                "Built completely client-side using Tailwind CSS 4 and Shadcn UI components for rapid, accessible styling. State is instantly synced with LocalStorage to prevent accidental data loss on reloads, while dynamic UI elements transition seamlessly from 'Resting Red' to 'Emerald Success'.",
            retrospective:
                "Adding full keyboard support combined with auto-focus made the app feel incredibly fast—proving that web utilities don't need to feel like 'websites'. The feedback loop of typing to count, combined with fluid Framer Motion animations, created an unexpectedly addictive user experience.",
        },
    },
    {
        slug: "tick-tock-toe",
        title: "Tick Tock Toe",
        subtitle: "Classic Tic Tac Toe with an attitude",
        description:
            "A classic multiplayer board with retro-brutalist styling, screen shake effects, and local scoreboards.",
        longDescription:
            "Tick Tock Toe is a playful version of the classic Tic Tac Toe game. It was built to experiment with micro-animations, high-contrast retro borders, sound synthesis, and screen-shake visual feedback in web browsers.",
        tags: ["Next.js", "Tailwind CSS", "Web Audio API"],
        role: "Creator",
        client: "Weekend Hack",
        year: "2024",
        links: {
            live: "https://tick-tock-toe-navy.vercel.app",
        },
        caseStudy: {
            challenge:
                "Building a Tic Tac Toe game is a beginner rite of passage, but most implementations look identical and feel lifeless. The goal was to take a trivial game and make it feel incredibly tactile and punchy.",
            solution:
                "I styled the game board with 4px solid borders, a retro neon color scheme, and custom click handlers that trigger screen shakes (CSS animation offsets) and localized audio pops generated via code.",
            techDetail:
                "Uses pure React state to track game turns and win lines. Incorporates a custom hook that fires short audio bursts at different frequencies (low pop for 'O', high pop for 'X', slide effect for win). Board vibration is triggered using a temporary class containing a keyframe animation.",
            retrospective:
                "Renaming it 'Tick Tock Toe' for no reason was a great marketing strategy for my local peer group. People actually clicked it to see if it had something to do with clock timers. It didn't. It's just a game, but making the game feel heavy and clicky taught me a lot about CSS transitions.",
        },
    },
    {
        slug: "kaja-namaz-volume",
        title: "Kaja Namajer Hishab",
        subtitle: "Full-stack web application for tracking missed prayers",
        description:
            "A modern React frontend and Express/MongoDB backend for securely logging and managing missed (kaza) prayers across devices.",
        longDescription:
            "Kaja Namajer Hishab is a comprehensive tracker designed to help users honestly manage their prayer debts. Featuring a secure Firebase authentication layer and a custom Express REST API connected to MongoDB, it ensures your data syncs reliably across all your devices. The UI is clean, responsive, and mobile-first, utilizing DaisyUI and Tailwind CSS for zero-friction daily usage.",
        tags: [
            "React 19",
            "Vite",
            "Tailwind CSS 4",
            "DaisyUI",
            "Firebase Auth",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        role: "Personal Project",
        client: "Personal Project",
        year: "2025",
        links: {
            live: "https://kaja-namajer-hisab-frontend.vercel.app",
            github: "https://github.com/arefur-rahman/kaja-namajer-hishab-khata.git",
        },
        caseStudy: {
            challenge:
                "Keeping an honest count of kaza prayers is a personal struggle that mental math often fails to solve. The challenge was building a private, secure tool that syncs across multiple devices, so users aren't locked to local storage on a single phone.",
            solution:
                "Developed a robust full-stack architecture. The frontend is built with React 19 and Vite for blazing fast loads, styled with DaisyUI. The backend is a custom Node.js/Express server that securely manages prayer records in a MongoDB database, with access strictly controlled via Firebase Authentication.",
            techDetail:
                "The frontend leverages React Context for state management and Axios for API communication. The REST API exposes secure endpoints for fetching and updating per-waqt counters. CORS and JSON middleware ensure smooth and secure cross-origin requests between the frontend and the backend.",
            retrospective:
                "What started as a simple local storage tracker evolved into a fully integrated MERN-stack utility. Moving from local state to a secure cloud database taught me invaluable lessons about auth flows, CORS management, and structuring RESTful endpoints. It remains my most personally useful build.",
        },
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
