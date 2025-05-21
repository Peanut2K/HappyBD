import { useEffect } from 'react';
import { motion } from "motion/react"

import './Gallery.css';
import Slide from "./Slide";

function Gallery() {
    

    useEffect(() => {
        scroll(
          motion(".progress", { scaleX: [0, 1] }, { ease: "linear" })
        );
    
        const sections = document.querySelectorAll(".img-container");
        sections.forEach((section) => {
          const header = section.querySelector("h2");
          scroll(motion(header, { y: [-400, 400] }, { ease: "linear" }), {
            target: header,
          });
        });
      }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => { 
            entries.forEach(entry => {
                console.log(entry);
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }else{
                    entry.target.classList.remove('visible');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));
    }, []);
return (
    <>
    <div className="gallery" >
        <div className="container">
            <div className="image-wrapper content hidden" id="img-top-left">
                <img src="/anda1.jpg" alt=""  style={{ transform: "scale(1.2)", transformOrigin: "center" }}/>
            </div>
            <div className="image-wrapper content hidden" id="img-top-right">
                <img src="/anda2.jfif" alt=""  />
            </div>
            <div className="image-wrapper content hidden" id="img-bottom-left">
                <img src="/anda13.jfif" alt=""  />
            </div>
            <div className="image-wrapper content hidden" id="img-bottom-right">
                <img src="/anda12.jpg" alt="" />
            </div>
            <div className="text-container hidden" id="center" style={{fontWeight:""}}>
                <p>Wishing you a day filled with love, laughter, and the joy of knowing how much you’re loved. Happy Birthday!</p> 
            </div>
        </div>
        
        <div className="vid-co">
            <label>โตเป็นสาวแร้ววววว~~</label>
            <video id="myVideo" className="vid" playsInline preload="metadata" autoPlay muted loop>
            <source src="/andac.mov" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        
        <div className="Slide">
        <Slide />
        <h3>โตแล้ว = ไม่ต้องมีพี่ๆเลี้ยงแล้ว Yayy</h3>
        </div>

    </div>

</>
    
);
}

export default Gallery;