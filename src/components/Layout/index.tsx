import { Main } from "../Main";
import { MenuBar } from "../MenuBar";

export function Layout() {
  return (
    <div className="bg-primary">
      <div className="min-h-screen max-w-7xl mx-auto justify-center flex">
        <MenuBar />
        <Main />
        <div className="hidden w-sidebar md:flex max-w-full" />
      </div>
    </div>
  );
}
