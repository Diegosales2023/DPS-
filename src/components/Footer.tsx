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
              <Scale className="h-6 w-6 text-cyan-400" />
              <span className="font-extrabold uppercase text-xs tracking-wider">
                DPS ADVOGADOS
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              <strong>DAIANE DOS PASSOS SABEDOT - SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong> S/S (CNPJ: <strong>49.421.105/0001-03</strong>). <br />
              Atuação jurídica focada no reestabelecimento do equilíbrio comercial no ecossistema de Financiamentos Bancários, Saúde e Seguros.
            </p>
            <div className="text-[10px] text-gray-500 font-mono">
              Inscrição OAB Ordem dos Advogados do Brasil (Seccional Rio Grande do Sul).
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Atalhos Úteis
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigateTo('servicos')} className="hover:text-cyan-400 text-left transition-colors cursor-pointer bg-transparent">
                  Nossos Serviços Jurídicos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('sobre')} className="hover:text-cyan-400 text-left transition-colors cursor-pointer bg-transparent">
                  Quem Somos e Trajetória
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('diferenciais')} className="hover:text-cyan-400 text-left transition-colors cursor-pointer bg-transparent">
                  Diferenciais de Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('duvidas')} className="hover:text-cyan-400 text-left transition-colors cursor-pointer bg-transparent">
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('contato')} className="hover:text-cyan-400 text-left transition-colors cursor-pointer bg-transparent">
                  Fale Direto com a Dra. Daiane
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
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Rua Saldanha Marinho, 435, Sala 302, Centro <br />
                  Bento Gonçalves - RS, CEP 95700-010
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>(54) 99123-4567 | (54) 3055-9000</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>contato@dpsadvogados.adv.br</span>
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest font-mono">
              Governança e RGPD
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Todo o manejo e processamento preliminar de CPFs inseridos em nosso simulador obedece rigorosamente às diretrizes nacionais de proteção de dados. Os dados são apagados sob demanda de seu titular.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => onOpenPrivacy('privacy')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-cyan-400 shrink-0" />
                Política de Privacidade
              </button>
              <button
                onClick={() => onOpenPrivacy('terms')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-cyan-400 shrink-0" />
                Termos de Uso do Portal
              </button>
              <button
                onClick={() => onOpenPrivacy('cookies')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-cyan-400 shrink-0" />
                Política de Cookies
              </button>
              <button
                onClick={() => onOpenPrivacy('security')}
                className="text-left cursor-pointer hover:text-white transition-colors text-xs flex items-center gap-1.5 underline"
              >
                <Shield className="h-3 w-3 text-cyan-400 shrink-0" />
                Ética e Regras de Segurança
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500">
          
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} DAIANE DOS PASSOS SABEDOT - SOCIEDADE INDIVIDUAL DE ADVOCACIA. Todos os direitos reservados.</p>
            <p>Conformidade Estrita com as Portarias OAB/RS e o Código de Ética e Disciplina da OAB (Resolução nº 02/2015).</p>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 text-[10px] text-cyan-400/80">
            <span>Desenvolvido em conformidade para <strong>Seguros & Juros Revisional</strong></span>
          </div>

        </div>

      </div>
    </footer>
  );
}
