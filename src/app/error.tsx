"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type ErrorProps = {
    error: Error;
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Error Occured:", error);
    }, [error]);

    return (
        <div className="h-screen flex items-center justify-center">
            <p>{error.message}</p>
            <Button onClick={() => reset()}> Try Again</Button>
        </div>
    );
}
