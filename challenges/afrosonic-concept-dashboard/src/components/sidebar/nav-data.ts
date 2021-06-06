import { FaHome, FaCompass, FaMusic, FaUserAlt, FaHeart, FaDatabase } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { GiBackwardTime } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { BsBoxArrowLeft } from 'react-icons/bs';

import { NavItem } from 'types/nav-item';

export const navItems: NavItem[] = [
  {
    type: 'link',
    href: '/',
    icon: FaHome,
    label: 'Home',
  },
  {
    type: 'link',
    href: '/search',
    icon: RiSearchLine,
    label: 'Search',
  },
  {
    type: 'link',
    href: '/discover',
    icon: FaCompass,
    label: 'Discover',
  },
  {
    type: 'link',
    href: '/clips',
    icon: FaMusic,
    label: 'Clips',
  },
  {
    type: 'link',
    href: '/producers',
    icon: FaUserAlt,
    label: 'Producers',
  },
  {
    type: 'header',
    label: 'Library',
  },
  {
    type: 'link',
    href: '/recent',
    icon: GiBackwardTime,
    label: 'Recent',
  },
  {
    type: 'link',
    href: '/favorites',
    icon: FaHeart,
    label: 'Favorites',
  },
  {
    type: 'link',
    href: '/local',
    icon: FaDatabase,
    label: 'Local',
  },
  {
    type: 'header',
    label: 'General'
  },
  {
    type: 'link',
    href: '/settings',
    icon: IoIosSettings,
    label: 'Settings',
  },
  {
    type: 'link',
    href: '/logout',
    icon: BsBoxArrowLeft,
    label: 'Log Out',
  },
];
