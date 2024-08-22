import { names } from "./data";
import { countLetters } from "./utils";

export default function QuestionTwo() {
  const result = countLetters(names);

  return (
    <main>
      {Object.entries(result).map(([name, count]) => (
        <div key={name}>
          {name} = {count}
        </div>
      ))}
    </main>
  );
}
