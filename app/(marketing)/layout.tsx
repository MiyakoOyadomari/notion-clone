import { Navber } from "./_components/navber";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navber />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
