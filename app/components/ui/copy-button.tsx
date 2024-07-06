"use client";

import { useState } from "react";
import { Copy, CheckSquare2 } from "lucide-react";

type CopyButtonProps = {
  textToCopy: string;
};

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center space-x-1 p-1 mx-1 bg-gray-200 rounded-sm hover:bg-gray-300">
      {copied ? (
        <CheckSquare2 className="w-3 h-3" color="gray" />
      ) : (
        <Copy className="w-3 h-3" color="gray" />
      )}
      <span className="text-xs font-light text-gray-600">
        {copied ? "copied!" : "copy"}
      </span>
    </button>
  );
}
