import React from 'react';
import { ShieldCheck, HeartPulse, Scale, RefreshCw, FileText, Landmark, HelpCircle, HardHat, FileWarning, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onContactFormFocus: () => void;
}

export default function Services({ onContactFormFocus }: ServicesProps) {
  const list = [
    {
      icon: <FileText className="h-8 w-8 text-brand-orange" />,
      title: 'Recuperação de Crédito & Cobrança Amigável',
      short: 'Soluções de cobrança ativa, receptiva e digital',
      desc: 'Abordagem especializada com foco na reabilitação financeira do consumidor. Oferecemos as melhores propostas com descontos reais aprovados diretamente pelos credores.',
      detail: 'Negociações humanizadas estruturadas sob as regras do Código de Defesa do Consumidor e em total conformidade com a LGPD.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-orange" />,
      title: 'Atendimento Omnichannel & CX',
      short: 'Experiência completa e integrada de relacionamento',
      desc: 'Central unificada de atendimento (SAC, Ouvidoria, Backoffice) operando em canais integrados de texto, voz, e-mail e mídias sociais para alto índice de resolutividade.',
      detail: 'Uso de tecnologias integradas para proporcionar jornadas fluidas e resoluções eficientes no primeiro contato.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-brand-orange" />,
      title: 'Agentes Digitais & Inteligência Artificial',
      short: 'Tecnologia cognitiva integrada de última geração',
      desc: 'Desenvolvemos assistentes de voz e texto inteligentes com processamento de linguagem natural (NLP) para agilizar acordos e automatizar interações de forma humanizada.',
      detail: 'Integrações seguras com WhatsApp Business API e os principais sistemas de gestão do mercado financeiro.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-orange" />,
      title: 'Acordo Fácil - Autoatendimento',
      short: 'Ambiente seguro para renegociação autônoma',
      desc: 'Plataforma digital integrada onde o próprio usuário pode consultar seu CPF em sigilo absoluto, visualizar descontos personalizados e gerar boletos registrados Febraban.',
      detail: 'Tecnologia avançada antifraude para a segurança total do pagamento do seu boleto de acordo.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-orange" />,
      title: 'Soluções de Cobrança para Grandes Empresas',
      short: 'Gestão estratégica de ativos corporativos',
      desc: 'Atuamos como parceiros oficiais dos maiores bancos, varejistas, operadoras de telecomunicações e distribuidoras de energia do país, com alta escalabilidade.',
      detail: 'Relatórios gerenciais completos e monitoramento de indicadores de performance em tempo real.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    },
    {
      icon: <FileWarning className="h-8 w-8 text-brand-orange" />,
      title: 'Auditoria de Cadastro & Higienização (BPO)',
      short: 'Enriquecimento de dados e inteligência cadastral',
      desc: 'Soluções completas de tratamento de base de dados, higienização, enriquecimento cadastral e modelagem preditiva para maximizar a assertividade dos contatos.',
      detail: 'Processamento veloz sob rigorosos padrões de segurança de dados e total aderência à legislação brasileira.',
      link: 'https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 border-y border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-brand-orange uppercase font-mono bg-brand-orange/10 py-1.5 px-3.5 rounded-full inline-block">
            NOSSAS SOLUÇÕES E TECNOLOGIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Relacionamento Inteligente e Recuperação de Crédito com Foco em Resultados
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Unimos vanguarda tecnológica a uma abordagem humanizada para aproximar pessoas e empresas. Escolha o serviço desejado e conecte-se com nossa central de atendimento em segundos.
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
                  <p className="text-[11px] font-medium text-brand-orange tracking-wide mt-0.5">{item.short}</p>
                </div>
                <p className="text-xs text-gray-650 leading-relaxed font-sans pt-1">
                  {item.desc}
                </p>
                <div className="border-t border-dashed border-gray-100 pt-3 text-[11px] text-gray-500 italic">
                  {item.detail}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block cursor-pointer bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-800 font-sans font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
                  id={`service-talk-btn-${index}`}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="bg-brand-dark rounded-2xl text-white p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Deseja contratar as soluções da Paschoalotto para a sua Empresa?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Oferecemos plataformas avançadas de cobrança omnichannel, SAC qualificado, inteligência artificial integrada e recuperação especializada de ativos com alta escala para sua carteira.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 cursor-pointer text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-orange/20 active:scale-[0.98] w-full md:w-auto relative z-10 animate-pulse"
            id="emergency-consult-btn"
          >
            Falar com Consultor B2B
          </a>
        </div>
      </div>
    </section>
  );
}
