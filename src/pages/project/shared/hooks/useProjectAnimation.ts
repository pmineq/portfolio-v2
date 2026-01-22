import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseProjectAnimationProps {
  projectRef: RefObject<HTMLDivElement | null>;
  topRef: RefObject<HTMLElement | null>;
  textRef?: RefObject<HTMLDivElement | null>;
}

export const useProjectAnimation = ({
  projectRef,
  topRef,
  textRef,
}: UseProjectAnimationProps) => {
  useEffect(() => {
    const header = document.getElementById('header');
    header?.classList.add('white', 'difference');

    // Top section animation
    if (topRef.current) {
      gsap.to(topRef.current, {
        height: '70vh',
        duration: 3,
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    }

    // Background color change animation
    const project = projectRef.current;
    if (project) {
      gsap.utils.toArray<HTMLElement>('.clr').forEach((item) => {
        const color = item.getAttribute('data-bgcolor');

        if (color) {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 50%',
            end: 'bottom 5%',
            onEnter: () =>
              gsap.to(project, {
                backgroundColor: color,
                duration: 1,
              }),
            onEnterBack: () =>
              gsap.to(project, {
                backgroundColor: color,
                duration: 1,
              }),
          });
        }
      });
    }

    // Text fade-in animation
    if (textRef?.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
      });

      tl.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
      });
    }

    return () => {
      header?.classList.remove('white', 'difference');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projectRef, topRef, textRef]);
};
