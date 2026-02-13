import React, { useState } from 'react';

const posts = [
  { id: 1, category: 'Engineering', title: 'Migrating to React 19: A Complete Guide', date: 'May 12, 2026', readTime: '5 min read', image: 'https://picsum.photos/600/400?random=1', author: 'Sarah Chen', excerpt: 'Discover the latest features and best practices for upgrading your React applications to version 19.' },
  { id: 2, category: 'Design', title: 'The Future of UI Patterns in 2026', date: 'May 10, 2026', readTime: '3 min read', image: 'https://picsum.photos/600/400?random=2', author: 'Alex Rodriguez', excerpt: 'Exploring emerging design trends and how they shape modern user experiences.' },
  { id: 3, category: 'Product', title: 'How we scaled to 1M users without breaking', date: 'May 08, 2026', readTime: '8 min read', image: 'https://picsum.photos/600/400?random=3', author: 'Jamie Wu', excerpt: 'A behind-the-scenes look at our infrastructure and scaling strategies.' },
  { id: 4, category: 'Culture', title: 'Remote Work in 2026: The New Normal', date: 'May 05, 2026', readTime: '4 min read', image: 'https://picsum.photos/600/400?random=4', author: 'Morgan Taylor', excerpt: 'How our team navigates remote collaboration and maintains company culture.' },
  { id: 5, category: 'Engineering', title: 'Building Performant Web Applications', date: 'May 02, 2026', readTime: '7 min read', image: 'https://picsum.photos/600/400?random=5', author: 'Chris Park', excerpt: 'Performance optimization techniques that can improve your application speed by 40%.' },
  { id: 6, category: 'Product', title: 'User Research: What We Learned', date: 'April 28, 2026', readTime: '6 min read', image: 'https://picsum.photos/600/400?random=6', author: 'Emma Watson', excerpt: 'Key insights from our latest user research campaign and how it shaped our roadmap.' },
  { id: 7, category: 'Design', title: 'Accessibility-First Design Approach', date: 'April 25, 2026', readTime: '5 min read', image: 'https://picsum.photos/600/400?random=7', author: 'David Kim', excerpt: 'Making beautiful interfaces that everyone can use and enjoy.' },
  { id: 8, category: 'Engineering', title: 'Testing Strategies for Modern Applications', date: 'April 22, 2026', readTime: '9 min read', image: 'https://picsum.photos/600/400?random=8', author: 'Lisa Johnson', excerpt: 'Unit tests, integration tests, and end-to-end testing best practices.' },
];

const categories = ['All', 'Engineering', 'Design', 'Product', 'Culture'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-50 to-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">BlogHub</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Subscribe</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl text-indigo-100 mb-8">Insights, stories, and tutorials from industry experts</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">Read Latest</button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition">Browse Topics</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:outline-none transition"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPosts.slice(0, 4).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
            >
              <div className="w-full h-40 relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:from-black/5 group-hover:to-black/20 transition"></div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-indigo-600 uppercase mb-3">
                  {post.category}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <img src={`https://picsum.photos/24/24?random=${post.id}av`} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">Read →</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured/Large Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 border-l-4 border-indigo-600">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="h-64 md:h-auto overflow-hidden">
              <img src="https://picsum.photos/600/400?random=featured" alt="Featured" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2 p-8">
              <span className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold text-indigo-700 mb-4">FEATURED</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">The Ultimate Guide to Modern Web Development</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive insights into the latest technologies, frameworks, and best practices that are shaping the future of web development. From frontend optimization to backend architecture, we cover it all.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://picsum.photos/40/40?random=author" alt="Author" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">Jordan Martinez</p>
                  <p className="text-sm text-gray-500">May 15, 2026 • 12 min read</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
                Read Full Article →
              </button>
            </div>
          </div>
        </div>

        {/* Blog List (Traditional) */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border-l-4 border-transparent hover:border-indigo-600 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-indigo-600 uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-indigo-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                    <img src={`https://picsum.photos/20/20?random=${post.id}av`} alt={post.author} className="w-5 h-5 rounded-full object-cover" />
                      <span>{post.author}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">Read More →</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found. Try a different search or category.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">← Previous</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Next →</button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-2">Stay Updated</h3>
          <p className="text-indigo-100 mb-6">Get the latest articles delivered to your inbox weekly</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Team</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">API Reference</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Discord</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2026 BlogHub. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="w-10 h-10 bg-gray-200 rounded-full hover:bg-indigo-600 hover:text-white transition flex items-center justify-center">f</button>
              <button className="w-10 h-10 bg-gray-200 rounded-full hover:bg-indigo-600 hover:text-white transition flex items-center justify-center">𝕏</button>
              <button className="w-10 h-10 bg-gray-200 rounded-full hover:bg-indigo-600 hover:text-white transition flex items-center justify-center">in</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;