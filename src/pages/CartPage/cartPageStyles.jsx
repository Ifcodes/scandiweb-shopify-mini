import styled from "styled-components";

export const CartWrapper = styled.div` 
  width: 90%;
  padding: 0 1rem ;

  .btn-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  .total-cont{
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    margin-top: 2rem;
  }
  .total-cont span{
    margin-left: 4rem;
    font-size: 1.5rem;
  }
`