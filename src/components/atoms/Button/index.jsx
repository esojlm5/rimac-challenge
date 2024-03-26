import styled from "styled-components";

const CustomButton = styled.div`
  width: auto;
  position: relative;
  padding: 18px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme.colors.grey0};
  border: 1px solid ${(props) => props.theme.colors.grey100};
  background-color: ${(props) => props.theme.colors.grey100};
  overflow: hidden;
  cursor: pointer;

  span {
    z-index: 1;
    font-family: "Sonoma", sans-serif;
  }

  &:before {
    content: "";
    position: absolute;
    transition: 0.2s all;
    border-radius: 999px;
    width: 0;
    height: 0;
    background-color: ${(props) => props.theme.colors.grey0};
  }

  &:hover {
    color: ${(props) => props.theme.colors.grey100};

    &:before {
      width: 500px;
      height: 500px;
    }
  }

  @media only screen and (width > 768px) {
    width: 100%;
    font-size: 20px;
    line-height: 24px;
  }
`;

const Button = ({ label, onClick }) => (
  <CustomButton role="button" onClick={onClick}>
    <span>{label}</span>
  </CustomButton>
);

export default Button;

