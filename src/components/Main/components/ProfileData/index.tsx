import { Cake, MapPinLine } from "phosphor-react";

export function ProfileData() {
  return (
    <div className="py-20 px-4 relative flex flex-col">
      <button className="absolute right-4 top-4 py-1 px-4 text-base font-bold text-twitter rounded-full border border-twitter">
        Editar perfil
      </button>
      <h1 className="font-bold text-lg">Rodrigo</h1>
      <span className="text-gray text-sm">@rod2107</span>
      <p className="mt-3 text-sm">qualquer coisa</p>
      <ul className="my-3 text-gray text-sm">
        <li className="flex items-center gap-2">
          <MapPinLine />
          Belo Horizonte, MG
        </li>
        <li className="flex items-center gap-2">
          <Cake />
          Nascido(a) em 13 de Junho de 2005
        </li>
      </ul>
      <div className="flex gap-4 text-gray text-sm">
        <span>
          <strong className="text-white">320 </strong>
          seguindo
        </span>
        <span>
          <strong className="text-white">30 </strong>
          seguidores
        </span>
      </div>
    </div>
  );
}
