import Link from "next/link";
const Header: React.FC = () => {
  const accommodationTypes = [
    { name: "Rooms", icon: "🏠" },
    { name: "Mansion", icon: "🏰" },
    { name: "Countryside", icon: "🌾" },
    { name: "Villa", icon: "🏖️" },
    { name: "Apartment", icon: "🏢" },
    { name: "Cabin", icon: "🏕️" },
    { name: "Luxury", icon: "💎" },
    { name: "Beach", icon: "🏖️" },
    { name: "Mountain", icon: "⛰️" },
    { name: "City", icon: "🏙️" },
    { name: "Desert", icon: "🏜️" },
    { name: "Island", icon: "🏝️" },
    { name: "Lake", icon: "🏞️" },
    { name: "Ski", icon: "🎿" },
    { name: "Castle", icon: "🏰" },
    { name: "Farm", icon: "🚜" },
    { name: "Boat", icon: "⛵" },
    { name: "Tree", icon: "🌳" },
  ];

  return (
    <header className="bg-white">
      {/* Top green bar */}
      <div className="bg-teal-600 text-white text-center py-3 text-sm">
        Get the mobile app for a better experience.It&apos;s free!
        <button className="ml-3 bg-teal-700 px-4 py-1.5 rounded text-xs hover:bg-teal-800">
          {" "}
          Mobile{" "}
        </button>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 py-4">
            {/* LOGO */}
            <div className="flex items-center justify-start px-6">
                <Link href="/" className="bg-teal-600 text-white px-4 py-2 rounded text-xl font-bold hover:bg-teal-700 transition-colors">
                    alx
                </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a
                className="text-gray-700 hover:text-teal-600 font-medium text-base"
                href="#"
              >
                Stays
              </a>
              <a
                className="text-gray-700 hover:text-teal-600 font-medium text-base"
                href="#"
              >
                About
              </a>
              <a
                className="text-gray-700 hover:text-teal-600 font-medium text-base"
                href="#"
              >
                Host your
              </a>
              <a
                className="text-gray-700 hover:text-teal-600 font-medium text-base"
                href="#"
              >
                Pricing
              </a>
            </nav>

            {/* Search Button */}
            <div className="flex-1 max-w-lg mx-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destination, properties..."
                  className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                />
                <button className="absolute right-3 top-1/2  transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2.5 rounded-full ">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center  justify-end space-x-7 ">
              {/* <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                🌟
              </div> */}
              <button className="text-gray-700 hover:text-teal-600 font-medium text-base">
                List your property
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded font-medium text-base">
                Sign in
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded font-medium text-base">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation types */}
      <div className="border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-1">
          <div className="flex justify-center space-x-8 overflow-x-auto py-6">
            {accommodationTypes.map((type) => {
              return (
                <button
                  key={type.name}
                  className="flex flex-col items-center min-w-0 flex-shrink-0 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-teal-600 whitespace-nowrap">
                    {type.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
