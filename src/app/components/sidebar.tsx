import NavLinks from "@/app/components/nav-links";

export default function Sidebar() {
  return(
    <div className="fixed h-screen w-[50px] border-r-[1px] border-[var(--color-light-gray)] md:w-64 z-50">
      <nav className="flex flex-col pr-1 py-2 space-y-[6px] md:pr-2">
        <NavLinks />
      </nav>
    </div>
  );
}