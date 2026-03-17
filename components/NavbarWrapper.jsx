'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

// Auth pages where Navbar should be hidden
const HIDE_ON = ['/signin', '/signup', '/login'];

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hidden   = HIDE_ON.some(p => pathname.startsWith(p));
  if (hidden) return null;
  return <Navbar />;
}