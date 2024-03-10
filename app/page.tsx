import { MyTable } from '@/components/table-tasks/mytable';
import { Welcome } from '@/components/welcome';

export default function Page() {

  return (
<main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <div>
            <Welcome />
          </div>
          <div className="rounded-full px-4 py-1 shadow bg-teal-100">
            <span className="text-teal-400 text-sm font-medium">500 pts</span>
          </div>
        </header>
        <section className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-3 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>
            <MyTable />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Ranking</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">New Feature</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
          </div>
        </section>
      </main>
  )
}