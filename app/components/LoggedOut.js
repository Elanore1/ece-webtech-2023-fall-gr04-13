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
      <button onClick={onClickLogin} className="flex text-left -mx-3 block rounded-lg px-3 py-2.5 text-white font-semibold leading-7 text-gray-900 hover:bg-darkblue">
        <span className="mr-2">Log In</span>  
          <svg className="mt-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
          </svg>
      </button>
    </div>
  )
}

export default LoggedOut;