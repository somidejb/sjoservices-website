import { pages } from "next/dist/build/templates/app-page"

export const servicesLinks = [
    {
        id: 1,
        title: "SEO",
        alt: "seo service",
        imageUrl: "/assets/images/seo.png",
        description: "On and off page SEO to increase website visitors",
        noUrl: "/assets/icons/first.svg",
        noAlt: "first service",
        linkUrl: "",
    },
    {
        id: 2,
        title: "Content Writing",
        alt: "content writing service",
        imageUrl: "/assets/images/content-writing.png",
        description: "Writing articles, blog posts, newsletters, etc",
        noUrl: "/assets/icons/second.svg",
        noAlt: "second service",
        linkUrl: "",
    },
    {
        id: 3,
        title: "Infographics",
        alt: "infographics service",
        imageUrl: "/assets/images/infographics.png",
        description: "Creating infographic designs for the website or other content",
        noUrl: "/assets/icons/third.svg",
        noAlt: "third service",
        linkUrl: "",
    },
    {
        id: 4,
        title: "Email Marketing",
        alt: "Email Marketing",
        imageUrl: "/assets/images/email-marketing.png",
        description: "Make customers aware of new products, services, etc via email",
        noUrl: "/assets/icons/fourth.svg",
        noAlt: "fourth service",
        linkUrl: "",
    },
    {
        id: 5,
        title: "Social Media",
        alt: "social media",
        imageUrl: "/assets/images/social-media.png",
        description: "Manage social media accounts including posting and networking",
        noUrl: "/assets/icons/fifth.svg",
        noAlt: "fifth service",
        linkUrl: "",
    },
    {
        id: 6,
        title: "Advertising",
        alt: "Advertising",
        imageUrl: "/assets/images/advertising.png",
        description: "Manage Google and Facebook ads for more visibility",
        noUrl: "/assets/icons/sixth.svg",
        noAlt: "sixth service",
        linkUrl: "",
    },
    {
        id: 7,
        title: "Video Content",
        alt: "Video Content",
        imageUrl: "/assets/images/video-content.png",
        description: "Manage Google and Facebook ads for more visibility",
        noUrl: "/assets/icons/seventh.svg",
        noAlt: "seventh service",
        linkUrl: "",
    },
    {
        id: 8,
        title: "Website Maintenance",
        alt: "Website Maintenance",
        imageUrl: "/assets/images/website-maintenance.png",
        description: "Manage Google and Facebook ads for more visibility",
        noUrl: "/assets/icons/eighth.svg",
        noAlt: "eighth service",
        linkUrl: "",
    },
]

export const projectLinks = [
    {
        id: 1,
        title: "Deurum.com",
        service: "Website Design",
        imageUrl: "/assets/images/web1.png",
    },
    {
        id: 2,
        title: "Deurum.com",
        service: "Website Design",
        imageUrl: "/assets/images/web2.png",
    },
    {
        id: 3,
        title: "Deurum.com",
        service: "Website Design",
        imageUrl: "/assets/images/web3.png",
    },
    {
        id: 4,
        title: "Deurum.com",
        service: "Website Design",
        imageUrl: "/assets/images/web4.png",
    }
]

export const webServices = [
    {
        id: 1,
        title: "Functional Website",
    },
    {
        id: 2,
        title: "3 Pages",
    },
    {
        id: 3,
        title: "Content Upload",
    },
    {
        id: 4,
        title: "E-commerce Functionality",
    },
    {
        id: 5,
        title: "10 Products",
    },
    {
        id: 6,
        title: "Payment Processing",
    },
    {
        id: 7,
        title: "Opt-in Form",
    },
    {
        id: 8,
        title: "Speed Optimization",
    },
    {
        id: 9,
        title: "Hosting Setup",
    },
    {
        id: 10,
        title: "Social Media Icons",
    }
]

export const pricingPlans = [
    {
        id: 1,
        title: "Basic",
        description: "Recommended for the landing page of your business website.",
        pages: "{Maximum 3 Pages}.",
        price: "200",
        time: "5 Days Delivery",
        services: [1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    },
    {
        id: 2,
        title: "Standard",
        description: "Recommended for Full scale business website.",
        pages: "{Maximum 6 Pages}.",
        price: "800",
        time: "10 Days Delivery",
        services: [1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    },
    {
        id: 3,
        title: "Premium",
        description: "For E-commerce type website (E-commerce, Booking systems, Inventory and etc)",
        pages: "{Up to 20 pages}.",
        price: "2000",
        time: "30 Days Delivery",
        services: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    }
]

export const footerLinks = [
    {
        id: 1,
        title: "Navigation",
        links: [
            {
                id: 1,
                title: "Home",
                url: "/",
            },
            {
                id: 2,
                title: "About",
                url: "/about",
            },
            {
                id: 3,
                title: "Services",
                url: "/services",
            },
            {
                id: 5,
                title: "Contact",
                url: "/contact",
            },
        ]
    },
    {
        id: 2,
        title: "Services",
        links: [
            {
                id: 1,
                title: "SEO",
                url: "/services/seo",
            },
            {
                id: 2,
                title: "Content Writing",
                url: "/services/content-writing",
            },
            {
                id: 3,
                title: "Infographics",
                url: "/services/infographics",
            },
            {
                id: 4,
                title: "Email Marketing",
                url: "/services/email-marketing",
            },
            {
                id: 5,
                title: "Social Media",
                url: "/services/social-media",
            },
            {
                id: 6,
                title: "Advertising",
                url: "/services/advertising",
            },
            {
                id: 7,
                title: "Video Content",
                url: "/services/video-content",
            },
            {
                id: 8,
                title: "Website Maintenance",
                url: "/services/website-maintenance",
            },
        ]
    }
]