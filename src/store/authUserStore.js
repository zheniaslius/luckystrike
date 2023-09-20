import { create } from 'zustand';

export const useAuthUserStore = create((set) => ({
  authUser: null,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
}));
