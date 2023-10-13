import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <div className="content"> */}
      {/* { <Outlet /> } // output content /display when we click on Home Services,Technologies,Industries,Resources and Get Started */}
      {/* </div> */}
    </div>
  );
};

export default Layout;
