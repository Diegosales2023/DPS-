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
      icon: <Award className="h-5 w-5 text-cyan-500" />,
      title: 'Especialização em Direito Securitário & Saúde',
      desc: 'Formação com foco em pleito de liminares contra reajustes abusivos e negativas de operadoras de saúde.'
    },
    {
      icon: <Clock className="h-5 w-5 text-cyan-500" />,
      title: 'Atendimento Ágil de Plantão',
      desc: 'Atuação célere em casos civis emergenciais envolvendo remédios de alto custo ou cirurgias urgentes.'
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-cyan-500" />,
      title: 'Foco na Solução sem Custos Abusivos',
      desc: 'Análise ética de contratos baseada em jurisprudência do Superior Tribunal de Justiça (STJ).'
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
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-8 text-white border border-slate-800 shadow-2xl overflow-hidden aspect-video flex flex-col justify-between">
              {/* Abstract lights in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-cyan-400" />
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-cyan-400">Escritório de Advocacia Registrado</span>
                </div>
                <span className="text-[9px] font-mono bg-cyan-900/40 border border-cyan-800 px-2 py-0.5 rounded-full text-cyan-300">OAB/RS</span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-sans font-bold text-2xl leading-tight">
                  Drª Daiane dos Passos Sabedot
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  CNPJ: 49.421.105/0001-03 <br />
                  DAIANE DOS PASSOS SABEDOT - SOCIEDADE INDIVIDUAL DE ADVOCACIA
                </p>
                <div className="h-0.5 w-12 bg-cyan-500" />
                <p className="text-xs text-slate-300 italic">
                  &ldquo;A proteção do equilíbrio contratual é um direito intocável do consumidor. Nossa meta é restabelecer a igualdade face aos abusos bancários e securitários com eficiência digital e proximidade humana.&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4" id="metrics-grid">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">100%</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Atendimento Digital</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">48h</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Análise de Contrato</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">STJ</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Fundamentação Sólida</span>
              </div>
            </div>
          </motion.div>

          {/* Text Info Side */}
          <div className="space-y-6" id="about-info-side">
            <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase font-mono bg-cyan-100/60 py-1.5 px-3.5 rounded-full inline-block">
              SOBRE O ESCRITÓRIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Excelência jurídica, tecnologia e atendimento focado nos seus direitos
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fundada pela Drª Daiane dos Passos Sabedot, a sociedade individual de advocacia nasce com o compromisso de simplificar a busca por justiça financeira e contratual em todo o território nacional, com expressivas atividades no Rio Grande do Sul (Serra Gaúcha, Bento Gonçalves).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Atuamos nos moldes de excelência das grandes corporações financeiras (BPO / Atendimento Inteligente), porém garantindo um acompanhamento meticuloso e humanizado focado em desarmar as armadilhas contratuais inseridas em empréstimos de veículos, seguros embutidos e negativas arbitrárias de saúde.
            </p>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-cyan-50 p-2.5 rounded-lg border border-cyan-100/60 shrink-0 text-cyan-600">
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
            <p className="text-xs font-bold tracking-wider text-cyan-600 uppercase font-mono">Diferenciais Competitivos</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">Por que escolher Daiane Sabedot Advocacia?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="diferenciais-cards">
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-cyan-600 font-mono tracking-widest block uppercase">Tecnologia de Ponta</span>
              <h4 className="font-bold text-slate-900 text-sm">Assinatura Digital Descomplicada</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Você assina procurações e contratos diretamente de seu smartphone pelo WhatsApp através de validadores digitais com valor jurídico absoluto homologado pelo ICP-Brasil. Sem precisar ir a cartórios.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-cyan-600 font-mono tracking-widest block uppercase">Transparência e Honestidade</span>
              <h4 className="font-bold text-slate-900 text-sm">Controle de Processos em Tempo Real</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Você recebe relatórios das movimentações processuais direto no e-mail ou via comunicados oficiais em áudio. Entendemos que ansiedade se combate com presença e informações claras e acessíveis.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-cyan-600 font-mono tracking-widest block uppercase">Custeio Estruturado</span>
              <h4 className="font-bold text-slate-900 text-sm">Honorários Baseados em Êxito</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Alinhamos nossos interesses aos seus. Nas ações de revisões bancárias ou reembolsos tributários, uma parcela considerável de nossa remuneração decorre estritamente do montante financeiro que restabelecemos para você.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
