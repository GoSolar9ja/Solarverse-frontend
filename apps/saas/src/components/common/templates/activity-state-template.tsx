import { ReactNode, useEffect } from "react";
export default function ActivityStateTemplate({
  children,
}: {
  children?: ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="h-screen w-screen z-30 backdrop-blur-sm bg-black/20 flex items-center justify-center flex-col fixed top-0 left-0 gap-5">
      <div className="border-4 rounded-full border-primary border-b-secondary! size-12 animate-spin"></div>
      {children}
    </div>
  );
}
