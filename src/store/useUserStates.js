import { create } from "zustand";

export const useUserStates = create((set) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({
      users: [
        ...state.users,
        {
          id: Date.now(),
          ...user,
        },
      ],
    })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
