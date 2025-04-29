import style from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={style.searchBoxContainer}>
      <label className={style.searchInput}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
