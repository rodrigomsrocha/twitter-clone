import {
  Bell,
  BookmarkSimple,
  DotsThree,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  House,
  Note,
  PencilSimpleLine,
  TwitterLogo,
  User,
} from "phosphor-react";
import { MenuItem } from "./components/MenuItem";

export function MenuBar() {
  return (
    <aside className="hidden sm:sticky sm:top-0 sm:left-0 sm:flex sm:justify-between sm:flex-col sm:max-h-screen sm:px-5 sm:pt-2 sm:pb-5">
      <div className="flex flex-col items-center lg:items-start">
        <a
          href="/"
          className="flex items-center lg:items-start mb-2 lg:hover:bg-twitter-dark-hover lg:rounded-full p-3"
        >
          <TwitterLogo size={30} weight="fill" color="white" />
        </a>
        <MenuItem label="Página Inicial">
          <House size={30} />
        </MenuItem>
        <MenuItem label="Explorar">
          <Hash size={30} />
        </MenuItem>
        <MenuItem label="Notificações">
          <Bell size={30} />
        </MenuItem>
        <MenuItem label="Mensagens">
          <EnvelopeSimple size={30} />
        </MenuItem>
        <MenuItem label="Itens salvos">
          <BookmarkSimple size={30} />
        </MenuItem>
        <MenuItem label="Listas">
          <Note size={30} />
        </MenuItem>
        <MenuItem label="Perfil">
          <User size={30} weight="fill" />
        </MenuItem>
        <MenuItem label="Mais">
          <DotsThreeCircle size={30} />
        </MenuItem>
        <button className="flex self-stretch items-center justify-center lg:px-8 h-12 bg-twitter rounded-full mt-2 lg:bg-dar font-bold text-white hover:bg-twitter-light-hover">
          <span className="hidden lg:inline-block">Tweetar</span>
          <PencilSimpleLine size={30} className="lg:hidden" />
        </button>
      </div>
      <div className="flex mt-5 flex-col items-center lg:items-stretch">
        <div className="text-white flex lg:gap-4 items-center lg:p-3 py-3 lg:hover:bg-twitter-dark-hover rounded-full cursor-pointer">
          <img
            src="https://github.com/rodrigomsrocha.png"
            alt="avatar"
            className="rounded-full w-10"
          />
          <div className="hidden lg:flex-1 lg:inline-block">
            <strong className="block mb-0">Rodrigo</strong>
            <span className="text-gray">@rod2107</span>
          </div>
          <DotsThree className="hidden lg:inline-block" size={18} />
        </div>
      </div>
    </aside>
  );
}
