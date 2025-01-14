import { redirect } from 'react-router-dom';
import Person from './person/person';
import Home from './home/home';

export const routes = [
  { index: true, loader: () => redirect('person') },
  { path: 'person', element: <Person />, text: 'Person' },
  { path: 'home', element: <Home />, text: 'Home' }
];
