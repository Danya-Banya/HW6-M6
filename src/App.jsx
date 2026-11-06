import { usePhotosStates } from "./store/usePhotosStates";
import { useState, useEffect } from "react";
import { PhotoCard } from "./components/photoCard";
import "./App.css";
import { Loader } from "./components/Loader";

function App() {
  const photos = usePhotosStates((store) => store.photos);
  const isLoading = usePhotosStates((store) => store.isLoading);
  const error = usePhotosStates((store) => store.error);
  const fetchPhotos = usePhotosStates((store) => store.fetchPhotos);
  return (
    <main>
      <button disabled={isLoading ? true : false} onClick={() => fetchPhotos()}>
        Загрузить фото
      </button>
      {error && <h2 className="error">{error}</h2>}
      <section className="list">
        {isLoading && <Loader />}

        {photos?.map((photo) => (
          <PhotoCard {...photo} key={photo.id}></PhotoCard>
        ))}
      </section>
    </main>
  );
}

export default App;
