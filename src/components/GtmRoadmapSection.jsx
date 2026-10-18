import React, { useState, useEffect } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export default function GtmRoadmapSection({ onShowToast }) {
  const { whatsappTemplate, roadmapWeeks } = BUSINESS_DATA;
  const [copied, setCopied] = useState(false);
  const [tasksState, setTasksState] = useState({});

  const STORAGE_KEY = 'webwub_roadmap_tasks_v1';

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      setTasksState(saved);
    } catch (e) {
      setTasksState({});
    }
  }, []);

  // Handle task toggle
  const handleToggleTask = (taskId) => {
    const nextState = {
      ...tasksState,
      [taskId]: !tasksState[taskId],
    };
    setTasksState(nextState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch (e) {}
  };

  // Copy template
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(whatsappTemplate.trim());
      setCopied(true);
      onShowToast('Template pesan WhatsApp berhasil disalin ke clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      onShowToast('Gagal menyalin pesan.');
    }
  };

  // Reset
  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset seluruh checklist roadmap?')) {
      setTasksState({});
      localStorage.removeItem(STORAGE_KEY);
      onShowToast('Checklist roadmap telah direset.');
    }
  };

  // Calculate progress
  let totalTasks = 0;
  let completedTasks = 0;
  roadmapWeeks.forEach((week) => {
    week.tasks.forEach((task) => {
      totalTasks++;
      if (tasksState[task.id]) completedTasks++;
    });
  });

  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <section id="gtm-playbook" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Strategi Peluncuran</span>
        <h3>Roadmap 30 Hari & Rencana Mendapatkan 3 Klien Pertama</h3>
        <p>Tanpa biaya iklan (*Zero Ad-Spend*). Gunakan pendekatan langsung terukur dan checklist interaktif berikut.</p>
      </div>

      {/* WhatsApp Outreach Box */}
      <div className="outreach-tool-card">
        <div className="outreach-header">
          <div>
            <h4>Template Pesan Outreach WhatsApp (Telah Dioptimasi)</h4>
            <p>Ubah nama usaha dan tautan demo, lalu tekan tombol copy untuk langsung menghubungi prospek secara personal.</p>
          </div>
          <button className="btn btn-primary btn-sm" onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Tersalin!' : 'Salin Pesan'}</span>
          </button>
        </div>
        <div className="template-box">
          <pre>{whatsappTemplate}</pre>
        </div>
      </div>

      {/* 30-Day Interactive Roadmap */}
      <div className="roadmap-wrapper">
        <h4>Checklist Roadmap 30 Hari Pertama (Tersimpan Otomatis)</h4>
        <div className="roadmap-grid">
          {roadmapWeeks.map((week, wIdx) => (
            <div key={wIdx} className="roadmap-week-col">
              <div className="week-header">
                <span className="week-pill">{week.week}</span>
                <h5>{week.title}</h5>
              </div>
              <div className="task-list">
                {week.tasks.map((task) => {
                  const isChecked = !!tasksState[task.id];
                  return (
                    <label
                      key={task.id}
                      className={`task-item ${isChecked ? 'completed' : ''}`}
                    >
                      <input
                        type="checkbox"
                        className="task-check"
                        checked={isChecked}
                        onChange={() => handleToggleTask(task.id)}
                      />
                      <span>{task.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="progress-footer">
          <span className="tabular-nums">
            Progress Roadmap: {completedTasks}/{totalTasks} tugas diselesaikan ({progressPercent}%)
          </span>
          <button className="btn btn-outline btn-sm" onClick={handleReset}>
            <RotateCcw size={14} style={{ marginRight: '4px' }} />
            Reset Progress
          </button>
        </div>
      </div>
    </section>
  );
}
