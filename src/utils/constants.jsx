import { AiFillHome, AiOutlineFlag, AiOutlineHighlight } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

export const categories = [
  {
    name: "New",
    icon: <AiFillHome />,
    type: "home",
  },
  {
    name: "Trend",
    icon: <MdLocalFireDepartment />,
    type: "trending",
  },
  {
    name: "Müzik",
    icon: <CgMusicNote />,
    type: "category",
  },
  {
    name: "Filmler",
    icon: <FiFilm />,
    type: "category",
  },
  {
    name: "Canlı",
    icon: <MdLiveTv />,
    type: "category",
  },
  {
    name: "Oyun",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "Haberler",
    icon: <FiFilm />,
    type: "category",
  },
  {
    name: "Spor",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Eğitici",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Güzellik Kozmetik",
    icon: <AiOutlineHighlight />,
    type: "category",
    divider: true,
  },
  {
    name: "Ayarlar",
    icon: <FiSettings />,
    type: "menu",
  },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  {
    name: "Yardım",
    icon: <FiHelpCircle />,
    type: "menu",
  },
  {
    name: "New",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
