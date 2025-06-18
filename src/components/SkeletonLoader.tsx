import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type: 'card' | 'list' | 'profile' | 'table';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type, count = 3 }) => {
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  const SkeletonCard = () => (
    <motion.div 
      className="bg-white p-6 rounded-xl border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-4"
        style={{ backgroundSize: '200% 100%' }}
        {...shimmer}
      />
      <motion.div
        className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2 w-3/4"
        style={{ backgroundSize: '200% 100%' }}
        {...shimmer}
      />
      <motion.div
        className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2"
        style={{ backgroundSize: '200% 100%' }}
        {...shimmer}
      />
    </motion.div>
  );

  const SkeletonList = () => (
    <motion.div 
      className="bg-white p-4 rounded-xl border border-gray-200 flex items-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"
        style={{ backgroundSize: '200% 100%' }}
        {...shimmer}
      />
      <div className="flex-1">
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2"
          style={{ backgroundSize: '200% 100%' }}
          {...shimmer}
        />
        <motion.div
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3"
          style={{ backgroundSize: '200% 100%' }}
          {...shimmer}
        />
      </div>
    </motion.div>
  );

  const SkeletonProfile = () => (
    <motion.div 
      className="bg-white p-8 rounded-xl border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-6 mb-6">
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl"
          style={{ backgroundSize: '200% 100%' }}
          {...shimmer}
        />
        <div className="flex-1">
          <motion.div
            className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-3"
            style={{ backgroundSize: '200% 100%' }}
            {...shimmer}
          />
          <motion.div
            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3"
            style={{ backgroundSize: '200% 100%' }}
            {...shimmer}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="text-center">
            <motion.div
              className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2"
              style={{ backgroundSize: '200% 100%' }}
              {...shimmer}
            />
            <motion.div
              className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
              style={{ backgroundSize: '200% 100%' }}
              {...shimmer}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SkeletonTable = () => (
    <motion.div 
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-200">
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/4"
          style={{ backgroundSize: '200% 100%' }}
          {...shimmer}
        />
      </div>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="p-4 border-b border-gray-100 last:border-b-0">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={j}
                className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
                style={{ backgroundSize: '200% 100%' }}
                {...shimmer}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return [...Array(count)].map((_, i) => <SkeletonCard key={i} />);
      case 'list':
        return [...Array(count)].map((_, i) => <SkeletonList key={i} />);
      case 'profile':
        return <SkeletonProfile />;
      case 'table':
        return <SkeletonTable />;
      default:
        return <SkeletonCard />;
    }
  };

  return (
    <div className={`space-y-4 ${type === 'card' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : ''}`}>
      {renderSkeleton()}
    </div>
  );
};

export default SkeletonLoader;