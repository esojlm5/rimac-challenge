import styled from "styled-components";
import { Container, Grid, Typography } from "@/components/atoms";
import Phone from "@/assets/telephone.svg";
import Logo from "@/assets/logo.svg";

const Wrapper = styled.div`
  padding: 14px 0;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 32px;
  }

  @media only screen and (width > 768px) {
    > img {
      height: 36px;
    }
  }
`;

const CallWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Header = () => (
  <Wrapper padding="14px 0">
    <Grid container>
      <HeaderContainer justify="space-between" alignItems="center">
        <img src={Logo} alt="Rimac" />

        <Container gap={16}>
          <Typography
            fontFamily="Sonoma"
            fontSize={{
              mobile: "hide",
              desktop: 12,
            }}
            fontWeight={600}
            lineHeight={16}
            letterSpacing={0.2}
          >
            ¡Compra por este medio!
          </Typography>

          <CallWrapper href="tel:014116001" alignItems="center">
            <img src={Phone} alt="Llamada" />
            <Typography
              fontFamily="Sonoma"
              fontSize={{
                mobile: 16,
                desktop: 18,
              }}
              fontWeight={700}
              lineHeight={20}
              letterSpacing={0.4}
            >
              (01) 411 6001
            </Typography>
          </CallWrapper>
        </Container>
      </HeaderContainer>
    </Grid>
  </Wrapper>
);

export default Header;

