import React, { useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import lendsqrLogo from "../../assets/lendsqrLogo.svg";

type DisplaySidebarProps = {
  displaySidebar: number;
};
// const MOBILE_VIEW = window.innerWidth < 468;
const MOBILE_VIEW = window.innerWidth < 600;

export default function Sidebar({ children }:  { children: React.ReactNode }) {

  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e: any) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      // setDisplaySidebar(false);
      setDisplaySidebar(displaySidebar);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            {/* Logo wrapper starts */}
            <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <img src={lendsqrLogo} alt="Brand logo" />
              </span>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                Frest
              </SidebarBrand>
            </SidebarLogo>
            {/* Logo wrapper ends */}
            {/* Toggle button */}
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
            {/* Render the SidebarItems component */}
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
            {/* Render the children */}
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}


// Children Component
export const Children = styled.div<DisplaySidebarProps>`
  width: 100%;
  height: 100%;
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarLogoWrapper = styled.div<DisplaySidebarProps>`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;
  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span<DisplaySidebarProps>`
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarToggler = styled.button<DisplaySidebarProps>`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  @media (max-width: 468px) {
    display: block;
  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background: #eaeced;
  }
  &.active {
    background-color: #dbe4f3;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #7c7788;
`;

export const ItemName = styled.span<DisplaySidebarProps>`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div<DisplaySidebarProps>`
  position: absolute;
  left: 0;
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  ${({ displaySidebar }) =>
    displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};
  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }
  &:hover {
    ${({ displaySidebar }) =>
      !displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};
    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => !displaySidebar && "15rem"};
      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "space-between"};
      }
      ${SidebarBrand} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }
      ${SidebarToggler} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }
      ${ItemWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "flex-start"};
      }
      ${ItemName} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
        margin-left: ${({ displaySidebar }) => !displaySidebar && "0.5rem"};
      }
    }
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;
    &:hover {
      background: #d5e0f3;
    }
  }
  @media (max-width: 468px) {
    width: 5rem;
  }
`;

