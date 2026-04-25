import { useTranslation } from "react-i18next";
import Discord from "../shared/assets/icon/Discord.svg";
import Instagram from "../shared/assets/icon/Instagram.svg";
import LinkedIn from "../shared/assets/icon/Linkedin.svg";
import XTwitter from "../shared/assets/icon/X-Twitter.svg";
import YouTube from "../shared/assets/icon/Youtube.svg";
import BlackRaven from "../shared/assets/img/BlackRaven.png";

export const Footer = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="">
      <div className=" border-2 border-[#443e30] font-raven flex gap-[30px] items-center justify-center pt-[20px] pb-[20px] bg-[#10161e]">
        <h1 className="text-xl text-white">{t("FOLLOWUS")}</h1>
        <a
          className=" p-[3px] bg-white rounded-[50px]"
          href="https://discord.com/invite/yzmHVy9ncG"
        >
          <img src={Discord} alt="discord footer link" />
        </a>
        <a
          className=" p-[3px] bg-white rounded-[50px]"
          href="https://www.instagram.com/l4s_games/"
        >
          <img src={Instagram} alt="instagram footer link" />
        </a>
        <a
          className=" p-[3px] bg-white rounded-[50px]"
          href="https://www.linkedin.com/in/alexey-marchenko-b88022283/"
        >
          <img src={LinkedIn} alt="linkedin footer link" />
        </a>
        <a
          className=" p-[3px] bg-white rounded-[50px]"
          href="https://x.com/L4Sgames"
        >
          <img src={XTwitter} alt="x footer link" />
        </a>
        <a
          className=" p-[3px] bg-white rounded-[50px]"
          href="https://www.youtube.com/@LKNG4STRNG"
        >
          <img src={YouTube} alt="youtube footer link" />
        </a>
      </div>
      <div className="pt-[40px] flex flex-col items-center bg-[#091222]">
        <img src={BlackRaven} alt="black raven logo w-xs" />
        <nav className="mt-[60px]">
          <ul className=" font-raven text-xl flex gap-[40px] text-[#c2c4c9] ">
            <li>
              <a href=""> CONTACT</a>
            </li>
            <li>
              <a href=""></a>ABOUT
            </li>
            <li>
              <a href=""></a>PRIVACY
            </li>
            <li>
              <a href=""></a>SUPPORT
            </li>
          </ul>
        </nav>
        <p className="  text-[#454d5f] mt-[40px] mb-[40px]">
          © A.marchenko | L4S Games/Looking4Strange | 2026
        </p>
      </div>
    </div>
  );
};
