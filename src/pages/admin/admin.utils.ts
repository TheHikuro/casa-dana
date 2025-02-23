import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'

type Identity = {
  email: string
  isConnected: boolean
  token: string
}

type IdentityState = {
  identity: Identity
  setIdentity: (identity: Identity) => void
  disconnect: () => void
}

const initialState: Identity = {
  email: '',
  isConnected: false,
  token: ''
}

const CASADANA_IDENTITY = 'casadana-identity'

export const useIdentityStore = create<IdentityState>()(
  immer(
    persist(
      (set) => ({
        identity: initialState,
        setIdentity: (identity: Identity) =>
          set((state) => {
            state.identity = identity
          }),
        disconnect: () => {
          set((state) => {
            state.identity = initialState
          })
          sessionStorage.removeItem(CASADANA_IDENTITY)
        }
      }),
      {
        name: CASADANA_IDENTITY,
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.identity.isConnected = !!state.identity.token
          }
        }
      }
    )
  )
)
