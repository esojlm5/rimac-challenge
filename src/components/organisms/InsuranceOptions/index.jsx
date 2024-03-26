import styled from "styled-components";
import { OptionCard } from "@/components/molecules";
import { insuranceOptions } from "@/util/constants";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;

  @media only screen and (width > 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const InsuranceOptions = ({ selected, onSelect }) => {
  return (
    <ComponentContainer>
      {insuranceOptions.map((option) => (
        <OptionCard
          key={option.name}
          data={option}
          selected={selected === option.name}
          onClick={() => onSelect(option.name)}
        />
      ))}
    </ComponentContainer>
  );
};

export default InsuranceOptions;

