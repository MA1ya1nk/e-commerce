'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/components/AuthContext';

export default function SignUpPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '' 
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Fixed: Added ChangeEvent type for HTMLInputElements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Fixed: Added FormEvent type
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // ✅ login now receives the typed object
      login({
        name: `${form.firstName} ${form.lastName}`.trim() || 'John DOE',
        email: form.email,
        avatar: '/purchase(2).png',
      });
      router.push('/dashboard'); 
    }, 600);
  };

  // ✅ Fixed: Type-safe image error handling
  const handleImageError = (e) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.style.backgroundColor = '#EEF2FF';
    }
  };

  const inputClass =
    'w-[330px] h-[37px] border border-gray-300 rounded-[8px] px-3 text-[14px] text-gray-800 outline-none focus:border-[#284297] transition-colors bg-white';

  return (
    <div className="flex w-full min-h-screen overflow-hidden bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── Left: Form ── */}
      <div className="w-[442px] min-h-screen flex flex-col items-center pt-[40px] relative border-r border-gray-100 shrink-0">
        
        <div className="absolute top-[20px] left-[25px] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D9D9D9] rounded-full" />
          <span className="text-[18px] font-semibold text-[#111827]">ShopRise</span>
        </div>

        <form onSubmit={handleRegister} className="mt-[120px] w-[330px] flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h1 className="text-[24px] font-semibold text-[#111827]">Create an account</h1>
            <p className="text-[14px] text-gray-500">
              Already have an account?{' '}
              <Link href="/signup" className="text-[#FF8A65] underline">Sign in here</Link>
            </p>
          </div>

          <button
            type="button"
            className="w-[330px] h-[37px] border border-gray-300 rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <img 
              src="/google_icon.png" 
              alt="Google" 
              width="18" 
              height="18"
              onError={(e) => (e.currentTarget.style.display = 'none')} 
            />
            Sign up with Google
          </button>

          <div className="w-full flex items-center gap-4 text-gray-400 text-[14px]">
            <div className="flex-grow h-px bg-gray-200" />or
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium text-[#374151]">First name</label>
              <input name="firstName" value={form.firstName} onChange={handleChange}
                type="text" placeholder="John" className={inputClass} required />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium text-[#374151]">Last name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange}
                type="text" placeholder="DOE" className={inputClass} required />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium text-[#374151]">Email</label>
              <input name="email" value={form.email} onChange={handleChange}
                type="email" placeholder="johndoe@gmail.com" className={inputClass} required />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium text-[#374151]">Password</label>
              <div className="relative">
                <input name="password" value={form.password} onChange={handleChange}
                  type={showPass ? 'text' : 'password'} placeholder="*********"
                  className={`${inputClass} pr-10`} required />
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-[330px] h-[40px] rounded-[8px] text-white text-[16px] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
            style={{ backgroundColor: '#284297' }}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>

      {/* ── Right: Image ── */}
      <div className="flex-1 min-h-screen">
        <img
          src="/Rectangle 21 (1).png"
          alt="ShopRise"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
    </div>
  );
}