/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, Scale, ExternalLink, RefreshCw, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ formRef }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    demanda: 'Quitação Amigável com Desconto (B2C)',
    mensagem: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handlePhoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.substring(0, 11);

    if (val.length > 10) {
      val = val.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (val.length > 6) {
      val = val.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (val.length > 2) {
      val = val.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    }

    setFormData({ ...formData, telefone: val });
    if (errors.telefone) setErrors({ ...errors, telefone: '' });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome completo é obrigatório.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Insira um e-mail válido.';
    }
    if (!formData.telefone.trim() || formData.telefone.length < 14) {
      newErrors.telefone = 'Insira um telefone/WhatsApp completo.';
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Descreva brevemente sua necessidade ou contrato.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setFormState('submitting');
    setTimeout(() => {
      setFormState('submitted');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      demanda: 'Quitação Amigável com Desconto (B2C)',
      mensagem: ''
    });
    setFormState('idle');
  };

  const getWhatsAppLink = () => {
    const isB2B = formData.demanda.includes('B2B') || formData.demanda.includes('Corporativas');
    const number = isB2B ? '551421210000' : '551431030000';
    const text = isB2B 
      ? `Olá, comercial Paschoalotto. Realizei o preenchimento no site para soluções empresariais em nome de ${formData.nome}. Gostaria de receber uma proposta comercial.`
      : `Olá, equipe Paschoalotto. Realizei o preenchimento da ficha cadastral para a área de ${formData.demanda} sob o nome de ${formData.nome}. Desejo consultar minhas opções de acordo.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

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
                Prontos para te atender com o respeito, a agilidade e a segurança que você merece. Preencha os campos ao lado para direcionar seu caso ou utilize nossos contatos de atendimento direto.
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

          {/* Right Column: Dynamic Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden" id="contact-form-container">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {formState === 'submitted' ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                  id="form-success-state"
                >
                  <div className="h-16 w-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center border border-brand-orange/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 font-sans">
                      Obrigado, {formData.nome.split(' ')[0]}!
                    </h3>
                    <p className="text-xs text-gray-600 max-w-sm">
                      Seus dados foram integrados. Para garantir prioridade absoluta de atendimento, clique no botão abaixo para falar agora mesmo no nosso WhatsApp correspondente ao seu interesse.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl w-full text-left space-y-2 text-xs">
                    <p className="text-slate-500 font-mono font-semibold uppercase tracking-wider text-[10px]">Dados da Solicitação:</p>
                    <p className="text-slate-700"><strong>Interesse:</strong> {formData.demanda}</p>
                    <p className="text-slate-700"><strong>Contato:</strong> {formData.telefone} | {formData.email}</p>
                  </div>

                  <div className="w-full space-y-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-green-655 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg shadow-green-600/10 transition-all cursor-pointer"
                      id="whats-direct-form"
                    >
                      Conversar no WhatsApp
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    
                    <button
                      onClick={handleReset}
                      className="text-slate-500 font-medium text-xs hover:text-slate-800 underline transition-all bg-transparent"
                      id="reset-form-btn"
                    >
                      Enviar outro interesse
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-sans font-extrabold text-xl text-slate-900">
                      Canal Digital Integrado
                    </h3>
                    <p className="text-xs text-gray-500">
                      B2C de Negociação de Dívidas ou B2B de Soluções Corporativas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Nome Input */}
                    <div>
                      <label htmlFor="form-nome" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Seu nome completo / Empresa
                      </label>
                      <input
                        id="form-nome"
                        type="text"
                        placeholder="Ex: João da Silva Santos / Nome da Empresa"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className={`w-full bg-slate-50 border ${
                          errors.nome ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-orange/20'
                        } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all`}
                      />
                      {errors.nome && <span className="text-red-500 text-[10px] block mt-1">{errors.nome}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* E-mail Input */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                          E-mail corporativo / pessoal
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          placeholder="EX: joao@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full bg-slate-50 border ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-orange/20'
                          } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all`}
                        />
                        {errors.email && <span className="text-red-500 text-[10px] block mt-1">{errors.email}</span>}
                      </div>

                      {/* WhatsApp Input */}
                      <div>
                        <label htmlFor="form-telefone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                          WhatsApp / Telefone
                        </label>
                        <input
                          id="form-telefone"
                          type="text"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={handlePhoneMask}
                          className={`w-full bg-slate-50 border ${
                            errors.telefone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-orange/20'
                          } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all`}
                        />
                        {errors.telefone && <span className="text-red-500 text-[10px] block mt-1">{errors.telefone}</span>}
                      </div>
                    </div>

                    {/* Area Select */}
                    <div>
                      <label htmlFor="form-demanda" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Seu principal objetivo
                      </label>
                      <select
                        id="form-demanda"
                        value={formData.demanda}
                        onChange={(e) => handleInputChange('demanda', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/20 transition-all text-slate-700 font-sans"
                      >
                        <option value="Quitação Amigável com Desconto (B2C)">Negociação de CPF em atraso (B2C)</option>
                        <option value="Emissão de 2ª via de Boleto Paschoalotto">Emitir segunda via de boleto (B2C)</option>
                        <option value="Contratação de Soluções de Cobrança / SAC (B2B)">Parceria / Soluções Comerciais para Empresas (B2B)</option>
                        <option value="BPO e Tecnologia Integrada com IA (B2B)">Tecnologia Inteligente e Agentes Virtuais (B2B)</option>
                        <option value="Dúvidas ou Outros Relacionamentos">Outros Relacionamentos / Ouvidoria</option>
                      </select>
                    </div>

                    {/* Mensagem Area */}
                    <div>
                      <label htmlFor="form-mensagem" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Resumo da necessidade / Dados do Contrato ou Nome da Empresa
                      </label>
                      <textarea
                        id="form-mensagem"
                        rows={3}
                        placeholder="Escreva aqui brevemente o que você precisa..."
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        className={`w-full bg-slate-50 border ${
                          errors.mensagem ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-orange/20'
                        } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                      />
                      {errors.mensagem && <span className="text-red-500 text-[10px] block mt-1">{errors.mensagem}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full cursor-pointer bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 text-white font-sans font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10 active:scale-[0.98]"
                      id="submit-contact-form-btn"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Processando solicitação...
                        </>
                      ) : (
                        <>
                          Conectar Canal de Atendimento
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
