import { create } from 'zustand'

type FormType = {
  startDate: string
  endDate: string
  price: number
}

type SelectedDatesStore = {
  selectedDates: FormType
  setStartDate: (startDate: string) => void
  setEndDate: (endDate: string) => void
  setPrice: (price: number) => void
  reset: () => void
}

export const useSelectedDatesStore = create<SelectedDatesStore>((set) => ({
  selectedDates: {
    startDate: '',
    endDate: '',
    price: 0
  },
  setStartDate: (startDate) =>
    set((state) => ({
      selectedDates: { ...state.selectedDates, startDate }
    })),
  setEndDate: (endDate) =>
    set((state) => ({
      selectedDates: { ...state.selectedDates, endDate }
    })),
  setPrice: (price) =>
    set((state) => ({
      selectedDates: { ...state.selectedDates, price }
    })),
  reset: () =>
    set(() => ({
      selectedDates: { startDate: '', endDate: '', price: 0 }
    }))
}))
