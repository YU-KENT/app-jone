import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoSettingsOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import {loginState} from '../outils/selector';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import * as logninActions from '../features/loginReducer'
import FetchUser from '../outils/fetch';

/* import { RequestLogin,RequestGetProfile } from '../outils/request' */
import '../style/Login.css'

function Login(){

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const state = useSelector(loginState)
    const{UserEmail,PassWord,ValideEmail,VaidePassword,ErrorMsg,id,UserName} = state

    const handleSubmit = async (e)=>{
        e.preventDefault();

        
        if (VaidePassword && ValideEmail ){
            const fetchUserData = async () => {
                try {
                  const response = await fetch('/data/user.json');
                  const data = await response.json();
                  const userData = data.user
                  console.log("userData",userData)
                  dispatch(logninActions.setUserName(userData.UserName));
                 
                } catch (error) {
                  console.error('Error fetching user data:', error);
                }
              };
              
              fetchUserData()
            

        let userId = id;
         navigate(`/home/user/${userId}`)
         
      } else{
        dispatch(logninActions.setErrorMsg('Veuillez entrer votre email et votre mot de passe') )
      }
    }
    return (
      
        <main className="main bg-bleu">
                <div className="header">
                   
                    <h1 className='header-content'><IoSettingsOutline className='icon-setting' />Une Plateforme numérique de gestion</h1>
                    <p className='header-content content-p'>pour des équipes de développement </p>
                    
                </div>
                <section className="sign-in-content">
                    <h1 className="sign-in-title">Se connecter au compte</h1>
                    <form onSubmit = {handleSubmit}>
                        <div className="input-wrapper">
                            <span className='input-icons'>
                                <FaMobileScreen className='icon-mobile' />
                            </span>
                            <input type="text" id="username" className="login-input" placeholder='Veuillez entrer votre email'
                                onChange={(e) => dispatch(logninActions.UserEmail(e.target.value))} />
                        </div>
                        <div className="input-wrapper">
                            <span className='input-icons'>
                                <RiLockPasswordFill className='icon-password' />
                            </span>
                            <input type="password" id="password" className="login-input" placeholder='Veuillez entrer votre mot de passe'
                                onChange={(e) => dispatch(logninActions.PassWord(e.target.value))} />
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