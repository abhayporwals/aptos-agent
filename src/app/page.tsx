"use client";
import Hero from "@/app/components/Home/Hero";
import Features from "@/app/components/Home/Features";
import Pricing from "@/app/components/Home/Pricing";
import Testimonials from "@/app/components/Home/Testimonials";
import Footer from "@/app/components/Home/Footer";
import TrustedBy from "@/app/components/Home/TrustedBy";
import { BentoGridThirdDemo } from "@/app/components/Home/Features-Bento";
import FAQ from "@/app/components/Home/FAQ";
import { RevealOnScroll } from "@/app/components/ui/reveal-on-scroll";
import Header from "@/app/components/navbar/Navbar";
import React from "react";
import { BentoDemo } from "@/app/components/Home/Features-Bento2";
import { catchyLine as CatchyLine } from "@/app/components/Home/catchyline";

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <Hero />
        <TrustedBy />
        <CatchyLine />
        {/* <div className="w-1/2 mx-auto">
          <BentoDemo/>
        </div> */}
        <Features />
        {/* <Testimonials /> */}
        <BentoGridThirdDemo/>
        <Pricing />
        <FAQ />
        <Footer />
      </RevealLayout>
    </div>
  );
}