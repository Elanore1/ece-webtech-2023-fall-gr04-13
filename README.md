# ECE Web Technologies LAB7

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

User local and application state, form manipulation.
The state is central to any application. The state is shared between the client and the server. 
- Component state 
- Form with native elements 
- Form with controlled elements 
- Application state with React Context

## Description

- Creation of the page at the ["/use-state"](http://localhost:3000/use-state) route with a counter increment when the user click on the button.

- Creation of the page at the ["/login-native"](http://localhost:3000/login-native) route that use a form to login using `FormData` object

- Creation of the page at the ["/login-controlled"](http://localhost:3000/login-controlled) route that use a form to login using `data` object that is updated when the user enter some information inside the form

- Creation of Application state with React Context :
  
1) Implementing a UserContext

```javascript
export default UserContext
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
      <UserContext.Provider 
          value={{ 
              user: user, 
              login: (user) =>{
                  setUser(user)
              }, 
              logout:() =>{
                  setUser(null)
              }
          }}
      >
      {children}
      </UserContext.Provider>
  );
}
```
2) Plug the provider inside _app.js

```javascript
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
```
3) Import UserContext in Header.js 

```javascript
import UserContext from './UserContext'
const {user} = useContext(UserContext);
```
4) Components LoggedIn and LoggedOut 

LoggedIn.js :
```javascript
const LoggedIn = () => {
    const {user, logout} = useContext(UserContext)
    const isSmallScreen =  window.innerWidth <= 768
    const onClickLogout = ()=>{
        logout()
    }
    return (
        //header styles with user 
        //access data like this :
        //{user.img}
        //with a button to logOut
        //<button onClick={onClickLogout}>Sign out</button>
    )
}
export default LoggedIn;
```

LoggedOut.js :
```javascript
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
```

Now, when navigating across the pages, the `LoggedIn` and `LoggedOut` component states is preserved.

## Running/Usage instruction

We can run the application with :

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Name

Elanore Lelièvre, Solveig Berling, Noé Pham

