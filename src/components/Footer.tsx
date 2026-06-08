/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Heart, Shield, Landmark, MapPin, Phone, Mail, ExternalLink, HelpCircle } from 'lucide-react';

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
              <Scale className="h-6 w-6 text-emerald-400" />
              <span className="font-extrabold uppercase text-xs tracking-wider text-emerald-400">
                BULGARELLI ADVOGADOS
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              <strong>BULGARELLI SOCIEDADE DE ADVOGADOS</strong> S/S (CNPJ: <strong>10.461.172/0001-16</strong>). <br />
              Atuação jurídica focada no restabelecimento do equilíbrio contratual em contratos de financiamento, cessão de crédito e renegociação consensual ativa.
            </p>
            <div className="text-[10px] text-gray-500 font-mono">
              Inscrição OAB Ordem dos Advogados do Brasil (Seccional São Paulo).
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Atalhos Úteis
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigateTo('servicos')} className="hover:text-emerald-400 text-left transition-colors cursor-pointer bg-transparent">
                  Nossos Serviços Jurídicos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('sobre')} className="hover:text-emerald-400 text-left transition-colors cursor-pointer bg-transparent">
                  Quem Somos e Trajetória
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('diferenciais')} className="hover:text-emerald-400 text-left transition-colors cursor-pointer bg-transparent">
                  Diferenciais de Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('duvidas')} className="hover:text-emerald-400 text-left transition-colors cursor-pointer bg-transparent">
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('contato')} className="hover:text-emerald-400 text-left transition-colors cursor-pointer bg-transparent">
                  Fale Direto com nossos Especialistas
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
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Avenida Paulista, 1776, 3º andar, sala 301, Bela Vista <br />
                  São Paulo - SP, CEP 01310-200
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>0800 725 0800 | (11) 3336-0800</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>contato@bulgarelliadv.com.br</span>
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
                <Shield className="h-3 w-3 text-emerald-400 shrink-0" />
                Política de Privacidade
              </button>
              <button
                onClick={() => onOpenPrivacy('terms')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-emerald-400 shrink-0" />
                Termos de Uso do Portal
              </button>
              <button
                onClick={() => onOpenPrivacy('cookies')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-emerald-400 shrink-0" />
                Política de Cookies
              </button>
              <button
                onClick={() => onOpenPrivacy('security')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-emerald-400 shrink-0" />
                Ética e Regras de Segurança
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500">
          
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} BULGARELLI SOCIEDADE DE ADVOGADOS. Todos os direitos reservados.</p>
            <p>Conformidade Estrita com as Deliberações OAB/SP e o Código de Ética e Disciplina da OAB (Resolução nº 02/2015).</p>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 text-[10px] text-emerald-400/80">
            <span>Desenvolvido em conformidade para <strong>Acordos Consensuais e Crédito</strong></span>
          </div>

        </div>

      </div>
    </footer>
  );
}
