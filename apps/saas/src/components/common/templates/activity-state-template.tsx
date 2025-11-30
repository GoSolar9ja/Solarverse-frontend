import { ReactNode, useEffect, useState } from "react";
export default function ActivityStateTemplate({
  children,
  show,
}: {
  children?: ReactNode;
  show: boolean;
}) {
  return show && <Component children={children} />;
}

function Component({ children }: { children?: ReactNode }) {
  useEffect(() => {
    const delay = setTimeout(() => {
      setDelayText("Sorry it's taking longer than expected");
    }, 5000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [delayText, setDelayText] = useState("");

  return (
    <div className="h-screen w-screen z-30 backdrop-blur-sm bg-black/70 flex items-center font-semibold justify-center flex-col fixed top-0 left-0 gap-5 text-white">
      <div className="border-4 rounded-full border-primary border-b-secondary! size-12 animate-spin" />
      {delayText || children}
    </div>
  );
}
