import React, { useEffect, useState } from 'react';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import logoPic from '../../../Images/logo512.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

    function handleWindowSizeChange() {
        if(window.innerWidth <= 680){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);



    return (
        <React.Fragment>
        {isMobile && <MobileHeader logoImg={logoPic} /> }
        {!isMobile && <DesktopHeader logoImg={logoPic} /> }
        </React.Fragment>
    );
};

export default Header;