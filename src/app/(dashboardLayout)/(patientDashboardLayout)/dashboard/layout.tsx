import LogoutButton from "@/components/shared/LogoutButton";
import React from "react";

const PatientDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>
    <LogoutButton/>
    {children}
    </div>;
};

export default PatientDashboardLayout;