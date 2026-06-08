/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserCheck, Award, Sparkles, Scale, BookOpen, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="h-5 w-5 text-emerald-500" />,
      title: 'Solidez no Setor de Créditos e Financiamentos',
      desc: 'Vasta e sólida atuação em conciliações bilaterais, repactuações de juros abusivos e quitação consensual de parcelas.'
    },
    {
      icon: <Clock className="h-5 w-5 text-emerald-500" />,
      title: 'Suporte de Autoatendimento Rápido',
      desc: 'Canais digitais inteligentes integrados para emissão rápida de guias autenticadas, livre de fraudes digitais.'
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-emerald-500" />,
      title: 'Alinhamento Integral à OAB e ao CDC',
      desc: 'Análise técnica de cláusulas leoninas balizada estritamente nas súmulas do Superior Tribunal de Justiça (STJ).'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Presentation side (Placeholder with rich modern vector style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            id="about-visual-side"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 p-8 text-white border border-slate-800 shadow-2xl overflow-hidden aspect-video flex flex-col justify-between">
              {/* Abstract lights in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-emerald-400" />
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-emerald-400">Escritório Geral Credenciado</span>
                </div>
                <span className="text-[9px] font-mono bg-emerald-900/40 border border-emerald-800 px-2 py-0.5 rounded-full text-emerald-300">OAB/SP</span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-sans font-bold text-2xl leading-tight text-white">
                  Bulgarelli Sociedade de Advogados
                </h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  CNPJ: 10.461.172/0001-16 <br />
                  Banca especializada em Governança de Ativos e Negociações Bancárias
                </p>
                <div className="h-0.5 w-12 bg-emerald-500" />
                <p className="text-xs text-slate-300 italic">
                  &ldquo;Aliamos tecnologia de ponta, governança corporativa de crédito e ética advocatícia sólida para repactuar pendências contratuais, devolvendo equilíbrio orçamentário real e garantias fundamentais aos consumidores e investidores.&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4" id="metrics-grid">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">100%</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Seguro (LGPD)</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">Simples</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Autoatendimento</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">STJ / OAB</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Fidelidade Legal</span>
              </div>
            </div>
          </motion.div>

          {/* Text Info Side */}
          <div className="space-y-6" id="about-info-side">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase font-mono bg-emerald-100/60 py-1.5 px-3.5 rounded-full inline-block">
              SOBRE O ESCRITÓRIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Excelência jurídica, autoatendimento e renegociações justas de contratos
            </h2>
            <p className="text-gray-650 text-sm leading-relaxed">
              Registrado sob o CNPJ 10.461.172/0001-16, Bulgarelli Sociedade de Advogados possui longa trajetória de destaque nacional na assessoria empresarial bancária e soluções consensuais. Conectamos nossa vanguarda de infraestrutura digital às diretrizes de governança exigidas pelo setor de crédito.
            </p>
            <p className="text-gray-650 text-sm leading-relaxed">
              Atuamos oferecendo canais modernos de autoatendimento, simulações integradas de abatimentos de juros, amortização programada de parcelas em aberto com Banco GM / Chevrolet e expurgo de venda casada de seguros não solicitados a fim de restabelecer o equilíbrio e manter seu score livre de restrições.
            </p>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100/60 shrink-0 text-emerald-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Diferenciais Banner (Bento Style) */}
        <div id="diferenciais" className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-wider text-emerald-600 uppercase font-mono">Diferenciais Competitivos</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">Por que escolher Bulgarelli Advogados?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="diferenciais-cards">
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-emerald-600 font-mono tracking-widest block uppercase">Tecnologia Certificada</span>
              <h4 className="font-bold text-slate-900 text-sm">Validadores e Acordo Digital</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Assine refinanciamentos, aditivos ou minutas de conciliação de forma 100% digital diretamente do seu smartphone. Sem burocracias, custos com deslocamentos ou taxas de cartório.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-emerald-600 font-mono tracking-widest block uppercase">Segurança Operacional</span>
              <h4 className="font-bold text-slate-900 text-sm">Garantia Contra Fraudes de Boletos</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Nossos boletos e propostas de quitação emitidos contam com registro eletrônico unificado assegurado pelo emissor bancário. Tenha a certeza de estar pagando a guia oficial correta da instituição credenciada.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-emerald-600 font-mono tracking-widest block uppercase">Boleto Registrado</span>
              <h4 className="font-bold text-slate-900 text-sm">Abatimentos Facilitados em Boletos Únicos</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Priorizamos uma atuação de autoatendimento onde você visualiza condições de negociação completas e realiza a quitação de todo o saldo em boleto eletrônico parametrizado sob as regras da Febraban.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
