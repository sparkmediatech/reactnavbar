import React, { useRef, useState, useEffect } from 'react';
import './home.css';
import Sidebar from '../components/sidebar';
import HomeImg from '../components/image/phone.svg';
import { useGlobalContext } from '../components/context';
import {BiUpArrow} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';



export default function Home() {
    //custom hook imported with the useState and functions
 const {
    openSideBarFunction, 
    isModuleOpen, 
    openModuleFuction,
    closeModuleFuction, 
    location, 
    page:{page, links}} = useGlobalContext();


//useRef to control the desktop view navigation bar container size
const subMenuContainer = useRef(null);

//this useEffect triggers the useRef aimed at changing the position of the navbar container(div)
//the objects coming from Location as useState was destructured
useEffect(() => {
   const subMenu = subMenuContainer.current;
   const {centerPosition} = location;
   subMenu.style.left = `${centerPosition}px`
}, [location])

// fuction to display the navMenu on mouseOver. the 'event' is used to determine the exact location of the mouse to display the exact navMenu
//the pageText and centerPosition variables were passed as parameter to openModuleFuction.
    const displaySubMenu = (e) =>{
    const pageText = e.target.textContent;
    const pageLocation = e.target.getBoundingClientRect();
    const centerPosition = pageLocation.left;
    openModuleFuction(pageText, {centerPosition})
 };
// fuction to hide the navbar when mouseOut.
 const hideSubMenu = (e) =>{
     if(!e.target.classList.contains('navModule', 'container')){
        closeModuleFuction()
     }
     
 };

 // fuction to open the sidebar on Mobile view
 const openSideBarMenu = () =>{
     openSideBarFunction()

 }
    
    return (
        <>
       
        
        <section className='section1'  >
             
            
            <div className='wrapper1'   >
            <div className='wrapper' >

            </div>
            </div>
            <div className='container' >
                <div className='header'  >
                    <h2 className='title'>Stripe Demo</h2>
                    <ul className='navBar'>
                    <li onMouseOver={displaySubMenu} >Products</li>
                   <li onMouseOver={displaySubMenu}>Developers</li>
                    <li onMouseOver={displaySubMenu}>Company</li>

                </ul>
                

                </div>
                
                
                <div className={isModuleOpen ? 'navModule': 'hideNavModule'} ref={subMenuContainer}>
                <BiUpArrow className='arrowUp'/>
                   <h4>{page}</h4>
                   <div className='subList-container'>
                      { links.map((singlesubLinks, index) => {
                          const {label, icon, url} = singlesubLinks;
                          return(
                              <a key={index} href={url}>
                                  <div className='iconDiv'>{icon}</div>
                                  <h5 className='labelTitle'>{label}</h5>
                              </a>
                          )
                      })}

                   </div>

                </div>

                <div className='img-container'>
                    <img src={HomeImg} alt="" />
              
                </div>
             <button className='btn'>Signin</button>
              
             
                <GiHamburgerMenu className='GiHamburgerMenu' onClick={openSideBarMenu}/>
            </div>
       
           
            <div className='tect-container' onMouseOut={hideSubMenu}>
        
               
            <div classList='text-container-wrapper'>
                <h2>
                    Payments infrastructure
                    for the internet
                </h2>

                <p>
                    Millions of companies of all sizes—from startups to Fortune 
                    500s—use Stripe’s software and APIs to accept payments, send 
                    payouts, and manage their businesses online.
                </p>

            
                 < button className='btn2'>Start Now</button>
             </div>
             
            </div>
          

     
        <Sidebar/>


        </section>
      
            
    </>
    )
}
