import dyed1 from "../../assets/Images/Dyed1.png";
import dyed2 from "../../assets/Images/Dyed2.png";
import dyed3 from "../../assets/Images/Dyed3.png";
import dyed4 from "../../assets/Images/Dyed4.png";
import dyed5 from "../../assets/Images/Dyed5.png";
import dyed6 from "../../assets/Images/dyed6.png";
import dyed7 from "../../assets/Images/dyed7.png";
import dyed8 from "../../assets/Images/dyed8.png";
import dyed9 from "../../assets/Images/dyed9.png";

import { useState, useRef, useEffect, useCallback } from "react";

// This component contains all the logic for an interactive, auto-scrolling marquee.
const Marquee = ({ items, direction = "left" }) => {
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollLeftRef = useRef(0);
  const animationFrameId = useRef(null);

  const duplicatedItems = [...items, ...items, ...items];

  const animateMarquee = useCallback(() => {
    if (marqueeRef.current && !isDragging) {
      const speed = direction === "left" ? -1 : 1;
      scrollLeftRef.current += speed;

      const marqueeWidth = marqueeRef.current.scrollWidth / 3;
      if (direction === "left" && scrollLeftRef.current < -marqueeWidth) {
        scrollLeftRef.current += marqueeWidth;
      } else if (direction === "right" && scrollLeftRef.current > 0) {
        scrollLeftRef.current -= marqueeWidth;
      }
      marqueeRef.current.style.transform = `translateX(${scrollLeftRef.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animateMarquee);
  }, [isDragging, direction]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateMarquee);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [animateMarquee]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    setStartX(pageX - scrollLeftRef.current);
    if (marqueeRef.current) {
      marqueeRef.current.style.cursor = "grabbing";
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
    const walk = pageX - startX;
    scrollLeftRef.current = walk;
    marqueeRef.current.style.transform = `translateX(${walk}px)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (marqueeRef.current) {
      marqueeRef.current.style.cursor = "grab";
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div ref={marqueeRef} className="flex cursor-grab">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${direction}-${item.id}-${index}`}
            className="flex flex-col bg-gray-800 rounded-xl overflow-hidden w-72 h-[420px] flex-shrink-0 mx-4 group"
          >
            <div className="p-4 text-center h-16 flex items-center justify-center">
              <h3
                className="text-white font-semibold text-lg truncate"
                title={item.title}
              >
                {item.title}
              </h3>
            </div>
            <div className="flex-grow h-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for the first slider (scrolls right to left)
const projects = [
  { id: 1, title: "Modern Living Room", imageUrl: dyed1 },
  { id: 2, title: "Chic Bedroom Design", imageUrl: dyed2 },
  { id: 3, title: "Minimalist Office Space", imageUrl: dyed3 },
  { id: 4, title: "Cozy Reading Nook", imageUrl: dyed4 },
  { id: 5, title: "Elegant Dining Area", imageUrl: dyed5 },
];

// Data for the second slider (scrolls left to right)
const features = [
  { id: 1, title: "Sustainable Materials", imageUrl: dyed6 },
  { id: 2, title: "Smart Home Integration", imageUrl: dyed7 },
  { id: 3, title: "Custom Craftsmanship", imageUrl: dyed8 },
  { id: 4, title: "Award-Winning Concepts", imageUrl: dyed9 },
];

// --- MAIN COMPONENT ---
const WashingPeceDyed = () => {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white text-center mb-16">
          WASHING/ PIECE DYED
        </h1>

        {/* Slider 1: Scrolls from right to left */}
        <div className="mb-10">
          <Marquee items={projects} direction="left" />
        </div>

        {/* Slider 2: Scrolls from left to right */}
        <div>
          <Marquee items={features} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default WashingPeceDyed;
