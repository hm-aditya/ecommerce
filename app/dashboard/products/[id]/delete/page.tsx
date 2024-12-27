import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function DeleteRoute({ params }: Props) {
  const { id } = await params;
  
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this product?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete your
            product and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={id} />
            <SubmitButton variant={"destructive"} text="Delete" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}