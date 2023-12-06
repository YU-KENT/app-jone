import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoSettingsOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import {loginState} from '../outils/selector';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import * as loginActions from '../features/loginReducer'
import '../style/Login.css'

function Login(){

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const state = useSelector(loginState)
    const{/* UserEmail,PassWord, */ValideEmail,VaidePassword,ErrorMsg,id} = state

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
    if (VaidePassword && ValideEmail) {
        try {
            const response = await fetch('/data/user.json');
            const data = await response.json();
            const userData = data.user;
            // got userdata from local data then stock in redux user id and name
            await dispatch(loginActions.setUserId(userData.id));
            await dispatch(loginActions.setUserName(userData.UserName));
            console.log("id",id)
            let userId = userData.id;
            navigate(`/home/user/${userId}`)

          } catch (error) {
            console.error('Error fetching user data:', error);
            throw error; // This will be the payload of the rejected action
          }
       
        } else {
        dispatch(loginActions.setErrorMsg('Veuillez entrer votre email et votre mot de passe'));
        }
    };
     console.log("state-------",state)       
    return (
      
        <main className="main bg-bleu">
                <div className="header">
                    <h1 className='header-content'><IoSettingsOutline className='icon-setting' />Une Plateforme numérique de gestion</h1>
                    <p className='header-content content-p'>dédiée aux équipes de développement </p>
                </div>
                <section className="sign-in-content">
                    <h1 className="sign-in-title">Se connecter au compte</h1>
                    <form onSubmit = {handleSubmit}>
                        <div className="input-wrapper">
                            <span className='input-icons'>
                                <FaMobileScreen className='icon-mobile' />
                            </span>
                            <input type="text" id="username" className="login-input" placeholder='Veuillez entrer votre email'
                                onChange={(e) => dispatch(loginActions.UserEmail(e.target.value))} />
                        </div>
                        <div className="input-wrapper">
                            <span className='input-icons'>
                                <RiLockPasswordFill className='icon-password' />
                            </span>
                            <input type="password" id="password" className="login-input" placeholder='Veuillez entrer votre mot de passe'
                                onChange={(e) => dispatch(loginActions.PassWord(e.target.value))} />
                        </div>

                        <div className='mot-oublié'>
                            <a href="/">Mot de passe oublié ?</a>
                        </div>
                        <button className="login-in-button">Continuer</button>

                        <p className='Error_Messages'>{ErrorMsg}</p>
                    </form>
                    <div className="go-registered">
                        <p>
                            <span className="no-account">Vous n'avez pas encore de compte ?</span>
                            &nbsp;&nbsp;&nbsp;
                            <a href="/">Créer mon compte &gt;</a>
                        </p>
                    </div>
                    <div className='seconnect-content'>
                        <div className='Seconnect-title'>Connexion avec</div>
                        <div className='Seconnect-symbols'>
                        <a href="/"><FaGoogle className='symbol'/></a>
                        <a href="/"><FaTwitter className='symbol'/></a>
                        <a href="/"><FaLinkedin className='symbol'/></a>
                        </div>
                    </div>
                </section>
            </main>
        

    
)
}

export default Login;