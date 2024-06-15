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
      setFilteredItems(items.filter((item) => item.onSale));
    } else {
      setFilteredItems(items.filter((item) => item.type === value));
    }
  };

  return (
    <IonPage>
      <NavHeader />
      <main className='grid grid-rows-2 w-full h-full bg-slate-100 py-4 overflow-y-scroll'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-end mb-4'>
            <select
              onChange={handleFilterChange}
              className='border border-gray-300 p-2 rounded'
            >
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
            {filteredItems.map((item) => (
              <article key={item.id} className='grid overflow-hidden h-full'>
                <div className='bg-white grid p-2 rounded shadow leading-4'>
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full text-sm aspect-square object-cover'
                    />
                  </div>
                  <section className='grid h-fit'>
                    <div>
                      <h3 className='text-xs font-semibold'>{item.name}</h3>
                    </div>
                    <div>
                      <p className='text-gray-700 text-sm'>${item.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className='text-yellow-500 text-xs'>
                        Rating: {item.rating} ⭐
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-500 text-xs'>
                        Delivery: {item.deliveryTime}
                      </p>
                    </div>
                  </section>

                  <section className='grid items-end'>
                    <div className='h-fit'>
                      {item.onSale && (
                        <p className='text-red-500 text-xs font-semibold'>
                          On Sale!
                        </p>
                      )}
                    </div>
                  </section>

                  <div className='grid items-end'>
                    <button
                      onClick={() => navigateTo(item.link)}
                      className='bg-red-500 text-white text-sm px-2 py-2 h-fit rounded-lg'
                    >
                      View Item
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <NavFooter />
    </IonPage>
  );
};

export default HomePage;
