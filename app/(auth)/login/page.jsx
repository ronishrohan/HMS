"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center size-full">
      <Card>
        <CardHeader>
          <CardTitle>Go to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* <Label htmlFor="email">Email</Label> */}
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button onClick={() => router.push("/home")}>Sign in</Button>
            <Button variant="outline">Don't have an account?</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
