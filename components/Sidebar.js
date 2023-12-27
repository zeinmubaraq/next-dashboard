import {
  ChartBarIcon,
  HomeIcon,
  HomeModernIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="fixed z-50 min-h-full translate-x-0 bg-white shadow-2xl">
      <div className="mx-14 mt-12 text-2xl font-bold uppercase">
        Horizon <span className="font-medium">Free</span>
      </div>
      <ul className="mt-10 space-y-1">
        <li className="border-r-4 border-indigo-600 py-2 pl-9 font-semibold">
          <Link href="#" className="flex items-center gap-x-3">
            <HomeIcon className="h-5 w-5" />
            Main Dashboard
          </Link>
        </li>
        <li className="flex items-center gap-x-3 py-2 pl-9 font-semibold text-gray-400">
          <Link href="#" className="flex items-center gap-x-3">
            <ShoppingCartIcon className="h-5 w-5" />
            NFT Markeyplace
          </Link>
        </li>
        <li className="flex items-center gap-x-3 py-2 pl-9 font-semibold text-gray-400">
          <Link href="#" className="flex items-center gap-x-3">
            <ChartBarIcon className="h-5 w-5" />
            Data Tables
          </Link>
        </li>
        <li className="flex items-center gap-x-3 py-2 pl-9 font-semibold text-gray-400">
          <Link href="#" className="flex items-center gap-x-3">
            <UserIcon className="h-5 w-5" />
            Profile
          </Link>
        </li>
        <li className="flex items-center gap-x-3 py-2 pl-9 font-semibold text-gray-400">
          <Link href="#" className="flex items-center gap-x-3">
            <HomeModernIcon className="h-5 w-5" />
            RTL Admin
          </Link>
        </li>
      </ul>
    </div>
  );
}
