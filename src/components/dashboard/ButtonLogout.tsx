"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const ButtonLogout = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex items-center gap-2"
      >
        <FiLogOut className="w-5 h-5" />
        Sair
      </Button>
    </div>
  );
};
export default ButtonLogout;
