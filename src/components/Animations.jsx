import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animations = () => {
  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      /*** HOME SECTION ***/
      gsap.from("#home h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#home", start: "top 80%" },
      });
      gsap.from("#home p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: "#home", start: "top 80%" },
      });
      gsap.from("#home button", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: "#home", start: "top 80%" },
      });

      /*** ABOUT SECTION ***/
      gsap.from("#about p", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#about", start: "top 80%" },
      });


gsap.from("#about .about-btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top 85%", 
    toggleActions: "play none none reverse", 
  },
});


      gsap.from("#about img", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: "#about", start: "top 80%" },
      });

      /*** SERVICES SECTION ***/
      gsap.from("#services h2", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#services", start: "top 90%" },
      });
      gsap.from("#services .grid", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#services", start: "top 80%" },
      });

      /*** MISSION SECTION ***/
      gsap.from("#mission p, #mission h2, #mission img", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#mission", start: "top 80%" },
      });

      /*** OBJECTIVES SECTION ***/
      gsap.from("#objectives p, #objectives h2, #objectives ul, #objectives button", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#objectives", start: "top 80%" },
      });
      gsap.from("#objectives img", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#objectives", start: "top 80%" },
      });

      /*** TESTIMONIALS SECTION ***/
      gsap.from("#testimonials h3", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
      });
   
      gsap.from("#testimonials .snap-start", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
      });

      /*** CONTACT SECTION ***/
      gsap.from("#contact", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 90%" },
      });
    }); 

 
    ScrollTrigger.refresh();
    window.addEventListener("load", ScrollTrigger.refresh);

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);

  return null;
};

export default Animations;
