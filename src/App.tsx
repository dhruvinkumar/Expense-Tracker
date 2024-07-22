import { useState } from 'react';
import './App.css';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Trash2 } from 'lucide-react';

type Expense = {
  id:number,
  expense: string;
  amount: number;
};

function App() {

  const [expense, setExpense] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [total, setTotal] = useState<Expense[]>();

  const expenseClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense(e.target.value);
  }

  const amountClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  }

  const addButtonClick = () => {
    if (!amount|| expense === '') {
      alert('Enter valid input');
    } else {
      const id = total.length+1;
      setTotal([...total, {id, expense, amount }]);
      setExpense('');
      setAmount(0); 
    }
  }

  return (
    <div className='w-full flex items-center justify-center pt-20'>
    <div className="flex items-center justify-between flex-col rounded-lg  border-gray-500 w-[30%]">
      <div className="flex items-center justify-center p-5 rounded-lg text-white bg-blue-400 text-lg w-[75%]">
        <h1 >Expense Tracker</h1>
      </div>
      <div className="flex justify-between items-center flex-col  w-full">
        <Input type="text" placeholder="Expense" value={expense} onChange={expenseClick} className='m-5 w-[50%]' />
        <Input type="number" placeholder="Amount" value={amount} onChange={amountClick} className='mb-5 w-[50%]'/>
        <Button variant="outline" onClick={addButtonClick} className='mb-5 text-gray-500 '>Add Expense</Button>
      </div>

      <div className='w-full'>
        
        {total.map((item, index) => (
            <div key={index} className='flex items-center justify-between w-full px-20 my-5'>
                  <div>{item.expense}</div>
                  <div>{item.amount}</div>
                  <Button variant="outline" onClick={()=>{
                     const newTotal = total.filter((_, i) => i !== index);
                     setTotal(newTotal);
                  }}><Trash2></Trash2></Button>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default App;

