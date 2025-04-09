import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, BookOpen, BarChart2, Clock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  // Mock data - in a real app, this would come from your state management
  const user = {
    name: 'Jane Student',
    email: 'jane@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    joinDate: 'January 2024',
  };

  const stats = {
    totalCourses: 3,
    completedCourses: 1,
    totalLessons: 15,
    completedLessons: 8,
    totalQuizzes: 3,
    completedQuizzes: 1,
    averageScore: 85,
  };

  const recentActivity = [
    { id: 1, type: 'quiz', title: 'Completed Demand Quiz', time: '2 hours ago', score: 90 },
    { id: 2, type: 'lesson', title: 'Finished PPC Basics', time: '1 day ago' },
    { id: 3, type: 'course', title: 'Started Consumer Theory', time: '3 days ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
          </div>
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="text-blue-500" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stats.completedCourses}/{stats.totalCourses}</h3>
              <p className="text-sm text-gray-600">Courses Completed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart2 className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stats.averageScore}%</h3>
              <p className="text-sm text-gray-600">Average Score</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="text-purple-500" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stats.completedLessons}/{stats.totalLessons}</h3>
              <p className="text-sm text-gray-600">Lessons Completed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <BookOpen className="text-yellow-500" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stats.completedQuizzes}/{stats.totalQuizzes}</h3>
              <p className="text-sm text-gray-600">Quizzes Completed</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Clock className="text-gray-500" size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              {activity.score && (
                <span className="text-sm font-medium text-green-600">{activity.score}%</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Settings and Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:bg-gray-50"
          onClick={() => navigate('/settings')}
        >
          <div className="p-3 bg-gray-100 rounded-lg">
            <Settings className="text-gray-500" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800">Settings</h3>
            <p className="text-sm text-gray-600">Manage your preferences</p>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          <div className="p-3 bg-gray-100 rounded-lg">
            <LogOut className="text-gray-500" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800">Sign Out</h3>
            <p className="text-sm text-gray-600">Log out of your account</p>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
  