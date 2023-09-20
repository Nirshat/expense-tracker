import useBalance from "../stores/useBalance";
import useContent from "../stores/useContent";
import useHistory from "../stores/useHistory";
import RecentExpenses from "./RecentExpenses";

const Dashboard = () => {
  const { call } = useContent();
  const { balance } = useBalance();
  const { logs } = useHistory();

  const recents = logs.slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <div id="balance-box" className="flex justify-between items-center">
            <div className="flex flex-col justify-center">
              <span className="text-fuchsia-600 text-base">Balance:</span>
              <span
                className="font-bold text-slate-700 text-5xl"
                style={{ fontFamily: "Fira Code,monospace;" }}
              >
                {balance}
              </span>
            </div>
            <div id="add">
              <i
                className="fa-solid fa-circle-plus text-fuchsia-600 hover:text-fuchsia-700 text-5xl"
                onClick={() => call(1)}
              ></i>
            </div>
          </div>

          <hr />
        </div>

        <div className="flex flex-col gap-4">
          {logs.length !== 0 ? (
            <>
              <span className=" text-fuchsia-600 text-base">
                Recent Logs:
              </span>
              <div className="flex flex-col gap-3">
                {recents.map((log, index) => (
                  <RecentExpenses key={index} log={log} />
                ))}
                <div className="grid grid-cols-2">
                  <span></span>
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => call(3)}
                  >
                    view all logs <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {balance !== 0 ? (
        <button
          className="p-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-slate-50 text-base rounded"
          onClick={() => call(2)}
        >
          Add Expense
        </button>
      ) : (
        <button className="p-3 bg-fuchsia-300 text-slate-50 text-base rounded">
          Add Expense
        </button>
      )}
    </>
  );
};

export default Dashboard;
