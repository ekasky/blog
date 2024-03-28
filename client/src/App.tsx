import React from "react";
import { Routes, Route } from "react-router-dom";
import navItems from "./navItems";

// Pages
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";

// Components
import Navbar from "@/components/navbar/Navbar";

export default function App() {

  return (
    
    <React.Fragment>

      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />}></Route>

        {/* Create routes for all the navItems */}
        
        { navItems.map( (tab, key)=>{

          if(tab.dropdown === false) {
            return [<Route key={key} path={tab.href} element={tab.page} />]
          }

          else if( (tab.dropdown === true) && tab.dropItems) {

            return tab.dropItems.map((item, itemKey) => (
              <Route key={itemKey} path={item.href} element={item.page} />
            ))
            
          }

          else {
            return [];
          }


        }) }

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </React.Fragment>

  );
  
}
