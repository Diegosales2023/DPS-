/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, Scale, ExternalLink, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ formRef }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    demanda: 'Financiamento Bancário / Revisional',
    mensagem: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const faqs = [
    {
      q: 'O que caracteriza juros abusivos em um contrato de veículo?',
      a: 'O STJ define que juros são abusivos quando estão substancialmente acima da taxa média publicada pelo Banco Central (BACEN) para o mesmo período e modalidade de financiamento no mercado.'
    },
    {
      q: 'Como funciona judicialmente o reembolso de seguros embutidos?',
      a: 'Denominado "venda casada", obrigar o cliente a contratar o seguro da própria operadora do banco com o financiamento é nítida infração ao Artigo 39, I do Código de Defesa do Consumidor. A quantia incorretamente paga pode ser cobrada de volta judicialmente.'
    },
    {
      q: 'O plano de saúde é obrigado a cobrir medicamentos fora do rol da ANS?',
      a: 'Sim. Havendo expressa prescrição médica fundamentando a imprescindibilidade do remédio ou cirurgia para proteção da vida da pessoa, a negativa sob pretexto de ausência no Rol da ANS é considerada abusiva pelos tribunais.'
    },
    {
      q: 'O atendimento do escritório atende outras cidades fora do Rio Grande do Sul?',
      a: 'Perfeitamente. Com a informatização completa do judiciário nacional (Processo Eletrônico - PJe, e-Proc, Projudi), conseguimos impetrar ações e defender clientes em qualquer estado do Brasil com máxima agilidade.'
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
      newErrors.mensagem = 'Descreva resumidamente o seu contrato ou situação.';
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
      demanda: 'Financiamento Bancário / Revisional',
      mensagem: ''
    });
    setFormState('idle');
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 border-t border-gray-100 font-sans" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact details + FAQs */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase font-mono bg-cyan-100/60 py-1.5 px-3.5 rounded-full inline-block">
                CENTRAL DE ATENDIMENTO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Fale com nossos especialistas
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nossa banca jurídica recebe e examina seus contratos de forma célere. Envie-nos uma mensagem informando seu caso ou utilize os canais corporativos abaixo para acelerar o seu atendimento.
              </p>
            </div>

            {/* Contacts Info list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="contact-info-list">
              <div className="p-5 bg-white border border-gray-100 rounded-xl space-y-2">
                <div className="flex items-center gap-3 text-cyan-600">
                  <Phone className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Telefone Direto</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  (54) 99123-4567 <br />
                  (54) 3055-9000
                </p>
                <span className="text-[10px] text-gray-500 block">Segunda a Sexta, das 9h às 18h</span>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl space-y-2">
                <div className="flex items-center gap-3 text-cyan-600">
                  <Mail className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">E-mail Corporativo</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  contato@dpsadvogados.adv.br <br />
                  daiane@dpsadvogados.adv.br
                </p>
                <span className="text-[10px] text-gray-500 block">Retorno em até 4 horas úteis</span>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl col-span-1 sm:col-span-2 space-y-2">
                <div className="flex items-center gap-3 text-cyan-600">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Oficina Executiva Físico</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  Rua Saldanha Marinho, 435, Sala 302, Centro <br />
                  Bento Gonçalves - RS, CEP 95700-010
                </p>
                <span className="text-[10px] text-gray-500 block">Atendimento por videoconferência nacional e presencial agendado</span>
              </div>
            </div>

            {/* Quick Accordion Section (FAQ) */}
            <div id="duvidas" className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-cyan-600 shrink-0" />
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
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
            
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
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 font-sans">
                      Obrigado, {formData.nome.split(' ')[0]}!
                    </h3>
                    <p className="text-xs text-gray-600 max-w-sm">
                      Sua solicitação de análise jurídica foi enviada para a Dra. Daiane Sabedot. Estaremos avaliando os moldes do seu contrato e retornando por telefone ou WhatsApp nas próximas horas.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl w-full text-left space-y-2 text-xs">
                    <p className="text-slate-500 font-mono font-semibold uppercase tracking-wider text-[10px]">Resumo do Atendimento:</p>
                    <p className="text-slate-700"><strong>Área solicitada:</strong> {formData.demanda}</p>
                    <p className="text-slate-700"><strong>Canal de retorno:</strong> {formData.telefone} | {formData.email}</p>
                  </div>

                  <div className="w-full space-y-3">
                    <a
                      href={`https://wa.me/5554991234567?text=${encodeURIComponent(`Olá, Dra. Daiane Sabedot. Acabei de preencher o formulário de análise para a demanda de ${formData.demanda}. Gostaria de priorizar o meu retorno.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg shadow-green-600/10 transition-all cursor-pointer"
                      id="whats-direct-form"
                    >
                      Agilizar por WhatsApp
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    
                    <button
                      onClick={handleReset}
                      className="text-slate-500 font-medium text-xs hover:text-slate-800 underline transition-all bg-transparent"
                      id="reset-form-btn"
                    >
                      Enviar outra mensagem
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
                      Envie sua Proposta de Análise
                    </h3>
                    <p className="text-xs text-gray-500">
                      Garantimos sigilo absoluto garantido pelo Código de Ética da OAB.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Nome Input */}
                    <div>
                      <label htmlFor="form-nome" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Seu nome completo
                      </label>
                      <input
                        id="form-nome"
                        type="text"
                        placeholder="Ex: João da Silva Santos"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className={`w-full bg-slate-50 border ${
                          errors.nome ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-cyan-100'
                        } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all`}
                      />
                      {errors.nome && <span className="text-red-500 text-[10px] block mt-1">{errors.nome}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* E-mail Input */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                          E-mail para retorno
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          placeholder="EX: joao@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full bg-slate-50 border ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-cyan-100'
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
                            errors.telefone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-cyan-100'
                          } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all`}
                        />
                        {errors.telefone && <span className="text-red-500 text-[10px] block mt-1">{errors.telefone}</span>}
                      </div>
                    </div>

                    {/* Area Select */}
                    <div>
                      <label htmlFor="form-demanda" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Principal interesse / Área jurídica
                      </label>
                      <select
                        id="form-demanda"
                        value={formData.demanda}
                        onChange={(e) => handleInputChange('demanda', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-cyan-100 transition-all text-slate-700 font-sans"
                      >
                        <option value="Financiamento Bancário / Revisional">Financiamento de Veículos / Revisional de Juros</option>
                        <option value="Negativa ou Aumento de Plano de Saúde">Negativa ou Aumento de Plano de Saúde</option>
                        <option value="Negativa ou Sinistro de Seguros">Negativa de Sinistro de Seguro (Vida, Auto)</option>
                        <option value="Isenção de Imposto de Renda">Isenção de Imposto de Renda (Moléstia Grave)</option>
                        <option value="Assessoria Jurídica Preventiva / Outros">Outras demandas jurídicas complexas</option>
                      </select>
                    </div>

                    {/* Mensagem Area */}
                    <div>
                      <label htmlFor="form-mensagem" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Resumo do seu caso / Dados do contrato
                      </label>
                      <textarea
                        id="form-mensagem"
                        rows={3}
                        placeholder="Ex: Tenho um financiamento pelo Banco X com parcelas altas de 1.500 reais e gostaria de avaliar se existem cobranças indevidas de seguros obrigatórios embutidos..."
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        className={`w-full bg-slate-50 border ${
                          errors.mensagem ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-cyan-100'
                        } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all focus:ring-cyan-100 resize-none`}
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
                          Solicitar Diagnóstico Gratuito
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
