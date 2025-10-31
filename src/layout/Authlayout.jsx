import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className=''>
          {/* <header>
            <Navbar></Navbar>
          </header> */}
          <main className='w-11/12 mx-auto py-10'>
          <Outlet>
            
          </Outlet>

          </main>
        </div>
    );
};

export default Authlayout;