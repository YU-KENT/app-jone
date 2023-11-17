import { IoSettingsOutline } from "react-icons/io5";
import'../style/VerticalLayout.css'

function VerticalLayout(){
    return(
        <div className="vertical-content">
            <div className="vertical-logo">
                <IoSettingsOutline className='icon-setting-vertical'/>
            </div>
            <div className="vertical-categories">
                <div></div>
            </div>
        </div>
    )

}
export default VerticalLayout;