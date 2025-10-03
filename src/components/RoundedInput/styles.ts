import { TextField } from "@mui/material";
import { styled } from "styled-components";

export const RoundedInput = styled(TextField)`
  & .MuiOutlinedInput-root {
  height: 40px;
    border-radius: 12px; 
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #dcdcdc;
  }

  & .MuiOutlinedInput-input {
    
    padding: 12px 16px;
  }
`;