import React from 'react';
import { WikiSection } from "../components/WikiSection";

export default function Wiki() {
    return (
        <div className="relative pt-16 min-h-screen bg-background text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/05 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/05 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10">
                <WikiSection />
            </div>
        </div>
    );
}
