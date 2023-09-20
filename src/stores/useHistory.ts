import {create} from 'zustand'


type loginfo = {
  amount: number
  type: string
  note: string
  datestamp: string
  timestamp: string
}

type State = {
  logs: loginfo[]
}

type Actions = {
  updateLogs: (info: loginfo) => void
  deleteLogs: () => void
}

const localStorageKey = 'logs';

const useHistory = create<State & Actions>((set) => {

  const initialLogs = JSON.parse(localStorage.getItem(localStorageKey) || '[]')

  return {
    logs: initialLogs,
    updateLogs: (info) => {
      set((state) => {
        const newLogs = [info, ...state.logs];
        localStorage.setItem(localStorageKey, JSON.stringify(newLogs));
        return {...state, logs:newLogs};
      });
    },

    deleteLogs: () => {
      set((state) => {
        const newLogs:loginfo[] = [];
        localStorage.setItem(localStorageKey, JSON.stringify(newLogs));
        return {...state, logs:newLogs}
      });
    },
  }
});

export default useHistory