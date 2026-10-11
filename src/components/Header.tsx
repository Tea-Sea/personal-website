import HeaderButton from './HeaderButton';

function Header() {

  return (
    <header className="sticky top-0 z-20 h-18 w-full px-8 py-4 font-mono grid grid-cols-3 items-center bg-zinc-950/80 backdrop-blur-md border-b border-zinc-400">
        <a className="justify-self-start text-zinc-400 no-underline" href='/'>Tom Caspar</a>
        <nav className='justify-self-center'>
            <ul className='flex items-center font-mono'>
            <li>
                <HeaderButton to='/' onClick={() => {
                    if (location.pathname === '/') window.location.reload();
                }}>Home</HeaderButton>
            </li>
            <li>
                <HeaderButton to='/projects'>Projects</HeaderButton>
            </li>
            <li>
                <HeaderButton to='/about'>About</HeaderButton>
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