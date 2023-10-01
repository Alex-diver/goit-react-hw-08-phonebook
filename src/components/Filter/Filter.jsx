import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectorsFilter';
import { setFilter } from 'redux/filter/sliceFilter';
import { InputStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <InputStyled
      type="text"
      value={filter}
      onChange={event => dispatch(setFilter(event.target.value.trim()))}
    />
  );
};
