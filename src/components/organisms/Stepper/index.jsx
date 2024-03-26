import styled from "styled-components";
import { Container, Grid } from "@/components/atoms";
import { Step } from "@/components/molecules";
import Progress from "@/assets/progress.svg";
import { useLocation } from "react-router-dom";

const ComponentContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutral200};
  display: none;

  @media only screen and (width > 768px) {
    display: block;
  }
`;

const Stepper = () => {
  const location = useLocation();

  return (
    <ComponentContainer>
      <Grid container>
        <Container
          padding="16px 0"
          alignItems="center"
          justify="center"
          gap={16}
        >
          <Step
            active={location.pathname === "/planes"}
            number={1}
            label="Planes y coberturas"
          />
          <img src={Progress} alt="separador" />
          <Step
            active={location.pathname === "/resumen"}
            number={2}
            label="Resumen"
          />
        </Container>
      </Grid>
    </ComponentContainer>
  );
};

export default Stepper;

