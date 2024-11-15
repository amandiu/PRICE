const LinkNav = ({ route }) => {
  return (
    <li
      className="mr-4 p-1 mb-1 px-3
   bg-black
   hover:bg-white 
   hover:text-black
   focus:outline
   rounded 
   focus:ring 
   focus:border-slate-800 ..."
    >
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default LinkNav;
