import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BarChart2, Clock, Search, Bell } from 'lucide-react';

export default function Dashboard() {
  // Mock data - in a real app, this would come from your state management
  const courses = [
    { id: 'law', name: 'Law of Demand', progress: 65, color: 'bg-blue-500' },
    { id: 'ppc', name: 'PPC Analysis', progress: 30, color: 'bg-green-500' },
    { id: 'consumer', name: 'Consumer Theory', progress: 15, color: 'bg-purple-500' },
  ];

  const recentActivities = [
    { id: 1, type: 'quiz', title: 'Completed Demand Quiz', time: '2 hours ago' },
    { id: 2, type: 'lesson', title: 'Finished PPC Basics', time: '1 day ago' },
    { id: 3, type: 'note', title: 'Added notes on Elasticity', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Continue your microeconomics journey</p>
      </div>

      {/* Quick Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search courses, lessons, or concepts..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Course Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
              <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${course.color} h-2.5 rounded-full`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{course.progress}% complete</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
        >
          <div className="p-3 bg-blue-100 rounded-lg">
            <BookOpen className="text-blue-500" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Continue Learning</h3>
            <p className="text-sm text-gray-600">Pick up where you left off</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
        >
          <div className="p-3 bg-green-100 rounded-lg">
            <BarChart2 className="text-green-500" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">View Progress</h3>
            <p className="text-sm text-gray-600">Track your learning journey</p>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <Bell className="text-gray-400" size={20} />
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Clock className="text-gray-500" size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  