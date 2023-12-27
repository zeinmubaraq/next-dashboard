import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Admin({ children }) {
  return (
    <div className="flex h-full w-full bg-gray-100">
      <Sidebar />
      <main className="ml-72 min-h-full w-full bg-gray-100 px-5">
        <Navbar />
        <div className="mb-auto mt-5 min-h-[83vh] px-4">{children}</div>
      </main>
    </div>
  );
}
