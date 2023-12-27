import {
  BellIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import profilePic from '@/public/assets/images/profile.jpeg';

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-40 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3.5 backdrop-blur-xl">
      <div>
        <div className="text-sm">Pages / Main Dashboard</div>
        <h2 className="mt-1 text-3xl font-semibold">Main Dashboard</h2>
      </div>
      <div className="flex gap-x-2 rounded-full bg-white p-2 shadow-lg shadow-gray-200">
        <div className="flex">
          <span className="inline-flex items-center rounded-l-full bg-gray-100 pl-3.5 pr-1.5">
            <MagnifyingGlassIcon className="h-4 text-gray-400" />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="rounded-r-full bg-gray-100 py-3 text-sm outline-none"
          />
        </div>

        <button>
          <BellIcon className="h-5 text-gray-400" />
        </button>

        <button>
          <InformationCircleIcon className="h-5 text-gray-400" />
        </button>
        <button>
          <MoonIcon className="h-5 text-gray-400" />
        </button>
        <div className="relative inline-block w-11 overflow-hidden rounded-full">
          <Image
            src={profilePic}
            alt="Profile Picture"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </nav>
  );
}
