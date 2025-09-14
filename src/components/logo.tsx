
import { cn } from "@/lib/utils";
import Image from "next/image";
import finangologo from "../assets/FinangoLogo.jpeg";

export function FinanGoLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <Image 
        //src="https://storage.googleapis.com/stedi-assets/finango-logo.png" 
        src={finangologo}
        alt="FinanGo Logo" 
        width={40} 
        height={40} 
        className="rounded-lg"
      />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        FinanGo
      </span>
    </div>
  );
}
