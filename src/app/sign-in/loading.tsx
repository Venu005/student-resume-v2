import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin h-6 w-6 text-blue-600" />
    </div>
  );
}
