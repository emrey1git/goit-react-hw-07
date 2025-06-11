import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Search contacts
      </label>
      <input
        id="search"
        className={css.input}
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Type a name..."
        aria-label="Search contacts"
      />
    </div>
  );
}
