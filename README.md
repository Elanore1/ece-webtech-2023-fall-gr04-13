# ECE Web Technologies LAB6

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

We use data fetching and rendering with Next.js.
The use of the appropriate data fetching strategie is key, it impacts include:
- The performances of your page generation
- The deployment method
- The geographical distribution of your data with a CDN
- Page security, expositing publicly or not some particular URLs
- User experience
- Search Engine Optimisation (SEO)

## Description

- First, we re-implement the `/pages/articles.js` to use SSG by removing the `useEffect` function and exporting an implementation of  [`getStaticProps`] function (https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

```javascript
export async function getStaticProps(){
  const res = await fetch(`http://localhost:3000/api/articles/`);
  const articles = await res.json()
  return { props: {articles}}
}
```

- Now, we are going to create profile API and use it in our Header.

```javascript
  //In pages/api/profile.js
  useEffect(() => {
    // call to api profile
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (response.status === 200) {
          const data = await response.json();
          setProfile(data);
        } else if (response.status === 401) {
          // not connected (HTTP 401)
          setProfile(null); 
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
        setProfile(null); 
      }
    };
    fetchUserProfile();
  }, []);
```
In our Header, we implement inside a `useEffect` React hook a call to fetch the profile. If the user is logged in, the API returns an object with the user's `username` and `email`. In real life, if the user is not logged in, an HTTP error 401 is returned. On success, display an account icon associated with the user's `username`.

```javascript
    //In components/Header
    <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        src={profile.img}
        alt="User dropdown"
        className="w-10 h-10 rounded-full cursor-pointer"
    />
    <div class="font-medium text-white">
        <div>{profile.username}</div>
        <div class="text-sm text-darkblue">{profile.email}</div>
    </div>
```

## Running/Usage instruction

We can run the application with :

```bash
npm run dev
```

To build the application :

```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Name

Elanore Lelièvre, Solveig Berling, Noé Pham

