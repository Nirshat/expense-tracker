import { useState } from "react";
import useContent from "../stores/useContent";
import useBalance from "../stores/useBalance";
import useHistory from "../stores/useHistory";


type Infos = {
  amount: number
  type: string
  note: string
  datestamp: string
  timestamp: string
}

const AddBalance = () => {
  const {call} = useContent();
  const {updateBalance} = useBalance();
  const {updateLogs} = useHistory();

  const [cash, setCash] = useState(0);
  const [descript, setDescript] = useState('added');

  const handleCashChange = (val:string) => {
    const newValue = parseInt(val);
    setCash(newValue);
  };

  const logInfos: Infos = {
    amount: cash,
    type: 'balance',
    note: descript,
    datestamp: new Date().toDateString(),
    timestamp: new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}),
  };


  const cashIn = (data: Infos) => {
    if(data.amount > 0 ){
      updateBalance(data.amount);
      updateLogs(data);
      call(0);
    }
    else if(data.amount === 0){
      alert("Please input amount");
    }
    else{
      alert('Invalid Amount.')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-fuchsia-600 text-base"> Add Balance </span>
        <input
          type="number"
          className="border border-slate-400 p-3 rounded"
          min={0}
          value={cash}
          onChange={(event) => handleCashChange(event.target.value)}
        />
        <textarea
          className="p-2 border border-slate-400 box-border rounded"
          placeholder="Add Description"
          cols={30}
          rows={3}
          onChange={(event) => setDescript(event.target.value)}
        ></textarea>
        <div className="flex flex-row gap-1 justify-end">
          <button
            className="py-3 px-4 bg-slate-500 hover:bg-slate-600 text-slate-50 text-base rounded"
            onClick={() => call(0)}
          >
            Cancel
          </button>
          {cash > 0 ? (<button
            className="py-3 px-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-slate-50 text-base rounded"
            onClick={() => cashIn(logInfos)}
          >
            Record
          </button>) : (<button
            className="py-3 px-4 bg-fuchsia-300 text-slate-50 text-base rounded"
          >
            Record
          </button>)}
        </div>
      </div>
    </>
  );
};

export default AddBalance;
