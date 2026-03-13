import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { setCredentials, setLoading, setError } from '../../store/slices/authSlice';
import type { RootState } from '../../store';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        dispatch(setLoading(true));
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            const mockUser = {
                id: '123',
                name: 'John Doe',
                email: data.email,
                role: 'author' as const,
            };

            dispatch(setCredentials({ user: mockUser, token: 'mock-jwt-token' }));
            localStorage.setItem('token', 'mock-jwt-token');
            navigate('/dashboard');
        } catch (err) {
            dispatch(setError('Invalid credentials. Please try again.'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl glass">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-display font-bold text-white mb-3">Welcome Back</h1>
                        <p className="text-white/50 text-sm">Access your academic dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="name@institution.edu"
                                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-teal/50 transition-colors`}
                                />
                            </div>
                            {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                <input
                                    {...register('password')}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className={`w-full bg-white/5 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-teal/50 transition-colors`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password.message}</p>}
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                    {...register('rememberMe')}
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-brand-teal focus:ring-brand-teal/20"
                                />
                                <span className="text-white/50 group-hover:text-white transition-colors">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-brand-teal hover:text-white transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin mr-2" size={20} />
                            ) : (
                                <>
                                    Login to Dashboard <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 text-center">
                        <p className="text-white/40 text-sm">
                            Don't have an account? {' '}
                            <Link to="/register" className="text-brand-teal font-bold hover:text-white transition-colors">
                                Register as Author
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg text-xs text-white/50 hover:bg-white/5 transition-colors">
                            <UserIcon size={14} />
                            <span>ORCID Login</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
