import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.neutral0};
  box-shadow: 0 1px 32px 0 rgba(174, 172, 243, 0.35);
  padding: ${(props) => props.padding};
`;

export default Card;

