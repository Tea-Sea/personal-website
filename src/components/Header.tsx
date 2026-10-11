import HeaderButton from './HeaderButton';

function Header() {

    return (
        <header className="sticky top-0 z-20 h-18 w-full px-8 py-4 font-mono grid grid-cols-3 items-center bg-background/70 backdrop-blur-md border-b border-secondary">
            <a className="flex justify-self-start ml-15 font-extrabold text-primary no-underline text-2xl transition-transform duration-300 hover:scale-120 origin-center" href='/'>Tom <div className='flex text-secondary pl-2'>Caspar</div></a>
            <nav className='justify-self-center'>
                <ul className='flex items-center font-mono'>
                <li>
                    <HeaderButton to='/' onClick={() => {
                        if (location.pathname === '/') window.location.reload();
                    }}>Home</HeaderButton>
                </li>
                <li>
                    <HeaderButton to='/about'>About</HeaderButton>
                </li>
                <li>
                    <HeaderButton to='/projects'>Projects</HeaderButton>
                </li>
                <li>
                    <HeaderButton to='/contact'>Contact</HeaderButton>
                </li>
                </ul>
            </nav>
            <div />
        </header>
    );
};

export default Header;