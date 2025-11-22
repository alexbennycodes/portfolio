
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

const FILES = [
    {
        name: 'useScroll.ts',
        code: [
            "import { useState, useEffect } from 'react';",
            "",
            "export const useScroll = () => {",
            "  const [y, setY] = useState(0);",
            "",
            "  useEffect(() => {",
            "    const handle = () => setY(window.scrollY);",
            "    window.addEventListener('scroll', handle);",
            "    return () => window.removeEventListener",
            "      ('scroll', handle);",
            "  }, []);",
            "",
            "  return y;",
            "};"
        ]
    },
    {
        name: 'Button.tsx',
        code: [
            "import { motion } from 'motion/react';",
            "",
            "interface Props { label: string; }",
            "",
            "export const Button = ({ label }: Props) => (",
            "  <motion.button",
            "    whileHover={{ scale: 1.05 }}",
            "    whileTap={{ scale: 0.95 }}",
            "    className=\"px-4 py-2 bg-primary\"",
            "  >",
            "    {label}",
            "  </motion.button>",
            ");"
        ]
    },
    {
        name: 'api.ts',
        code: [
            "export const fetchData = async (id) => {",
            "  try {",
            "    const res = await fetch('/api/' + id);",
            "    if (!res.ok) throw new Error('Failed');",
            "",
            "    return await res.json();",
            "  } catch (err) {",
            "    console.error('API Error:', err);",
            "    return null;",
            "  }",
            "};"
        ]
    }
];

const CodeCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const [currentFileIndex, setCurrentFileIndex] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="md:col-span-1 md:row-span-2 bg-[#0d0d0d] border border-white/10 p-0 flex flex-col overflow-hidden group relative"
        >
            <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 select-none justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>

                <div className="flex items-center gap-2 opacity-50">
                    <Terminal size={10} className="text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-300 tracking-wide uppercase">Code</span>
                </div>

                <AnimatePresence mode='wait'>
                    <motion.span
                        key={currentFileIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-[10px] font-mono text-zinc-500"
                    >
                        {FILES[currentFileIndex].name}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="p-4 font-mono text-[10px] leading-5 text-zinc-400 relative flex-1 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] overflow-hidden">
                <CodeSimulation fileIndex={currentFileIndex} onComplete={() => setCurrentFileIndex((prev) => (prev + 1) % FILES.length)} />
            </div>
        </motion.div>
    );
};

const highlight = (code: string): React.ReactNode[] => {
    const tokens: React.ReactNode[] = [];
    // Regex to tokenize the code into:
    // 1. Comments
    // 2. Strings
    // 3. Keywords
    // 4. React Hooks / Props
    // 5. PascalCase words (Components/Types)
    // 6. Function calls
    // 7. Numbers
    // 8. Punctuation/Operators
    const tokenRegex = /(\/\/.*)|(["'](?:[^"'\\]|\\.)*(?:["']|$))|(\b(?:import|export|from|const|let|var|return|if|else|try|catch|throw|new|async|await|function|interface|type|default|extends)\b)|(\b(?:useState|useEffect|useRef|useContext|props|label|key)\b)|(\b[A-Z][a-zA-Z0-9]*\b)|(\b[a-zA-Z0-9_]+(?=\())|(\b\d+\b)|([{}[\]().,;:<>=!&|?])/g;

    let lastIndex = 0;
    let match;
    let i = 0;

    while ((match = tokenRegex.exec(code)) !== null) {
        // Push text before the match (whitespace or uncolored code)
        if (match.index > lastIndex) {
            tokens.push(<span key={`${i++}`} className="text-zinc-100">{code.slice(lastIndex, match.index)}</span>);
        }

        const text = match[0];
        let className = "text-zinc-100";

        if (match[1]) className = "text-zinc-500"; // Comment
        else if (match[2]) className = "text-green-400"; // String
        else if (match[3]) className = "text-purple-400"; // Keyword
        else if (match[4]) className = "text-cyan-300"; // Hooks/Props
        else if (match[5]) className = "text-yellow-300"; // PascalCase (Components/Types)
        else if (match[6]) className = "text-blue-400"; // Function call
        else if (match[7]) className = "text-orange-400"; // Number
        else if (match[8]) className = "text-zinc-600"; // Punctuation

        tokens.push(<span key={`${i++}`} className={className}>{text}</span>);
        lastIndex = tokenRegex.lastIndex;
    }

    // Push remaining text
    if (lastIndex < code.length) {
        tokens.push(<span key={`${i++}`} className="text-zinc-100">{code.slice(lastIndex)}</span>);
    }

    return tokens;
};

const CodeSimulation = ({ fileIndex, onComplete }: { fileIndex: number, onComplete: () => void }) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const currentFile = FILES[fileIndex];
    const codeLines = currentFile.code;

    useEffect(() => {
        setLineIndex(0);
        setCharIndex(0);
    }, [fileIndex]);

    useEffect(() => {
        if (lineIndex >= codeLines.length) {
            const timeout = setTimeout(() => {
                onComplete();
            }, 2000);
            return () => clearTimeout(timeout);
        }

        const currentLine = codeLines[lineIndex];

        if (charIndex < currentLine.length) {
            const typeTimeout = setTimeout(() => {
                setCharIndex(prev => prev + 1);
            }, 20 + Math.random() * 30);
            return () => clearTimeout(typeTimeout);
        } else {
            const nextLineTimeout = setTimeout(() => {
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 100 + Math.random() * 50);
            return () => clearTimeout(nextLineTimeout);
        }
    }, [lineIndex, charIndex, codeLines, onComplete]);

    return (
        <div className="flex flex-col">
            {codeLines.map((line, i) => {
                if (i > lineIndex) return null;

                const isCurrentLine = i === lineIndex;
                const text = isCurrentLine ? line.slice(0, charIndex) : line;

                return (
                    <div key={i} className="flex gap-3 min-h-[20px]">
                        <span className="text-zinc-700 select-none w-4 text-right shrink-0 font-mono">{i + 1}</span>
                        <span className="whitespace-pre font-mono">
                            {highlight(text)}
                            {isCurrentLine && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-1.5 h-3 bg-primary ml-0.5 align-middle"
                                />
                            )}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default CodeCard;
