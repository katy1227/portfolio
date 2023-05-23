// アイコンのimport一覧
import { FaAngleUp, FaInstagram } from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";

// 画像のimport一覧
import javascript from "../assets/images/javascript.png";
import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import typescript from "../assets/images/typescript.png";
import next from "../assets/images/next.png";
import rails from "../assets/images/rails.png";
import python from "../assets/images/python.png";
import flask from "../assets/images/flask.png";
import django from "../assets/images/django.png";
import github from "../assets/images/github.png";
import geeklife from "../assets/images/geeklife.png";
import instaclone from "../assets/images/instaclone.png";
import kohei from "../assets/images/kohei.jpg";
import takahiro from "../assets/images/takahiro.jpeg";

export const importIcon = () => {
  return { FaAngleUp, FaInstagram, FiMail, FiTwitter };
};

export const importImg = () => {
  return {
    kohei,
    takahiro,
    javascript,
    vue,
    react,
    typescript,
    next,
    rails,
    python,
    flask,
    django,
    github,
    geeklife,
    instaclone,
  };
};
