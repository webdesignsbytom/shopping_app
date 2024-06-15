// utils/items.ts

export interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    link: string;
    onSale: boolean;
    deliveryTime: string;
    type: string;
  }
  
  export const items: Item[] = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      image: 'path/to/image1.jpg',
      price: 29.99,
      rating: 4.5,
      link: '/item/1',
      onSale: true,
      deliveryTime: '2-3 days',
      type: 'Electronics'
    },
    {
      id: 2,
      name: 'Thriller Novel',
      image: 'path/to/image2.jpg',
      price: 19.99,
      rating: 4.0,
      link: '/item/2',
      onSale: false,
      deliveryTime: '5-7 days',
      type: 'Books'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      image: 'path/to/image3.jpg',
      price: 49.99,
      rating: 4.7,
      link: '/item/3',
      onSale: true,
      deliveryTime: '1-2 days',
      type: 'Home Appliances'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      image: 'path/to/image4.jpg',
      price: 39.99,
      rating: 4.8,
      link: '/item/4',
      onSale: false,
      deliveryTime: '3-5 days',
      type: 'Electronics'
    },
    {
      id: 5,
      name: 'Yoga Mat',
      image: 'path/to/image5.jpg',
      price: 25.99,
      rating: 4.2,
      link: '/item/5',
      onSale: true,
      deliveryTime: '2-4 days',
      type: 'Fitness'
    },
    {
      id: 6,
      name: 'Fiction Book',
      image: 'path/to/image6.jpg',
      price: 14.99,
      rating: 4.6,
      link: '/item/6',
      onSale: false,
      deliveryTime: '4-6 days',
      type: 'Books'
    },
    {
      id: 7,
      name: 'Smart Watch',
      image: 'path/to/image7.jpg',
      price: 199.99,
      rating: 4.9,
      link: '/item/7',
      onSale: true,
      deliveryTime: '1-3 days',
      type: 'Electronics'
    },
    {
      id: 8,
      name: 'Blender',
      image: 'path/to/image8.jpg',
      price: 59.99,
      rating: 4.3,
      link: '/item/8',
      onSale: false,
      deliveryTime: '3-5 days',
      type: 'Home Appliances'
    },
    {
      id: 9,
      name: 'Running Shoes',
      image: 'path/to/image9.jpg',
      price: 89.99,
      rating: 4.5,
      link: '/item/9',
      onSale: true,
      deliveryTime: '2-3 days',
      type: 'Fitness'
    },
    {
      id: 10,
      name: 'Cookbook',
      image: 'path/to/image10.jpg',
      price: 24.99,
      rating: 4.4,
      link: '/item/10',
      onSale: false,
      deliveryTime: '4-6 days',
      type: 'Books'
    },
    {
      id: 11,
      name: 'Vacuum Cleaner',
      image: 'path/to/image11.jpg',
      price: 129.99,
      rating: 4.7,
      link: '/item/11',
      onSale: true,
      deliveryTime: '1-2 days',
      type: 'Home Appliances'
    },
    {
      id: 12,
      name: 'Tablet',
      image: 'path/to/image12.jpg',
      price: 299.99,
      rating: 4.8,
      link: '/item/12',
      onSale: false,
      deliveryTime: '2-4 days',
      type: 'Electronics'
    },
    {
      id: 13,
      name: 'Dumbbell Set',
      image: 'path/to/image13.jpg',
      price: 49.99,
      rating: 4.6,
      link: '/item/13',
      onSale: true,
      deliveryTime: '3-5 days',
      type: 'Fitness'
    },
    {
      id: 14,
      name: 'Mystery Book',
      image: 'path/to/image14.jpg',
      price: 16.99,
      rating: 4.1,
      link: '/item/14',
      onSale: false,
      deliveryTime: '5-7 days',
      type: 'Books'
    },
    {
      id: 15,
      name: 'Air Fryer',
      image: 'path/to/image15.jpg',
      price: 79.99,
      rating: 4.9,
      link: '/item/15',
      onSale: true,
      deliveryTime: '1-2 days',
      type: 'Home Appliances'
    }
  ];
  