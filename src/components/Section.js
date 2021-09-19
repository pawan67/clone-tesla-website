import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
  }) {
  //   const [burgerStatus, setBurgerStatus] = useState(true);
    return (
      <Wrap  bgImage={backgroundImg}>
          <Fade down>
        <ItemText data-aos="fade-down" data-aos-duration="10000">
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        </Fade>
        <Fade up>
          <Buttons>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
            <DownArrow src="images/down-arrow.svg" />
          </Buttons>
        </Fade>
      </Wrap>
    );
  }
  
  export default Section;
  
  const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-image: url('/images/model-s.jpg'); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    /* filter: ${(props) => (props.show ? "blur(0px)" : "blur(4px)")}; */
  `;
  const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
  `;
  const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  
  const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 12px;
  `;
  const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
  `;
  
  const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  `;
  const Buttons = styled.div``;
  
  