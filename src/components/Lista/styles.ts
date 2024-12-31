import styled from "styled-components";

export const Lista = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 8px;

  li{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    list-style: none;
    
  }
  .completed{
    color: #c1c1c1;
    text-decoration: line-through;
  }
  .pending{
    color: #000;
  }

`


