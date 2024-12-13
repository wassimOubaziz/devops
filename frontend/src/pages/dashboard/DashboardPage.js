import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { ClipboardDocumentListIcon, FolderIcon } from '@heroicons/react/24/outline';

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to your Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projects Card */}
          <Link
            to="/dashboard/projects"
            className="block p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center text-white">
              <FolderIcon className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Projects</h3>
                <p className="text-primary-100">Manage your projects</p>
              </div>
            </div>
          </Link>

          {/* Tasks Card */}
          <Link
            to="/dashboard/tasks"
            className="block p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center text-white">
              <ClipboardDocumentListIcon className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Tasks</h3>
                <p className="text-primary-100">View and manage tasks</p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
