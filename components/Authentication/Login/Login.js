import { useRouter } from 'next/navigation';
import React, { useState, useEffect,useContext } from 'react';
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';


const LoginPage = () => {
  const user = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.setUser(userCredential.user)
      router.push('/');
    } catch (error) {
      console.error('Login error:', error.message);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-gradient-to-b from-background to-primary">
      <form className="w-1/4 bg-accent bg-opacity-20 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-text">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md bg-transparent text-text focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md bg-transparent text-text focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
          >
            Login
          </button>
          <Link href='/register' className='text-emerald-400 ml-auto'>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
