import styled from "styled-components";

function ErrorFallback({ error, errorMessage }) {
  return (
    <StyledError role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error?.message ?? errorMessage}</pre>
    </StyledError>
  );
}

export default ErrorFallback;

const StyledError = styled.div`
  display: flex;
  font-size: 2rem;
  font-family: "Star Jedi", "Roboto", sans-serif;
  justify-content: center;
  align-items: center;
  /* height: vh; */
  pre {
    color: red;
  }
`;
