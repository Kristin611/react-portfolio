import { useState } from 'react';
import NavTabs from './NavTabs';
import Project from './Project';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    //logic to render different pages depending on user's current location
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    //user event to fire function to handle page change
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* currentPage and handlePageChange are being passed as props */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* calling renderPage() to return the appropriate component based on the current page state */}
            <main>{renderPage()}</main>
        </div>
    )
}