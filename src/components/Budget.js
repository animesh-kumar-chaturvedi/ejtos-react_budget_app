import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget=(val)=>{

        if(val>20000){
            alert("The budget cannot be more than 20,000")
        }else if(val<totalExpenses){
            alert("You cannot reduce the budget value lower than the spendings")
        }
        else{

        dispatch({
            type : "SET_BUDGET",
            payload : val
        })
    }
    }

    return (
        <div className='alert alert-secondary'>
            
            <span>Budget: £<input type="number" step="10" value={budget} onChange={(e) => changeBudget(e.target.value)}/></span>
        </div>
    );
};

export default Budget;