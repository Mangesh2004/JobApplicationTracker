import Sidenav from "../_components/sidenav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Sidenav />
      </div>
      <div>{children}</div>
    </div>
  );
}
