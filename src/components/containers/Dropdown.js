import{useState} from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const DropdownHome = ({array,handleClick})=>  {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const changeName =(name)=>{
        handleClick(name)
        setDropdownOpen(false)
    }

    return (
      <div className="dropdown">
        <div className="dropbtn" onClick={toggleDropdown}>
          Projet <IoMdArrowDropdown className='icon-dropdown'/>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {array.map((name)=>{
                return <div key={name} onClick={() => changeName(name)}>{name}</div>

            })}
          </div>
        )}
      </div>
    );
  };

  export const DropdownBesoin = ({array,name,handleClick})=>  {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const onChange =(value)=>{
        handleClick(value)
        console.log("click",value)
        setDropdownOpen(false)
    }

    return (
      <div className="dropdown">
        <div className="dropbtn" onClick={toggleDropdown}>
          {name} <IoIosArrowDown className='icon-filters-arrow'/>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {array.map((name)=>{
                return <div key={name} onClick={(e) => onChange(e.target.textContent)}>{name}</div>

            })}
          </div>
        )}
      </div>
    );
  };

