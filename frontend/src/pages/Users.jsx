import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users") // এখন base URL দরকার নাই
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded-lg shadow-sm">
            <p><strong>{user.name}</strong> ({user.email})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
