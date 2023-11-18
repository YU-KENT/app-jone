import * as LoginActions from '../features/loginReducer'
import  { useEffect} from 'react' ;


function FetchUser (dispatch){
    

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch('../mocked data/user.json')
            const data = await response.json();
            console.log("data",data)
            dispatch(LoginActions.setUserName(data.userName))
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
      
      
}

export default FetchUser