import { TextField } from "@mui/material";
import { styled } from "styled-components";

export const RoundedInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 12px; 
  }
`;