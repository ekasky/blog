import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Icons
import { HiMiniBars2, HiXMark  } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

export default function MobileNavbarIcons() {

    /* Keeps track if the mobile menu is open or not */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /* Handle mobile menu button clicks */
    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (

        <React.Fragment>

            <Button size="iconRounded" variant="outline" onClick={()=> window.location.href = "https://github.com/ekasky"}><FaGithub fontSize={24} /></Button>
            <Button size="iconRounded" variant="outline" onClick={handleMenuClick}>{ !isMenuOpen ? <HiMiniBars2 fontSize={16} /> :  <HiXMark fontSize={16} /> }</Button>

        </React.Fragment>

    );

}