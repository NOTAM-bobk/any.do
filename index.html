import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  Settings, 
  Plus, 
  Trash2, 
  Pause, 
  Play, 
  Volume2, 
  VolumeX, 
  AlertTriangle,
  Clock
} from 'lucide-react';

export default function App() {
  // State Management
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('glassBrutalistReminders');
    return saved ? JSON.parse(saved) : [];
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [permission, setPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Form State
  const [taskName, setTaskName] = useState('');
  const [intervalValue, setIntervalValue] = useState('30');
  const [intervalUnit, setIntervalUnit] = useState('minutes');

  // Audio Ref for notification sound
  const audioRef = useRef(null);

  // Save to local storage whenever reminders change
  useEffect(() => {
    localStorage.setItem('glassBrutalistReminders', JSON.stringify(reminders));
  }, [reminders]);

  // Request Notification Permission
  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }
    const perm = await Notification.requestPermission();
    setPermission(perm);
  };

  // Main Timer Loop
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      
      setReminders(prevReminders => {
        let updated = false;
        const newReminders = prevReminders.map(reminder => {
          if (reminder.active && now >= reminder.nextTrigger) {
            updated = true;
            triggerNotification(reminder.text);
            
            // Calculate next trigger
            return {
              ...reminder,
              nextTrigger: now + reminder.intervalMs,
              lastTriggered: now
            };
          }
          return reminder;
        });

        return updated ? newReminders : prevReminders;
      });
    }, 1000); // Check every second

    return () => clearInterval(timer);
  }, [soundEnabled, permission]); // Re-bind if settings change

  const triggerNotification = (text) => {
    // Play Sound
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }

    // Show Notification
    if (permission === 'granted') {
      new Notification('Reminder!', {
        body: text,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827370.png' // Generic bell icon
      });
    }
  };

  // Add a new reminder
  const addReminder = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !intervalValue || isNaN(intervalValue)) return;

    let multiplier = 1000; // base is seconds for testing flexibility
    if (intervalUnit === 'seconds') multiplier = 1000;
    if (intervalUnit === 'minutes') multiplier = 1000 * 60;
    if (intervalUnit === 'hours') multiplier = 1000 * 60 * 60;

    const intervalMs = parseInt(intervalValue) * multiplier;

    const newReminder = {
      id: crypto.randomUUID(),
      text: taskName,
      intervalMs: intervalMs,
      nextTrigger: Date.now() + intervalMs,
      active: true,
      createdAt: Date.now()
    };

    setReminders([...reminders, newReminder]);
    setTaskName('');
  };

  const toggleReminder = (id) => {
    setReminders(reminders.map(r => {
      if (r.id === id) {
        const isActivating = !r.active;
        return {
          ...r,
          active: isActivating,
          // Reset timer if re-activating
          nextTrigger: isActivating ? Date.now() + r.intervalMs : r.nextTrigger 
        };
      }
      return r;
    }));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  // Helper to format time remaining
  const formatTimeRemaining = (nextTrigger) => {
    const diff = nextTrigger - Date.now();
    if (diff <= 0) return 'Triggering...';
    
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  // Helper to force an update every second so the UI countdown ticks
  const [, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE600] p-4 md:p-8 font-sans overflow-hidden relative">
      {/* Abstract Background Elements for Neo-Brutalism */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" preload="auto"></audio>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header - Glassmorphic but with brutalist border */}
        <header className="flex justify-between items-center mb-8 bg-white/40 backdrop-blur-md border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 border-2 border-black rounded-lg">
              <Bell size={28} className="animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-black uppercase">
              Ping<span className="text-pink-600">Me</span>
            </h1>
          </div>
          <button 
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="bg-white border-4 border-black p-2 hover:bg-cyan-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none rounded-xl"
          >
            <Settings size={28} />
          </button>
        </header>

        {/* Permission Warning */}
        {permission !== 'granted' && (
          <div className="mb-8 bg-red-400 border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-black font-bold">
              <AlertTriangle size={24} />
              <p>Notifications are {permission}. The app won't work perfectly!</p>
            </div>
            <button 
              onClick={requestPermission}
              className="whitespace-nowrap bg-black text-white px-6 py-2 border-2 border-transparent hover:bg-gray-800 transition-colors rounded-lg font-bold"
            >
              Enable Notifications
            </button>
          </div>
        )}

        {/* Settings Panel */}
        {settingsOpen && (
          <div className="mb-8 bg-white/70 backdrop-blur-xl border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all">
            <h2 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">Settings</h2>
            
            <div className="space-y-4 font-bold text-lg">
              <div className="flex items-center justify-between">
                <span>Sound Alerts</span>
                <button 
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-3 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all ${soundEnabled ? 'bg-green-400' : 'bg-gray-300'}`}
                >
                  {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>Browser Push Permissions</span>
                <span className="uppercase text-sm bg-black text-white px-3 py-1 rounded-md">
                  {permission}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 mt-2 bg-white/50 p-3 rounded-lg border-2 border-black border-dashed">
                Note: For true background push notifications after deploying to Vercel, you will need to add a Service Worker (PWA) configuration to this app.
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Add Reminder Form */}
          <div className="md:col-span-1 h-fit bg-pink-400/80 backdrop-blur-lg border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-2">
              <Plus size={24} /> New Ping
            </h2>
            
            <form onSubmit={addReminder} className="space-y-5">
              <div>
                <label className="block font-bold mb-2 uppercase text-sm tracking-wider">What to remember?</label>
                <input 
                  type="text" 
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  placeholder="Drink water..."
                  className="w-full border-4 border-black p-3 font-bold bg-white focus:outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-400 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold mb-2 uppercase text-sm tracking-wider">Every...</label>
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    value={intervalValue}
                    onChange={(e) => setIntervalValue(e.target.value)}
                    min="1"
                    className="w-1/2 border-4 border-black p-3 font-bold bg-white focus:outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl"
                    required
                  />
                  <select 
                    value={intervalUnit}
                    onChange={(e) => setIntervalUnit(e.target.value)}
                    className="w-1/2 border-4 border-black p-3 font-bold bg-white focus:outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl cursor-pointer"
                  >
                    <option value="seconds">Secs</option>
                    <option value="minutes">Mins</option>
                    <option value="hours">Hrs</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-black border-4 border-black p-4 font-black text-xl uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all rounded-xl mt-4"
              >
                Add Ping
              </button>
            </form>
          </div>

          {/* Reminders List */}
          <div className="md:col-span-2 space-y-6">
            {reminders.length === 0 ? (
              <div className="bg-white/40 backdrop-blur-md border-4 border-black border-dashed p-12 text-center rounded-2xl">
                <Clock size={48} className="mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-black uppercase text-gray-800">No Pings Yet!</h3>
                <p className="font-bold text-gray-600">Create one to get started.</p>
              </div>
            ) : (
              reminders.map(reminder => (
                <div 
                  key={reminder.id} 
                  className={`relative overflow-hidden border-4 border-black p-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    reminder.active 
                      ? 'bg-white/80 backdrop-blur-md' 
                      : 'bg-gray-300/80 backdrop-blur-md grayscale'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-black mb-1 ${reminder.active ? 'text-black' : 'text-gray-600 line-through'}`}>
                        {reminder.text}
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-3">
                        {reminder.type === 'schedule' ? (
                          <span className="bg-black text-white px-3 py-1 text-sm font-bold rounded-md uppercase tracking-wider flex items-center gap-1">
                            <CalendarDays size={16} />
                            {reminder.scheduleTime} ({reminder.scheduleDays.length} days)
                          </span>
                        ) : (
                          <span className="bg-black text-white px-3 py-1 text-sm font-bold rounded-md uppercase tracking-wider">
                            {reminder.intervalMs / 1000 >= 60 
                              ? reminder.intervalMs / (1000 * 60) >= 60
                                ? `${reminder.intervalMs / (1000 * 60 * 60)} hrs`
                                : `${reminder.intervalMs / (1000 * 60)} mins`
                              : `${reminder.intervalMs / 1000} secs`
                            }
                          </span>
                        )}
                        
                        {reminder.active && (
                          <span className="text-pink-600 font-bold flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-md border-2 border-pink-600">
                            <Clock size={16} /> 
                            {formatTimeRemaining(reminder.nextTrigger)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => toggleReminder(reminder.id)}
                        className={`p-2 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all ${
                          reminder.active ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-green-400 hover:bg-green-300'
                        }`}
                        title={reminder.active ? "Pause Reminder" : "Resume Reminder"}
                      >
                        {reminder.active ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <button 
                        onClick={() => deleteReminder(reminder.id)}
                        className="p-2 bg-red-400 hover:bg-red-300 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                        title="Delete Reminder"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar Visual (Optional flair) */}
                  {reminder.active && (
                    <div className="absolute bottom-0 left-0 h-1.5 bg-black w-full opacity-20">
                      <div 
                        className="h-full bg-pink-500 transition-all duration-1000 ease-linear"
                        style={{ 
                          width: `${Math.max(0, 100 - ((reminder.nextTrigger - Date.now()) / reminder.intervalMs * 100))}%` 
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
