"use client";

import { Button } from "@/components/ui/button";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/particle-effects";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        staticity={30}
        color="#3b82f6"
      />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <HighlightGroup className="grid gap-8">
          <HighlighterItem className="group">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900/75">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="max-w-2xl text-zinc-400">
                  Get started today and discover how our AI solutions can revolutionize your operations, boost efficiency, and drive growth.
                </p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-zinc-200 text-zinc-900 hover:bg-zinc-100"
                  >
                    <Link href="#contact">
                      Get Started
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100"
                  >
                    <Link href="#services">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </section>
  );
} 