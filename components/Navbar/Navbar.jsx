"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { themeAtom } from "@/store/theme.store";

function Navbar() {
  const [theme, setTheme] = useAtom(themeAtom);
  function handleToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  }
  return (
    <div className="p-2 w-[500px] h-full">
      <div className="shrink-0  border-2 rounded-lg h-full border-border flex flex-col gap-2 p-4">
        <div className="text-xl font-medium text-primary mb-6">HMS</div>
        <Button className="flex justify-start text-xl !h-fit !py-4" variant="">
          Home
        </Button>
        <Button
          className="flex justify-start text-xl !h-fit !py-4"
          variant="outline"
        >
          Dashboard
        </Button>
        <Button
          className="flex justify-start text-xl !h-fit !py-4"
          variant="outline"
        >
          Settings
        </Button>

        <Button
          onClick={handleToggleTheme}
          className="flex justify-start text-xl !h-fit w-fit ml-auto !py-4 mt-auto "
          variant=""
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
