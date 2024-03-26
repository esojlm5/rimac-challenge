import styled from "styled-components";

const RedButton = styled.button`
  width: 100%;
  border-radius: 32px;
  padding: 14px 32px;
  background-color: ${(props) => props.theme.colors.r500};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme.colors.neutral0};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.r400};
  }
`;

export default RedButton;

