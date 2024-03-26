import styled from "styled-components";
import { Container } from "@/components/atoms";
import Caret from "@/assets/caret-down.svg";

const CustomSelect = styled.select`
  height: 56px;
  width: 140px;
  border-radius: ${(props) => (props.compose ? "8px 0 0 8px" : "8px")};
  background-color: ${(props) => props.theme.colors.grey0};
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.grey60};
  border-right: ${(props) => (props.compose ? "none" : "inherit")};
  padding: 8px 16px 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.grey100};
  -webkit-appearance: none;
  font-family: "Sonoma", sans-serif;

  &:focus {
    outline: none;
  }

  ,
  + img {
    position: absolute;
    right: 16px;
    pointer-events: none;
  }
`;

const Select = ({ value, placeholder, onChange, options, compose }) => (
  <Container position="relative" alignItems="center">
    <CustomSelect value={value} compose={compose} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </CustomSelect>
    <img src={Caret} alt="caret" />
  </Container>
);

export default Select;

