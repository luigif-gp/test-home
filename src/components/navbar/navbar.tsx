import Navigation from './navigation';

const Navbar = () => {
  return (
    <header>
      <nav className="bg-box border border-box fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div className="w-1/2 pl-2 md:pl-0">
            <a className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
              <i className="fas fa-moon text-blue-400 pr-3"></i> Github user search
            </a>
          </div>
          <Navigation />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
