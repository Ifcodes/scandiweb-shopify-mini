import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 7.125rem;
  background-color: white;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  visibility: ${props => props.showDropdown ? 'visible' : 'hidden'};
  position: absolute;
  top: 2.06rem;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    margin: 1rem;
    cursor: pointer;
  }
`