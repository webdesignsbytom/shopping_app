import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FiMenu } from 'react-icons/fi';
import { FaRegUser, FaSearch } from 'react-icons/fa';
// Images
import LogoImage from '../../assets/images/logos/wdbt-white.svg'

const NavHeader: React.FC = ({}) => {
  const history = useHistory();

  const [likeAnimation, setLikeAnimation] = useState(false);
  const submenuOptions = [
    {
      label: 'Shopping',
      link: '/shopping',
    },
    {
      label: 'Orders',
      link: '/orders',
    },
    {
      label: 'New In',
      link: '/new-in',
    },
  ];
  return (
    <header className='grid bg-red-400'>
      <nav className='grid grid-flow-col justify-between w-full h-full py-4'>
        {/* Menu */}
        <section className='px-4 text-white'>
          <FiMenu size={30} />
        </section>
        {/* Logo */}
        <section>
          <img src={LogoImage} alt="Logo" className='w-8 h-8' />
        </section>
        {/* User */}
        <section className='px-4 text-white'>
          <FaRegUser size={30} />
        </section>
      </nav>
      <section className='grid py-2'>
        <div className='grid w-[90%] mx-auto h-full'>
          <div className='relative w-full'>
            <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500' />
            <input
              type='text'
              name='search'
              id='search'
              className='w-full rounded-full pl-8 pr-8 py-2 shadow-xl focus:outline-none'
            />
            <FaSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500' />
          </div>
        </div>
      </section>

      <section>
        <div className='grid grid-cols-3 w-full h-fit text-center pt-2 pb-4'>
          {submenuOptions.map((item, index) => {
            return (
              <article key={index}>
                <span className='text-gray-200'>{item.label}</span>
              </article>
            );
          })}
        </div>
      </section>
    </header>
  );
};

export default NavHeader;
