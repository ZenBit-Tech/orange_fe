import React from 'react';
import { Wrapper } from './styles';
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {

  return (
    <Wrapper>
        <Link to="/">
            <img src={logo} alt="PlasmaAI" />
        </Link>
    </Wrapper>
  );
};

export default Nav;