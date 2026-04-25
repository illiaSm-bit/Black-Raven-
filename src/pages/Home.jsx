import bgHomePage from "../shared/assets/img/bgHomePage.png";
import BlackRaven from "../shared/assets/img/BlackRaven.png";

export const Home = () => {
  return (
    <main
      className="min-h-screen w-full flex  justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${bgHomePage})` }}
    >
      <div className=" mt-[200px] w-[985px] flex flex-col items-center    ">
        <div className="flex flex-col items-center">
          <img src={BlackRaven} alt="" />
          <h3>BLACK RAVEN Is Available Now </h3>
          <a
            className="px-[40px] py-[15px] text-xl   font-raven  shadow-[6px_6px_0px_#5C002C] text-white  bg-[#A36977] text- font-raven708 "
            href="https://store.steampowered.com/app/3309290/CHornij_voron/"
          >
            Go Steam
          </a>
        </div>
      </div>
    </main>
  );
};
