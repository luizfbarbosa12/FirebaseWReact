import styled from "styled-components";

export const FormPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#323739, #2a2f32);
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  flex-direction: column;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: inherit;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Inputs = styled.input`
  width: 30rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: 1px solid #6c7072;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: #323739;
  color: inherit;
`;

export const SignUpButton = styled.button`
  width: 30rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: none;
  background-color: #056162;
  padding: 1rem;
  font-size: 1.6rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    filter: brightness(120%);
  }
`;
