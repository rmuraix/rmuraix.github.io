function Header() {
  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900">
              rmuraix
            </span>
            <div className="flex space-x-4 text-gray-900"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
