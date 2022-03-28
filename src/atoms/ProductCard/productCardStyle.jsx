import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 24.125rem;
  height: 27.75rem;
  background-color: white;
  box-shadow: ${props => props.isSelected ? '0px 4px 35px rgba(168, 172, 176, 0.19)' : ''};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;

  .product-img{
    width: 22.125rem;
    height: 20.625rem;
    align-self: center;
  }
  div{
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1rem;

    span{
      font-weight: lighter;
      font-size: 1.125rem;
      line-height: 32px;
      color: ${props => props.theme.colors.textBlack};
    }
    .product-price-cont{
      font-weight: bold;
    }
  }  
`