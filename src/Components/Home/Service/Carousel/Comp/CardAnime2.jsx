"use client";
import React from "react";
import { Carousel, Card } from "../Comp/CardAnime";
import Link from 'next/link';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Link key={card.src} href={`/Section/Digitalmarket/${index + 1}`} className="no-underline">
      {/* Ensure Card component doesn't have box-related styles */}
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/AppleCardImages/card1.webp",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: '/AppleCardImages/card2.webp',
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: '/AppleCardImages/card3.webp',
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/AppleCardImages/card4.webp",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/AppleCardImages/card5.webp",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/AppleCardImages/card6.webp",
  },
];
