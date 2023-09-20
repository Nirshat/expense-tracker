import { create } from "zustand"


type State = {
  balance: number
}

type Actions = {
  updateBalance: (val:number) => void
  deduct: (val:number) => void
}

const useBalance = create<State & Actions>((set) => {
  const initialBalance = parseInt(localStorage.getItem("balance") || "0");
  
  return{
    balance:initialBalance,
    updateBalance: (val) => {
      set((state) => {
        const newBalance = state.balance + val;
        localStorage.setItem('balance', newBalance.toString());
        return {...state, balance:newBalance};
      });
    },
    deduct: (val) => {
      set((state) => {
        const newBalance = state.balance - val;
        localStorage.setItem('balance', newBalance.toString());
        return {...state, balance:newBalance};
      });
    }
  }
});

export default useBalance