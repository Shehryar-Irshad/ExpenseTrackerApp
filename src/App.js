
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
   diaplay: flex;
   flex-direction: column;
   text-align: center;
   margin: 30px 0 10px;
   font-family: Montserrat;
`;

const Header =  styled.span`
    color: black;
    font-size: 25;
    font-weight: bold;
`;

function App() {
  return (
      <Container>
        <Header>Expense Tracker</Header>
        <HomeComponent/>
      </Container>
  );
}

export default App;
