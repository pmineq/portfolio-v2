import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  autoAlpha: number;
  x: number;
  y: number;
  delay?: number;
  duration: number;
  overwrite: boolean | 'auto';
  ease: string;
}

export const useScrollAnimation = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const hide = (item: Element) => {
      gsap.set(item, { autoAlpha: 0 });
    };

    const animate = (item: Element) => {
      const htmlItem = item as HTMLElement;
      let x = 0;
      let y = 0;
      const delay = htmlItem.dataset.delay ? parseFloat(htmlItem.dataset.delay) : 0;

      if (item.classList.contains('reveal-ltr')) {
        x = -100;
        y = 0;
      } else if (item.classList.contains('reveal-btt')) {
        x = 0;
        y = 100;
      } else if (item.classList.contains('reveal-ttb')) {
        x = 0;
        y = -100;
      } else {
        x = 100;
        y = 0;
      }

      const animationOptions: AnimationOptions = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        delay,
        duration: 1.25,
        overwrite: 'auto',
        ease: 'expo',
      };

      gsap.fromTo(
        item,
        { autoAlpha: 0, x, y },
        animationOptions
      );
    };

    gsap.utils.toArray('.reveal').forEach((item) => {
      const element = item as Element;
      hide(element);

      ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        once: true,
        onEnter: () => {
          animate(element);
        },
      });
    });

    return () => {
      lenis.stop();
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
