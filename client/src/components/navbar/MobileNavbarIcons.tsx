import React from "react";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";

// Icons
import { FaGithub } from "react-icons/fa6";

export default function MobileNavbarIcons() {

    return (

        <React.Fragment>
            
            <Button size="iconRounded" variant="outline" onClick={()=> window.location.href = "https://github.com/ekasky"}><FaGithub fontSize={24} /></Button>
            <MobileNavbar />

        </React.Fragment>

    );

}