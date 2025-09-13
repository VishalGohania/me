import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Profile = () => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://i.pinimg.com/736x/f6/a5/09/f6a509cf606c99d503cf03ad444654d8.jpg" />
          <AvatarFallback>VISHAL</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Vishal Guhania
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Full-Stack Developer
          </p>
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
};
