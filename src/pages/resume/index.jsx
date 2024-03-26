import { Container, Grid } from "@/components/atoms";
import styled from "styled-components";
import { BackButton, ResumeCard } from "@/components/molecules";
import { Stepper, StepperMobile } from "@/components/organisms";

const PageWrapper = styled.div`
  width: 100%;
  margin: 32px 0 40px;

  @media only screen and (width > 768px) {
    margin: 64px 0 112px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.6px;
  color: ${(props) => props.theme.colors.neutral700};
  margin-bottom: 40px;

  @media only screen and (width > 768px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 48px;
    margin-top: 32px;
  }
`;

const Resume = () => {
  return (
    <>
      <Stepper />
      <StepperMobile />
      <Grid container>
        <Container width="100%" maxWidth={928} margin="0 auto">
          <PageWrapper>
            <BackButton />
            <Title>Resumen del seguro</Title>
            <ResumeCard />
          </PageWrapper>
        </Container>
      </Grid>
    </>
  );
};

export default Resume;

