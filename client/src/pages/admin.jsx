import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://leaddesk-mini-production-3c69.up.railway.app/api";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchLeads();
  }, [search]);

  const fetchLeads = async () => {
    try {
      const response = await axios.get(
        `${API}/leads?search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeads(response.data.leads || []);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  const updateStatus = async (id) => {
    try {
      await axios.put(
        `${API}/leads/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchLeads();
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Budget</th>
            <th className="border p-3">Message</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td className="border p-3">{lead.name}</td>
              <td className="border p-3">{lead.email}</td>
              <td className="border p-3">{lead.budget}</td>
              <td className="border p-3">{lead.message}</td>

              <td className="border p-3">
                <button
                  onClick={() => updateStatus(lead._id)}
                  className={`px-3 py-1 rounded text-white ${
                    lead.status === "New"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                >
                  {lead.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;