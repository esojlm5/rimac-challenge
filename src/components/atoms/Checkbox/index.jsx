import styled from "styled-components";
import { Container, Typography } from "@/components/atoms";
import Check from "@/assets/check.svg";

const Box = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.grey100 : props.theme.colors.grey60};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.grey100 : props.theme.colors.grey10};
  cursor: pointer;
`;

const Checkbox = ({ checked, onCheck, label, mb }) => {
  return (
    <Container alignItems="center" gap={12} mb={mb}>
      <Box checked={checked} onClick={onCheck}>
        <img src={Check} alt="checked" />
      </Box>
      <Typography
        as="span"
        fontFamily="Sonoma"
        fontSize={{
          mobile: 14,
          desktop: 12,
        }}
        fontWeight={400}
        lineHeight={24}
        letterSpacing={0.1}
      >
        {label}
      </Typography>
    </Container>
  );
};

export default Checkbox;

