import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home"}>
      <h1 className="gradient-text select-none text-base flex md:text-xl">
        WATANUKI綿貫
      </h1>
    </Link>
  );
};

export default Logo;
