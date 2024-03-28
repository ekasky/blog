import { Link } from "react-router-dom";
import breakpoints from "@/breakpoints";

// Images and Icons
import logo from "@/assets/logo/bear.png";
import MobileNavbarIcons from "./MobileNavbarIcons";
import { useEffect, useState } from "react";


export default function Navbar() {

    /* Keeps track of the width of the screen to conditionally render components */
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    /* Updates the screenWidth variable everytime the screen width changes */
    useEffect(()=>{

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add a window event lister to detect screen width changes
        window.addEventListener("resize", handleResize);

        // Clean up event listener on demount
        return () => window.removeEventListener("resize", handleResize);

    },[]);

    return (

        <header className="flex items-center justify-between p-2 border-b">

            <div>

                {/* Render logo for navbar */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-12 md:w-16 lg:w-20" />
                </Link>

            </div>

            <div className="flex flex-row items-center gap-2">

                {/* Render Icon nav buttons on smaller devices */}
                { screenWidth <= breakpoints.phone_max && <MobileNavbarIcons />  }

            </div>

        </header>

    );

}