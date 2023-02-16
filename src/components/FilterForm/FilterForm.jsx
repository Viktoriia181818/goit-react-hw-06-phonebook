import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/reducer';
import { getFilter } from 'redux/selector';
import css from './FilterForm.module.css';

export const FilterForm = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
  
    return (
        <div>
            <label className={css.label}>Find contacts by Name</label>
            <input className={css.input} type="filter" name='filter' placeholder='Filter'
                value={filter} onChange={event =>
                    dispatch(filterValue(event.target.value.toLowerCase()))}
            >
            
            </input>
        </div>
    )
   
}

