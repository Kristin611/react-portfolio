function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav-tabs'>
            <li className='nav-item'>
                <a href="#about" onClick={() => handlePageChange('About')} 
                //ternary operator checking if current page is equal to about me. If it is, then it returns CSS for nav-link-active, else it returns CSS for nav-link
                className={currentPage === About ? 'nav-link-active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} 
                className={currentPage === Portfolio ? 'nav-link-active' : 'nav-link'}>
                    Portfolio
                </a>

            </li>
            <li className='nav-item'>
                <a href="#contact" onClick={() => handlePageChange('Contact')} 
                className={currentPage === Contact ? 'nav-link-active' : 'nav-link'}>
                    Contact
                </a>

            </li>
            <li className='nav-item'>
                <a href="#resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === Resume ? 'nav-link-active' : 'nav-link'}>
                    Resume
                </a>

            </li>

        </ul>
    );
}

export default NavTabs; 