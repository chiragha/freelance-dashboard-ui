import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "Hello 👋";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <input
        value={textToCopy}
        readOnly
        className="border-blue border-1 px-3 py-2 rounded-md w-64"
      />

      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded-md text-white transition ${
          copied ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}