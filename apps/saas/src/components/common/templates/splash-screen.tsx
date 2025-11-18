import { ActivitySpinner } from "@solarverse/ui";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen bg-secondary/50 backdrop-blur-xs fixed inset-0 flex flex-col items-center justify-center ">
      <ActivitySpinner />
    </div>
  );
}
