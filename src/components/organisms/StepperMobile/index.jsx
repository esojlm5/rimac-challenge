import styled from "styled-components";
import { Container, Grid, Progress, Typography } from "@/components/atoms";
import Arrow from "@/assets/arrow-left.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ComponentContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutral0};
  display: block;

  @media only screen and (width > 768px) {
    display: none;
  }
`;

const StepperMobile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ComponentContainer>
      <Grid container>
        <Container
          padding="16px 0"
          alignItems="center"
          justify="center"
          gap={16}
        >
          <img src={Arrow} alt="retroceder" onClick={() => navigate(-1)} />

          <Typography
            fontSize={10}
            fontWeight={900}
            lineHeight={16}
            letterSpacing={0.8}
          >
            PASO {pathname === "/planes" ? 1 : 2} DE 2
          </Typography>

          <Progress percent={pathname === "/planes" ? 50 : 100} />
        </Container>
      </Grid>
    </ComponentContainer>
  );
};

export default StepperMobile;

