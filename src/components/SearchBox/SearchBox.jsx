import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchbar}>
      <label className={css.searchName} htmlFor="search">Find contacts</label>
      <input
        className={css.searchInput}
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
