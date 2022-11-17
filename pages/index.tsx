import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter();
  return (
    <div>
      {locales?.map((l, i) => {
        return (
          <span key={i} className="pr-5">
            <Link href={asPath} locale={l}>
              {l}
            </Link>
          </span>
        );
      })}
      <h2>{locale}</h2>
    </div>
  );
};

export default Home;
