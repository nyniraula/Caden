import { NavLink } from 'react-router';
import cadenLogo from '../../assets/Caden.svg';
import { House, UserRound } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Settings } from 'lucide-react';
import useAppContext from '../../hooks/useAppContext';

const Sidebar = () => {
  const { appSettings } = useAppContext();

  // prettier-ignore
  return (<div className="h-screen w-60 border-r-2 border-[#C7C4D8] flex flex-col justify-between items-center bg-[#faf8ff] p-4 ">
{/* top row */}
  <div className='flex flex-col gap-6 w-full'>
    {/* Logo and Name */}
    <div className='flex justify-center items-start gap-2'>
      <div >
        <img src={cadenLogo} alt="Caden" width={'48px'}
          height={'48px'}
          className="aspect-square "/>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-fuchsia-700 text-xl'>Caden</h4>
        <p className='text-xs tracking-tighter text-slate-600'>Know your cash</p>
      </div>

  

    </div>
      {/* links */}
   <div className='flex flex-col gap-3'>
    <NavLink to='/' className={({isActive})=>
    `flex gap-2 justify-start items-center px-2  py-4 w-full ${isActive?'bg-[#C9E6FF] rounded-lg border-l-3 border-fuchsia-700 ':''}`
    }>
      <House size={18} strokeWidth={2}/>
      <span className='text-sm font-semibold'>Home</span>
    </NavLink>

    <NavLink to='/transactions' className={({isActive})=>
       `flex gap-2 justify-start items-center px-2 py-4 w-full ${isActive?'bg-[#C9E6FF] rounded-lg border-l-3 border-fuchsia-700 ':''}`
    }>
      <Wallet size={18} strokeWidth={2}/>
      <span className='text-sm font-semibold'>Transactions</span>
    </NavLink>

    <NavLink to='/settings' className={({isActive})=>
      `flex gap-2 justify-start items-center px-2 py-4 w-full ${isActive?'bg-[#C9E6FF] rounded-lg border-l-3 border-fuchsia-700 ':''}`
    }>
      <Settings size={18} strokeWidth={2}/>
      <span className='text-sm font-semibold'>Settings</span>
    </NavLink>
   </div>
  </div>
  

{/* bottom row */}
<div className='border-t-2 w-full border-[#C7C4D8] py-2 pt-4'>


    <div className="flex items-center justify-center gap-4">
      <div className='p-2 bg-slate-200 rounded-full'><UserRound size={20}/></div>
      <h5>{appSettings.userName}</h5>
    </div>
  </div>
  </div>)
};

export default Sidebar;
