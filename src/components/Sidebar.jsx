import React from 'react';
import { Home, List, Bell, Settings, LogOut } from 'lucide-react'; // Usando lucide-react

const Sidebar = () => {
  const icons = [
    { id: 1, icon: <Home size={24} />, active: true },
    { id: 2, icon: <List size={24} />, active: false },
    { id: 3, icon: <Bell size={24} />, active: false },
    { id: 4, icon: <Settings size={24} />, active: false },
  ];

  return (
    <aside className="w-16 bg-[#272833] flex flex-col items-center py-4 space-y-6 rounded-r-3xl">
      {/* Top Logo Icon */}
      <div className="w-12 h-12 rounded-2xl bg-[#393A48] flex items-center justify-center mb-6">
        <img src="/logo.png" alt="logo" className="w-6 h-6" />
      </div>

      {/* Navegación */}
      <nav className="flex flex-col space-y-4">
        {icons.map(({ id, icon, active }) => (
          <button
            key={id}
            className={`w-10 h-10 flex items-center justify-center rounded-xl ${
              active ? 'bg-[#FF6B57] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {icon}
          </button>
        ))}
      </nav>

      {/* Bottom Logout */}
      <div className="mt-auto pb-4">
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
