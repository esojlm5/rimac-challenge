import styled from "styled-components";
import { Card, Container, RedButton, Typography } from "@/components/atoms";
import Home from "@/assets/home.svg";
import Hospital from "@/assets/hospital.svg";

const RecommendedLabel = styled.span`
  padding: 2px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.g400};
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const ListContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.neutral400};
  padding-top: 24px;

  ul {
    margin: 0;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      color: ${(props) => props.theme.colors.neutral700};
      margin: 0;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.1px;
    }
  }
`;

const PlanCard = ({ data, recommended, onSelect, discount }) => (
  <Card
    width="288px"
    height="687px"
    padding="40px 32px 48px"
    style={{
      justifyContent: "space-between",
    }}
  >
    <Container direction="column">
      <Container height={20} mb={8}>
        {recommended && <RecommendedLabel>Plan recomendado</RecommendedLabel>}
      </Container>

      <Container width="100%" gap={16} mb={24}>
        <Container width="100%" direction="column">
          <Typography
            as="h2"
            color="neutral700"
            fontSize={24}
            fontWeight={900}
            lineHeight={32}
            letterSpacing={-0.2}
            mb={24}
          >
            {data.name}
          </Typography>
          <Typography
            color="neutral600"
            fontSize={12}
            fontWeight={900}
            lineHeight={16}
            letterSpacing={0.6}
            mb={4}
          >
            COSTO DEL PLAN
          </Typography>
          <Typography
            color="neutral700"
            fontSize={20}
            fontWeight={900}
            lineHeight={28}
            letterSpacing={-0.2}
          >
            ${((100 - discount) * data.price) / 100} al mes
          </Typography>
        </Container>

        <Container direction="column">
          <img src={data.price === 99 ? Hospital : Home} alt="icono plan" />
        </Container>
      </Container>

      <ListContainer>
        <ul>
          {data.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ListContainer>
    </Container>

    <RedButton onClick={onSelect}>Seleccionar Plan</RedButton>
  </Card>
);

export default PlanCard;

