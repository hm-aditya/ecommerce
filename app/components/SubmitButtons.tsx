"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCartIcon } from "lucide-react";

interface buttonProps {
  text: string;
  variant?:
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | undefined
    | null;
}
export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingCartButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button size={"lg"} className=" w-full mt-6">
          <Loader2 className="mr-4 h-5 w-5 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button size={"lg"} className=" w-full mt-6" type="submit">
          <ShoppingCartIcon className="mr-1 h-5 w-5" />
          Add to Cart
        </Button>
      )}
    </>
  );
}

export default function DeleteItem() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button disabled className="font-medium text-primary text-end">Removing ...</button>
      ) : (
        <button type="submit" className="font-medium text-primary text-end">Delete</button>
      )}
    </>
  );
}

export function CheckoutButton(){
  const { pending } = useFormStatus();
  return (<>
  {pending ? ( <Button size={"lg"} className="w-full mt-5">
               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
               Please Wait ...
              </Button>):( <Button type="submit" size={"lg"} className="w-full mt-5">
                Checkout
              </Button>)}
  </>)
}