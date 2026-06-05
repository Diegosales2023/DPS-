/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, MessageSquare, ArrowRight, ChevronUp, ShieldCheck, Landmark, Heart, Activity } from 'lucide-react';
import Header from './components/Header';
import CpfSearch from './components/CpfSearch';
import Services from './components/Services';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'privacy' | 'terms' | 'cookies' | 'security'>('privacy');
  
  const contactFormRef = useRef<HTMLDivElement | null>(null);

  const handleOpenPrivacy = (tab: 'privacy' | 'terms' | 'cookies' | 'security') => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleNavigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenConsultation = () => {
    const el = document.getElementById('simulador-ancora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleFocusContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans select-none overflow-x-hidden" id="app-root">
      
      {/* Sticky Header */}
      <Header
        onOpenPrivacy={handleOpenPrivacy}
        onNavigateTo={handleNavigateTo}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 text-white py-20 lg:py-28 overflow-hidden font-sans border-b border-slate-805">
        {/* Background Gradients and Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_50%)] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side text presentation */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left" id="hero-marketing-side">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
                <ShieldCheck className="h-4 w-4" />
                Defesa de Consumidores em Seguros & Juros
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                  Combata abusos contratuais com <span className="text-cyan-400 font-sans">segurança jurídica</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                  Seja na cobrança exorbitante de tarifas e juros abusivos em empréstimos de veículos, na recusa injusta de coberturas de seguros privados, ou nas negativas de planos de saúde, nossa banca jurídica atua para resgatar o seu equilíbrio e os seus valores.
                </p>
              </div>

              {/* Badges list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 pt-2" id="hero-badges-check">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-cyan-900/45 p-1.5 rounded-lg border border-cyan-800 text-cyan-300 shrink-0">
                    <Landmark className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold font-sans">Revisão Bancária</span>
                    <span className="block text-[10px] text-gray-400">Juros de Financiamento</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-cyan-900/45 p-1.5 rounded-lg border border-cyan-800 text-cyan-300 shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold font-sans">Seguro & Saúde</span>
                    <span className="block text-[10px] text-gray-400">Tratamento & Cobertura</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-cyan-900/45 p-1.5 rounded-lg border border-cyan-800 text-cyan-300 shrink-0">
                    <Scale className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold font-sans">Ressarcimento</span>
                    <span className="block text-[10px] text-gray-400">Valores Tributários / IR</span>
                  </div>
                </div>
              </div>

              {/* Buttons controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handleFocusContactForm}
                  className="w-full sm:w-auto cursor-pointer bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]"
                  id="hero-contact-cta"
                >
                  Fale com Especialista
                  <ArrowRight className="h-4 w-4 text-slate-900" />
                </button>
                <button
                  onClick={() => handleNavigateTo('servicos')}
                  className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all py-4 px-8 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
                  id="hero-services-cta"
                >
                  Conhecer Áreas de Atuação
                </button>
              </div>

            </div>

            {/* Right side CPF Simulador Card */}
            <div className="lg:col-span-5 relative" id="simulador-ancora">
              {/* Abs visual elements back of search card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-slate-500 rounded-2xl blur-lg opacity-25 pointer-events-none" />
              
              <div className="relative z-10">
                <CpfSearch onOpenPrivacy={handleOpenPrivacy} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Value Proposition Grid (As seen in Paschoalotto Services) */}
      <section className="py-12 bg-white border-b border-gray-100" id="intro-value-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-gray-105">
              <span className="text-2xl font-extrabold text-cyan-600 font-mono">01.</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Segurança Física e Digital</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Assinatura digital e criptografia em toda a transação processual bancária.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-gray-105">
              <span className="text-2xl font-extrabold text-cyan-600 font-mono">02.</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Transparência Extrema</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Acompanhamento automatizado de sua demanda judicial pelo WhatsApp ou e-mail.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-gray-105">
              <span className="text-2xl font-extrabold text-cyan-600 font-mono">03.</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Controle SUSEP & ANS</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Atuação fundamentada nas circulares de seguros e leis de saúde.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-gray-105">
              <span className="text-2xl font-extrabold text-cyan-600 font-mono">04.</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Celeridade Processual</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Agilidade no protocolo de liminares emergenciais em todo o território nacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <Services onContactFormFocus={handleFocusContactForm} />

      {/* About Section */}
      <About />

      {/* Contact Form Section */}
      <ContactSection formRef={contactFormRef} />

      {/* Footer Section */}
      <Footer onOpenPrivacy={handleOpenPrivacy} onNavigateTo={handleNavigateTo} />

      {/* Reusable Governance Modal */}
      <PrivacyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tab={modalTab}
      />

      {/* Floating Buttons: WhatsApp & Scroll top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3" id="floating-actions-bar">
        <a
          href="https://wa.me/5554991234567"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3.5 shadow-2xl flex items-center justify-center transition-all duration-300 relative group group-hover:scale-105"
          id="whats-float"
          aria-label="Atendimento por Whatsapp"
        >
          {/* Pulsing effect */}
          <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
          <MessageSquare className="h-6 w-6 relative z-10" />
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider shadow-md pointer-events-none">
            Falar pelo WhatsApp
          </span>
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-slate-900 text-gray-300 hover:text-white rounded-full p-2.5 shadow-xl border border-slate-800 flex items-center justify-center transition-colors active:scale-95"
          id="scroll-to-top-float"
          aria-label="Voltar para o topo"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
}
