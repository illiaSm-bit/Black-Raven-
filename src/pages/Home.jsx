import bgHomePage from "../shared/assets/img/bgHomePage.png";

export const Home = () => {
  return (
    <main
      className='min-h-screen min-w-screen  bg-cover bg-center bg-no-repeat flex justify-center'
      style={{ backgroundImage: `url(${bgHomePage})` }}
    >
      <div className=' mt-35 w-[985px] flex flex-col items-center    '>
        <div className='flex flex-col items-center'>
          <h1 className=' mt-35 text-8xl text-amber-50 font-raven'>
            BLACK RAVEN
          </h1>
          <h3>BLACK RAVEN STEAM </h3>
          <a href='https://store.steampowered.com/app/3309290/CHornij_voron/'>
            GO STeam
          </a>
        </div>
      </div>
    </main>
  );
};
