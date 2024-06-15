import React, { useEffect, useState } from 'react';
import { IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import NavHeader from '../../components/nav/NavHeader';
import { items, Item } from '../../utils/ProductUtils';
import NavFooter from '../../components/nav/NavFooter';

const HomePage: React.FC = () => {
  const history = useHistory();
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [filter, setFilter] = useState('All');

  const navigateTo = (path: string) => {
    history.push(path);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFilter(value);

    if (value === 'All') {
      setFilteredItems(items);
    } else if (value === 'On Sale') {
      setFilteredItems(items.filter(item => item.onSale));
    } else {
      setFilteredItems(items.filter(item => item.type === value));
    }
  };

  return (
    <IonPage>
      <NavHeader />
      <main className='grid grid-rows-2 w-full h-full bg-slate-100 py-4 overflow-y-scroll' >
        <div className='container mx-auto px-4'>
          <div className='flex justify-end mb-4'>
            <select onChange={handleFilterChange} className='border border-gray-300 p-2 rounded'>
              <option value='All'>All</option>
              <option value='On Sale'>On Sale</option>
              <option value='Electronics'>Electronics</option>
              <option value='Books'>Books</option>
              <option value='Home Appliances'>Home Appliances</option>
              <option value='Fitness'>Fitness</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {filteredItems.map(item => (
              <div key={item.id} className='bg-white p-2 rounded shadow leading-5'>
                <img src={item.image} alt={item.name} className='w-full text-sm h-48 object-cover mb-4' />
                <h3 className='text-lg font-semibold mb-2 leading-5'>{item.name}</h3>
                <p className='text-gray-700 mb-2'>${item.price.toFixed(2)}</p>
                <p className='text-yellow-500 mb-2'>Rating: {item.rating} ⭐</p>
                <p className='text-gray-500 mb-2'>Delivery: {item.deliveryTime}</p>
                {item.onSale && <p className='text-red-500 font-bold mb-2'>On Sale!</p>}
                <button
                  onClick={() => navigateTo(item.link)}
                  className='bg-blue-500 text-white px-4 py-2 rounded'>
                  View Item
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <NavFooter />
    </IonPage>
  );
};

export default HomePage;
