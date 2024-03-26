import { Container, Input, Select, Typography } from "@/components/atoms";

const SelectInput = ({
  inputPlaceholder,
  inputValue,
  onInputChange,
  selectPlaceholder,
  selectValue,
  selectOnChange,
  selectOptions,
  error,
  ...props
}) => {
  return (
    <Container width="100%" direction="column" mb={16}>
      <Container width="100%" alignItems="center">
        <Select
          compose
          value={selectValue}
          onChange={selectOnChange}
          placeholder={selectPlaceholder}
          options={selectOptions}
        />
        <Input
          compose
          value={inputValue}
          onChange={onInputChange}
          placeholder={inputPlaceholder}
          {...props}
        />
      </Container>
      {error && (
        <Typography as="span" color="red" fontSize={12} lineHeight={16} mt={8}>
          * Ingrese un valor válido
        </Typography>
      )}
    </Container>
  );
};

export default SelectInput;

