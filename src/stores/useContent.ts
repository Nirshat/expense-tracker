
import { create } from "zustand"

type State = {
  no: number
}

type Actions = {
  call: (num:number) => void
}

const useContent = create<State & Actions>((set) => (
  {
    no: 0,
    call: (num) => set((state) => ({...state, no: num })),
  }
));

export default useContent