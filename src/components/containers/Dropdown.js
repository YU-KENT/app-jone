import{useState} from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


function Dropdown({array,handleClick})  {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const changeProject =(name)=>{
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
                return <div key={name} onClick={() => changeProject(name)}>{name}</div>

            })}
          </div>
        )}
      </div>
    );
  };

  export default Dropdown