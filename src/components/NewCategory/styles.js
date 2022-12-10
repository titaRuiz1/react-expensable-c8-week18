import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 2px dashed ${colors.stone[400]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 1rem;
  max-width: 200px;
  /* min-width: 200px; */
  background-color: ${colors.white};
  cursor: pointer;
`;
export const New = styled.h1` 
  color: ${colors.stone[400]};
`;