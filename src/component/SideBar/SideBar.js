import React from "react";
import Logo from "../../imgs/logo.png";
import "./SideBar.css";
import { sideBarData } from "../../Data/Data";
import { UilSignout } from '@iconscout/react-unicons'
import {useState} from 'react'
const SideBar = () => {

/* make each icons selected at a time.*/
const [selected, setselected] = useState(0);
	return (
		<div className="sidebar">
			{/* logo */}
			<div className="logo">
				<img src={Logo} alt="" />
				<span>
					Sh<span>o</span>ps
				</span>
			</div>

            <div className = "menu">
            {/* loop through sidebarData an display each icon */}
                {sideBarData.map((item, index)=>{
                    return(
                        <div className={selected===index?'menuItem active':'menuItem'} 
                        key={index}
                        onClick={()=>setselected(index)}>
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignout />Sign Out

                </div>
                
            </div>
		</div>
	);
};

export default SideBar;
