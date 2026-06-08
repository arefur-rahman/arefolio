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
        title: "ShodaiGhorBD",
        subtitle: "Full-scale e-commerce for a local Bangladeshi grocery brand",
        description:
            "A fast, lightweight e-commerce platform built for a client in Lakshmipur, designed to operate smoothly on 3G networks.",
        longDescription:
            "ShodaiGhorBD is a live client project built to digitize grocery shopping and home delivery in Lakshmipur. Knowing that target users often browse on slower mobile networks and entry-level phones, the platform focuses on speed, light assets, and minimal friction. It includes real-time order notifications, simplified checkout, and an admin interface to manage inventory.",
        tags: [
            "Next.js",
            "Firebase",
            "Tailwind CSS",
            "React",
            "MongoDB",
            "Mongoose",
            "TypeScript",
        ],
        role: "Lead Fullstack Developer",
        client: "ShodaiGhorBD",
        year: "2025",
        links: {
            live: "https://shodaighorbd.com",
        },
        caseStudy: {
            challenge:
                "Most e-commerce templates are bloated with heavy images, tracking scripts, and complex layouts. For local customers in Lakshmipur, this meant slow loads, high bandwidth consumption, and abandoned carts before the checkout form could even render.",
            solution:
                "I built a customized Next.js application using Server-Side Rendering (SSR) to deliver pre-rendered HTML instantly. Images are aggressively optimized using Next/Image, and Tailwind's utility-first styling keeps the bundle tiny. Real-time cart updates and order triggers use Firebase Cloud Firestore for instant synchronization with the delivery team's dashboard.",
            techDetail:
                "Utilized Firebase Authentication for phone/password login, Cloud Firestore for real-time order streams, and Next.js App Router for optimized static and dynamic segments. State is managed locally through React Context to avoid heavy third-party state managers.",
            retrospective:
                "The client wanted a fancy spinning loader, but I convinced them that a page loading in 1.2s without a loader is better. E-commerce in our towns doesn't need complex credit card processing up front—95% is Cash on Delivery. Designing for actual user behaviors saved months of development.",
        },
    },
    {
        slug: "warmup",
        title: "WarmUp",
        subtitle:
            "Winter clothes donation platform with Apple-inspired styling",
        description:
            "A community platform matching donors with local volunteers distributing winter clothing in northern Bangladesh.",
        longDescription:
            "During cold waves in Bangladesh, rural communities face severe weather. WarmUp connects people who have surplus clothes with student volunteer organizations that handle logistics. The UI is built around visual polish, utilizing macOS-style glassmorphism to create a premium feel that grabs attention and builds trust.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        role: "Frontend Developer & UI Designer",
        client: "Academic Project",
        year: "2024",
        links: {
            github: "https://github.com/arefur-rahman/warm-up-sourceCode.git",
            live: "https://warm-up-delta.vercel.app",
        },
        caseStudy: {
            challenge:
                "Charity sites often feel depressing or outdated. We wanted a UI that felt extremely modern, clean, and interactive—encouraging younger demographics to sign up, catalog items, and coordinate collection runs.",
            solution:
                "I designed a 'liquid glass' UI using advanced CSS backdrop-blur filters, dynamic gradients, and Framer Motion micro-interactions. The interface mimics Apple's macOS control widgets, with floating glass cards that respond to mouse movement and hover interactions.",
            techDetail:
                "Built using Vite, Tailwind CSS v3 (using custom classes for backdrop-filters), and Framer Motion for scroll-linked animations and smooth card expansions. We designed custom SVG icons that adapt to light and dark theme boundaries.",
            retrospective:
                "I spent hours writing custom CSS equations for standard glass filters when Tailwind's utility classes could get me 90% there. It was a good lesson: visual flair is great, but don't let it block core forms. I ended up rewriting the registration form to be dead-simple and high-contrast so volunteers on the move could use it easily.",
        },
    },
    {
        slug: "qibla-direction",
        title: "Direction to Qibla",
        subtitle:
            "Lightweight tool to find Qibla direction using device geolocation",
        description:
            "A fast, ad-free web utility calculating Kaaba bearing from coordinates, using device compass and location API.",
        longDescription:
            "Qibla Direction is a utility web application designed to help users determine the exact direction of the Kaaba from any location worldwide. By utilizing the browser's native Geolocation and DeviceOrientation APIs, it computes the spherical navigation angle (bearing) without requiring heavy map libraries or native app installation.",
        tags: [
            "React",
            "Geolocation API",
            "Device Orientation",
            "Tailwind CSS",
        ],
        role: "Creator",
        client: "Personal Utility",
        year: "2024",
        links: {
            live: "https://direction-to-qibla.vercel.app",
            github: "https://github.com/arefur-rahman/direction-to-qibla.git",
        },
        caseStudy: {
            challenge:
                "Most Qibla finder apps are bloated, filled with popup ads, or require App Store/Play Store downloads. Users in remote areas need a simple, single-purpose webpage that works instantly without high data costs.",
            solution:
                "I implemented a static web page that requests location permission once, calculates the mathematical bearing to Mecca using the great-circle formula, and displays a clean compass interface. It functions entirely on the client-side.",
            techDetail:
                "Formulated the mathematical bearing: θ = atan2(sin(Δλ)·cos(φ₂), cos(φ₁)·sin(φ₂) − sin(φ₁)·cos(φ₂)·cos(Δλ)), where φ₁ is current latitude, φ₂ is Mecca latitude (21.4225° N), and Δλ is longitude difference. If DeviceOrientation is supported, the compass rotates dynamically using CSS transforms.",
            retrospective:
                "iOS Safari has strict security restrictions on compass permissions (DeviceOrientationEvent.requestPermission). Debugging this on a physical iPhone without a Mac console was a nightmare. I had to learn how to write a clean button toggle that prompts the user for permissions explicitly before requesting the sensor stream.",
        },
    },
    {
        slug: "napa-counter",
        title: "NAPA Counter",
        subtitle: "Tarawih prayer rakaat tracker",
        description:
            "A simple tap-to-count utility designed to keep track of completed rakaats during Ramadan night prayers.",
        longDescription:
            "Ramadan night prayers (Tarawih) are 20 rakaats. It's surprisingly easy to lose track of whether you've completed 12 or 14 rakaats during long sessions. NAPA Counter is a minimal web application where a user tap registers each completed unit. The name is a local joke—referencing a politician's funny remarks—but the utility is 100% practical.",
        tags: ["Next.js", "LocalStorage", "Web Audio API", "Tailwind CSS"],
        role: "Creator",
        client: "Personal Project",
        year: "2025",
        links: {
            live: "https://napa-counter.vercel.app",
            github: "https://github.com/arefur-rahman/napa-counter.git",
        },
        caseStudy: {
            challenge:
                "When praying, you want zero visual distractions. You also don't want the app to lose its count if the page refreshes, your phone locks, or the browser goes to sleep to save memory.",
            solution:
                "I designed a full-screen tap target with a dark, high-contrast, zero-glare layout. The state is synced with LocalStorage on every tap. When the counter reaches 20, the screen flashes and plays a soft chime using the Web Audio API (so it doesn't need external audio files).",
            techDetail:
                "Built with Next.js App Router. Uses React hooks to track state and sync with `window.localStorage`. The sound is synthesized on-the-fly using a Web Audio API oscillator node, creating a pleasant sine-wave notification at 20 rakaats.",
            retrospective:
                "The name 'NAPA' started as a meme in Lakshmipur, which actually got my friends to use it. The feedback was immediate: 'Make the button bigger.' Now the entire screen is the button. You don't even have to look at it, just tap anywhere while standing up.",
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
        title: "Kaja Namaz Volume",
        subtitle: "A quiet tool for a personal debt",
        description:
            "A minimalist tracker for logging and managing missed (kaza) prayers — private and zero-friction.",
        longDescription:
            "Kaja Namaz Volume is a no-frills prayer debt tracker. It lets you log missed prayers by waqt, track how many you have made up, and see what is remaining. Built entirely for personal use.",
        tags: ["React", "mongodb", "Tailwind CSS"],
        role: "Creator",
        client: "Personal Project",
        year: "2025",
        links: {
            live: "https://kaja-namajer-hisab-frontend.vercel.app",
            github: "https://github.com/arefur-rahman/kaja-namajer-hishab-khata.git",
        },
        caseStudy: {
            challenge:
                "Keeping an honest count of kaza prayers is something most people quietly struggle with. The count builds up over time, mental math gets unreliable, and there was no simple tool that was private, and actually designed for this specific need.",
            solution:
                "Built a single-page tracker with per-waqt counters (Fajr, Dhuhr, Asr, Maghrib, Isha) that persists entirely in mongodb. Just signin and update your history. I wanted to keep it in localstorage but I need it in multiple devices.",
            techDetail:
                "Pure React with useState and useEffect for state management. All data stored in mongodb so the data can be get by signed in in multiple devices. Designed mobile-first since this is the kind of app you open on your phone between tasks.",
            retrospective:
                "This was never meant to be a portfolio project. Built for myself in a couple of hours. It ended up being the most personally useful thing I have ever built — which says something about what kinds of tools are actually worth making.",
        },
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
