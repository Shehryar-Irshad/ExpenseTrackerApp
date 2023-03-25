import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
   diaplay: flex;
   flex-direction: column;
   text-align: center;
   margin: 30px 0 10px;
   font-family: Montserrat;
`;


const HomeComponent = (props) =>{
    return <Container>
        <OverviewComponent/>
        <TransactionComponent/>
    </Container>
}

export default HomeComponent