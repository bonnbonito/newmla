import styled from "styled-components"

export const HeaderStyles = styled.div`
  .inner-header {
    border-bottom: 1px solid #1a1e21;
    padding-bottom: 20px;
  }

  .contact-info-section ul li a {
    color: #000;
  }
  .contact-info-section {
    text-align: right;
    padding-top: 15px;
  }
  .contact-info-section ul li {
    display: inline-block;
  }
  .contact-info-section ul li a svg {
    color: #bfa282;
    font-size: 14px;
  }

  #menu-container nav a {
    padding: 0px 45px;
  }
  .contact-info-section ul li a {
    padding: 0px 25px !important;
  }

  #menu-container nav a {
    color: #000 !important;
    border-right: 1px solid #ebebeb;
  }
  #menu-container nav > a:last-child {
    border-right: none !important;
  }

  #menu-container nav {
    background-color: transparent !important;
  }

  .dropdown-menu .dropdown-divider:last-child {
    display: none;
  }
`
