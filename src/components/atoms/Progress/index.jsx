import styled from "styled-components";

const Thumb = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.neutral400};
  height: 6px;
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  width: ${(props) => props.percent}%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.b600};
  height: 6px;
`;

const Progress = ({ percent }) => (
  <Thumb>
    <Bar percent={percent} />
  </Thumb>
);

export default Progress;

