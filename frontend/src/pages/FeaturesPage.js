import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Project Management',
    description: 'Create and manage projects with ease. Track progress, set milestones, and organize tasks efficiently.',
    icon: ChartBarIcon,
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates, comments, and file sharing capabilities.',
    icon: UserGroupIcon,
  },
  {
    name: 'Task Automation',
    description: 'Automate repetitive tasks and workflows to increase productivity and reduce manual work.',
    icon: CogIcon,
  },
  {
    name: 'Cloud Storage',
    description: 'Securely store and manage your project files in the cloud with automatic backups.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security with encryption, role-based access control, and audit logs.',
    icon: LockClosedIcon,
  },
  {
    name: 'API Integration',
    description: 'Connect with your favorite tools through our robust API and webhooks system.',
    icon: ServerIcon,
  },
];

const FeaturesPage = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Powerful features for modern development
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our platform provides all the tools you need to manage your development workflow efficiently.
              From project planning to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
