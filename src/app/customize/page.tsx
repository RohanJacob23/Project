import CustomizeCard from "@/components/CustomizeCard";
import ModeToggle from "@/components/ThemeToggle";

export default function page() {
  return (
    <main className="flex items-center justify-center h-full px-8">
      <div className="absolute left-8 top-4">
        <ModeToggle />
      </div>
      <CustomizeCard />
    </main>
  );
}
