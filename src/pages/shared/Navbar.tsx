const Navbar = () => {
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <p>Item 1</p>
              </li>
              <li tabIndex={0}>
                <p className='justify-between'>
                  Parent
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                  </svg>
                </p>
                <ul className='p-2'>
                  <li>
                    <p>Submenu 1</p>
                  </li>
                  <li>
                    <p>Submenu 2</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Item 3</p>
              </li>
            </ul>
          </div>
          <p className='btn btn-ghost normal-case text-xl'>daisyUI</p>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <p>Item 1</p>
            </li>
            <li tabIndex={0}>
              <p>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </p>
              <ul className='p-2'>
                <li>
                  <p>Submenu 1</p>
                </li>
                <li>
                  <p>Submenu 2</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Item 3</p>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <p className='btn'>Get started</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
