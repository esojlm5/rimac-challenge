import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.display === "inline" ? "inline-flex" : "flex")};
  flex-direction: ${(props) => props.direction};
  border-radius: ${(props) => `${props.borderRadius}px`};
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.index && `z-index: ${props.index};`}
  ${(props) =>
    props.bgColor &&
    `background-color: ${props.theme.colors[props.bgColor][props.bgVariant]};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) =>
    props.width &&
    `width: ${typeof props.width === "string" ? props.width : `${props.width}px`};`}
  ${(props) =>
    props.height &&
    `height: ${typeof props.height === "string" ? props.height : `${props.height}px`};`}
  ${(props) =>
    props.minWidth &&
    `min-width: ${typeof props.minWidth === "string" ? props.minWidth : `${props.minWidth}px`};`}
  ${(props) =>
    props.minHeight &&
    `min-height: ${typeof props.minHeight === "string" ? props.minHeight : `${props.minHeight}px`};`}
  ${(props) =>
    props.maxWidth &&
    `max-width: ${typeof props.maxWidth === "string" ? props.maxWidth : `${props.maxWidth}px`};`}
  ${(props) =>
    props.maxHeight &&
    `max-height: ${typeof props.maxHeight === "string" ? props.maxHeight : `${props.maxHeight}px`};`}
  ${(props) => props.gap && `gap: ${props.gap}px;`}
  ${(props) =>
    props.borderColor &&
    `border: ${props.borderWidth}px solid ${props.theme.colors[props.borderColor][props.borderVariant]};`}
  margin: ${(props) =>
    typeof props.margin === "string" ? props.margin : `${props.margin}px`};
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}px;` : "")}
  ${(props) => (props.mt ? `margin-top: ${props.mt}px;` : "")}
  ${(props) => (props.mr ? `margin-right: ${props.mr}px;` : "")}
  ${(props) => (props.ml ? `margin-left: ${props.ml}px;` : "")}
  padding: ${(props) => `${props.padding}px`};
  ${(props) => (props.pb ? `padding-bottom: ${props.pb}px;` : "")}
  ${(props) => (props.pt ? `padding-top: ${props.pt}px;` : "")}
  ${(props) => (props.pr ? `padding-right: ${props.pr}px;` : "")}
  ${(props) => (props.pl ? `padding-left: ${props.pl}px;` : "")}
`;

export default Container;

