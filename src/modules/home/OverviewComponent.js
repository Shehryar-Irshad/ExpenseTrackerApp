import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
    font-size: 16px;
    width: 100%;
`;
const BalancedBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;
const AddTransaction = styled.button`
    font-size: 15px;
    background: #0d1d2c;
    display: flex;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    flex-direction: row;
    border-radius: 4px;
    font-weight: bold;
`;

const AddTransactionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    width: 100%;
    padding: 15px 20px;
    margin: 10px 20px;
    & input{
        align-items: center;
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
`;
const RadioBox = styled.div`
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: center;
     & input{
        width: unset;
        margin: 0 10px;
     }
`;


const AddTransactionView =()=>{
      return <AddTransactionContainer>
        <input placeholder="Amount"/>
        <input placeholder="Description"/>
        <RadioBox>
            <input type="radio" id="expense" name="type" value="EXPENSE"></input>
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" name="type" value="INCOME"></input>
            <label htmlFor="income">Income</label>
        </RadioBox>
        <AddTransaction>Add Transaction</AddTransaction>
      </AddTransactionContainer>
};

const OverviewComponent = (props) =>{
    const [isAddTxnVisible, toggleAddTxn] = useState(true);

    return ( <Container>
          <BalancedBox>
               Balance : $10000
               <AddTransaction>{isAddTxnVisible ? "Cancel": "ADD"}</AddTransaction>
          </BalancedBox>
          {isAddTxnVisible && <AddTransactionView/>}
    </Container>
    );
};

export default OverviewComponent