import { useContext, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Checkbox,
  Container,
  Input,
  Typography,
} from "@/components/atoms";
import { SelectInput } from "@/components/molecules";
import { documentValidation, phoneValidation } from "@/util/functions";
import ImageHead from "@/assets/home_mobile.png";
import axios from "@/util/axios";
import AppContext from "@/util/context";
import { useNavigate } from "react-router-dom";

const fieldConfigurations = [
  {
    name: "document",
    type: "select",
    label: "Nro. de documento",
    options: [
      { label: "DNI", value: 2 },
      { label: "RUC", value: 4 },
    ],
    maxLength: 8,
  },
  {
    name: "phone",
    type: "input",
    label: "Celular",
    maxLength: 9,
  },
  {
    name: "privacy",
    type: "checkbox",
    label: "Acepto la Política de Privacidad",
  },
  {
    name: "communication",
    type: "checkbox",
    label: "Acepto la Política Comunicaciones Comerciales",
  },
];

const FormHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey30};
  margin-bottom: 24px;

  > img {
    margin-left: 12px;
    border-radius: 16px;
  }

  @media only screen and (width > 768px) {
    padding-bottom: 0;
    border-bottom: none;
    margin-bottom: 8px;

    > img {
      display: none;
    }
  }
`;

const Title = styled.h1`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.4px;
  font-family: "Sonoma", sans-serif;
  background: linear-gradient(86deg, #00f4e2 0%, #00ff7f 100%);

  @media only screen and (width > 768px) {
    font-size: 14px;
    padding: 4px 8px;
    margin-bottom: 16px;
  }
`;

const HomeForm = () => {
  const { updateData } = useContext(AppContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: 2,
    document: "",
    phone: "",
    communication: true,
    privacy: true,
  });
  const [errors, setErrors] = useState({
    document: false,
    phone: false,
    checkbox: false,
  });

  const handleValidateForm = () => {
    let isValid = true;
    const validation = {
      document: false,
      phone: false,
      checkbox: false,
    };

    if (!phoneValidation(form.phone)) {
      validation.phone = true;
      isValid = false;
    }
    if (!documentValidation(form.document, form.type)) {
      validation.document = true;
      isValid = false;
    }
    if (!form.privacy || !form.communication) {
      validation.checkbox = true;
      isValid = false;
    }

    setErrors(validation);

    if (!isValid) {
      return;
    }

    axios.get("/user.json").then((response) => {
      const { data } = response;
      updateData({
        user: {
          document: form.document,
          phone: form.phone,
          type: form.type,
          ...data,
        },
      });
      navigate("/planes");
    });
  };

  return (
    <Container direction="column">
      <FormHead>
        <Container direction="column">
          <Container>
            <Title>Seguro Salud Flexible</Title>
          </Container>

          <Typography
            fontFamily="Sonoma"
            fontSize={{
              mobile: 28,
              desktop: 32,
            }}
            fontWeight={700}
            lineHeight={40}
            letterSpacing={0.4}
          >
            Creado para ti y tu familia
          </Typography>
        </Container>
        <img src={ImageHead} alt="Familia" />
      </FormHead>

      <Typography
        as="h2"
        fontFamily="Sonoma"
        fontSize={14}
        fontWeight={600}
        lineHeight={20}
        letterSpacing={0.2}
        mb={24}
      >
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </Typography>

      {fieldConfigurations.map((field) => (
        <div key={field.name}>
          {field.type === "select" && (
            <SelectInput
              inputValue={form[field.name]}
              onInputChange={({ target }) =>
                setForm({
                  ...form,
                  [field.name]: target.value,
                })
              }
              inputPlaceholder={field.label}
              selectValue={form.type}
              selectOnChange={({ target }) =>
                setForm({
                  ...form,
                  type: target.value,
                })
              }
              selectOptions={field.options}
              error={errors[field.name]}
              maxLength={field.maxLength}
            />
          )}

          {field.type === "input" && (
            <Input
              value={form[field.name]}
              onChange={({ target }) =>
                setForm({
                  ...form,
                  [field.name]: target.value,
                })
              }
              placeholder={field.label}
              maxLength={field.maxLength}
              error={errors[field.name]}
              mb={24}
            />
          )}

          {field.type === "checkbox" && (
            <Checkbox
              checked={form[field.name]}
              onCheck={() =>
                setForm({
                  ...form,
                  [field.name]: !form[field.name],
                })
              }
              label={field.label}
              mb={12}
            />
          )}
        </div>
      ))}
      {errors.checkbox && (
        <Typography
          as="span"
          fontFamily="Sonoma"
          color="red"
          fontSize={12}
          lineHeight={16}
          mt={-4}
          mb={16}
        >
          * Debe aceptar las condiciones
        </Typography>
      )}
      <Typography
        as="a"
        fontFamily="Sonoma"
        target="_blank"
        href="https://google.com"
        fontSize={12}
        fontWeight={600}
        lineHeight={20}
        letterSpacing={0.1}
        mb={24}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Aplican Términos y Condiciones.
      </Typography>

      <Button label="Cotiza aquí" onClick={handleValidateForm} />
    </Container>
  );
};

export default HomeForm;

