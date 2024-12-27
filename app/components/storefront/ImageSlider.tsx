"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: string[];
}

export default function ImageSlider({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }
  function handleNextClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }
  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }
  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[mainImageIndex]}
          width={600}
          height={600}
          alt="Product Image"
          className="object-cover object-center w-[600px] h-[600px]"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button onClick={handlePreviousClick} variant={"ghost"} size={"icon"}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button onClick={handleNextClick} variant={"ghost"} size={"icon"}>
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-3">
          {images.map((image, index) => (
            <div key={index}
            className={cn(index===mainImageIndex ?"border-2 border-primary":"border border-gray-200", "relative rounded-lg overflow-hidden cursor-pointer")}
                onClick={() => handleImageClick(index)}>
              <Image
                src={image}
                width={100}
                height={100}
                alt="Product Image"
                className="object-cover object-center w-[100px] h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
