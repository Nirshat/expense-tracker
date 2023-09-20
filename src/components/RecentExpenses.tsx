type State = {
  log: {
    amount: number;
    type: string;
    note: string
    datestamp: string
    timestamp: string
  };
};

const RecentExpenses = ({ log }: State) => {
  return (
    <>
      {log.type === "balance" ? (
        <div className="grid grid-cols-2">
          <span className="text-green-700">+{log.amount}</span>
          <div className="flex flex-col">
            <p className="text-slate-600">{log.note}</p>
            <span className="text-fuchsia-700 text-sm">{log.datestamp}</span>
            <span className="text-fuchsia-700 text-sm">{log.timestamp}</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <span className="text-red-600">-{log.amount}</span>
          <div className="flex flex-col">
            <p className="text-slate-600">{log.note}</p>
            <span className="text-fuchsia-700 text-sm">{log.datestamp}</span>
            <span className="text-fuchsia-700 text-sm">{log.timestamp}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentExpenses;
