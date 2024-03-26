import styled from "styled-components";
import HomeImg from "@/assets/home.png";
import { BlurBackground, Container, Grid } from "@/components/atoms";
import { HomeForm } from "@/components/organisms";

const Image = styled.img`
  display: none;
  z-index: 1;
  border-radius: 16px;

  @media only screen and (width > 992px) {
    display: block;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  z-index: 1;

  @media only screen and (width > 992px) {
    max-width: 416px;
    margin-left: 128px;
  }
`;

const Home = () => {
  return (
    <BlurBackground>
      <Grid container>
        <Container>
          <Image src={HomeImg} alt="Familia" />
          <FormContainer>
            <HomeForm />
          </FormContainer>
        </Container>
      </Grid>
    </BlurBackground>
  );
};

export default Home;

