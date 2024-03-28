import React from "react";

// Icons
import { FaPython, FaReact, FaNewspaper, FaGamepad, FaBorderAll } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { GiMicrochip } from "react-icons/gi";

// Pages
import ProgrammingTutsPage from "@/pages/Posts/ProgrammingTutsPage";
import WebsiteDevPage from "./pages/Posts/WebsiteDevPage";
import ComputerSciencePage from "./pages/Posts/ComputerSciencePage";
import ComputerEngineeringPage from "./pages/Posts/ComputerEngineeringPage";
import AllFeaturedPage from "./pages/Posts/AllFeaturedPage";

interface navItemsInterface {

    tab: string;
    dropdown: boolean;
    dropItems?: {
        
        name: string;
        description?: string;
        icon?: React.ReactNode;
        page: React.ReactNode;
        href: string;

    }[],
    href?: string;

};

const navItems:navItemsInterface[] = [

    {
        tab: "Home",
        dropdown: false,
        href: "/"
    },

    {
        tab: "Blog",
        dropdown: false,
        href: "/blog"
    },

    {
        tab: "Featured",
        dropdown: true,
        dropItems: [

            {
                name: "Programming Tutorials",
                description: "Learn to think like a programmer and code in a varity of diffrent langauges.",
                icon: <FaPython />,
                page: <ProgrammingTutsPage />,
                href: "/programming-tuts"
            
            },

            {
                name: "Website Development",
                description: "Learn to make websites and web apps using the latest technologies and methods",
                icon: <FaReact />,
                page: <WebsiteDevPage />,
                href: "/web-dev"
            
            },

            {
                name: "Computer Science",
                description: "Learn the concepts of computer science",
                icon: <BiNetworkChart />,
                page: <ComputerSciencePage />,
                href: "/comp-sci"
            },

            {
                name: "Computer Enginnering",
                description: "Learn the concepts of computer engineering",
                icon: <GiMicrochip />,
                page: <ComputerEngineeringPage />,
                href: "/comp-eng"
            },

            {
                name: "Game Development",
                description: "Learn the concepts of game development",
                icon: <FaGamepad  />,
                page: <ComputerEngineeringPage />,
                href: "/game-dev"
            },

            {
                name: "Tech News",
                description: "See the latest tech news",
                icon: <FaNewspaper />,
                page: <ComputerEngineeringPage />,
                href: "/tech-news"
            },

            {
                name: "All Posts",
                description: "See all posts by category",
                icon: <FaBorderAll />,
                page: <AllFeaturedPage />,
                href: "/all-featured"
            },

    ]

    },

    {
        tab: "About us",
        dropdown: false,
        href: "/about-us"
    },

    {
        tab: "Fourm",
        dropdown: false,
        href: "/fourm"
    }

]; 

export default navItems;