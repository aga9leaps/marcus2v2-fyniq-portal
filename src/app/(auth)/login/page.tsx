'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockLogin } from '@/lib/mock-data';
import { Building2, Mail, Lock, AlertCircle } from 'lucide-react';

// Form validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login attempt with:', data.email);
    setIsLoading(true);
    setError(null);

    try {
      const result = await mockLogin(data.email, data.password);
      console.log('Login result:', result);

      if (result.success) {
        // Store user in localStorage (mock session)
        if (typeof window !== 'undefined') {
          localStorage.setItem('fyniq_user', JSON.stringify(result.user));
        }
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand/Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent-light to-accent-border items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-accent-primary rounded-2xl flex items-center justify-center">
              <Building2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            FynIQ Document Portal
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Secure document management for your commercial real estate loan applications with CRE Lending Group.
          </p>
          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent-primary font-semibold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Upload & Track</h3>
                <p className="text-sm text-text-secondary">
                  Easily upload documents and track their status in real-time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent-primary font-semibold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Secure & Compliant</h3>
                <p className="text-sm text-text-secondary">
                  Bank-level security with encrypted document storage
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent-primary font-semibold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Stay Informed</h3>
                <p className="text-sm text-text-secondary">
                  Get updates on your application status and document reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-bg-primary">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="w-16 h-16 bg-accent-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              Welcome back
            </h2>
            <p className="text-text-secondary">
              Sign in to access your loan applications
            </p>
          </div>

          {/* Demo Credentials Note */}
          <div className="mb-6 p-4 bg-info-light border border-border-subtle rounded-lg">
            <p className="text-sm text-text-secondary">
              <strong>Demo credentials:</strong><br />
              Email: jane.borrower@example.com<br />
              Password: demo123
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-error-light border border-error rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p className="text-sm text-error">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-text-primary font-medium">
                Email Address
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`pl-10 ${errors.email ? 'border-error' : ''}`}
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-text-primary font-medium">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-sm text-accent-primary hover:text-accent-hover transition-colors"
                  onClick={() => alert('🔐 Password Reset Feature\n\nThis feature will allow users to:\n• Request a password reset link via email\n• Verify identity through security questions\n• Create a new secure password\n\n📋 Status: Coming in Phase 2 - Backend Integration')}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={`pl-10 ${errors.password ? 'border-error' : ''}`}
                  {...register('password')}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-error">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                className="w-4 h-4 text-accent-primary bg-surface border-border-medium rounded focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                {...register('rememberMe')}
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-text-secondary">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-hover text-white font-medium py-6 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-8 mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-subtle" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-bg-primary text-text-tertiary">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* SSO Buttons (Visual Only - Phase 1) */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="py-6 border-border-medium hover:bg-surface-hover transition-colors"
              onClick={() => alert('SSO integration coming in Phase 2')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-6 border-border-medium hover:bg-surface-hover transition-colors"
              onClick={() => alert('SSO integration coming in Phase 2')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V8.6h4.8v10.6h6.6V24z" />
                <path d="M24 24h-11.4v-4.8h6.6V8.6H24V24z" />
                <path d="M11.4 19.2H0v-4.8h11.4v4.8z" />
                <path d="M24 19.2H12.6v-4.8H24v4.8z" />
                <path d="M24 0v8.6h-4.8V4.8h-6.6V0H24z" />
                <path d="M11.4 0v4.8H4.8v3.8H0V0h11.4z" />
              </svg>
              Microsoft
            </Button>
          </div>

          {/* Help Text */}
          <p className="mt-8 text-center text-sm text-text-tertiary">
            Need help?{' '}
            <a
              href="mailto:support@crelending.com"
              className="text-accent-primary hover:text-accent-hover transition-colors"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
