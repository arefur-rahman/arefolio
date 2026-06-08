"use client";

import { Send, Terminal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface LogLine {
    text: string;
    type: "input" | "output" | "error" | "success";
}

export default function PingConsole() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<LogLine[]>([
        { text: "AREFOLIO PING_SHELL v1.0", type: "success" },
        { text: "Enter 'help' to see list of valid routines.", type: "output" },
    ]);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of terminal
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmdStr: string) => {
        const trimmed = cmdStr.trim();
        if (!trimmed) return;

        const newHistory = [
            ...history,
            { text: `user@guest.dev:~$ ${trimmed}`, type: "input" as const },
        ];
        const parts = trimmed.split(" ");
        const command = parts[0].toLowerCase();
        const args = parts.slice(1).join(" ");

        switch (command) {
            case "help":
                newHistory.push({
                    text: "Available commands:\n  help    - Show this manual\n  about   - Query developer profile\n  skills  - Query technical dependencies\n  ping    - Ping Aref's digital outpost\n  msg <X> - Buffer message X to dev logs\n  clear   - Purge command lines",
                    type: "output",
                });
                break;
            case "about":
                newHistory.push({
                    text: "Profile: Aref\nAge: 20\nRole: MERN Stack Web Developer\nBase: Lakshmipur, Bangladesh (22.9430° N, 90.8282° E)",
                    type: "output",
                });
                break;
            case "skills":
                newHistory.push({
                    text: "Dependencies loaded:\n  - Frameworks: Next.js 16, React 19\n  - Styling: Tailwind CSS v4, shadcn/ui\n  - Database: MongoDB, Mongoose, Firebase Firestore\n  - Cloud: Firebase Auth, Vercel Serverless",
                    type: "output",
                });
                break;
            case "ping":
                newHistory.push(
                    {
                        text: "PING aref.dev (22.9430, 90.8282) 56(84) bytes of data.",
                        type: "output",
                    },
                    {
                        text: "64 bytes from lakshmipur.bd: icmp_seq=1 ttl=56 time=12.4 ms",
                        type: "success",
                    },
                    {
                        text: "64 bytes from lakshmipur.bd: icmp_seq=2 ttl=56 time=14.1 ms",
                        type: "success",
                    },
                    {
                        text: "64 bytes from lakshmipur.bd: icmp_seq=3 ttl=56 time=11.8 ms",
                        type: "success",
                    },
                    {
                        text: "--- aref.dev ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max = 11.8 / 12.7 / 14.1 ms",
                        type: "output",
                    },
                );
                break;
            case "msg":
                if (!args) {
                    newHistory.push({
                        text: "Error: Syntax error. Usage: msg <your message text>",
                        type: "error",
                    });
                } else {
                    newHistory.push(
                        {
                            text: `Transmitting payload: "${args}"...`,
                            type: "output",
                        },
                        {
                            text: "[SUCCESS] Payload buffered to Aref's visual stream. Thanks for sending!",
                            type: "success",
                        },
                    );
                }
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            default:
                newHistory.push({
                    text: `Command not found: '${command}'. Type 'help' for valid options.`,
                    type: "error",
                });
        }

        setHistory(newHistory);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };

    return (
        <aside className="flex flex-col gap-6 lg:sticky lg:top-8">
            <div className="border-b border-border pb-3 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground">
                    {"// INTERACTIVE CONSOLE"}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
            </div>

            <div className="border-2 border-foreground bg-black brutal-shadow-accent flex flex-col font-mono text-xs text-zinc-100 min-h-[300px]">
                {/* Top Console Bar */}
                <div className="border-b border-zinc-800 px-4 py-2 bg-zinc-950 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" />
                        <span className="font-bold text-[10px] uppercase tracking-wider text-zinc-400">
                            aref_outpost_terminal.sh
                        </span>
                    </div>
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    </div>
                </div>

                {/* Terminal Output Logs */}
                <div className="flex-1 p-4 overflow-y-auto max-h-[320px] flex flex-col gap-2 bg-zinc-950/40">
                    {history.map((line, i) => (
                        <div
                            key={i}
                            className="whitespace-pre-wrap leading-relaxed"
                        >
                            {line.type === "input" && (
                                <span className="text-zinc-400">
                                    {line.text}
                                </span>
                            )}
                            {line.type === "output" && (
                                <span className="text-zinc-300">
                                    {line.text}
                                </span>
                            )}
                            {line.type === "success" && (
                                <span className="text-primary font-bold">
                                    {line.text}
                                </span>
                            )}
                            {line.type === "error" && (
                                <span className="text-destructive font-bold">
                                    {line.text}
                                </span>
                            )}
                        </div>
                    ))}
                    <div ref={terminalEndRef} />
                </div>

                {/* Prompt Input Form */}
                <div className="border-t border-zinc-800 p-2 bg-zinc-950 flex gap-2 items-center">
                    <span className="text-zinc-500 pl-2">
                        user@guest.dev:~$
                    </span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="type 'help' or write a message..."
                        className="flex-1 bg-transparent border-0 outline-none focus:ring-0 text-primary p-1 caret-primary"
                    />
                    <button
                        onClick={() => handleCommand(input)}
                        className="border border-zinc-800 px-3 py-1 bg-zinc-900 text-zinc-400 hover:text-primary hover:bg-zinc-800 transition-colors"
                        title="Send Command"
                    >
                        <Send className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </aside>
    );
}
