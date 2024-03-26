import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  margin: 0 0 96px;

  @media only screen and (width > 768px) {
    margin: 32px 0;
  }
`;
const Blur = styled.div`
  position: absolute;
  inset: ${(props) => props.position};
  filter: blur(100px);
  height: 870.4px;
  width: 345.6px;
  z-index: 0;
  background-repeat: no-repeat;
  pointer-events: none;
  display: ${(props) => (props.mobile ? "block" : "none")};

  background:
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent)
      1px 12px/170px 170px,
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent) -11px
      92px/195px 195px,
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent)
      130px 177px/131px 131px,
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent)
      55px 168px/195px 195px,
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent)
      39px 258px/220px 220px,
    radial-gradient(farthest-side, ${(props) => props.color} 98%, transparent)
      193px 362px/150px 150px;

  @media only screen and (width > 768px) {
    display: ${(props) => (props.desktop ? "block" : "none")};
  }
`;

const BlurBackground = ({ children }) => (
  <Background>
    <Blur mobile color="#00f4e2" position="-450px -250px 0px auto" />
    <Blur desktop color="#c333ff" position="250px auto 0 -250px" />
    <Blur desktop color="#00f4e2" position="64px -280px 0px auto" />
    {children}
  </Background>
);

export default BlurBackground;

