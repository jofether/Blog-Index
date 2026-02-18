import React, { useState } from 'react';

const posts = [
  { id: 1, category: 'Engineering', title: 'Migrating to React 19: A Complete Guide', date: 'May 12, 2026', readTime: '5 min read', image: 'https://picsum.photos/600/400?random=1', author: 'Sarah Chen' },
  { id: 2, category: 'Design', title: 'Building Accessible Color Systems', date: 'May 10, 2026', readTime: '4 min read', image: 'https://picsum.photos/600/400?random=2', author: 'Mark Davis' },
  { id: 3, category: 'Productivity', title: 'The Art of Deep Work in 2026', date: 'May 08, 2026', readTime: '8 min read', image: 'https://picsum.photos/600/400?random=3', author: 'Alex Rivera' },
  { id: 4, category: 'Engineering', title: 'Rust vs Go: The Final Verdict', date: 'May 05, 2026', readTime: '12 min read', image: 'https://picsum.photos/600/400?random=4', author: 'Sarah Chen' },
  { id: 5, category: 'Tutorial', title: 'Mastering CSS Grid Level 3', date: 'May 01, 2026', readTime: '15 min read', image: 'https://picsum.photos/600/400?random=5', author: 'Mark Davis' },
  { id: 6, category: 'Design', title: 'Typography Trends for the Next Decade', date: 'Apr 28, 2026', readTime: '6 min read', image: 'https://picsum.photos/600/400?random=6', author: 'Alex Rivera' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center space-x-2">
             <span className="text-2xl">📝</span>
             <h1 className="text-xl font-bold tracking-tight">DevBlog</h1>
          </div>
          
          <div className="relative ml-[-50px]">
             <input 
               type="text" 
               placeholder="Search articles..." 
               className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-gray-50"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <span className="absolute left-3 top-2.5 text-gray-400 text-xs">🔍</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Category Filter */}
        <div className="flex flex-col space-x-2 mb-8 pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 z-[-1]">
                  {post.category}
                </span>
              </div>
              
              {/* Card Content */}
              <div className="p-0 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2 mt-4 mx-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bolld mb-3 mx-4 hover:text-blue-600 cursor-pointer transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <div className="mt-auto flex items-center justify-between pt-4 pb-4 px-4 border-t border-gray-50 relative">
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 absolute"></div>
                     <span className="text-sm font-medium text-gray-700 pl-8">{post.author}</span>
                   </div>

                   <button className="text-white text-sm font-medium hover:underline">Read →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No posts found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </main>
      
      <footer className="border-t bg-white mt-12 py-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 DevBlog. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;