
import './App.css'
import AddBalance from './components/AddBalance'
import AddExpense from './components/AddExpense'
import Dashboard from './components/Dashboard'
import ExpensesRecord from './components/ExpensesRecord'
import useContent from './stores/useContent'

const App = () => {

  const {no} = useContent();
  const contents = [<Dashboard/>, <AddBalance/>, <AddExpense/>, <ExpensesRecord/>];

  return (
    <>
      <div id='app-body' className="px-5 py-14 m-auto min-h-screen overflow-auto">
        <div id='contentbox' className=''>
          <div className='px-8 py-11 flex flex-col gap-8 bg-slate-100 rounded shadow-md shadow-slate-400/30'>
            <div className='text-slate-600 text-xl font-semibold'>Expense Tracker</div>
            {contents[no]}
          </div>
          <div className='flex flex-col text-center mt-6 text-slate-600'>
            <span className='text-sm'>Made with 💜 by Aron Paul Gonzales.All rights reserved</span>
            <span className='text-sm text-slate-500'>React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App