import DatePicker from "react-datepicker";
import { useDispatch, useSelector} from 'react-redux'
import {tacheState} from '../../outils/selector';
import { useState } from "react";
import * as actions from '../../features/tacheReducer'
import "react-datepicker/dist/react-datepicker.css"


function DatesPicker(){
const [startDate, setStartDate] = useState(null);
const dispatch = useDispatch()
const state = useSelector(tacheState)
const formatDay =  (value)=> {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

const handleDate =(date)=>{
  setStartDate(date)
  const formattedDate = formatDay(date)
  dispatch(actions.setDate(formattedDate))
  console.log("Tache---reducer---state",state )

}
return (
<DatePicker 
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
    selected={startDate}
    placeholderText="Merci de choisir la date"
    onChange={(date) => handleDate(date)} 
/>

)
}
export default DatesPicker