import { ArrowLeft } from "phosphor-react";

export function Header() {
  return (
    <header className="flex gap-8 items-center px-4 py-1 sticky top-0 w-full bg-primary">
      <ArrowLeft size={20} />
      <div className="flex flex-col">
        <strong className="text-xl">Rodrigo</strong>
        <span className="text-gray text-sm">221 tweets</span>
      </div>
    </header>
  );
}
