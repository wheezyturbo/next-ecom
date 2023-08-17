'use client'
import React, { useState } from 'react';
import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [displayName, setDisplayName] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const router = useRouter()
  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      createUserWithEmailAndPassword(auth, email, password).then(userCredential=>{
        router.push('/')
      })

      // Clear form fields
      setEmail('');
      setPassword('');
      // setDisplayName('');
      setRegistrationError('');

      // You can add your own logic for redirection here
      // For example, you can navigate to a different component
      // or show a success message to the user.
    } catch (error) {
      // Handle registration error
      setRegistrationError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-background to-primary">
      <form className="w-1/4 bg-accent bg-opacity-20 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-text">Register</h2>
        {registrationError && (
          <p className="text-red-500 mb-4">{registrationError}</p>
        )}
        {/* <div className="mb-4">
          <label htmlFor="displayName" className="block text-sm font-medium text-text">
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 border rounded-md bg-transparent text-text focus:outline-none focus:border-blue-400"
          />
        </div> */}
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
            onClick={handleRegister}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
          >
            Register
          </button>
          <Link href='/login' className='text-emerald-400 ml-auto'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
