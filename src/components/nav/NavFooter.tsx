import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FiMenu } from 'react-icons/fi';

const NavFooter: React.FC = ({}) => {
  const history = useHistory();

  const [likeAnimation, setLikeAnimation] = useState(false);
  const submenuOptions = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Rewards',
      link: '/rewards',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
    {
      label: 'Settings',
      link: '/settings',
    },
  ];
  return (
    <footer className='grid bg-red-400'>
      <div className='grid grid-cols-4 text-center my-4'>
        {submenuOptions.map((option, index) => {
          return (
            <div>
              <span className='text-sm text-gray-200'>{option.label}</span>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default NavFooter;
