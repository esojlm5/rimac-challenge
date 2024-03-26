import styled from "styled-components";
import { Container, Typography } from "@/components/atoms";

const Number = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${(props) =>
    props.active ? props.theme.colors.neutral0 : props.theme.colors.neutral600};
  background-color: ${(props) =>
    props.active ? props.theme.colors.b600 : "transparent"};
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.colors.b600 : props.theme.colors.neutral600};
`;

const Step = ({ label, active, number }) => (
  <Container alingItems="center" gap={16}>
    <Number active={active}>{number}</Number>
    <Typography
      fontSize={16}
      fontWeight={active ? 700 : 400}
      lineHeight={24}
      letterSpacing={0.2}
      color={active ? "neutral700" : "neutral600"}
    >
      {label}
    </Typography>
  </Container>
);

export default Step;

