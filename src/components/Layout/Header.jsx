import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [user, setUser] = useState(null); // User data (null if not logged in)
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false); // State for Buy dropdown
  const [rentDropdownOpen, setRentDropdownOpen] = useState(false); // State for Rent dropdown
  const [mobileBuyDropdownOpen, setMobileBuyDropdownOpen] = useState(false); // Mobile Buy dropdown
  const [mobileRentDropdownOpen, setMobileRentDropdownOpen] = useState(false); // Mobile Rent dropdown

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu after selection
  };

  const handleLogin = () => {
    // Call your login API and set the user data
    const mockUserData = {
      name: 'John Doe',
      // Other user data can be fetched here
    };
    setUser(mockUserData);
  };

  const handleLogout = () => {
    // Handle logout
    setUser(null);
  };

  useEffect(() => {
    // If there's any existing session, you can fetch user data here
    // Example:
    // fetch('/api/getUser')
    //   .then(res => res.json())
    //   .then(data => setUser(data))
  }, []);

  return (
    <header className="bg-[#213555] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">RealEstate</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            onClick={() => handleLinkClick('home')}
            className={`${activeLink === 'home' ? 'text-yellow-300' : ''}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleLinkClick('about')}
            className={`${activeLink === 'about' ? 'text-yellow-300' : ''}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className={`${activeLink === 'contact' ? 'text-yellow-300' : ''}`}
          >
            Contact
          </a>
          <div
            className="relative"
            onMouseEnter={() => setBuyDropdownOpen(true)}
            onMouseLeave={() => setBuyDropdownOpen(false)}
          >
            <button className="text-white hover:text-yellow-300 px-4 py-2 rounded flex items-center">
              Buy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {buyDropdownOpen && (
              <div className="absolute mt-2 bg-[#213555] text-white rounded shadow-lg w-40">
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => handleLinkClick(city)}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setRentDropdownOpen(true)}
            onMouseLeave={() => setRentDropdownOpen(false)}
          >
            <button className="text-white hover:text-yellow-300 px-4 py-2 rounded flex items-center">
              Rent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {rentDropdownOpen && (
              <div className="absolute mt-2 bg-[#213555] text-white rounded shadow-lg w-40">
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => handleLinkClick(city)}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Conditional rendering for login/signup or user icon */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-300 text-white flex justify-center items-center font-semibold">
                {user.name.charAt(0)} {/* Show first letter of user's name */}
              </div>
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a
            href="#home"
            onClick={() => handleLinkClick('home')}
            className={`${activeLink === 'home' ? 'text-yellow-300' : ''}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleLinkClick('about')}
            className={`${activeLink === 'about' ? 'text-yellow-300' : ''}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className={`${activeLink === 'contact' ? 'text-yellow-300' : ''}`}
          >
            Contact
          </a>
          <div
            className="relative"
            onClick={() => setMobileBuyDropdownOpen(!mobileBuyDropdownOpen)}
          >
            <button className="text-white hover:text-yellow-300 px-4 py-2 rounded flex items-center">
              Buy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileBuyDropdownOpen && (
              <div className="absolute mt-2 bg-[#213555] text-white rounded shadow-lg w-40">
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => handleLinkClick(city)}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onClick={() => setMobileRentDropdownOpen(!mobileRentDropdownOpen)}
          >
            <button className="text-white hover:text-yellow-300 px-4 py-2 rounded flex items-center">
              Rent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileRentDropdownOpen && (
              <div className="absolute mt-2 bg-[#213555] text-white rounded shadow-lg w-40">
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => handleLinkClick(city)}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
