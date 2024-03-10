import { Users, columns } from '@/app/columns'
import { DataTable } from '@/components/table-tasks/data-table'

async function getUsers(): Promise<Users[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}


export async function MyTable() {
  const data = await getUsers()

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>

  )
}

const te = 
{
  "createdAt":"2023-11-24T07:02:02.345Z",
  "name":"Hector Halvorson MD",
  "image":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg","lastSeen":"2023-11-23T18:31:37.925Z","email":"Marcella54@gmail.com","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/773.jpg",
  "id":"1"
}