import React, { useEffect, useState } from "react";
import { fetchLeads } from "../api"; 
export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeads()
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-600 dark:text-gray-400 mt-10 text-lg font-medium">
        Loading leads...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-600 dark:text-red-400 mt-10 text-lg font-medium">
        Error: {error}
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Submitted Leads
      </h1>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="text-left py-3 px-6 uppercase tracking-wider font-semibold text-sm">
                Serial No.
              </th>
              {["Name", "Email", "Phone", "Business Type", "Message"].map(
                (header) => (
                  <th
                    key={header}
                    className="text-left py-3 px-6 uppercase tracking-wider font-semibold text-sm"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-6 text-gray-500 dark:text-gray-400 italic"
                >
                  No leads found
                </td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr
                  key={lead.id || lead._id}
                  className="even:bg-gray-50 dark:even:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
                >
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {lead.name}
                  </td>
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {lead.email}
                  </td>
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {lead.phone}
                  </td>
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {lead.businessType}
                  </td>
                  <td className="border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-gray-700 dark:text-gray-300 max-w-xs break-words">
                    {lead.message}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
