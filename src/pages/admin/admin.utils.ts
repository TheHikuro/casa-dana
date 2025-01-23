import { create } from 'zustand'

const initialState = {
  email: '',
  isConnected: false
}

export const useIdentityStore = create<{
  identity: typeof initialState
  setIdentity: (identity: typeof initialState) => void
}>((set) => ({
  identity: initialState,
  setIdentity: (identity: typeof initialState) => set({ identity })
}))
