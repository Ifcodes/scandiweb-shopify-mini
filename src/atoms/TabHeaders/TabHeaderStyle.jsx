import styled from "styled-components"

export const TabWrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  
  div{
    width: 4rem;
    text-align: center;
    margin: 0 1rem 0 0;
    cursor: pointer;
    color: "#1D1F22";
    border-bottom: 3px solid transparent;
    padding: 2rem 1rem;
  }

  div.activeTab{
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
`