import { useConfig } from "@/lib/config";
import Vercel from "@/components/Vercel";
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig();

  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <p>
            <a href="https://github.com/radioclub/website">GitHub</a>
          </p>
          <Vercel />
        </div>
        <div className="mt-2 mx-8 flex align-baseline justify-around flex-wrap">
          <p>
            <a href="https://by1tl.vercel.app">TLWX BY1TL Blog</a>
            &nbsp;|&nbsp;
            <a href="https://bh1rbg.vercel.app">BH1RBG Blog</a>
            &nbsp;|&nbsp;
            <a href="https://sites.google.com/site/linuxdigitallab">
              BH1RBG RF Lab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
