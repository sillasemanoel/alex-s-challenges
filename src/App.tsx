import { person } from "./data";
import { convertValuesToString } from "./utils";
import "./app.css";

export default function App() {
  const convertedPerson = convertValuesToString(person);

  return (
    <main>
      <div>
        <h1>original object</h1>
        <pre>{JSON.stringify(person, null, 2)}</pre>

        <h3>type of original values</h3>
        <ul>
          {Object.entries(person).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>converted object</h1>
        <pre>{JSON.stringify(convertedPerson, null, 2)}</pre>

        <h3>type of converted values</h3>
        <ul>
          {Object.entries(convertedPerson).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
