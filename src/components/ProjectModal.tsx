import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Plus, 
  Trash2, 
  Play, 
  RotateCcw, 
  ShoppingCart, 
  Calendar, 
  Clock, 
  User 
} from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl bg-[#0c1630] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
      >
        {/* Header Banner */}
        <div
          className="relative p-6 sm:p-8 flex items-center justify-between"
          style={{ background: project.gradient }}
        >
          {/* Noise/Dot texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative z-10 max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white inline-block mb-2">
              Détails du projet
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
            <p className="text-white/85 text-sm sm:text-base mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Live Interactive Sandbox / Demo Component */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold uppercase tracking-wide text-[#9cc0ea]">
                  Démonstration Interactive
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30">
                Mode Test Live
              </span>
            </div>

            {project.interactiveDemoId === 'todolist' && <InteractiveTodoDemo />}
            {project.interactiveDemoId === 'calculator' && <InteractiveCalculatorDemo />}
            {project.interactiveDemoId === 'rockpaper' && <InteractiveRPSDemo />}
            {project.interactiveDemoId === 'medcare' && <InteractiveMedCareDemo />}
            {project.interactiveDemoId === 'ecommerce' && <InteractiveEcommerceDemo />}
            {project.interactiveDemoId === 'portfolio' && <InteractivePortfolioDemo />}
          </div>

          {/* Description */}
          <div>
            <h4 className="font-poppins font-bold text-base text-white mb-2">
              Présentation Détaillée
            </h4>
            <p className="text-[14.5px] leading-relaxed text-[#b4c8e7]">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-poppins font-bold text-base text-white mb-3">
              Fonctionnalités Clés
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[13px] text-[#cfe0f8]"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-poppins font-bold text-base text-white mb-3">
              Technologies Utilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Github className="w-4 h-4" />
                <span>Code Source sur GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[160px] py-3 px-4 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01]"
                style={{ background: project.gradient }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ouvrir le Projet</span>
              </a>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
};

/* --- Interactive Demo 1: Todo List --- */
const InteractiveTodoDemo: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([
    { id: 1, text: "Finaliser l'architecture MVC Laravel", completed: true },
    { id: 2, text: "Optimiser les composants React avec Vite", completed: true },
    { id: 3, text: "Tester le tunnel de commande sur mobile", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-4">
      <form onSubmit={addTodo} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
          className="flex-1 bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
              todo.completed
                ? 'bg-white/[0.02] border-white/5 opacity-60'
                : 'bg-white/[0.04] border-white/10'
            }`}
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className="flex items-center gap-2.5 text-left text-sm cursor-pointer flex-1"
            >
              <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                todo.completed ? 'bg-emerald-500 border-emerald-400' : 'border-white/30'
              }`}>
                {todo.completed && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              </div>
              <span className={todo.completed ? 'line-through text-white/50' : 'text-white'}>
                {todo.text}
              </span>
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-white/40 hover:text-red-400 p-1 cursor-pointer transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- Interactive Demo 2: Calculator --- */
const InteractiveCalculatorDemo: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [newNum, setNewNum] = useState(true);

  const handleNum = (num: string) => {
    if (newNum) {
      setDisplay(num);
      setNewNum(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOp = (operation: string) => {
    setPrev(parseFloat(display));
    setOp(operation);
    setNewNum(true);
  };

  const handleEqual = () => {
    if (prev === null || op === null) return;
    const current = parseFloat(display);
    let result = 0;
    if (op === "+") result = prev + current;
    if (op === "-") result = prev - current;
    if (op === "×") result = prev * current;
    if (op === "÷") result = current === 0 ? 0 : prev / current;
    setDisplay(String(Math.round(result * 10000) / 10000));
    setPrev(null);
    setOp(null);
    setNewNum(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setNewNum(true);
  };

  return (
    <div className="max-w-[280px] mx-auto bg-[#0a1124] p-4 rounded-2xl border border-white/10 shadow-lg">
      <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-right text-2xl font-mono text-emerald-400 mb-3 truncate">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
        <button onClick={handleClear} className="col-span-2 p-2.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 cursor-pointer">AC</button>
        <button onClick={() => handleOp("÷")} className="p-2.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 cursor-pointer">÷</button>
        <button onClick={() => handleOp("×")} className="p-2.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 cursor-pointer">×</button>

        {["7", "8", "9"].map((n) => (
          <button key={n} onClick={() => handleNum(n)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">{n}</button>
        ))}
        <button onClick={() => handleOp("-")} className="p-2.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 cursor-pointer">-</button>

        {["4", "5", "6"].map((n) => (
          <button key={n} onClick={() => handleNum(n)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">{n}</button>
        ))}
        <button onClick={() => handleOp("+")} className="p-2.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 cursor-pointer">+</button>

        {["1", "2", "3"].map((n) => (
          <button key={n} onClick={() => handleNum(n)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">{n}</button>
        ))}
        <button onClick={handleEqual} className="row-span-2 p-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 flex items-center justify-center cursor-pointer">=</button>

        <button onClick={() => handleNum("0")} className="col-span-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">0</button>
        <button onClick={() => handleNum(".")} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">.</button>
      </div>
    </div>
  );
};

/* --- Interactive Demo 3: Rock Paper Scissors --- */
const InteractiveRPSDemo: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [scores, setScores] = useState({ win: 0, draw: 0, lose: 0 });

  const choices = [
    { name: "Pierre", emoji: "🪨" },
    { name: "Papier", emoji: "📄" },
    { name: "Ciseaux", emoji: "✂️" },
  ];

  const play = (choice: string) => {
    const comp = choices[Math.floor(Math.random() * choices.length)].name;
    setUserChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("Égalité !");
      setScores(s => ({ ...s, draw: s.draw + 1 }));
    } else if (
      (choice === "Pierre" && comp === "Ciseaux") ||
      (choice === "Papier" && comp === "Pierre") ||
      (choice === "Ciseaux" && comp === "Papier")
    ) {
      setResult("Vous avez gagné ! 🎉");
      setScores(s => ({ ...s, win: s.win + 1 }));
    } else {
      setResult("L'ordinateur a gagné ! 🤖");
      setScores(s => ({ ...s, lose: s.lose + 1 }));
    }
  };

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center gap-6 text-xs font-semibold text-[#a5c7ef]">
        <span>Victoires: <strong className="text-emerald-400">{scores.win}</strong></span>
        <span>Égalités: <strong className="text-amber-400">{scores.draw}</strong></span>
        <span>Défaites: <strong className="text-red-400">{scores.lose}</strong></span>
      </div>

      <div className="flex justify-center gap-3">
        {choices.map((c) => (
          <button
            key={c.name}
            onClick={() => play(c.name)}
            className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 hover:border-cyan-400 hover:bg-white/[0.08] transition-all cursor-pointer flex flex-col items-center gap-1 min-w-[80px]"
          >
            <span className="text-2xl">{c.emoji}</span>
            <span className="text-xs font-semibold text-white">{c.name}</span>
          </button>
        ))}
      </div>

      {result && (
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#dbe8f8] space-y-1">
          <div>Vous : <strong className="text-white">{userChoice}</strong> vs Ordinateur : <strong className="text-white">{computerChoice}</strong></div>
          <div className="text-sm font-bold text-cyan-300">{result}</div>
        </div>
      )}
    </div>
  );
};

/* --- Interactive Demo 4: MedCare / Health-Plus --- */
const InteractiveMedCareDemo: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Alami (Cardiologue)");
  const [date, setDate] = useState("2026-10-20");
  const [booked, setBooked] = useState(false);

  return (
    <div className="space-y-3.5 text-xs">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[#97badf] mb-1 font-medium">Praticien / Spécialité</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full bg-[#111e3b] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none"
          >
            <option>Dr. Alami (Cardiologue)</option>
            <option>Dr. Bennani (Généraliste)</option>
            <option>Dr. Chraibi (Pédiatre)</option>
          </select>
        </div>
        <div>
          <label className="block text-[#97badf] mb-1 font-medium">Date du Rendez-vous</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#111e3b] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => setBooked(true)}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold cursor-pointer shadow-md hover:opacity-95"
      >
        Confirmer le créneau patient
      </button>

      {booked && (
        <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Rendez-vous validé avec {selectedDoctor} le {date}. Notification patient générée.</span>
        </div>
      )}
    </div>
  );
};

/* --- Interactive Demo 5: E-Commerce Store --- */
const InteractiveEcommerceDemo: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const items = [
    { id: 1, name: "Clavier Mécanique RGB", price: 450 },
    { id: 2, name: "Casque Sans Fil Pro", price: 680 },
    { id: 3, name: "Souris Ergonomique", price: 290 },
  ];

  const addToCart = (price: number) => {
    setCartCount(c => c + 1);
    setTotal(t => t + price);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold text-[#a5c7ef]">
        <span>Articles en rayon</span>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
          <ShoppingCart className="w-3.5 h-3.5" />
          Panier : {cartCount} ({total} MAD)
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-2.5">
        {items.map((it) => (
          <div key={it.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center space-y-1.5">
            <div className="font-semibold text-xs text-white truncate">{it.name}</div>
            <div className="text-orange-400 font-bold text-sm">{it.price} MAD</div>
            <button
              onClick={() => addToCart(it.price)}
              className="w-full py-1.5 rounded-lg bg-white/10 hover:bg-orange-500 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              + Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- Interactive Demo 6: Portfolio Showcase --- */
const InteractivePortfolioDemo: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#a5c7ef] space-y-2">
      <p>
        Ce portfolio actuel tourne sur React 19 et Vite avec Tailwind CSS et Motion. Il intègre un système complet de gestion d'état, de modélisation de CV et de démonstrateurs temps réel.
      </p>
      <div className="flex items-center gap-2 text-blue-400 font-semibold">
        <Layers className="w-4 h-4" />
        <span>Performances optimisées & compatibilité totale sur mobile et desktop.</span>
      </div>
    </div>
  );
};
