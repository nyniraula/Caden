import { NavLink } from 'react-router';
import cadenLogo from '../../assets/Caden.svg';
import { House, UserRound, Wallet, Settings } from 'lucide-react';
import useUserContext from '../../app/hooks/useUserContext';

const Sidebar = () => {
  const { state } = useUserContext();
  const { username } = state.userData;

  const linkClass = ({ isActive }) =>
    `
    flex flex-col lg:flex-row
    items-center justify-center lg:justify-start
    gap-1 lg:gap-2
    w-full
    px-2 py-2 lg:py-4
    rounded-lg
    transition-colors
    ${
      isActive
        ? 'bg-[#C9E6FF] dark:bg-zinc-600 lg:border-l-[3px] border-fuchsia-700'
        : ''
    }
  `;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-center border-t-2 border-zinc-200 bg-[#faf8ff] p-4 lg:static lg:h-screen lg:w-60 lg:flex-col lg:items-center lg:justify-between lg:border-t-0 lg:border-r-2 dark:border-zinc-700 dark:bg-zinc-900">
      {/* Top Section */}
      <div className="flex w-full flex-row gap-6 lg:flex-col">
        {/* Logo */}
        <div className="hidden items-start justify-center gap-2 lg:flex">
          <img
            src={cadenLogo}
            alt="Caden"
            width={48}
            height={48}
            className="aspect-square"
          />

          <div className="flex flex-col">
            <h4 className="text-xl text-fuchsia-700">Caden</h4>
            <p className="text-xs tracking-tighter text-slate-600 dark:text-slate-200">
              Know your cash
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex w-full justify-around gap-3 lg:flex-col lg:justify-start dark:text-[#f8f8f8]">
          <NavLink to="/" className={linkClass}>
            <House size={18} strokeWidth={2} />
            <span className="hidden text-sm font-semibold lg:block">Home</span>
          </NavLink>

          <NavLink to="/transactions" className={linkClass}>
            <Wallet size={18} strokeWidth={2} />
            <span className="hidden text-sm font-semibold lg:block">
              Transactions
            </span>
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <Settings size={18} strokeWidth={2} />
            <span className="hidden text-sm font-semibold lg:block">
              Settings
            </span>
          </NavLink>
        </div>
      </div>

      {/* User Section */}
      <div className="hidden w-full border-t-2 border-zinc-200 pt-4 lg:flex dark:border-zinc-700 dark:text-[#f8f8f8]">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-slate-200 p-2">
            <UserRound size={20} />
          </div>

          <h5>{username}</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
  