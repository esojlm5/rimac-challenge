import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@/components/atoms";
import { PlanCard } from "@/components/molecules";
import AppContext from "@/util/context";
import axios from "@/util/axios";
import { getAge } from "@/util/functions";
import Right from "@/assets/arrow-right.svg";
import Left from "@/assets/arrow-left.svg";

const ComponentContainer = styled.div`
  margin: 40px -24px 56px;
  overflow: hidden;

  @media only screen and (width > 768px) {
    margin: 24px 0 80px;
    overflow: unset;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 48px;
  width: 992px;
  animation: 4s transform;
  transform: translateX(-${(props) => props.translate * 304}px);

  @media only screen and (width > 768px) {
    width: 100%;
    gap: 32px;
    padding: 0;
    transform: translate(0, 0);
  }
`;

const ControlContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  @media only screen and (width > 768px) {
    display: none;
  }
`;

const Plans = ({ type }) => {
  const { data: contextData, updateData } = useContext(AppContext);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("/plans.json").then((response) => {
      const { data } = response;
      const age = getAge(contextData.user.birthDay);
      setList(data.list.filter((plan) => plan.age >= age));
    });
  }, [contextData.user]);

  useEffect(() => {
    setDiscount(type === "other" ? 5 : 0);
  }, [type]);

  const handleSelectPlan = (plan) => {
    updateData({
      plan: {
        discount,
        ...plan,
      },
    });
    navigate("/resumen");
  };

  const handleSlider = (direction) => {
    if (
      (direction === "right" && index === list.length - 1) ||
      (direction === "left" && index === 0)
    ) {
      return;
    }

    if (direction === "right") {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  if (!type) {
    return null;
  }

  return (
    <ComponentContainer>
      <Slider translate={index}>
        {list.map((plan, index) => (
          <PlanCard
            key={plan.name}
            data={plan}
            recommended={index === 1}
            discount={discount}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </Slider>

      <ControlContainer>
        <img
          src={Left}
          alt="izquierda"
          onClick={() => handleSlider("left")}
          style={{ width: 32 }}
        />

        <Typography fontSize={16} lineHeight={24} letterSpacing={0.2}>
          {index + 1} / {list.length}
        </Typography>

        <img
          src={Right}
          alt="derecha"
          onClick={() => handleSlider("right")}
          style={{ width: 32 }}
        />
      </ControlContainer>
    </ComponentContainer>
  );
};

export default Plans;

