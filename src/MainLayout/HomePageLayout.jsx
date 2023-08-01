
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className='MainWidth'>
        
            <Outlet></Outlet>
          
        </div>
    );
};

export default HomePageLayout;