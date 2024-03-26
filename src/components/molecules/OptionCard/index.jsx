import styled from "styled-components";
import { Card, Container, Typography } from "@/components/atoms";
import Check from "@/assets/check.svg";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 30px;
  border: 1px solid
    ${(props) =>
      props.checked
        ? props.theme.colors.success
        : props.theme.colors.neutral500};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.success : "transparent"};
  cursor: pointer;
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 32px;
  }

  @media only screen and (width > 768px) {
    flex-direction: column;
    align-items: flex-start;

    > img {
      width: 48px;
    }
  }
`;

const OptionCard = ({ data, selected, onClick }) => (
  <Card width="100%" padding="16px 24px 40px">
    <Container justify="flex-end">
      <Box checked={selected} onClick={onClick}>
        <img src={Check} alt="check" />
      </Box>
    </Container>

    <CardHead>
      <img src={data.image} alt="imagen opción" />
      <Typography
        as="h3"
        fontSize={20}
        fontWeight={900}
        lineHeight={28}
        letterSpacing={-0.2}
      >
        {data.label}
      </Typography>
    </CardHead>

    <Typography as="p" fontSize={12} lineHeight={20} letterSpacing={0.2} mt={8}>
      {data.description}
    </Typography>
  </Card>
);

export default OptionCard;

