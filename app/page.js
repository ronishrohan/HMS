"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center size-full gap-2">
      <div className="text-3xl font-light">Hostel Management System</div>
      <Button onClick={router.push("/login")} className="text-xl">
        Get Started
      </Button>
      oncl
    </div>
  );
};

export default page;
