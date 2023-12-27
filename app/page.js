import Admin from '@/components/Admin';
import {
  BuildingOffice2Icon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <Admin>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <ChartBarIcon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Earning</p>
            <h3 className="text-lg font-bold">$349.5</h3>
          </div>
        </div>

        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <PresentationChartLineIcon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Spend This Month</p>
            <h3 className="text-lg font-bold">$542.1</h3>
          </div>
        </div>

        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <ShoppingBagIcon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Sales</p>
            <h3 className="text-lg font-bold">$311.5</h3>
          </div>
        </div>

        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <CurrencyDollarIcon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Your Balance</p>
            <h3 className="text-lg font-bold">$311.5</h3>
          </div>
        </div>

        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <ListBulletIcon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">New Tasks</p>
            <h3 className="text-lg font-bold">231</h3>
          </div>
        </div>

        <div className="flex items-center gap-x-4 rounded-3xl bg-white px-5 py-5 shadow-lg shadow-gray-100">
          <div className="inline-flex h-full items-center rounded-full bg-indigo-100 px-3">
            <BuildingOffice2Icon className="h-6 text-indigo-700" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Total Projects</p>
            <h3 className="text-lg font-bold">$3123.5</h3>
          </div>
        </div>
      </div>
    </Admin>
  );
}
