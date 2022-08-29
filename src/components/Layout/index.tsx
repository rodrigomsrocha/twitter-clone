import { MenuBar } from "../MenuBar";

export function Layout() {
  return (
    <div className="bg-primary">
      <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-smLayout sm:grid-cols-mdLayout md:grid-cols-lgLayout lg:grid-cols-layout">
        <MenuBar />
      </div>
    </div>
  );
}
