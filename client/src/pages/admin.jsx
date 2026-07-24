import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

const fetchLeads = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/leads");

    console.log("API Response:", res.data);

    setLeads(res.data.leads);
  } catch (error) {
    console.log("Error:", error);
  }
};

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

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
              <td className="border p-3">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;