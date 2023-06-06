import React from 'react';

function Header() {
    return (
        <nav className='bg-black text-white' >
            <div className='container w-full mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2 '>

                <div className='logo-wrapper pl-4 flex items-center ' >
                    <img src={"/"} alt="logo" />
                </div>

                <div className='nav-menu-wraper flex items-center justify-between space-x-10 '>
                    <div>home</div>
                    <div>About</div>
                </div>

                <div className='flex items-center space-x-4 '>
                    <div>Cart</div>
                    <div>Log in</div>
                    <div>Sing up</div>
                </div>

            </div>
        </nav>
    );
}

export default Header;