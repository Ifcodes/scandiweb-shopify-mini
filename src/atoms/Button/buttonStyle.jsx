import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: ${props => props.width || '8.75rem'};
  height: 2.6875rem;
  font-weight: 600;
  cursor: pointer;
  color: ${props => 
    props.primary 
    ? 'white'
    : props.theme.colors.textBlack 
  };

  background-color: ${props => 
    props.primary 
    ? props.theme.colors.primary
    : 'white' 
  };
  border: ${props => 
    props.primary 
    ? 'none'
    : '1px solid #1D1F22'
  };
`