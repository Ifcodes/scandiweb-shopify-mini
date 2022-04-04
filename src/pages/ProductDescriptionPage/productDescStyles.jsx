import styled from "styled-components";

export const PdpWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5.3125rem 1fr;

  .side-img-cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    

    .side-img{
      width: 4.93rem;
      height: 5rem;
      margin-bottom: 2rem;
    }
  }

  .pdp-cont{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-left: 2rem;

    .pdp-main-img{
      width: 38.125rem;
      height: 31.93rem;
    }

    .desc-cont{
      margin-left: 6.25rem;
      max-width: 18.25rem;
    }
    h2,h3{
      margin: 0;
    }
    h3{
      font-weight: normal;
    }
    .size-cont{
      font-weight: bold;
      font-size: 1.125rem;
      margin-top: 2.6rem;
    }
    .sizes{
      display: flex;
      margin-top: 0.5rem;
    }
    .price{
      font-size: 1.5rem;
    }
    .atc-btn-cont{
      margin-top: 1.25rem;
    }
    .description{
      margin-top: 2.5rem;
      color: ${props => props.theme.colors.textBlack};
    } 
  }

`