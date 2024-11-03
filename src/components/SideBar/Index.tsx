import React, { useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // New import
import { Menu, MenuItem, IconButton } from "@mui/material"; // New imports
// import lendsqrLogo from "../../assets/lendsqrLogo.svg";
// import { Link } from "react-router-dom";

type DisplaySidebarProps = {
  displaySidebar: boolean;
};
// const MOBILE_VIEW = window.innerWidth < 468;
const MOBILE_VIEW = window.innerWidth < 600;

export default function Sidebar({ children }:  { children: React.ReactNode }) {

  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); // State for dropdown menu

  const handleSidebarDisplay = (e: any) => {
    e.preventDefault();
    if (window.innerWidth > 600) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
      // setDisplaySidebar(displaySidebar);
    }
  };

  const handleOpenMenu = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); 
  };
  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            {/* Logo wrapper starts */}
            {/* <Link to='/#'>
              <span className="app-brand-logo demo"
              >
                <img 
                  src={lendsqrLogo} 
                  alt="Brand logo"
                  className="app__brand__text"
                  />
                  </span>
                  </Link> */}
            <SidebarLogo href="#">
              <SidebarBrand displaySidebar={displaySidebar}>
                <BusinessCenterIcon />
                Switch Organization
              </SidebarBrand>
              <IconButton onClick={handleOpenMenu}>
                <ArrowDropDownIcon /> {/* New dropdown icon */}
              </IconButton>
              <Menu
                id="menu-basic"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Organization 1</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Organization 2</MenuItem>
                {/* Add more MenuItems for additional organizations */}
              </Menu>
            </SidebarLogo>
            {/* Logo wrapper ends */}
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
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span<DisplaySidebarProps>`
  display: ${({ displaySidebar }) => (displaySidebar ? "flex" : "none")};
  font-size:  .8rem;
  color: #7c7788;
  align-items: center;
  gap: 6px;
  margin-left: -10px;
`;

export const SidebarToggler = styled.button<DisplaySidebarProps>`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  @media (max-width: 600px) {
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
  background: #fff;
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
    @media (min-width: 600px) {
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
  @media (max-width: 600px) {
    width: 5rem;
  }
`;

