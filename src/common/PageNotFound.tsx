import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import { FC } from "react";
import { useTitle } from "../utils/useTitle";

export const PageNotFound: FC = () => {
  useTitle("Page Not Found");
  return (
    <section className='pageNotFound'>
      <p>404, Page not found!</p>

      <img src={Logo} alt='WritePad Page Not Found' />
      <Link to='/'>
        <button type='button'>Back To Home</button>
      </Link>
    </section>
  );
};
