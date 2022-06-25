import React, { useEffect } from 'react';
import Banner from './Banner'
function HomePage() {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      })
    return (
        <div>
            <Banner/>
        </div>
    );
}

export default HomePage;