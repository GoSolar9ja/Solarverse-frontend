import { useProfile } from "@/context/ProfileContext";

export const Overview = () => {
  const { profile } = useProfile();
  return (
    <div className="grid gap-4">
      {profile === "home" && (
        <>
          <div className="p-4 bg-white shadow rounded">📦 Recent Orders</div>
        </>
      )}
      {profile === "installer" && (
        <>
          <div className="p-4 bg-white shadow rounded">🛠 Jobs To Do</div>
          <div className="p-4 bg-white shadow rounded">📅 Work Schedule</div>
        </>
      )}
    </div>
  );
};

export const Orders = () => {
  return <div className="p-4 bg-white shadow rounded">📦 Recent Orders</div>;
};

export const Jobs = () => {
  return <div className="p-4 bg-white shadow rounded">🛠 Jobs Assigned</div>;
};

export const Settings = () => {
  return <div className="p-4 bg-white shadow rounded">⚙️ Settings Page</div>;
};
