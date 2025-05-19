import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import { useAuth } from '../contexts/AuthContext'; // Tambahkan import ini

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // Dapatkan login function dari context
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  try {
    setLoading(true);
    console.log('Attempting login with:', { email: formData.email });
    
    const response = await authService.login(formData);
    console.log('Login successful:', response);
    
    // Store token in localStorage
    localStorage.setItem('token', response.data.token);
    
    // Store user info if available and update auth context
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      authLogin(response.data.user); // Use the login function from context
    }
    
    // Redirect to dashboard instead of home page
    navigate('/dashboard'); // Mengubah navigasi ke halaman dashboard
        
  } catch (err) {
    // Error handling code tetap sama
    console.error('Login error:', err);
    
    if (err.response) {
      console.error('Error response:', err.response.data);
      setError(err.response.data.message || 'Invalid email or password');
    } else if (err.request) {
      console.error('Error request:', err.request);
      setError('No response from server. Please try again later.');
    } else {
      console.error('Error message:', err.message);
      setError('An error occurred during login.');
    }
  } finally {
    setLoading(false);
  }
};
  
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-color_blue1 hover:text-color_hover1">
              create a new account
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="text-red-700">{error}</div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-color_blue1 focus:border-color_blue1 focus:z-10 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-color_blue1 focus:border-color_blue1 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-color_blue1 focus:ring-color_blue1 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-color_blue1 hover:text-color_hover1">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-color_blue1 hover:bg-color_hover1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color_blue1"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;