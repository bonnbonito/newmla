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
  #logo-container {
    text-align: center;
  }
  @media (min-width: 992px) {
    #menu-container nav a {
      padding: 0px 45px;
    }
    #menu-container nav a {
      border-right: 1px solid #ebebeb;
    }
  }
  .contact-info-section ul {
    padding-left: 0;
  }
  .contact-info-section ul li a {
    padding: 0px 25px !important;
  }
  @media (max-width: 991px) {
    .contact-info-section {
      text-align: center;
    }
  }
  #menu-container nav a {
    color: #000 !important;
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
