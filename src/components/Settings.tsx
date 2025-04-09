import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Moon, 
  Sun, 
  Bell, 
  Lock, 
  Mail, 
  User as UserIcon,
  Languages,
  ArrowLeft
} from 'lucide-react';
import { useLang } from '../i18n';
import { useTheme } from '../contexts/ThemeContext';

interface SettingSectionProps {
  title: string;
  children: React.ReactNode;
}

function SettingSection({ title, children }: SettingSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

interface SettingItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SettingItem({ title, description, icon, children }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-500 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  );
}

export default function Settings() {
  const { lang, switchLanguage } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="text-gray-500 dark:text-gray-400" size={20} />
        </motion.button>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Settings</h1>
      </div>

      {/* Appearance */}
      <SettingSection title="Appearance">
        <SettingItem
          title="Dark Mode"
          description="Toggle between light and dark theme"
          icon={theme === 'dark' ? <Moon className="text-gray-500 dark:text-gray-400" size={20} /> : <Sun className="text-gray-500 dark:text-gray-400" size={20} />}
        >
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </SettingItem>
      </SettingSection>

      {/* Language */}
      <SettingSection title="Language">
        <SettingItem
          title="Interface Language"
          description="Choose your preferred language"
          icon={<Languages className="text-gray-500" size={20} />}
        >
          <select
            value={lang}
            onChange={(e) => switchLanguage(e.target.value as 'en' | 'pl')}
            className="rounded-lg border-gray-300 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="pl">Polski</option>
          </select>
        </SettingItem>
      </SettingSection>

      {/* Notifications */}
      <SettingSection title="Notifications">
        <SettingItem
          title="Push Notifications"
          description="Receive notifications about your progress"
          icon={<Bell className="text-gray-500" size={20} />}
        >
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              notifications ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </SettingItem>

        <SettingItem
          title="Email Updates"
          description="Receive email notifications about your progress"
          icon={<Mail className="text-gray-500" size={20} />}
        >
          <button
            onClick={() => setEmailUpdates(!emailUpdates)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              emailUpdates ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                emailUpdates ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </SettingItem>
      </SettingSection>

      {/* Account */}
      <SettingSection title="Account">
        <SettingItem
          title="Change Password"
          description="Update your account password"
          icon={<Lock className="text-gray-500" size={20} />}
        >
          <button className="text-sm text-indigo-600 hover:text-indigo-500">
            Change
          </button>
        </SettingItem>

        <SettingItem
          title="Profile Information"
          description="Update your personal information"
          icon={<UserIcon className="text-gray-500" size={20} />}
        >
          <button className="text-sm text-indigo-600 hover:text-indigo-500">
            Edit
          </button>
        </SettingItem>
      </SettingSection>

      {/* Data */}
      <SettingSection title="Data">
        <SettingItem
          title="Export Data"
          description="Download your learning progress and achievements"
          icon={<Globe className="text-gray-500" size={20} />}
        >
          <button className="text-sm text-indigo-600 hover:text-indigo-500">
            Export
          </button>
        </SettingItem>

        <SettingItem
          title="Delete Account"
          description="Permanently delete your account and all data"
          icon={<Lock className="text-gray-500" size={20} />}
        >
          <button className="text-sm text-red-600 hover:text-red-500">
            Delete
          </button>
        </SettingItem>
      </SettingSection>
    </div>
  );
} 