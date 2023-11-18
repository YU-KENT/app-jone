
import '../style/Home.css';
import VerticalLayout from './VerticalLayout';
import ThreeColumnComponent from '../features/Table'
/* import {loginState} from '../outils/selector';
import { useDispatch, useSelector  } from 'react-redux' */


function Home(){
    

return(
    <main className='main'>
    <VerticalLayout/>
    <p>home</p>
    <ThreeColumnComponent/>
    </main>
)
}

export default Home;