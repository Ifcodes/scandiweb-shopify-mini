import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex ;
  align-items: center;
  height: 3rem;
  margin: 0 auto;
  justify-content: space-around;
  background-color: white;

  .attribute-cont{
    width: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    margin-right: 1rem;

    .cart-cont{
      margin-left: 1rem;
      cursor: pointer;
      position: relative;
    }

    .arrow{
      cursor: pointer ;
    }
    .cart-item-number{
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.textBlack};
      color: white;
      position: absolute;
      top: -0.4rem;
      right: 0;
      left: 0.8rem;
      text-align: center;
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
`