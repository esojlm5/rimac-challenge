import styled from 'styled-components';
import { Typography } from '@/components/atoms';

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${props => props.mb}px;
  
  label {
    position: absolute;
  }
`;

const Input = styled.input(props => ({
  height: 56,
  width: '100%',
  borderRadius: props.compose ? '0 8px 8px 0' : 8,
  backgroundColor: props.theme.colors.grey0,
  border: `1px solid ${props.error ? props.theme.colors.red : props.theme.colors.grey60}`,
  padding: '24px 16px 8px',
  fontSize: 16,
  lineHeight: 24,
  fontFamily: 'Sonoma, sans-serif',
  color: props.theme.colors.grey100,
  
  '&:disabled': {
    color: '#9C9C9C', // TODO: change to theme const
    backgroundColor: '#F8F8F8',
    '&::placeholder': {
      color: '#9C9C9C',
    }
  },
  '&:focus': {
    outline: 'none',
    border: `1px solid ${props.error ? props.theme.colors.error : props.theme.colors.grey80}`,
  },

  '&+label': {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
    top: 16,
    left: 16,
    pointerEvents: 'none',
    transition: '0.25s all',
    color: props.theme.colors.grey60
  },

  '&:focus + label, &:not(:placeholder-shown) + label': {
    top: 8,
    fontSize: 12,
    lineHeight: '16px',
  }
}));

const InputComponent = ({ placeholder, mb, error, ...props}) => (
  <InputWrapper mb={mb}>
    <Input
      placeholder=' '
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
    <label>{placeholder}</label>

    {error && (
      <Typography
        as='span'
        color='red'
        fontSize={12}
        lineHeight={16}
        mt={8}
      >
        * Ingrese un valor válido
      </Typography>
    )}
  </InputWrapper>
)

export default InputComponent;