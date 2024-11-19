"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/Slideshow/slide_0.jpg",
  "/Slideshow/slide_1.jpg",
  "/Slideshow/slide_2.jpg",
  "/Slideshow/slide_3.jpg",
  "/Slideshow/slide_4.jpg",
  "/Slideshow/slide_5.jpg",
  "/Slideshow/slide_6.jpg",
  "/Slideshow/slide_7.jpg",
  "/Slideshow/slide_8.jpg",
  "/Slideshow/slide_9.jpg",
];

export default function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}
