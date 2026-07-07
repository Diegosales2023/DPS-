import React from 'react';
import { Mail, Phone, MapPin, HelpCircle, CheckCircle2, Building2, ExternalLink, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ formRef }: ContactSectionProps) {
  const faqs = [
    {
      q: 'Como posso confirmar se meu acordo ou boleto Paschoalotto é verdadeiro?',
      a: 'Todos os boletos de acordos gerados pela Paschoalotto são emitidos sob o CNPJ oficial 03.187.351/0001-38 e registrados eletronicamente na Febraban. Você pode validar a legitimidade verificando o DDA (Débito Direto Autorizado) no aplicativo de seu banco ou checando o beneficiário final antes do pagamento.'
    },
    {
      q: 'Posso parcelar a quitação das minhas parcelas em atraso?',
      a: 'Sim! Nossos credores parceiros autorizam descontos excepcionais de até 90% para quitação de contratos à vista, além de opções flexíveis de parcelamento do saldo devedor em guias mensais.'
    },
    {
      q: 'Quais são os números oficiais de WhatsApp da Paschoalotto?',
      a: 'Atendemos pelo WhatsApp de Negociação (B2C) no número (14) 3103-0000 e pelo canal institucional comercial (B2B) no número (14) 2121-0000. Lembre-se de sempre conferir o selo verde de conta oficial verificada.'
    },
    {
      q: 'Como minha marca pode contratar os serviços de atendimento ou cobrança?',
      a: 'Para contratar nossas soluções de BPO, SAC, Atendimento Digital ou Gestão de Ativos, envie uma mensagem para o nosso canal de Novos Negócios comercial@paschoalotto.com.br ou inicie uma conversa pelo WhatsApp (14) 2121-0000.'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-slate-50 border-t border-gray-100 font-sans" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact details + FAQs */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider text-brand-orange uppercase font-mono bg-brand-orange/10 py-1.5 px-3.5 rounded-full inline-block">
                CENTRAL DE ATENDIMENTO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Fale com nossos especialistas em Relacionamento
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prontos para te atender com o respeito, a agilidade e a segurança que você merece. Conecte-se instantaneamente conosco através dos nossos contatos de atendimento direto ou canais digitais.
              </p>
            </div>

            {/* Contacts Info list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="contact-info-list">
              <div className="p-5 bg-white border border-gray-100 rounded-xl space-y-2">
                <div className="flex items-center gap-3 text-brand-orange">
                  <Phone className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Central de Atendimento</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  0800 721 2100 <br />
                  (14) 3103-0000
                </p>
                <span className="text-[10px] text-gray-500 block">Segunda a Sexta, das 08h às 20h | Sábados, das 08h às 14h</span>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl space-y-2">
                <div className="flex items-center gap-3 text-brand-orange">
                  <Mail className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Contatos Digitais</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  ouvidoria@paschoalotto.com.br <br />
                  comercial@paschoalotto.com.br
                </p>
                <span className="text-[10px] text-gray-500 block">Resposta ágil em dias úteis</span>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl col-span-1 sm:col-span-2 space-y-2">
                <div className="flex items-center gap-3 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Sede Administrativa Principal</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  Rua Joaquim Anacleto Bueno, 1-45, Jardim Estoril <br />
                  Bauru - SP, CEP 17012-320
                </p>
                <span className="text-[10px] text-gray-500 block">Estrutura inteligente para alta escala nacional</span>
              </div>
            </div>

            {/* Quick Accordion Section (FAQ) */}
            <div id="duvidas" className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-brand-orange shrink-0" />
                Dúvidas Gerais Frequentes
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-100 rounded-xl p-5 space-y-1.5 shadow-sm" id={`faq-${index}`}>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{faq.q}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Informative Channels Panel (Replaces the Form completely) */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden" id="contact-info-panel">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <h3 className="font-sans font-extrabold text-xl text-slate-900">
                  Canais Oficiais de Relacionamento
                </h3>
                <p className="text-xs text-gray-500">
                  Conecte-se com os setores corretos da Paschoalotto em poucos segundos.
                </p>
              </div>

              <div className="space-y-4">
                {/* Channel 1: Negociação (B2C) */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:border-brand-orange/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-brand-orange/10 p-2 rounded-xl text-brand-orange">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold uppercase font-mono tracking-wide text-slate-900">
                          Negociação de Acordos (B2C)
                        </h4>
                        <p className="text-[10px] text-gray-500">Para clientes com parcelas ou contas em atraso</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono bg-brand-orange/15 text-brand-orange px-2 py-0.5 rounded-full font-bold">WhatsApp Oficial</span>
                  </div>
                  
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Fale diretamente no canal oficial verificado de cobrança Paschoalotto. Consulte seu CPF em total sigilo, visualize propostas com até 90% de desconto e emita boletos registrados Febraban de forma segura.
                  </p>
                  
                  <a
                    href="https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-2 cursor-pointer bg-green-600 hover:bg-green-755 text-white font-sans font-bold py-3 px-4 rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                    id="whats-b2c-direct-btn"
                  >
                    Iniciar Conversa no WhatsApp
                    <ExternalLink className="h-3.5 w-3.5 text-white" />
                  </a>
                </div>

                {/* Channel 2: Parcerias & Novos Negócios (B2B) */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:border-brand-orange/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-slate-900/10 p-2 rounded-xl text-slate-900">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold uppercase font-mono tracking-wide text-slate-900">
                          Soluções Empresariais (B2B)
                        </h4>
                        <p className="text-[10px] text-gray-500">Para grandes corporações e marcas parceiras</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono bg-slate-900/10 text-slate-850 px-2 py-0.5 rounded-full font-bold">Comercial</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Quer contratar as soluções da maior referência nacional de Customer Experience, cobrança omnichannel, BPO de atendimento ou inteligência artificial? Conecte-se com nossa equipe comercial.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <a
                      href="https://api.whatsapp.com/send?phone=5511930040689&text=Solicito%20Atendimento"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider"
                      id="whats-b2b-direct-btn"
                    >
                      WhatsApp Comercial
                    </a>
                    <a
                      href="mailto:comercial@paschoalotto.com.br"
                      className="cursor-pointer bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-sans font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider"
                      id="email-b2b-direct-btn"
                    >
                      E-mail Comercial
                    </a>
                  </div>
                </div>

                {/* Channel 3: Ouvidoria e Canal Ético */}
                <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-brand-orange shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase font-mono tracking-wide">Ouvidoria de Canal Ético</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Relatos, elogios ou reclamações formais</p>
                    </div>
                  </div>
                  <a
                    href="mailto:ouvidoria@paschoalotto.com.br"
                    className="text-[11px] font-bold text-brand-orange hover:underline shrink-0"
                    id="ouvidoria-link-btn"
                  >
                    ouvidoria@paschoalotto.com.br
                  </a>
                </div>

              </div>
              
              <div className="pt-2 flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                Segurança, agilidade e respeito em conformidade com a LGPD.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
