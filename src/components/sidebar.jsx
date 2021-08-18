import React, { useState } from 'react';
import sublinks from './data'
import { useGlobalContext } from '../components/context';
import './sidebar.css';
import {ImCancelCircle} from 'react-icons/im'


export default function Sidebar() {
    //custom hook imported with the useState of the sidebar for mobile view and fuction to close the sidebar
    const {isSideBarOpen, closeSideBarFuction} = useGlobalContext();

//fuctionn to close the sidebar on mobile view
const closeSidebar = () =>{
    closeSideBarFuction()
}

    return (
        <div className={`${isSideBarOpen ? 'sidebar-container' : 'hide-sidebar-container'}`}>
          
            <div className='sidebar-wrapper'>
                 <ImCancelCircle className='closeBTN' onClick={closeSidebar}/>
                <div className='sidebarItem-container'>
                 
                    {sublinks.map((singleLinks, index) => {
                    const {page, links} = singleLinks
                    return(
                    <div className='sidebarList' key={index}>
                    <h3>{page}</h3>
                    <div className='mainItem-container'>
                        {links.map((singleItem, index) =>{
                            const {label, url, icon} = singleItem;
                            return(
                                <>
                                <div className='sideBarMenu'><a ley={index} href={url}>{icon}</a></div>
                                <div className='itemLabel'>{label}</div>

                                </>
                            )
                        })}
                    </div>
                    </div>
                    )
                    })}
                </div>
            </div>
            
        </div>
    )
}
