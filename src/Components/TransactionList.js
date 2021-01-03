import React,{useContext} from 'react';
import {TransactionContext} from "./transContext";

export const TransactionList = () => {

  let  transactions = useContext(TransactionContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map((transObj,index) =>{
                        return(
                            <li class="minus">
                            {transObj.des} <span>{transObj.amount}</span><button class="delete-btn">x</button>
                        </li>
                        )
                        })} 
            </ul>
        </>
    )
}
