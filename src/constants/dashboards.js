export const DASHBOARD_CATEGORIES = [
    { id: 'all', name: 'All Dashboards' },
    { id: 'saas', name: 'SaaS Admin' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'finance', name: 'Finance' },
];

export const DASHBOARDS = [
    {
        id: 'saas-admin',
        name: 'SaaS Overview',
        category: 'saas',
        description: 'Comprehensive admin dashboard with sidebar, stats, and recent activity.',
        tags: ['admin', 'saas', 'sidebar'],
        previewHTML: `
<div class="flex bg-black min-h-screen font-sans text-white">
  <!-- Sidebar -->
  <div class="w-64 bg-black h-screen border-r border-white/10 p-4 flex flex-col hidden md:flex">
    <div class="text-[#FA8520] font-bold text-2xl mb-8 pl-2">Admin</div>
    <div class="space-y-2 flex-grow">
      <div class="bg-[#FA8520]/10 text-[#FA8520] p-2 rounded flex gap-3 items-center cursor-pointer">
        <span>🏠</span> Dashboard
      </div>
      <div class="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors">
        <span>👥</span> Users
      </div>
      <div class="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors">
        <span>📊</span> Analytics
      </div>
    </div>
    <div class="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors mt-auto">
       <span>⚙️</span> Settings
    </div>
  </div>

  <!-- Main Content -->
  <div class="flex-1 p-8 overflow-y-auto h-screen">
     <header class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold">Overview</h1>
        <div class="flex gap-4">
            <button class="bg-[#322720] border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors text-white">Export</button>
            <button class="bg-[#FA8520] text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#d66e15] transition-colors">Add New</button>
        </div>
     </header>

     <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-[#322720] p-6 rounded-xl border border-white/5">
            <div class="text-gray-400 text-sm mb-2">Total Revenue</div>
            <div class="text-3xl font-bold text-white mb-2">$45,231</div>
            <div class="text-green-500 text-sm">↑ 20.1% from last month</div>
        </div>
        <div class="bg-[#322720] p-6 rounded-xl border border-white/5">
            <div class="text-gray-400 text-sm mb-2">Active Users</div>
            <div class="text-3xl font-bold text-white mb-2">+2,350</div>
            <div class="text-green-500 text-sm">↑ 180 last 24h</div>
        </div>
        <div class="bg-[#322720] p-6 rounded-xl border border-white/5">
            <div class="text-gray-400 text-sm mb-2">Sales</div>
            <div class="text-3xl font-bold text-white mb-2">+12,234</div>
            <div class="text-green-500 text-sm">↑ 19% from last month</div>
        </div>
     </div>

     <div class="bg-[#322720] rounded-xl border border-white/5 p-6 h-64 flex items-center justify-center text-gray-500">
        [Chart Area Placeholder]
     </div>
  </div>
</div>
`,
        previewCode: {
            react: `
import React from 'react';
import { Home, Users, Settings, BarChart2 } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-black h-screen border-r border-white/10 p-4 flex flex-col hidden md:flex">
    <div className="text-brand-primary font-bold text-2xl mb-8 pl-2">Admin</div>
    <div className="space-y-2 flex-grow">
      <div className="bg-brand-primary/10 text-brand-primary p-2 rounded flex gap-3 items-center cursor-pointer">
        <Home size={20} /> Dashboard
      </div>
      <div className="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors">
        <Users size={20} /> Users
      </div>
      <div className="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors">
        <BarChart2 size={20} /> Analytics
      </div>
    </div>
    <div className="text-gray-400 hover:text-white p-2 rounded flex gap-3 items-center cursor-pointer transition-colors mt-auto">
       <Settings size={20} /> Settings
    </div>
  </div>
);

const StatCard = ({ title, value, change }) => (
  <div className="bg-brand-secondary p-6 rounded-xl border border-white/5">
    <div className="text-gray-400 text-sm mb-2">{title}</div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-green-500 text-sm">{change}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex bg-black min-h-screen font-sans text-white">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto h-screen">
         <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Overview</h1>
            <div className="flex gap-4">
                <button className="bg-brand-secondary border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors">Export</button>
                <button className="bg-brand-primary text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors">Add New</button>
            </div>
         </header>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Revenue" value="$45,231" change="+20.1% from last month" />
            <StatCard title="Active Users" value="+2,350" change="+180 last 24h" />
            <StatCard title="Sales" value="+12,234" change="+19% from last month" />
         </div>

         <div className="bg-brand-secondary rounded-xl border border-white/5 p-6 h-64 flex items-center justify-center text-gray-500">
            [Chart Area Placeholder]
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
`
        }
    },
    {
        id: 'analytics-dashboard',
        name: 'Dark Analytics',
        category: 'analytics',
        description: 'Data-heavy dashboard layout with dark theme specifics.',
        tags: ['analytics', 'dark', 'charts'],
        previewHTML: `
<div class="min-h-screen bg-black text-white p-8">
  <div class="grid grid-cols-12 gap-6">
      <!-- Main Chart Area -->
      <div class="col-span-12 lg:col-span-8 bg-[#111] border border-white/10 rounded-2xl p-6 h-96">
         <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold">Traffic Source</h3>
            <select class="bg-black border border-white/20 rounded px-2 py-1 text-xs text-gray-400">
                <option>Last 30 Days</option>
            </select>
         </div>
         <div class="flex items-center justify-center h-64 border-2 border-dashed border-white/5 rounded-xl text-gray-600">
            Chart Visualization
         </div>
      </div>

      <!-- Right Side Stats -->
      <div class="col-span-12 lg:col-span-4 space-y-6">
          <div class="bg-[#322720] rounded-2xl p-6 border border-white/5">
             <div class="flex items-center gap-4 mb-4">
                <div class="bg-[#FA8520]/20 p-3 rounded-lg text-[#FA8520]"><span>📉</span></div>
                <div>
                    <div class="text-gray-400 text-xs">Bounce Rate</div>
                    <div class="text-xl font-bold">42.3%</div>
                </div>
             </div>
          </div>
          <div class="bg-[#322720] rounded-2xl p-6 border border-white/5">
             <div class="flex items-center gap-4 mb-4">
                <div class="bg-blue-500/20 p-3 rounded-lg text-blue-500"><span>💰</span></div>
                <div>
                    <div class="text-gray-400 text-xs">MRR</div>
                    <div class="text-xl font-bold">$12,400</div>
                </div>
             </div>
          </div>
          <div class="bg-[#322720] rounded-2xl p-6 border border-white/5">
             <div class="flex items-center gap-4 mb-4">
                <div class="bg-green-500/20 p-3 rounded-lg text-green-500"><span>💳</span></div>
                <div>
                    <div class="text-gray-400 text-xs">New Subscriptions</div>
                    <div class="text-xl font-bold">+124</div>
                </div>
             </div>
          </div>
      </div>
  </div>
</div>
`,
        previewCode: {
            react: `
import React from 'react';
import { Activity, CreditCard, DollarSign } from 'lucide-react';

const Dashboard = () => (
  <div className="min-h-screen bg-black text-white p-8">
      <div className="grid grid-cols-12 gap-6">
          {/* Main Chart Area */}
          <div className="col-span-12 lg:col-span-8 bg-[#111] border border-white/10 rounded-2xl p-6 h-96">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Traffic Source</h3>
                <select className="bg-black border border-white/20 rounded px-2 py-1 text-xs text-gray-400">
                    <option>Last 30 Days</option>
                </select>
             </div>
             <div className="flex items-center justify-center h-64 border-2 border-dashed border-white/5 rounded-xl text-gray-600">
                Chart Visualization
             </div>
          </div>

          {/* Right Side Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-brand-secondary rounded-2xl p-6 border border-white/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-primary"><Activity /></div>
                    <div>
                        <div className="text-gray-400 text-xs">Bounce Rate</div>
                        <div className="text-xl font-bold">42.3%</div>
                    </div>
                 </div>
              </div>
              <div className="bg-brand-secondary rounded-2xl p-6 border border-white/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500"><DollarSign /></div>
                    <div>
                        <div className="text-gray-400 text-xs">MRR</div>
                        <div className="text-xl font-bold">$12,400</div>
                    </div>
                 </div>
              </div>
              <div className="bg-brand-secondary rounded-2xl p-6 border border-white/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500/20 p-3 rounded-lg text-green-500"><CreditCard /></div>
                    <div>
                        <div className="text-gray-400 text-xs">New Subscriptions</div>
                        <div className="text-xl font-bold">+124</div>
                    </div>
                 </div>
              </div>
          </div>
      </div>
  </div>
);

export default Dashboard;
`
        }
    }
];
