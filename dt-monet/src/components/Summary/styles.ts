import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block; //strong tem por padrão display: inline, aí o mtop não funciona. Display block faz com que ele se comporte como uma div.
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF; 

    }
  }
`;
