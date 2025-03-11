import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import QuestOne from "./(pages)/quest-one/page";
import QuestionTwo from "./(pages)/quest-two/page";
import QuestionThree from "./(pages)/quest-three/page";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: blueviolet;
  }
`;

export default function App() {
  return (
    <Router>
      <Nav>
        <StyledLink to="/quest-one">Questão 1</StyledLink>
        <StyledLink to="/quest-two">Questão 2</StyledLink>
        <StyledLink to="/quest-three">Questão 3</StyledLink>
      </Nav>
      <Routes>
        <Route path="/quest-one" element={<QuestOne />} />
        <Route path="/quest-two" element={<QuestionTwo />} />
        <Route path="/quest-three" element={<QuestionThree />} />
      </Routes>
    </Router>
  );
}
