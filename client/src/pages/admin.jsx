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
      const response = await axios.get(`${API}/leads?search=${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-500";
      case "Contacted":
        return "bg-yellow-500";
      case "Closed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Dashboard
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Message</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {leads.length > 0 ? (
                leads.map((lead) => (
                  <tr
                    key={lead._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{lead.name}</td>
                    <td className="p-3">{lead.email}</td>
                    <td className="p-3">{lead.budget}</td>
                    <td className="p-3">{lead.message}</td>

                    <td className="p-3">
                      <button
                        onClick={() => updateStatus(lead._id)}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition ${getStatusColor(
                          lead.status
                        )}`}
                      >
                        {lead.status}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-6 text-gray-500"
                  >
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Click on the status button to change:
          <br />
          <strong>New → Contacted → Closed → New</strong>
        </p>
      </div>
    </div>
  );
}

export default Admin;