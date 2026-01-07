import React from 'react';

const posts = [
  { id: 1, category: 'Engineering', title: 'Migrating to React 19', date: 'May 12, 2026', readTime: '5 min read', color: 'bg-blue-200' },
  { id: 2, category: 'Design', title: 'The Future of UI Patterns', date: 'May 10, 2026', readTime: '3 min read', color: 'bg-purple-200' },
  { id: 3, category: 'Product', title: 'How we scaled to 1M users', date: 'May 08, 2026', readTime: '8 min read', color: 'bg-green-200' },
  { id: 4, category: 'Culture', title: 'Remote Work in 2026', date: 'May 05, 2026', readTime: '4 min read', color: 'bg-yellow-200' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Engineering Blog</h1>
          <p className="text-gray-500 mt-2">Thoughts, stories and ideas from the team.</p>
        </div>

        {/* Blog List Container */}
        <div className="space-y-6">
          {posts.map((post) => (
            // POST ITEM: Flex Row (Image Left, Text Right)
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row h-auto sm:h-48">
              
              {/* Thumbnail (Left) */}
              <div className={`w-full sm:w-48 ${post.color} flex items-center justify-center flex-shrink-0 h-48 sm:h-full`}>
                <span className="text-gray-600 font-medium opacity-50">Thumb</span>
              </div>

              {/* Content (Right) */}
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                  {post.category}
                </div>
                <h2 className="mt-2 text-xl font-bold text-gray-900 leading-tight hover:text-indigo-600 cursor-pointer">
                  {post.title}
                </h2>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;