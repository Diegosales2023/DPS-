/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scale, Phone, Building2, Shield, Menu, X, Globe, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms' | 'cookies' | 'security') => void;
  onNavigateTo: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ onOpenPrivacy, onNavigateTo, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Serviços Especializados', href: 'servicos' },
    { label: 'Quem Somos', href: 'sobre' },
    { label: 'Diferenciais', href: 'diferenciais' },
    { label: 'Dúvidas Frequentes', href: 'duvidas' },
    { label: 'Contato', href: 'contato' },
  ];

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    onNavigateTo(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all font-sans" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigateTo('hero')} id="brand-logo">
            <div className="bg-slate-900 text-white p-2.5 rounded-xl shadow-lg shadow-slate-900/10 flex items-center justify-center border border-slate-800">
              <Scale className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <span className="block font-sans font-extrabold uppercase text-sm tracking-wider text-slate-900">
                DPS ADVOGADOS
              </span>
              <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest font-semibold">
                Daiane Sabedot Advocacia
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavigateTo(item.href)}
                className="text-slate-600 hover:text-cyan-600 font-medium text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-actions">
            <a
              href="tel:54991234567"
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-200 transition-all"
            >
              <Phone className="h-4 w-4" />
              (54) 99123-4567
            </a>
            <button
              onClick={onOpenConsultation}
              className="bg-slate-900 cursor-pointer hover:bg-slate-800 text-cyan-400 border border-cyan-500/20 text-xs font-bold py-2.5 px-4 rounded-xl uppercase tracking-wider transition-all shadow-md shadow-slate-900/10"
              id="header-consult-btn"
            >
              Simulador CPF
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3" id="mobile-menu-sec">
            <button
              onClick={onOpenConsultation}
              className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold py-1.5 px-2.5 rounded-lg uppercase tracking-wider"
              id="mobile-header-consult-btn"
            >
              Simulador CPF
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-cyan-600 transition-colors rounded-lg bg-gray-50 border border-gray-100"
              aria-label="Abrir Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md absolute top-20 left-0 w-full shadow-xl" id="mobile-drawer">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMobileNav(item.href)}
                className="w-full text-left py-3 px-4 rounded-lg bg-slate-50 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
              <a
                href="tel:54991234567"
                className="flex items-center justify-center gap-2 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 text-xs transition-all"
              >
                <Phone className="h-4 w-4" />
                (54) 99123-4567
              </a>
              <a
                href="https://wa.me/5554991234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 px-4 rounded-xl text-xs shadow-md shadow-green-600/10 transition-all"
              >
                WhatsApp
              </a>
            </div>

            <div className="text-center pt-3 flex justify-center gap-6 text-[10px] text-gray-500">
              <button onClick={() => { setMobileMenuOpen(false); onOpenPrivacy('privacy'); }} className="underline hover:text-cyan-600">
                Privacidade
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenPrivacy('terms'); }} className="underline hover:text-cyan-600">
                Termos
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenPrivacy('security'); }} className="underline hover:text-cyan-600">
                Compliance OAB
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
