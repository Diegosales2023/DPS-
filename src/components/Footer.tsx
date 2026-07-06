/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Heart, Shield, Landmark, MapPin, Phone, Mail, ExternalLink, HelpCircle, Building2 } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms' | 'cookies' | 'security') => void;
  onNavigateTo: (sectionId: string) => void;
}

export default function Footer({ onOpenPrivacy, onNavigateTo }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 py-16 font-sans shrink-0" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Building2 className="h-6 w-6 text-brand-orange" />
              <span className="font-extrabold uppercase text-xs tracking-wider text-brand-orange">
                PASCHOALOTTO
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              <strong>PASCHOALOTTO SERVIÇOS DE COBRANÇA E RELACIONAMENTO S/A</strong> (CNPJ: <strong>03.187.351/0001-38</strong>). <br />
              Líder nacional em recuperação de ativos, atendimento omnichannel e soluções inteligentes de relacionamento para as maiores marcas, bancos e varejistas do Brasil.
            </p>
            <div className="text-[10px] text-gray-500 font-mono">
              Líder em Customer Experience (CX) e Soluções Digitais no Brasil.
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Atalhos Úteis
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigateTo('servicos')} className="hover:text-brand-orange text-left transition-colors cursor-pointer bg-transparent">
                  Nossas Soluções e Tecnologias
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('sobre')} className="hover:text-brand-orange text-left transition-colors cursor-pointer bg-transparent">
                  Quem Somos e História
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('diferenciais')} className="hover:text-brand-orange text-left transition-colors cursor-pointer bg-transparent">
                  Diferenciais de Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('duvidas')} className="hover:text-brand-orange text-left transition-colors cursor-pointer bg-transparent">
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('contato')} className="hover:text-brand-orange text-left transition-colors cursor-pointer bg-transparent">
                  Fale Direto com nosso Atendimento
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contacts info */}
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Contato & Sede
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  Rua Joaquim Anacleto Bueno, 1-45, Jardim Estoril <br />
                  Bauru - SP, CEP 17012-320
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <span>0800 721 2100 | (14) 3103-0000</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-brand-orange shrink-0" />
                <span>ouvidoria@paschoalotto.com.br</span>
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Governança e LGPD
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Todo o manejo e processamento preliminar de CPFs inseridos em nosso simulador obedece rigorosamente às diretrizes nacionais de proteção de dados (LGPD). Os dados são apagados sob solicitação.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => onOpenPrivacy('privacy')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-brand-orange shrink-0" />
                Política de Privacidade
              </button>
              <button
                onClick={() => onOpenPrivacy('terms')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-brand-orange shrink-0" />
                Termos de Uso do Portal
              </button>
              <button
                onClick={() => onOpenPrivacy('cookies')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-brand-orange shrink-0" />
                Política de Cookies
              </button>
              <button
                onClick={() => onOpenPrivacy('security')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-brand-orange shrink-0" />
                Ética e Regras de Segurança
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500">
          
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} PASCHOALOTTO SERVIÇOS DE COBRANÇA E RELACIONAMENTO S/A. Todos os direitos reservados.</p>
            <p>CNPJ: 03.187.351/0001-38 — Sede Administrativa: Bauru - SP. Atendimento e negociações 100% integradas e seguras.</p>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 text-[10px] text-brand-orange/80">
            <span>Desenvolvido para <strong>Atendimento, Cobrança e Customer Experience (CX)</strong></span>
          </div>

        </div>

      </div>
    </footer>
  );
}
