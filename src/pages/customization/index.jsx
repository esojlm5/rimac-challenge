import styled from "styled-components";
import { Container, Grid } from "@/components/atoms";
import {
  InsuranceOptions,
  PlansList,
  Stepper,
  StepperMobile,
} from "@/components/organisms";
import { BackButton } from "@/components/molecules";
import { useContext, useState } from "react";
import AppContext from "@/util/context";

const PageWrapper = styled.div`
  width: 100%;
  margin: 32px 0 40px;

  @media only screen and (width > 768px) {
    margin: 40px 0 80px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  @media only screen and (width > 768px) {
    max-width: 544px;
    margin: 0 auto;
  }
`;

const Head = styled.div`
  p {
    text-align: left;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.2px;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.neutral700};
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: ${(props) => props.theme.colors.neutral700};
  }

  @media only screen and (width > 768px) {
    margin-top: 56px;

    p {
      text-align: center;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.6px;
    }

    span {
      text-align: center;
    }
  }
`;

const Customization = () => {
  const { data } = useContext(AppContext);
  const [type, setType] = useState();

  return (
    <>
      <Stepper />
      <StepperMobile />
      <Grid container>
        <Container width="100%" maxWidth={928} margin="0 auto">
          <PageWrapper>
            <BackButton />
            <ContentWrapper>
              <Head>
                <p>{data.user?.name} ¿Para quién deseas cotizar?</p>
                <span>
                  Selecciona la opción que se ajuste más a tus necesidades.
                </span>
              </Head>

              <InsuranceOptions
                selected={type}
                onSelect={(value) => setType(value)}
              />
            </ContentWrapper>

            <PlansList type={type} />
          </PageWrapper>
        </Container>
      </Grid>
    </>
  );
};

export default Customization;

