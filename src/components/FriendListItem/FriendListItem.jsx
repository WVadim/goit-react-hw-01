import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <span className={`${css.status} ${statusClass}`}>{statusText}</span>
    </div>
  );
}
