import { person } from "./data";
import { convertValuesToString } from "./utils";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  gap: 3rem;
  padding: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
`;

export default function QuestionThree() {
  const convertedPerson = convertValuesToString(person);

  return (
    <Main>
      <Section>
        <h1 className="text-2xl font-bold mb-4">original object</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(person, null, 2)}
        </pre>

        <h3 className="text-xl font-semibold mt-4">type of original values</h3>
        <List>
          {Object.entries(person).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value}
            </li>
          ))}
        </List>
      </Section>

      <Section>
        <h1 className="text-2xl font-bold mb-4">converted object</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(convertedPerson, null, 2)}
        </pre>

        <h3 className="text-xl font-semibold mt-4">type of converted values</h3>
        <List>
          {Object.entries(convertedPerson).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value}
            </li>
          ))}
        </List>
      </Section>
    </Main>
  );
}
