import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, Server, Globe, Activity, Terminal, ExternalLink, ChevronRight, Github, CheckCircle } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { STACK_ITEMS } from '../constants';

interface HomeProps {
    latestVersion: string;
}

export default function Home({ latestVersion }: HomeProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900 z-0"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0 hover:bg-emerald-500/20 transition-colors cursor-default" style={{ animationDelay: '0.2s' }}>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-400 text-sm font-medium">{latestVersion} Released</span>
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-fade-up opacity-0 drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
                        Secure Your Nginx <br />
                        <span className="text-emerald-400 text-glow">Infrastructure</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
                        Enterprise-grade security stack with Nginx, CrowdSec, ModSecurity, and WAF protection.
                        Deploy in minutes with our automated generator.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
                        <Link to="/generator" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                            <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Generate Config
                        </Link>
                        <a href="https://github.com/shedowe19/ShieldPM" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm group">
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            View on GitHub
                        </a>
                    </div>

                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '1s' }}>
                        <div className="glass-card p-6 rounded-2xl text-center group">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">100%</div>
                            <div className="text-sm text-slate-500">Open Source</div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl text-center group">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Zero</div>
                            <div className="text-sm text-slate-500">Config Required</div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl text-center group">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">Auto</div>
                            <div className="text-sm text-slate-500">SSL Management</div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl text-center group">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">WAF</div>
                            <div className="text-sm text-slate-500">Protection</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 px-4 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Security Stack</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Everything you need to secure your web infrastructure, pre-configured and ready to deploy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Shield className="w-6 h-6" />}
                            title="Modern Security"
                            description="Integrated with CrowdSec, ModSecurity, and OpenAppSec for multi-layer protection against threats."
                            color="emerald"
                        />
                        <FeatureCard
                            icon={<Lock className="w-6 h-6" />}
                            title="Auto SSL"
                            description="Automatic certificate management with Let's Encrypt, ZeroSSL, and custom CA support."
                            color="cyan"
                        />
                        <FeatureCard
                            icon={<Zap className="w-6 h-6" />}
                            title="Optimization"
                            description="Built-in specialized configurations for Nextcloud, WordPress, and other popular applications."
                            color="amber"
                        />
                        <FeatureCard
                            icon={<Server className="w-6 h-6" />}
                            title="Full Stack"
                            description="Includes PHP-FPM (8.2-8.4), Redis, MariaDB/PostgreSQL, and Nginx in one cohesive stack."
                            color="purple"
                        />
                        <FeatureCard
                            icon={<Globe className="w-6 h-6" />}
                            title="Geo Blocking"
                            description="Advanced GeoIP blocking and allowing capabilities with MaxMind integration."
                            color="blue"
                        />
                        <FeatureCard
                            icon={<Activity className="w-6 h-6" />}
                            title="Analytics"
                            description="Real-time traffic monitoring and logging with GoAccess integration."
                            color="rose"
                        />
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                    <h2 className="text-2xl font-bold text-white">Powered by Industry Standards</h2>
                </div>

                <div className="relative flex overflow-x-hidden w-full">
                    <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                        {[...STACK_ITEMS, ...STACK_ITEMS].map((stack, idx) => (
                            <div key={idx} className="inline-flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/5">
                                <span className="text-emerald-400 font-semibold">{stack.category}:</span>
                                <span className="text-slate-300">{stack.items.join(" • ")}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation */}
            <section id="installation" className="py-24 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Installation</h2>
                        <p className="text-slate-400">Get started in seconds with our automated installer</p>
                    </div>

                    <div className="glass-card rounded-2xl p-12 relative overflow-hidden group text-center">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <Terminal className="w-24 h-24 text-white/5" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <div className="p-4 bg-emerald-500/10 rounded-full">
                                <CheckCircle className="w-12 h-12 text-emerald-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white">Follow the Installation Guide</h3>
                            <p className="text-slate-400 max-w-lg mx-auto">
                                We have a comprehensive guide in our Wiki to help you get started with ShieldPM on your preferred platform.
                            </p>

                            <Link to="/wiki" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                                <ExternalLink className="w-5 h-5" />
                                Go to Installation Wiki
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* Tech Stack */}
            <section className="py-20 px-4 bg-background/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
                        <p className="text-slate-400">Built with modern, battle-tested technologies</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {STACK_ITEMS.map((stack, index) => (
                            <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform">
                                <div className="text-emerald-400 font-semibold mb-4">{stack.category}</div>
                                <ul className="space-y-2">
                                    {stack.items.map((item, i) => (<li key={i} className="text-slate-300 text-sm">{item}</li>))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multi-language Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Multi-Language Support</h2>
                    <p className="text-slate-400 mb-8">ShieldPM speaks your language with support for English, German, Spanish, French, and more.</p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {["English", "Deutsch", "Espanol", "Francais", "Italiano", "Portugues"].map((lang, index) => (
                            <span key={index} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm text-slate-300">{lang}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Proxies?</h2>
                        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">Join the growing community using ShieldPM for enterprise-grade proxy management with cutting-edge security.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://github.com/shedowe19/ShieldPM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold transition hover:bg-slate-100">
                                <Github className="w-5 h-5" />
                                View on GitHub
                            </a>
                            <Link to="/wiki" className="flex items-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold transition hover:bg-white/10">
                                Read Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
