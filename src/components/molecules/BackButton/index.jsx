import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Caret from "@/assets/icon_button.svg";
import { Typography } from "@/components/atoms";

const Button = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media only screen and (width > 768px) {
    display: flex;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <img src={Caret} alt="retroceder" />
      <Typography
        color="b600"
        fontSize={18}
        fontWeight={600}
        lineHeight={20}
        letterSpacing={0.4}
      >
        Volver
      </Typography>
    </Button>
  );
};

export default BackButton;

