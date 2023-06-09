import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
    font-size: 16px;
    width: 97%;
`;
const BalancedBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;
const AddTransaction = styled.div`
    font-size: 15px;
    background: #0d1d2c;
    display: flex;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    flex-direction: row;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
`;

const AddTransactionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    width: 40%;
    padding: 15px 20px;
    margin: 20px;
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


const AddTransactionView =(props)=>{
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");
    const addTransaction = () =>{
        props.addTransaction({amount:Number(amount), desc, type, id:Date.now(),});
        console.log();
        props.toggleAddTxn();
    }
      return <AddTransactionContainer>
        <input placeholder="Amount" value={amount} type="number" onChange={(e)=> setAmount(e.target.value)}/>
        <input placeholder="Description" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
        <RadioBox>
            <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}></input>
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}></input>
            <label htmlFor="income">Income</label>
        </RadioBox>
        <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
      </AddTransactionContainer>
};

const ExpenseContainer = styled.div`
     display: flex;
     flex-direction: row;
     gap: 12px;
     margin: 20px;
`;
const ExpenseBox = styled.div`
     display: flex;
     flex-direction: column;
     border-radius: 4px;
     border: 1px solid #e6e8e9;
     padding: 15px 20px;
     width: 135px;
     font-size: 14px;
     $ span{
        font-weight: bold;
        font-size: 20px;
        color: ${(props)=> (props.isIncome ? "green" : "red")};
     }
`;
const OverviewComponent = (props) =>{
    const [isAddTxnVisible, toggleAddTxn] = useState(true);

    return ( <Container>
          <BalancedBox>
               Balance : $10000
               <AddTransaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel": "ADD"}</AddTransaction>
          </BalancedBox>
          {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
      <ExpenseContainer>
            <ExpenseBox isIncome={false}>
                 Expense<span>$1000</span>
            </ExpenseBox>
            <ExpenseBox isIncome={true}>
                 Income<span>$5000</span>
            </ExpenseBox>
      </ExpenseContainer>    
    </Container>
    );
};

export default OverviewComponent