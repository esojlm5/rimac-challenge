import { useContext } from "react";
import styled from "styled-components";
import { Card, Container, Typography } from "@/components/atoms";
import AppContext from "@/util/context";
import Family from "@/assets/family.svg";

const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.neutral400};
  margin: 16px 0;
  width: 100%;
`;

const ResumeCard = () => {
  const { data } = useContext(AppContext);

  return (
    <Card width="100%" padding="24px 32px">
      <Typography
        color="neutral700"
        fontSize={10}
        fontWeight={900}
        lineHeight={16}
        letterSpacing={0.8}
        mb={8}
      >
        PRECIOS CALCULADOS PARA:
      </Typography>
      <Container alingItems="center" gap={12}>
        <img src={Family} alt="icono usuario" />
        <Typography
          color="neutral700"
          fontSize={20}
          fontWeight={700}
          lineHeight={28}
          letterSpacing={-0.2}
        >
          {data.user.name} {data.user.lastName}
        </Typography>
      </Container>

      <Line />

      <Container direction="column" mb={16}>
        <Typography
          color="neutral700"
          fontSize={16}
          fontWeight={700}
          lineHeight={24}
          letterSpacing={0.2}
          mb={4}
        >
          Responsable de pago
        </Typography>
        <Typography
          color="neutral700"
          fontSize={14}
          lineHeight={24}
          letterSpacing={0.1}
          mb={4}
        >
          {data.user.type === 4 ? "RUC" : "DNI"}: {data.user.document}
        </Typography>
        <Typography
          color="neutral700"
          fontSize={14}
          lineHeight={24}
          letterSpacing={0.1}
        >
          Celular: {data.user.phone}
        </Typography>
      </Container>

      <Container direction="column">
        <Typography
          color="neutral700"
          fontSize={16}
          fontWeight={700}
          lineHeight={24}
          letterSpacing={0.2}
          mb={4}
        >
          Plan elegido
        </Typography>
        <Typography
          color="neutral700"
          fontSize={14}
          lineHeight={24}
          letterSpacing={0.1}
          mb={4}
        >
          {data.plan.name}
        </Typography>
        <Typography
          color="neutral700"
          fontSize={14}
          lineHeight={24}
          letterSpacing={0.1}
        >
          Costo del plan: $
          {((100 - data.plan.discount) * data.plan.price) / 100} al mes
        </Typography>
      </Container>
    </Card>
  );
};

export default ResumeCard;

