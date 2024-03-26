import styled from "styled-components";
import { Grid, Typography } from "@/components/atoms";
import Logo from "@/assets/logo_white.svg";
import LogoInline from "@/assets/logo_inline.svg";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey100};
  padding: 32px 0;
  z-index: 2;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 20px;
    width: 138px;
  }

  img.desktop {
    display: none;
  }

  hr {
    width: 100%;
    margin: 24px 0;
    border-top: 1px solid ${(props) => props.theme.colors.grey};
  }

  @media only screen and (width > 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img.desktop {
      display: block;
      height: auto;
      width: 85px;
    }

    img.mobile {
      display: none;
    }

    hr {
      display: none;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <Grid container>
      <FooterContainer alignItems="center" justify="space-between">
        <img className="desktop" src={Logo} alt="Rimac" />
        <img className="mobile" src={LogoInline} alt="Rimac" />
        <hr />
        <Typography
          fontFamily="Sonoma"
          fontSize={{
            desktop: 14,
            mobile: 12,
          }}
          lineHeight={16}
          color="grey0"
        >
          © 2023 RIMAC Seguros y Reaseguros.
        </Typography>
      </FooterContainer>
    </Grid>
  </Wrapper>
);

export default Footer;

