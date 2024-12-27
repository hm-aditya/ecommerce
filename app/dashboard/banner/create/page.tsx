"use client";
import { createBanner } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { bannerSchema } from "@/app/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Label } from "@radix-ui/react-label";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function BannerRoute() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [lastResult, action] = useActionState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-x-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Banner</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banner Details</CardTitle>
          <CardDescription>
            Create a your banner for your products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type="text"
                placeholder="Create Title for Banner"
              />
              <p className=" text-red-500">{fields.title.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Image</Label>
              <input 
              type="hidden"
               value={image}
               key={fields.imageString.key}
               name={fields.imageString.name}
               defaultValue={fields.imageString.initialValue}
               />
              {image !== undefined ? (
                <Image
                  src={image}
                  alt="Product Image"
                  width={200}
                  height={200}
                  className="object-cover w-[200px] h-[200px]"
                />
              ) : (
                <UploadDropzone 
              onClientUploadComplete={(res)=>{setImage(res[0].url)}}
              endpoint={"BannerImageRoute"} />
              )}
              <p className=" text-red-500">{fields.imageString.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Create Banner" />
        </CardFooter>
      </Card>
    </form>
  );
}