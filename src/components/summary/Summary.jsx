import BackgroundImg from "../../assets/images/summary.jpg";
import styled from "styled-components";
import SummaryInfoCard from "./SummaryInfoCard";
import { memo } from "react";

 const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="" />
      <SummaryInfoCard />
    </Container>
  );
};
export default memo(Summary);

const Container = styled.div`
  height: 527px;
`;
const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`;
