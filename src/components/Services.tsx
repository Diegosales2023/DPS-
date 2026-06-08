/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, HeartPulse, Scale, RefreshCw, FileText, Landmark, HelpCircle, HardHat, FileWarning } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onContactFormFocus: () => void;
}

export default function Services({ onContactFormFocus }: ServicesProps) {
  const list = [
    {
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      title: 'Recuperação de Ativos e Cobrança Extrajudicial',
      short: 'Quitação amigável e restabelecimento de crédito',
      desc: 'Atuação especializada na regularização de carteiras de empréstimos, consórcios e financiamentos de automóveis Banco GM / Chevrolet, visando acordos céleres com altos descontos sobre juros devidos.',
      detail: 'Abordagem humana e respeitosa, estruturada sob as regras do Código de Defesa do Consumidor e em total conformidade com a LGPD.'
    },
    {
      icon: <Landmark className="h-8 w-8 text-emerald-600" />,
      title: 'Defesa em Juros e Revisão Bancária',
      short: 'Mapeamento de encargos abusivos em financiamentos',
      desc: 'Análise técnica minuciosa de taxas de juros contratuais que superam as médias de mercado. Identificação de cobranças ilegais que oneram o Custo Efetivo Total (CET) do veículo.',
      detail: 'Suspensão de ações judiciais de busca e apreensão e auxílio qualificado no alongamento seguro de prazos e amortização programada do saldo devedor.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
      title: 'Cessão de Crédito e Assuntos Corporativos',
      short: 'Consultoria para cessões bilaterais de grande porte',
      desc: 'Suporte especializado em estruturação contratual, validação de garantias fiduciárias, análise de risco em cessões de carteiras e governança corporativa de crédito.',
      detail: 'Práticas integradas e alinhadas aos mais modernos conceitos jurídicos do mercado empresarial financeiro e auditorias sistêmicas.'
    },
    {
      icon: <FileWarning className="h-8 w-8 text-emerald-600" />,
      title: 'Combate à Venda Casada de Seguros',
      short: 'Extirpação de tarifas ocultas em financiamentos',
      desc: 'Impugnação de prêmios de seguro prestamistas ou de proteção financeira embutidos de forma obrigatória em seus contratos sem consentimento prévio claro.',
      detail: 'Exigência de estorno ou compensação de tarifas de avaliação e taxas de cadastro abusivas não usufruídas na pactuação.'
    },
    {
      icon: <Scale className="h-8 w-8 text-emerald-600" />,
      title: 'Acordo Fácil - Autoatendimento Inteligente',
      short: 'Fomento a conciliações de forma rápida e segura',
      desc: 'Integração de canais automatizados sob tutela jurídica para desburocratizar a emissão de 2ª via de parcelas vigentes e quitações à vista, combatendo boletos falsos na internet.',
      detail: 'Prazos flexibilizados de liquidação e reentrada em fluxos regulares de pagamento com respaldo legal de ponta a ponta.'
    },
    {
      icon: <HardHat className="h-8 w-8 text-emerald-600" />,
      title: 'Contencioso Geral & Compliance de Crédito',
      short: 'Blindagem jurídica e assessoria regulatória OAB',
      desc: 'Representação em litígios complexos cíveis de natureza financeira, reduzindo passivos processuais, mitigando fraudes e garantindo segurança jurídica nas negociações.',
      detail: 'Atendimento estrito das diretrizes éticas brasileiras, garantindo transparência impecável e solidez no mercado financeiro.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 border-y border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase font-mono bg-emerald-100/60 py-1.5 px-3.5 rounded-full inline-block">
            NOSSOS SERVIÇOS E COMPETÊNCIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gestão Estratégica de Regularização de Crédito e Assuntos Bancários
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Unimos vanguarda tecnológica a uma atuação jurídica de excelência ética sob coordenação de quem entende o setor financeiro. Oferecemos as melhores propostas e caminhos para equilibrar pendências.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid-list">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all flex flex-col justify-between"
              id={`service-card-${index}`}
            >
              <div className="space-y-4">
                <div className="bg-slate-55 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{item.title}</h3>
                  <p className="text-[11px] font-medium text-emerald-700 tracking-wide mt-0.5">{item.short}</p>
                </div>
                <p className="text-xs text-gray-650 leading-relaxed font-sans pt-1">
                  {item.desc}
                </p>
                <div className="border-t border-dashed border-gray-100 pt-3 text-[11px] text-gray-500 italic">
                  {item.detail}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onContactFormFocus}
                  className="w-full cursor-pointer bg-slate-50 shadow-sm hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-800 font-sans font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
                  id={`service-talk-btn-${index}`}
                >
                  Consultar Viabilidade
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="bg-slate-900 rounded-2xl text-white p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Preocupado com ações de busca e apreensão ou quer regularizar seu veículo?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Negociamos parcelas vencidas e futuras em canais amigáveis de cooperação mútua com os principais credenciados do país. Regularize o seu score e resguarde sua estabilidade orçamentária rapidamente.
            </p>
          </div>
          <button
            onClick={onContactFormFocus}
            className="shrink-0 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] w-full md:w-auto relative z-10"
            id="emergency-consult-btn"
          >
            Falar com nossa Equipe pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
