import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { ProfileData } from "./components/ProfileData";

export function Main() {
  return (
    <div className="text-white sm:border-x sm:border-x-outline max-w-full flex flex-col w-main">
      <Header />
      <main>
        <Banner />
        <ProfileData />
      </main>
    </div>
  );
}
