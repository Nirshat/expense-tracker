import useContent from "../stores/useContent";
import useHistory from "../stores/useHistory"


const ExpensesRecord = () => {

  const {logs, deleteLogs} = useHistory();
  const {call} = useContent();

  const clearAll = () => {
    const warning = confirm("Warning: This can't be recovered.");
    if(warning == true){
      deleteLogs();
    }
  }

  return (
    <>
      <div className="flex flex-row justify-end gap-4">
        <span onClick={clearAll} className="cursor-pointer text-red-600"><i className="fa-solid fa-trash"></i> Clear</span>
        <span onClick={() => call(0)} className="cursor-pointer text-slate-700"><i className="fa-solid fa-arrow-left"></i> Back</span>
      </div>
      <div className="border-b">
        <span className=" text-fuchsia-600 text-base">Logs Record</span>
      </div>

      <div className="flex flex-col gap-5">
        {logs.length !== 0 ? (
          logs.map((log, index) => (
            log.type === "balance" ? (
              <div className="grid grid-cols-2" key={index}>
                <span className="text-green-700">+{log.amount}</span>
                <div className="flex flex-col">
                  <p className="text-slate-600">{log.note}</p>
                  <span className="text-fuchsia-700 text-sm">{log.datestamp}</span>
                  <span className="text-fuchsia-700 text-sm">{log.timestamp}</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2" key={index}>
                <span className="text-red-600">-{log.amount}</span>
                <div className="flex flex-col">
                  <p className="text-slate-600">{log.note}</p>
                  <span className="text-fuchsia-700 text-sm">{log.datestamp}</span>
                  <span className="text-fuchsia-700 text-sm">{log.timestamp}</span>
                </div>
              </div>
            )
          ))
        ) : (<span className="">No History</span>)}
      </div>
    
    </>
  )
}

export default ExpensesRecord


