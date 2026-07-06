import React from 'react';
import { UserCheck, Award, Sparkles, Scale, BookOpen, Clock, HeartHandshake, Building2, ShieldCheck, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="h-5 w-5 text-brand-orange" />,
      title: 'Liderança Nacional Comprovada',
      desc: 'Mais de 25 anos de atuação consolidada como a principal referência brasileira em recuperação de crédito e atendimento de alta escala.'
    },
    {
      icon: <Clock className="h-5 w-5 text-brand-orange" />,
      title: 'Autoatendimento Ágil e Seguro',
      desc: 'Sistemas inteligentes e canais integrados de inteligência artificial para que você resolva suas negociações com facilidade.'
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-brand-orange" />,
      title: 'Negociação Humanizada',
      desc: 'Cuidamos do relacionamento de ponta a ponta com profundo respeito, empatia e transparência em cada contato.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Presentation side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            id="about-visual-side"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-white border border-brand-medium/40 shadow-2xl overflow-hidden aspect-video flex flex-col justify-between">
              {/* Abstract lights in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-brand-orange" />
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-brand-pink">Plataforma Credenciada Oficial</span>
                </div>
                <span className="text-[9px] font-mono bg-brand-medium/40 border border-brand-medium/60 px-2 py-0.5 rounded-full text-brand-pink">25+ ANOS</span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-sans font-bold text-2xl leading-tight text-white">
                  Paschoalotto Serviços Financeiros
                </h3>
                <p className="text-xs text-gray-450 font-mono leading-relaxed">
                  Sede Principal: Bauru - SP | Presença em todo o Brasil <br />
                  Líder nacional em Tecnologia de Cobrança & Relacionamento Digital
                </p>
                <div className="h-0.5 w-12 bg-brand-orange" />
                <p className="text-xs text-slate-350 italic">
                  &ldquo;Unimos tecnologia de ponta, inteligência artificial avançada e empatia humana para construir pontes de negociação amigáveis e eficientes entre pessoas e as maiores marcas do Brasil.&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4" id="metrics-grid">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">25+ Anos</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">De História</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">10 Mil+</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Colaboradores</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">100%</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Digital e Seguro</span>
              </div>
            </div>
          </motion.div>

          {/* Text Info Side */}
          <div className="space-y-6" id="about-info-side">
            <span className="text-xs font-bold tracking-wider text-brand-orange uppercase font-mono bg-brand-orange/10 py-1.5 px-3.5 rounded-full inline-block">
              QUEM SOMOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Inovação digital, solidez e relacionamento humano de alto impacto
            </h2>
            <p className="text-gray-650 text-sm leading-relaxed">
              Com mais de duas décadas de liderança de mercado, a Paschoalotto consolidou-se como a parceira estratégica predileta das principais instituições financeiras, bancos, operadoras de seguros e companhias de grande porte do Brasil. Nossa sede em Bauru/SP centraliza tecnologia de vanguarda que atende milhões de pessoas anualmente.
            </p>
            <p className="text-gray-650 text-sm leading-relaxed">
              Trabalhamos incansavelmente para transformar o atendimento. Integramos canais avançados de inteligência artificial cognitiva e atendimento via WhatsApp para que você possa renegociar pendências contratuais, gerar guias de financiamento autenticadas de forma rápida e segura, com os maiores abatimentos autorizados do setor.
            </p>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-brand-orange/5 p-2.5 rounded-lg border border-brand-orange/15 shrink-0 text-brand-orange">
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
            <p className="text-xs font-bold tracking-wider text-brand-orange uppercase font-mono">Diferenciais de Mercado</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">Por que escolher as Soluções Paschoalotto?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="diferenciais-cards">
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-brand-orange font-mono tracking-widest block uppercase">Tecnologia Própria</span>
              <h4 className="font-bold text-slate-900 text-sm">Canais Digitais com IA Cognitiva</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Desenvolvemos canais de relacionamento inteligentes e integrados que respondem de forma natural, segura e imediata, resolvendo pendências sem filas de espera ou demoras de atendimento físico.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-brand-orange font-mono tracking-widest block uppercase">Segurança Blindada</span>
              <h4 className="font-bold text-slate-900 text-sm">Garantia Contra Fraudes de Boleto</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Todos as propostas e boletos eletrônicos disponibilizados em nossos canais de autoatendimento contam com registro bancário unificado e chaves oficiais Febraban. Transação garantida contra intermediários ilegais.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 space-y-3">
              <span className="text-xs font-bold text-brand-orange font-mono tracking-widest block uppercase"> CX de Alta Performance </span>
              <h4 className="font-bold text-slate-900 text-sm">Retenção de Clientes e Performance B2B</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-sans">
                Para nossos parceiros corporativos, oferecemos infraestrutura dedicada e inteligente para acelerar a recuperação de ativos com foco na fidelidade e excelente experiência do consumidor final.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
