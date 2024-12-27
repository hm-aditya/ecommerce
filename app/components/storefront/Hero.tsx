import prisma from "@/app/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
 
} from "@/components/ui/carousel";
import Image from "next/image";

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default async function Hero() {
  const data = await getData();
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[60vh] lg:h-[80vh]">
              <Image
                alt="Banner Image"
                src={item.imageString}
                fill
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute top-6 left-6 bg-opacity-30 bg-black text-white p-6 shadow-lg transition-transform hover:scale-105">
                <h1 className="text-xl lg:text-4xl font-bold ">
               
                  {item.title}
                </h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16 opacity-20 transition-transform hover:opacity-50 hover:scale-105" />
      <CarouselNext className="mr-16 opacity-20 transition-transform hover:opacity-50 hover:scale-105"/>
    </Carousel>
  );
}
