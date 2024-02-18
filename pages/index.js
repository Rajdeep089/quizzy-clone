
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage/Mainpage";

export default function Home() {
  return (
    <main className="bg-gradient-to-tl from-[#2F3833] to-[#2F3833] via-[#2A2A2A] flex flex-row w-screen xl:w-[110vw] xxl:w-[100vw] h-[165vh] xl:h-[110vh] xxl:h-[100vh] ">
      <Sidebar/>
      <MainPage/>
    </main>
  );
}
