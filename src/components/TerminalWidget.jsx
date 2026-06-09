import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TerminalWidget = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { text: 'SYSTEM: Connection established. Secure shell active.', type: 'system' },
    { text: "Welcome to DevOS terminal. Type 'help' to view available commands.", type: 'system' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  
  const consoleEndRef = useRef(null);
  const inputRef = useRef(null);
  const matrixCanvasRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // Matrix Waterfall Rain Effect Animation
  useEffect(() => {
    if (!isMatrixActive || !matrixCanvasRef.current) return;
    const canvas = matrixCanvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1203456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = katakana.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // green text
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMatrixActive]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    const newHistory = [...history, { text: `visitor@developer-portfolio:~$ ${cmdText}`, type: 'input' }];

    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    let response = [];
    switch (trimmed) {
      case 'help':
        response = [
          { text: 'Available commands:', type: 'output' },
          { text: '  about        - Tell me a bit about yourself', type: 'output' },
          { text: '  skills       - List developer skills & proficiency', type: 'output' },
          { text: '  projects     - List highlighted full-stack projects', type: 'output' },
          { text: '  contact      - Display professional developer contact links', type: 'output' },
          { text: '  matrix       - Trigger the Matrix rain digital code waterfall', type: 'output' },
          { text: '  clear        - Clear console history', type: 'output' },
          { text: '  close        - Exit the DevOS Terminal console', type: 'output' },
        ];
        break;
      case 'about':
        response = [
          { text: 'Bio Profile:', type: 'output' },
          { text: '  Name: Anurad Panyam | Aspiring Full Stack Developer', type: 'output' },
          { text: '  Mission: Architecting highly performant, user-centric web applications and full-stack solutions.', type: 'output' },
          { text: '  Philosophy: Clean code, responsive designs, and robust, maintainable architecture.', type: 'output' },
        ];
        break;
      case 'skills':
        response = [
          { text: 'Tech Stack Matrix:', type: 'output' },
          { text: '  ├── Frontend:  HTML5/CSS3, JavaScript (ES6+), React.js, Responsive Web Design', type: 'output' },
          { text: '  ├── Backend:   Python, Flask Framework', type: 'output' },
          { text: '  ├── Database:  SQLite, MongoDB, MySQL, DBMS Concepts', type: 'output' },
          { text: '  └── Tools:     Git, GitHub, VS Code IDE, Basic GenAI', type: 'output' },
        ];
        break;
      case 'projects':
        response = [
          { text: 'Highlighted Projects:', type: 'output' },
          { text: '  [1] Trust Us (HTML5 + CSS3 + JS)', type: 'output' },
          { text: '  [2] QuickArt Marketplace (React JS + REST API + Context API)', type: 'output' },
          { text: '  [3] Student Management System (Python + Flask + SQL + SQLite)', type: 'output' },
          { text: '  [4] PMTC Powertools Portal (JS + HTML/CSS + Node + Express + MongoDB)', type: 'output' },
          { text: '  [5] Event Enquiry & Booking CRM (JS + React + Node + Express + PostgreSQL)', type: 'output' },
          { text: '  [6] Child Health & Allergy Tracker (JS + React + Node + Express + HTML/CSS)', type: 'output' },
          { text: '  [7] Smart Student Attendance Tracker (React + HTML/CSS + Local Storage)', type: 'output' },
          { text: "Type 'projects' on the page to search details or click the Cards below!", type: 'output' },
        ];
        break;
      case 'contact':
        response = [
          { text: 'Contact Information:', type: 'output' },
          { text: '  Email:     anuradreddy@gmail.com', type: 'output' },
          { text: '  GitHub:    github.com/anuradreddy-lgtm', type: 'output' },
          { text: '  LinkedIn:  linkedin.com/in/anurad-panyam-77407939b/', type: 'output' },
        ];
        break;
      case 'matrix':
        setIsMatrixActive(!isMatrixActive);
        response = [{ text: isMatrixActive ? 'Matrix code effect deactivated.' : 'Initializing digital code rain waterfall... Type "matrix" again to exit.', type: 'system' }];
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      case 'close':
        onClose();
        return;
      default:
        response = [{ text: `Error: command not found: "${cmdText}". Type "help" for a list of commands.`, type: 'error' }];
    }

    setHistory([...newHistory, ...response]);
    setCommandHistory([...commandHistory, cmdText]);
    setHistoryIndex(-1);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputValue(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-4 bottom-4 md:right-8 md:left-auto md:w-[580px] z-50 h-[380px] shadow-2xl rounded-2xl overflow-hidden glass-panel border border-slate-200/50 dark:border-white/5 select-text"
        >
          {/* Header Bar with macOS Window Controls */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-slate-900/95 dark:bg-cyber-gray/95 border-b border-slate-200/10 dark:border-white/5 select-none">
            <div className="flex items-center gap-2">
              <button 
                onClick={onClose} 
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" 
                title="Close" 
              />
              <button 
                onClick={() => setIsMatrixActive(!isMatrixActive)} 
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" 
                title="Toggle Matrix Rain Effect" 
              />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyber-indigo dark:text-cyber-teal" />
              <span>visitor@anurad.dev: ~ (bash)</span>
            </div>
            
            <div className="w-12" /> {/* Spacer for visual symmetry */}
          </div>

          {/* Terminal Console Viewport */}
          <div className="relative w-full h-[calc(100%-48px)] bg-black/95 p-4 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
            {/* Matrix Rain Canvas */}
            {isMatrixActive && (
              <canvas
                ref={matrixCanvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              />
            )}

            {/* Scrollable Command History */}
            <div className="relative z-10 space-y-1.5">
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.type === 'input'
                      ? 'text-white'
                      : line.type === 'error'
                      ? 'text-rose-400 font-semibold'
                      : line.type === 'system'
                      ? 'text-cyber-teal'
                      : 'text-green-400'
                  }`}
                >
                  {line.text}
                </div>
              ))}

              {/* Input prompt line */}
              <div className="flex items-center text-white pt-1">
                <span className="text-cyber-indigo mr-2">visitor@anurad.dev:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-mono text-xs sm:text-sm"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={consoleEndRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
