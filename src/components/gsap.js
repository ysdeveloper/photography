import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { gsap, Power3 } from "gsap";

const GsapAnimation = ({ children, animation, ...props }) => {
    const gsap_el = useRef(null)

    useEffect(() => {
        const initInterSectionObserver = (callback) => {
            let observer = new IntersectionObserver(callback, {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            });

            return observer;
        }

        let observer = initInterSectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, animation)
                }
            });
        });

        observer.observe(gsap_el.current)
    }, [])

    return (
        <>
            <props.as
                ref={gsap_el}
                {...props}
            >
                {children}
            </props.as>
        </>
    )
}

GsapAnimation.defaultProps = {
    as: "div",
    animation: { opacity: 1, ease: Power3.easeInOut }
}

GsapAnimation.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    animation: PropTypes.object
};

export default GsapAnimation