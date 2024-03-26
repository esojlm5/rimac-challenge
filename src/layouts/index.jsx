import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/organisms";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.neutral100};
  overflow: hidden;
  position: relative;
`;

const ChildWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const Layout = () => {
  return (
    <PageContainer>
      <Header />
      <ChildWrapper>
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
      </ChildWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Layout;

