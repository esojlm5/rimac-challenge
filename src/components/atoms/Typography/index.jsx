import styled from "styled-components";

const Typography = styled.p`
  display: ${(props) => (props.fontSize.mobile === "hide" ? "none" : "block")};
  font-size: ${(props) => props.fontSize.mobile || props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) =>
    props.fontFamily === "Sonoma" ? "BR Sonoma" : props.fontFamily};
  text-align: ${(props) => props.textAlign};
  ${(props) => (props.lineHeight ? `line-height: ${props.lineHeight}px` : "")};
  ${(props) =>
    props.letterSpacing ? `letter-spacing: ${props.letterSpacing}px` : ""};
  ${(props) => (props.fontStyle ? `font-style: ${props.fontStyle}` : "")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.grey100};
  cursor: ${(props) =>
    props.onClick || props.pointer ? "pointer" : "inherit"};
  margin: 0;
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}px;` : "")}
  ${(props) => (props.mt ? `margin-top: ${props.mt}px;` : "")}
  ${(props) => (props.mr ? `margin-right: ${props.mr}px;` : "")}
  ${(props) => (props.ml ? `margin-left: ${props.ml}px;` : "")}
  padding: 0;
  ${(props) => (props.pb ? `padding-bottom: ${props.pb}px;` : "")}
  ${(props) => (props.pt ? `padding-top: ${props.pt}px;` : "")}
  ${(props) => (props.pr ? `padding-right: ${props.pr}px;` : "")}
  ${(props) => (props.pl ? `padding-left: ${props.pl}px;` : "")}
  
  @media only screen and (width > 768px) {
    display: ${(props) =>
      props.fontSize.desktop === "hide" ? "none" : "block"};
    font-size: ${(props) => props.fontSize.desktop || props.fontSize}px;
  }
`;

export default Typography;
