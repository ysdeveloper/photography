import gsap, { Power3 } from "gsap";
import Image from "next/image"
import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react'
import GsapAnimation from "./gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Hero = () => {
    const component = useRef(null);
    const [loading, setLoading] = useState(true);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let hero = document.querySelector(".hero-section"),
            imgs = hero.querySelectorAll("img"),
            anime_wrapper = hero.querySelector(".animation-wrapper"),
            slides = anime_wrapper.querySelectorAll(".slide");

        // Check If All the images loaded or not
        Promise.all(Array.from(imgs).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
            setTimeout(() => {
                gsap.to(document.querySelector("#loading-wrapper"), { clipPath: "inset(100% 0 0 0)", duration: 1, ease: Power3.easeOut })
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }, 2000);
        });

        // Add scrolling parallax animation
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: anime_wrapper,
                    start: "top top",
                    end: "+=3000",
                    pin: true,
                    scrub: true
                }
            })

            tl.addLabel("start")
            tl.fromTo(hero.querySelector(".logo"), { autoAlpha: 1 }, { autoAlpha: 0 }, "start")
                .fromTo(anime_wrapper, { y: 0 }, { y: -200 }, "start")
                .fromTo([slides[0], slides[4]], { y: 0 }, { y: -100 }, "start")
                .fromTo([slides[1], slides[3]], { y: 0 }, { y: -150 }, "start")
                .to([slides[0], slides[1]], { x: "-200%" }, "start")
                .to([slides[3], slides[4]], { x: "200%" }, "start")
                .fromTo(slides[2], { clipPath: 'inset(30% 41% 0% 41% round 5px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)' }, "start")
        }, component);

        return () => ctx.revert()
    }, [])

    return (
        <>
            {loading && <Loading />}
            <section className="hero-section" ref={component}>
                <div className="container fixed left-1/2 -translate-x-1/2">
                    <div className="row">
                        <div className="col-12">
                            <GsapAnimation className="fadeIn">
                                <Image className="mx-auto logo w-[150px]" src="/assets/ysdeveloper_logo.svg" width={150} height={60} alt="Logo" />
                            </GsapAnimation>
                        </div>
                    </div>
                </div>
                <div className="animation-wrapper">
                    <div className="slide">
                        <Image src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width={350} height={60} alt="Logo" />
                    </div>
                    <div className="slide">
                        <Image src="https://images.unsplash.com/photo-1547314283-befb6cc5cf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width={350} height={60} alt="Logo" />
                        <Image src="https://images.unsplash.com/photo-1523049820105-c2e73204bac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={350} height={60} alt="Logo" />
                    </div>
                    <div className="slide">
                        <Image src="https://images.unsplash.com/photo-1612975702762-7cc2733b3e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2500&q=90" width={2500} height={60} alt="Logo" />
                    </div>
                    <div className="slide">
                        <Image src="https://images.unsplash.com/photo-1515268064940-5150b7c29f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnMlMjA0a3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" width={350} height={60} alt="Logo" />
                        <Image src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width={350} height={60} alt="Logo" />
                    </div>
                    <div className="slide">
                        <Image src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8anVuZ2xlJTIwYXQlMjBuaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" width={350} height={60} alt="Logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero

const Loading = () => {
    return (
        <div id="loading-wrapper" className="loading-wrapper"></div>
    )
}