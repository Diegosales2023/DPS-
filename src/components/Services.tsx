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
      icon: <FileText className="h-8 w-8 text-cyan-600" />,
      title: 'Direito da Saúde & Negativas de Planos',
      short: 'Medicamentos, cirurgias e reajustes absurdos',
      desc: 'Combate direto a negativas de coberturas de tratamentos de alto custo, próteses médicas, terapias especiais e remédios biológicos/oncológicos. Atuação rápida com pedido de liminares emergenciais tutelares.',
      detail: 'Revisão jurídica de reajustes abusivos por mudança de faixa etária ou aumentos anuais sem justa causa aplicada aos planos individuais e coletivos.'
    },
    {
      icon: <Landmark className="h-8 w-8 text-cyan-600" />,
      title: 'Direito Bancário & Revisional de Juros',
      short: 'Redução de parcelas de financiamento e empréstimos',
      desc: 'Mapeamento minucioso de cobranças abusivas de juros que superam a taxa média estabelecida pelo Banco Central. Revisão judicial de cláusulas penais leoninas e quitações facilitadas.',
      detail: 'Prevenção de busca e apreensão de veículos, suspensão de leilões residenciais e combate a tarifas ilegais embutidas sorrateiramente em contratos bancários.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-cyan-600" />,
      title: 'Direito de Seguros & Sinistros Recusados',
      short: 'Cobrança judicial de indenizações não pagas',
      desc: 'Representação técnica contra seguradoras em casos de negativas infundadas de sinistros de Seguro de Vida, Seguro Automotivo, Danos Patrimoniais, Seguro Agrícola e de Carga.',
      detail: 'Anulação de cláusulas restritivas ambíguas ou leoninas, garantindo a restituição integral dos direitos da apólice contratada conforme o CDC.'
    },
    {
      icon: <FileWarning className="h-8 w-8 text-cyan-600" />,
      title: 'Combate à Venda Casada de Seguros',
      short: 'Garantia de ressarcimento de valores cobrados indevidamente',
      desc: 'Reconhecimento de ilegalidade de seguros inseridos de forma oculta ou obrigatória nos financiamentos de carros ou empréstimos pessoais (venda casada).',
      detail: 'Exigência legal do ressarcimento em dobro de tarifas de avaliação, tarifa de cadastro irregular e prêmios de seguro não autorizados assinados sob coação.'
    },
    {
      icon: <Scale className="h-8 w-8 text-cyan-600" />,
      title: 'Isenção de Imposto de Renda Tributário',
      short: 'Benefício fiscal para aposentados com moléstias graves',
      desc: 'Assessoramento jurídico completo para que servidores públicos aposentados, pensionistas e inativos diagnosticados de determinadas doenças usufruam da isenção garantida pela Lei 7.713/88.',
      detail: 'Recuperação administrativa e judicial das parcelas tributárias retidas indevidamente na fonte nos últimos 5 anos de vigência da enfermidade.'
    },
    {
      icon: <HardHat className="h-8 w-8 text-cyan-600" />,
      title: 'Compliance para Operadoras de Seguros',
      short: 'Consultoria preventiva e empresarial para corretoras de seguros',
      desc: 'Adequação ética do portfólio de seguros corporativos das empresas, revisando contratos de adesão jurídica e regulamentação SUSEP.',
      detail: 'Mitigação de multas regulatórias, proteção ao consumidor corporativo e auditorias de termos contratuais para assegurar blindagem no judiciário.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 border-y border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase font-mono bg-cyan-100/60 py-1.5 px-3.5 rounded-full inline-block">
            NOSSOS SERVIÇOS E COMPETÊNCIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Defesa Estratégica em Seguros, Direito Bancário e Saúde
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Com alto rigor profissional comprometido em reestabelecer o equilíbrio de forças, nosso escritório foca no restauro financeiro de cidadãos e empresas contra abusividades cometidas por instituições bancárias e seguradoras.
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
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{item.title}</h3>
                  <p className="text-[11px] font-medium text-cyan-700 tracking-wide mt-0.5">{item.short}</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans pt-1">
                  {item.desc}
                </p>
                <div className="border-t border-dashed border-gray-100 pt-3 text-[11px] text-gray-500 italic">
                  {item.detail}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onContactFormFocus}
                  className="w-full cursor-pointer bg-slate-55 shadow-sm hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-800 font-sans font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Preocupado em ter seu veículo apreendido ou perder seu plano de saúde?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Nossa banca de especialistas trabalha para deferir liminares em tempo recorde (geralmente entre 24 a 48 horas). Proteja o seu patrimônio e a sua integridade física com apoio do nosso setor contencioso.
            </p>
          </div>
          <button
            onClick={onContactFormFocus}
            className="shrink-0 cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-600/20 active:scale-[0.98] w-full md:w-auto relative z-10"
            id="emergency-consult-btn"
          >
            Falar com Advogado de Plantão
          </button>
        </div>

      </div>
    </section>
  );
}
