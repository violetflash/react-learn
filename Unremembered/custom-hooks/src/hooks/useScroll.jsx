import { useEffect, useRef } from "react";


export const useScroll = (parentRef, childRef, callback) => {
  const observer = useRef();

  useEffect(() => {

    const child = childRef.current;
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0 //насколько мы должны пересечь элемент (0 - колбэк вызовется, если дочерний элемент только появился вызовется зоне видимости. 1 - если дочерний элемент появился вызовется зоне видимости ПОЛНОСТЬЮ)
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersection!');

        callback();
      }
    }, options);

    observer.current.observe(child);

    return () => observer.current.unobserve(child);

  }, [childRef, parentRef, callback]);



  return (
    <div>

    </div>
  )
};