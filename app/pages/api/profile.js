export default (req, res) => {
    const userProfile = {
      username: 'elanore_lelievre',
      email: 'elanorellvr@gmail.com',
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='absolute w-12 h-12 text-darkblue -left-1' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E",
    };
    res.status(200).json(userProfile);
  };