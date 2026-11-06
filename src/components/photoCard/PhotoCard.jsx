import s from "./PhotoCard.module.scss"
export const PhotoCard = (props) => {
  const { title, thumbnailUrl, id } = props;
  return (
    <div>
      <img src={thumbnailUrl} className={s.image} alt="" />
      <h2 className={s.title}>{title}</h2>
    </div>
  );
};
