import NavLinks from "./nav-links";

export default function Sidebar() {
  return(
    <div className="fixed top-16 h-screen w-64 border-r-[1px]">
      <nav className="flex flex-col pr-3 py-4 md:pr-2 space-y-2">
        <NavLinks />
      </nav>
    </div>
  );
}