import { create } from "zustand";
import { getPhotos } from "../api/getPhotos";

export const usePhotosStates = create((set) => ({
  photos: [],
  isLoading: false,
  error: null,
  fetchPhotos: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getPhotos();
      set({ photos: data, error: null });
    } catch (err) {
      set({ error: err.message || "Произошла неизвестная ошибка" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
