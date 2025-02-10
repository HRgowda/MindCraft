import { Pen, BookOpen, Users, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-200">
      {/* Hero Section */}
      <header className="text-gray-900">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b">
          <div className="flex items-center space-x-2">
            <Pen className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold">MindCraft</span>
          </div>
          <div className='space-x-4'>
          <button className="text-black px-6 py-2.5 rounded-lg font-medium hover:underline transition" onClick={() => {
            navigate("/signin")
          }}>
            Login
          </button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition" onClick={() => {
            navigate("/signup")
          }}>
            SignUp
          </button>
          </div>
          
        </nav>
        
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 leading-tight tracking-tight">
              Where <span className="text-blue-600">Words</span> Come to Life
            </h1>
            <p className="text-xl mb-12 text-gray-600 leading-relaxed">Create, share, and discover amazing stories. Join our community of passionate writers and readers who bring ideas to life.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center text-lg" onClick={() => {
              navigate("/signup")
            }}>
              Start Writing Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className=" w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Easy Publishing</h3>
              <p className="text-gray-600 leading-relaxed">Write and publish your stories with our intuitive editor designed for modern storytellers.</p>
            </div>
            <div className="text-center">
              <div className=" w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Growing Community</h3>
              <p className="text-gray-600 leading-relaxed">Connect with readers and writers from around the world who share your passion.</p>
            </div>
            <div className="text-center">
              <div className=" w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8">
                <Star className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Featured Content</h3>
              <p className="text-gray-600 leading-relaxed">Get your best work featured and reach thousands of engaged readers daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">Join thousands of writers who have already found their voice on our platform. Start writing your story today.</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center text-lg" onClick={() => {
            navigate("/signup")
          }}>
            Create Your Account
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className=" border-t">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Pen className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold">MindCraft</span>
              </div>
              <p className="text-gray-600">Share your thoughts, stories, and ideas with the world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                <li><div  className="text-gray-600 transition">About</div></li>
                <li><div className="text-gray-600 transition">Careers</div></li>
                <li><div className="text-gray-600 transition">Press</div></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Resources</h4>
              <ul className="space-y-4">
                <li><div className="text-gray-600 transition">Blog</div></li>
                <li><div className="text-gray-600 transition">Help Center</div></li>
                <li><div className="text-gray-600 transition">Guidelines</div></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-4">
                <li><div className="text-gray-600 transition">Privacy</div></li>
                <li><div className="text-gray-600 transition">Terms</div></li>
                <li><div className="text-gray-600 transition">Cookie Policy</div></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center text-gray-600">
            <p>&copy; 2025 MindCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;