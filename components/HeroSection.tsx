"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  highlightColor?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  backgroundColor = "bg-[#FFF0F5]",
  highlightColor = "text-[#FF69B4]",
}: HeroSectionProps) {
  return (
    <section className={`${backgroundColor} pt-8 pb-16 md:pt-12 md:pb-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {imagePosition === "left" && (
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {title} <span className={highlightColor}>{subtitle}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryButtonHref}>
                <Button variant="primary" size="large">
                  {primaryButtonText}
                </Button>
              </Link>
              <Link href={secondaryButtonHref}>
                <Button variant="secondary" size="large">
                  {secondaryButtonText}
                </Button>
              </Link>
            </div>
          </div>

          {imagePosition === "right" && (
            <div className="md:w-1/2">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
