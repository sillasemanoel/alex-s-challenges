import { person } from "./data";
import "./app.css";

type AnyObject = {
  [key: string]: string | number | boolean;
};

const convertValuesToString = (obj: AnyObject): AnyObject => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, String(value)])
  );
};

const App = () => {
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
};

export default App;
