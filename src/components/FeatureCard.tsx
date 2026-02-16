import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
    const colorClasses: Record<string, string> = {
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    };

    return (
        <div className={`glass-card rounded-2xl p-6 group relative overflow-hidden`}>
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color].split(' ')[0]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} border flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-${color}-500/20`}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
