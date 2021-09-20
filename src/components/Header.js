import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// import { selectCars } from "../features/car/carSlice";
// import { useSelector } from "react-redux";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars)
  // console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="/images/tesla-logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
        <a href="#">Solar Roof </a>
        <a href="#">Solar Panels</a>
      </Menu>
      <Fade right>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <trueOn onClick={() => setBurgerStatus(true)}>
            <img src="/images/menu.png" alt="" />
          </trueOn>
        </RightMenu>
      </Fade>

      <BurgerNav show={burgerStatus}>
        <CancelWrap onClick={() => setBurgerStatus(false)}>
          <i class="bx bx-x"></i>
        </CancelWrap>
        <li>
          <a href="#">Model s</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investpr Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More </a>
        </li>
      </BurgerNav>
    </Container>
  );
}
const Container = styled.div`
  img {
    height: 100px;
  }
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 4px 10px;
    padding: 5px 8px 4px 8px;
    transition: 1.5s;
    border-radius: 10px;
    color: #393c41;
  }
  a:hover {
    background-color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 4px 5px;
    padding: 5px 8px 4px 8px;
    transition: 1.5s;
    border-radius: 10px;
    color: black;
  }
  img {
    height: 18px;
    margin-right: 20px;
  }

  a:hover {
    background-color: white;
  }
  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;
const CustomMenu = styled.div`
  a {
  }

  img {
    height: 10px;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 1000;
  list-style: none;
  text-align: left;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  li {
    a {
      font-weight: 600;
      border-radius: 5px;
      transition: 0.2s;
      padding: 3px 6px;
    }
    a:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    padding: 8px 0;
    /* border-bottom: 1px solid rgba(0, 0, 0, .2); */
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;
const CancelWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 27px;
  cursor: pointer;
`;
const trueOn = styled.div``;
export default Header;
