import React from 'react';
import { Lock, Globe, ExternalLink, Shield } from 'lucide-react';

export default function Demo() {
    return (
        <section className="relative py-32 px-4 min-h-screen overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-up opacity-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">Live Demo</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Experience the ShieldPM interface and capabilities firsthand.
                    </p>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-white/10 max-w-5xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-black/40 border-b border-white/10 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                            </div>
                            <div className="ml-4 bg-black/20 px-3 py-1 rounded-md text-xs text-slate-400 flex items-center gap-2 border border-white/5">
                                <Lock className="w-3 h-3" />
                                demo-shieldpm.clawsucht.eu
                            </div>
                        </div>
                        <a
                            href="https://demo-shieldpm.clawsucht.eu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                        >
                            Open in new tab <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="relative aspect-video bg-black/50 group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
                            <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">Access the Live Demo</h3>
                                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                                    Use the credentials below to log in to the Nginx Proxy Manager interface.
                                </p>

                                <div className="flex flex-col gap-4 max-w-sm mx-auto mb-6 text-left">
                                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                                        <span className="text-xs text-slate-400 block mb-1">Email</span>
                                        <code className="text-emerald-400 font-mono text-sm break-all">demo.shieldpm@clawsucht.eu</code>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                                        <span className="text-xs text-slate-400 block mb-1">Password</span>
                                        <code className="text-emerald-400 font-mono text-sm">ShieldPM</code>
                                    </div>
                                </div>

                                <a
                                    href="https://demo-shieldpm.clawsucht.eu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Launch Demo <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Placeholder for iframe or screenshot */}
                        <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-900">
                            <div className="text-center">
                                <Globe className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Hover to access demo details</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-16">
                    <div className="flex items-center gap-3 text-slate-400 base-card px-6 py-3 rounded-full">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        <span>Data resets every 60 minutes</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
