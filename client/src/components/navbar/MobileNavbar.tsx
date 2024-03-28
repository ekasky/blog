import {Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import {cn} from "@/lib/utils";

import { HiMiniBars2 } from "react-icons/hi2";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "@/assets/logo/bear.png";
import navItems from "@/navItems";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";

export default function MobileNavbar() {

    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    const [openDropdowns, setOpenDropdowns] = useState<{[index: number]: boolean}>({});

    const toggleDropdown = (index:number) => {

        setOpenDropdowns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));

    };

    const closeAll = () => {

        setSheetOpen(prev => !prev);
        setOpenDropdowns({});

    };

    return (
        <Sheet open={sheetOpen} onOpenChange={closeAll}>

            <SheetTrigger asChild>
                <Button variant="outline" size="iconRounded"><HiMiniBars2 fontSize={16} /></Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto">

                <SheetHeader>

                    <SheetTitle className="flex items-center justify-start gap-2 text-sm">
                        <img src={logo} alt="logo" width={24} />
                        Blog title
                    </SheetTitle>

                </SheetHeader>

                <div className="flex flex-col items-start w-full mt-4">
                    {/* Render all non-protected routes */}
                    
                    {navItems.map((item, key) => {

                        if((item.dropdown === false) && item.href) {

                            return (
                                <SheetClose key={key} asChild>
                                    <Link to={item.href} className={`${buttonVariants({ variant: "ghost" })} w-full justify-between`}>{item.tab}</Link>
                                </SheetClose>
                            );

                        }

                        else if((item.dropdown === true) && item.dropItems) {

                            const isOpen = openDropdowns[key] || false;

                            return (

                                <Collapsible key={key} open={isOpen} onOpenChange={()=>toggleDropdown(key)} className="w-full">
                                    
                                    <CollapsibleTrigger className={`${buttonVariants({variant: "ghost"})} flex items-center w-full justify-between`}>
                                        {item.tab}
                                        { isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} /> }
                                    </CollapsibleTrigger>

                                    <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "w-full")}>

                                        <div className="flex flex-col items-start border-l border-black ml-4">
                                            { item.dropItems.map((item, key) => {

                                                return (
                                                    
                                                    
                                                    <SheetClose key={key} asChild>
                                                        <Link to={item.href} className={`${buttonVariants({variant: "ghost"})} w-full flex justify-between`}>{item.name}</Link>
                                                    </SheetClose>

                                                );

                                            }) }
                                        </div>

                                    </CollapsibleContent>

                                </Collapsible>

                            );

                        }

                    })}

                </div>

                <SheetFooter>

                    <div className="flex flex-row gap-2 w-full mt-4">
                        <SheetClose asChild>
                            <Link to="/login" className={` ${ buttonVariants({variant: "default"}) } flex-1`}>Log In</Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link to="/signup" className={` ${ buttonVariants({variant: "default"}) } flex-1`}>Sign Up</Link>
                        </SheetClose>
                    </div>

                </SheetFooter>

            </SheetContent>
        </Sheet>
    );

}