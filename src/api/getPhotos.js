import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { $api } from "./api";

export const getPhotos = async () => {
  const response = await $api.get("/photos/");
  if (!response) throw new Error("Ошибка при загрузке изображений");
  return response.data;
};
