import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FaHome, FaCoins } from 'react-icons/fa';
import { IoMdContact, IoMdSettings } from "react-icons/io";

const NavFooter: React.FC = ({}) => {
  const history = useHistory();

  const [likeAnimation, setLikeAnimation] = useState(false);
  const submenuOptions = [
    {
      label: 'Home',
      link: '/home',
      icon: <FaHome />
    },
    {
      label: 'Rewards',
      link: '/rewards',
      icon: <FaCoins />
    },
    {
      label: 'Contact',
      link: '/contact',
      icon: <IoMdContact />
    },
    {
      label: 'Settings',
      link: '/settings',
      icon: <IoMdSettings />
    },
  ];
  return (
    <footer className='grid bg-red-400'>
      <div className='grid grid-cols-4 text-center my-4'>
        {submenuOptions.map((option, index) => {
          return (
            <div key={index} className='grid h-fit justify-center'>
              <div className='text-gray-200 grid h-fit text-center justify-center'>
                {option.icon}
              </div>
              <div className='h-fit'>
                <span className='text-sm text-gray-200 h-fit'>{option.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default NavFooter;
