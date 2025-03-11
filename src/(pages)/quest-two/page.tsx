import { names } from "./data";
import { countLetters } from "./utils";
import styled from "styled-components";

const Main = styled.main`
  padding: 1rem;
`;

const Result = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

export default function QuestionTwo() {
  const result = countLetters(names);

  return (
    <Main>
      {Object.entries(result).map(([name, count]) => (
        <Result key={name}>
          {name} = {count}
        </Result>
      ))}
    </Main>
  );
}
