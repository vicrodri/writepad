import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <>
      <footer>
        <p>
          © 2030 <Link to='/'>WritePad</Link>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};
