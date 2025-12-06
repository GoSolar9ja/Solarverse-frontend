import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { Button, ComponentVisibility, Typography } from "@solarverse/ui";
import { Construction } from "lucide-react";

export default function ComingSoonTemplate({
  title = "Coming Soon",
  showLogoutButton = false,
}: {
  title?: string;
  showLogoutButton?: boolean;
}) {
  const { logout } = useAuthContext();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="bg-primary/10 p-6 rounded-full">
        <Construction />
      </div>

      <div className="max-w-md space-y-4">
        <Typography.h3 weight="semibold">{title}</Typography.h3>
        <Typography.body1 className="text-muted-foreground">
          We're working hard to bring you this feature. Stay tuned for updates!
        </Typography.body1>
        <ComponentVisibility visible={showLogoutButton}>
          <Button.PrimarySolid className="mx-auto" onClick={logout}>
            Logout
          </Button.PrimarySolid>
        </ComponentVisibility>
      </div>
    </div>
  );
}
