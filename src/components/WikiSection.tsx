import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Book, Github, Loader2, AlertCircle } from 'lucide-react';

const WIKI_URL = 'https://raw.githubusercontent.com/wiki/shedowe19/ShieldPM/Home.md';
const GITHUB_WIKI_BASE = 'https://github.com/shedowe19/ShieldPM/wiki/';

export function WikiSection() {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(WIKI_URL)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch wiki content');
                return res.text();
            })
            .then(text => {
                // Remove the first heading (# Welcome...) as we have our own section header
                const cleanedText = text.replace(/^# Welcome to the ShieldPM Wiki!/, '');
                setContent(cleanedText);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching wiki:', err);
                setError('Failed to load documentation. Please visit GitHub directly.');
                setLoading(false);
            });
    }, []);

    // Custom link renderer to handle Wiki relative links
    const transformLink = (href: string) => {
        if (!href) return href;
        if (href.startsWith('http') || href.startsWith('https') || href.startsWith('mailto')) {
            return href;
        }
        // Assume relative links are Wiki pages
        return `${GITHUB_WIKI_BASE}${href}`;
    };

    return (
        <section id="wiki" className="py-24 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Book className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">Documentation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Wiki</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Directly synced from our GitHub repository. Explore the full documentation below.
                    </p>
                </div>

                <div className="glass-card rounded-2xl p-8 md:p-12 min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                            <Loader2 className="w-8 h-8 animate-spin mb-4 text-emerald-500" />
                            <p>Loading Wiki content...</p>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center h-64 text-red-400">
                            <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
                            <p>{error}</p>
                            <a
                                href="https://github.com/shedowe19/ShieldPM/wiki"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition border border-white/10"
                            >
                                Open on GitHub
                            </a>
                        </div>
                    ) : (
                        <div className="space-y-8 text-slate-300 leading-relaxed">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // Headings
                                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-emerald-400 mt-12 mb-4 flex items-center gap-2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-cyan-400 mt-8 mb-3" {...props} />,

                                    // Text formatting
                                    p: ({ node, ...props }) => <p className="mb-4 text-slate-300 leading-7" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="text-white font-semibold" {...props} />,
                                    em: ({ node, ...props }) => <em className="text-emerald-300 not-italic" {...props} />,

                                    // Lists
                                    ul: ({ node, ...props }) => <ul className="space-y-2 mb-6" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300" {...props} />,
                                    li: ({ node, children, ...props }) => (
                                        <li className="flex items-start gap-2" {...props}>
                                            <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                                            <span className="flex-1">{children}</span>
                                        </li>
                                    ),

                                    // Links - Check if it's a documentation link or just a regular link
                                    a: ({ node, href, children, ...props }) => {
                                        const isDocLink = !href?.startsWith('http') && !href?.startsWith('mailto');

                                        if (isDocLink) {
                                            return (
                                                <a
                                                    href={transformLink(href || '')}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors font-medium border-b border-emerald-500/30 hover:border-emerald-500 pb-0.5"
                                                    {...props}
                                                >
                                                    <Book className="w-3.5 h-3.5 text-emerald-500" />
                                                    {children}
                                                </a>
                                            )
                                        }

                                        return (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/30 transition-colors"
                                                {...props}
                                            >
                                                {children}
                                            </a>
                                        )
                                    },

                                    // Blockquotes
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote className="border-l-4 border-emerald-500/50 bg-emerald-900/10 pl-4 py-2 my-6 rounded-r-lg italic text-slate-300" {...props} />
                                    ),

                                    // Code
                                    code: ({ node, className, children, ...props }: any) => {
                                        const match = /language-(\w+)/.exec(className || '')
                                        const isInline = !match

                                        if (isInline) {
                                            return <code className="bg-slate-900 border border-white/10 rounded px-1.5 py-0.5 text-sm text-emerald-300 font-mono" {...props}>{children}</code>
                                        }

                                        return (
                                            <div className="relative group my-6">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                                <pre className="relative bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto text-sm text-slate-300 font-mono">
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </pre>
                                            </div>
                                        )
                                    }
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
                            <a
                                href="https://github.com/shedowe19/ShieldPM/wiki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-slate-400 hover:text-white transition"
                            >
                                <Github className="w-5 h-5" />
                                <span>View full Wiki on GitHub</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
