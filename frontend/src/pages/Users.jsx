import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 min-h-[60vh]">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <ul className="space-y-2 inline-block text-left">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded-lg shadow-sm w-64">
            <p><strong>{user.name}</strong> ({user.email})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
