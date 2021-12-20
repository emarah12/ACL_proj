import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import SearchIcon from '@mui/icons-material/Search';
import FlightIcon from '@mui/icons-material/Flight';
import AddIcon from '@mui/icons-material/Add';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Flights',
    path: '/api/flight',
    icon: <FlightIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Add Flight',
    path: '/api/flight/create',
    icon: <AddIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/api/flight/searchFlight',
    icon: <SearchIcon />,
    cName: 'nav-text'
  }
];