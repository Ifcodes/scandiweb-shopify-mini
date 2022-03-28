import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 5rem;
  left: 0;
  background-color: rgba(57, 55, 72, 0.22);
  visibility: ${props => props.showModal ? 'visible' : 'hidden'};
  z-index: 10;
  overflow: hidden;

  .modal{
    width: 20.3rem;
    height: fit-content;
    max-height: 33.75rem;
    background-color: white;
    right: 9.43rem;
    top: ${props => props.showModal ? '0' : '-100vh'};
    position: absolute;
    padding: 0.4rem 0;
    transition: top 0.5s ease-in-out;
    overflow: hidden;

    .dropdown-title-cont{
      padding: 0.5rem 1rem;

      .dropdown-title{
        font-weight: 700;
      }
    };

    .btn-wrapper{
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }

    .total-cont{
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      margin: 1rem;
    }

    .modal-cont{
      width: 90%;
      max-height: 20rem;
      overflow-y: auto;
      padding: 0 1rem;
    }
  };
`

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 29%;
  padding: 1.375rem 0;
  border-top: ${props => 
    props.dropdown
    ? 'none'
    : '1px solid #E5E5E5'
  };

  .product-desc-cont{
    width: ${props => 
      props.dropdown
      ? '7rem'
      : '25rem'
    };
    .product-name{
      display: flex;
      flex-direction: column;
    }
    .brand-name{
      font-size: ${props => 
        props.dropdown
        ? '1rem'
        : '1.875rem'
      };
      font-weight: ${props => 
        props.dropdown
        ? '200'
        : '600'
      };
    };
    .other-name{
      font-size: ${props => 
        props.dropdown
        ? '1rem'
        : '1.875rem'
      };
      font-weight: ${props => 
        props.dropdown
        ? '200'
        : '400'
      };
    }
    .price{
      font-size: ${props => 
        props.dropdown
        ? '1rem'
        : '1.5rem'
      };
      font-weight: 700;
      margin: 1.25rem 0;
    };

    .size-cont{
      display: flex;
      margin-top: ${props => 
        props.dropdown
        ? '2rem'
        : '0'
      };
    };
  };

  .img-cont{
    display: flex;

    .qty-cont{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 0.8rem;
      align-items: center;
    };
    .qty{
      font-size: ${props => 
        props.dropdown
        ? '1rem'
        : '1.5rem'
      };
    }
    .qty-btn{
      cursor: pointer;
    }
    .product-img{
      width: ${props => 
        props.dropdown
        ? '6.5625rem'
        : '8.8125rem'
      };
      height:  ${props => 
        props.dropdown
        ? '8.5625rem'
        : '11.56rem'
      };
    };

    .icon{
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    };
  };
` 
export const EmptyCartWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 2rem 1rem;
  font-size: 1rem;
`