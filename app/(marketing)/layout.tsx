import { Navber } from "./_components/navber";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navber />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
