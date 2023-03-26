import { useState } from "react";
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
    const [transaction, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);
    const addTransaction = (payload) =>{
        const transactionArray = [...transaction];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };
    const calculateBalance = () =>{
        let exp = 0;
        let inc = 0;
        transaction.map((payload)=>{
            payload.type ==="EXPENSE"? (exp=exp+payload.amount) : (inc=inc+payload.amount);
        });
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);
    
    
    return <Container>
        <OverviewComponent addTransaction={addTransaction}/>
        <TransactionComponent transactions = {transactions}/>
    </Container>
}

export default HomeComponent