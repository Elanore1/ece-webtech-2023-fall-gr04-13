import {useContext} from 'react';
import UserContext from './UserContext'

const LoggedOut = () => {
  const {login} = useContext(UserContext)
  const onClickLogin = async () => {
    const response = await fetch('/api/profile');
    const user = await response.json();
    login(user);
  };

  return (
    <div>
        <button  onClick={onClickLogin} className="text-left -mx-3 block rounded-lg px-3 py-2.5 text-white font-semibold leading-7 text-gray-900 hover:bg-darkblue">
            Log In →
        </button>
    </div>
  )
}

export default LoggedOut;