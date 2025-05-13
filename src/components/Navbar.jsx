import React from 'react';
import { Home, List, Bell, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-20 bg-[#20222E] py-6 flex flex-col items-center gap-6 rounded-r-3xl">
      <img src="/logo.svg" alt="logo" className="w-10 h-10" />
      <Home className="text-white w-6 h-6 hover:text-orange-400 cursor-pointer" />
      <List className="text-white w-6 h-6 hover:text-orange-400 cursor-pointer" />
      <Bell className="text-white w-6 h-6 hover:text-orange-400 cursor-pointer" />
      <Settings className="text-white w-6 h-6 hover:text-orange-400 cursor-pointer" />
    </div>
  );
};

export default Navbar;