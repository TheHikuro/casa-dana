import { create } from 'zustand'

// Initial state
const initialState = {
  email: '',
  isConnected: false
}

// Create the store
export const useIdentityStore = create<{
  identity: typeof initialState
  setIdentity: (identity: typeof initialState) => void
}>((set) => ({
  identity: initialState,
  setIdentity: (identity: typeof initialState) => set({ identity })
}))
