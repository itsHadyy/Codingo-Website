import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import * as XLSX from 'xlsx';

const coursesList = [
  'Scratch Programming',
  'Python Foundations',
  'Web Development',
  'Game Development',
];

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [search, setSearch] = useState('');
  const [filterContacted, setFilterContacted] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');

  const fetchLeads = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, 'leads'));
    setLeads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const markContacted = async (id) => {
    await updateDoc(doc(db, 'leads', id), { contacted: true });
    fetchLeads();
  };

  const handleExport = () => {
    setExporting(true);
    const data = filteredLeads.map(lead => ({
      Parent: lead.parentName,
      Email: lead.emailAddress,
      Phone: lead.phoneNumber,
      Children: (lead.children || []).map(c => `${c.childName || ''} (${c.childAge || ''})`).join('; '),
      Courses: (lead.courses || []).join(', '),
      Contacted: lead.contacted ? 'Yes' : 'No',
      Date: lead.createdAt && lead.createdAt.seconds ? new Date(lead.createdAt.seconds * 1000).toLocaleString() : '',
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');
    XLSX.writeFile(wb, 'leads.xlsx');
    setExporting(false);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    window.location.href = '/login';
  };

  // Filtering and searching
  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.parentName?.toLowerCase().includes(search.toLowerCase()) ||
      lead.emailAddress?.toLowerCase().includes(search.toLowerCase());
    const matchesContacted =
      filterContacted === 'all' ||
      (filterContacted === 'yes' && lead.contacted) ||
      (filterContacted === 'no' && !lead.contacted);
    const matchesCourse =
      filterCourse === 'all' ||
      (lead.courses || []).includes(filterCourse);
    return matchesSearch && matchesContacted && matchesCourse;
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-100 to-lime-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col py-8 px-6 min-h-screen sticky top-0 shadow-xl">
        <div className="flex items-center mb-10">
          <img src="/codingo.png" alt="Codingo Logo" className="h-10 w-10 mr-3 rounded-xl bg-white" />
          <span className="text-2xl font-bold tracking-tight">Codingo Admin</span>
        </div>
        <nav className="flex-1">
          <a href="/dashboard" className="block py-3 px-4 rounded-lg bg-indigo-600 font-semibold mb-2">Dashboard</a>
        </nav>
        <button onClick={handleLogout} className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Logout</button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">Leads Dashboard</h1>
          <div className="flex gap-2 flex-wrap">
            <button onClick={fetchLeads} className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700">Refresh</button>
            <button onClick={handleExport} className="bg-lime-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-lime-600" disabled={exporting}>{exporting ? 'Exporting...' : 'Export to Excel'}</button>
          </div>
        </div>
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by parent or email..."
            className="border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-1/3"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-1/4"
            value={filterContacted}
            onChange={e => setFilterContacted(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="yes">Contacted</option>
            <option value="no">Not Contacted</option>
          </select>
          <select
            className="border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-1/4"
            value={filterCourse}
            onChange={e => setFilterCourse(e.target.value)}
          >
            <option value="all">All Courses</option>
            {coursesList.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full">
            <thead className="sticky top-0 z-10 bg-indigo-200">
              <tr>
                <th className="py-3 px-4 text-left">Parent</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Children</th>
                <th className="py-3 px-4 text-left">Courses</th>
                <th className="py-3 px-4 text-left">Contacted</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={8} className="text-center py-8">Loading leads...</td></tr>
              ) : filteredLeads.length === 0 ? (
                <tr><td colSpan={8} className="text-center py-8 text-gray-500">No leads found.</td></tr>
              ) : filteredLeads.map(lead => (
                <tr key={lead.id} className="border-b hover:bg-indigo-50 transition">
                  <td className="py-2 px-4 font-semibold text-indigo-800">{lead.parentName}</td>
                  <td className="py-2 px-4">{lead.emailAddress}</td>
                  <td className="py-2 px-4">{lead.phoneNumber}</td>
                  <td className="py-2 px-4 text-sm">{(lead.children || []).map(c => `${c.childName || ''} (${c.childAge || ''})`).join('; ')}</td>
                  <td className="py-2 px-4">
                    {(lead.courses || []).map(course => (
                      <span key={course} className="inline-block bg-lime-200 text-lime-800 rounded-full px-3 py-1 text-xs font-semibold mr-1 mb-1">{course}</span>
                    ))}
                  </td>
                  <td className="py-2 px-4">
                    {lead.contacted ? (
                      <span className="inline-block bg-lime-500 text-white rounded-full px-3 py-1 text-xs font-bold">Contacted</span>
                    ) : (
                      <span className="inline-block bg-red-400 text-white rounded-full px-3 py-1 text-xs font-bold">Not Contacted</span>
                    )}
                  </td>
                  <td className="py-2 px-4 text-xs">{lead.createdAt && lead.createdAt.seconds ? new Date(lead.createdAt.seconds * 1000).toLocaleString() : ''}</td>
                  <td className="py-2 px-4">
                    {!lead.contacted && (
                      <button onClick={() => markContacted(lead.id)} className="bg-lime-500 text-white px-3 py-1 rounded-full font-semibold hover:bg-lime-600 transition">Mark Contacted</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
} 