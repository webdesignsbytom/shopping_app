// utils/items.ts
import image1 from '../assets/images/products/product (1).jpg'
import image2 from '../assets/images/products/product (2).jpg'
import image3 from '../assets/images/products/product (3).jpg'
import image4 from '../assets/images/products/product (4).jpg'
import image5 from '../assets/images/products/product (5).jpg'
import image6 from '../assets/images/products/product (6).jpg'
import image7 from '../assets/images/products/product (7).jpg'
import image8 from '../assets/images/products/product (8).jpg'
import image9 from '../assets/images/products/product (9).jpg'
import image10 from '../assets/images/products/product (10).jpg'
import image11 from '../assets/images/products/product (11).jpg'
import image12 from '../assets/images/products/product (12).jpg'
import image13 from '../assets/images/products/product (13).jpg'
import image14 from '../assets/images/products/product (14).jpg'
import image15 from '../assets/images/products/product (15).jpg'

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
      image: image1,
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
      image: image2,
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
      image: image3,
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
      image: image4,
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
      image: image5,
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
      image: image6,
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
      image: image7,
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
      image: image8,
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
      image: image9,
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
      image: image10,
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
      image: image11,
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
      image: image12,
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
      image: image13,
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
      image: image14,
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
      image: image15,
      price: 79.99,
      rating: 4.9,
      link: '/item/15',
      onSale: true,
      deliveryTime: '1-2 days',
      type: 'Home Appliances'
    }
  ];
  