import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelRoute(){
    return(<section className="w-full min-h-[80vh] flex items-center justify-center" >
        <Card className="w-[350px]">
        <div className="p-6">
        <div className="w-full flex justify-center">
            <XCircle className=" p-2 w-12 h-12 rounded-full bg-red-500/50 text-red-500"/>
        </div>
        <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-semibold">Payment Canceled</h3>
            <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Please try again! </p>
        <Button asChild className="w-full mt-5 sm:mt-6">
            <Link href={'/'}>
            Back to Home Page</Link>
        </Button>
        </div>
        </div>
        </Card>

    </section>)
}