/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, ShieldCheck, AlertCircle, CheckCircle, ArrowRight, RefreshCw, Smartphone, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CpfSearchProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms' | 'cookies' | 'security') => void;
}

// Simple Brazilian CPF Validator
const validateCPF = (cpf: string): boolean => {
  const cleanCpf = cpf.replace(/\D/g, '');
  if (cleanCpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleanCpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.substring(10, 11))) return false;

  return true;
};

export default function CpfSearch({ onOpenPrivacy }: CpfSearchProps) {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const [searchState, setSearchState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    'Estabelecendo conexão segura com os servidores Bulgarelli...',
    'Varrendo base de dados em parceria com agentes financeiros (Banco GM, Chevrolet, etc.)...',
    'Rastreando contratos ou pendências vinculadas...',
    'Calculando margem de desconto para regularização imediata...',
    'Consolidando canais de autoatendimento facilitado...'
  ];

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);

    // Apply Mask
    if (value.length > 9) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3');
    } else if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d{1,3})$/, '$1.$2');
    }

    setCpf(value);
    setError('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = cpf.replace(/\D/g, '');
    if (!clean) {
      setError('Por favor, informe o seu CPF.');
      return;
    }
    if (!validateCPF(clean)) {
      setError('CPF inválido. Verifique o número digitado.');
      return;
    }

    // Start simulation
    setError('');
    setSearchState('loading');
    setLoadingStep(0);
  };

  // Cycle loading steps
  useEffect(() => {
    if (searchState !== 'loading') return;

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setSearchState('success');
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [searchState, steps.length]);

  const handleReset = () => {
    setCpf('');
    setSearchState('idle');
    setLoadingStep(0);
    setError('');
  };

  const getWhatsAppLink = () => {
    const message = `Olá, equipe Bulgarelli Advogados. Realizei a consulta de autoatendimento no portal com o CPF ${cpf} e gostaria de receber as propostas de acordo vigentes para regularização segura e emissão de guias.`;
    return `https://wa.me/551133360800?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full" id="cpf-search-wrapper">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Banner header inside card */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-6 text-white border-b border-emerald-900/40">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 font-mono">Portal Autoatendimento Seguro</span>
          </div>
          <h3 className="font-sans font-bold text-lg leading-snug md:text-xl text-white">
            Portal Acordo Fácil & Renegociação Simplificada
          </h3>
          <p className="text-xs text-gray-300 mt-1 max-w-lg">
            Encontre propostas ativas ligadas ao seu CPF ou CNPJ, gere a 2ª via de boletos de financiamento de veículos (Banco GM, Consórcio Chevrolet e outros) ou solicite uma análise de revisão de tarifas e juros abusivos.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {searchState === 'idle' && (
              <motion.div
                key="idle-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
                id="search-idle"
              >
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <label htmlFor="cpf-input" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                      Informe o seu CPF (para consulta segura)
                    </label>
                    <div className="relative">
                      <input
                        id="cpf-input"
                        type="text"
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={handleCpfChange}
                        className={`w-full bg-slate-50 border ${
                          error ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-emerald-100'
                        } rounded-xl py-4 pl-12 pr-4 text-slate-900 text-lg font-mono focus:outline-none focus:ring-4 transition-all`}
                      />
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-red-600 text-xs font-medium"
                        id="search-error"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                    id="submit-search-btn"
                  >
                    Consultar Pendências & Acordos
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Seus dados são confidenciais e protegidos sob sigilo pela <strong>LGPD</strong>.</span>
                  </div>
                  <button
                    onClick={() => onOpenPrivacy('security')}
                    className="hover:text-emerald-600 underline cursor-pointer hover:font-bold transition-colors text-left"
                    id="alert-compliance-btn"
                  >
                    Como funciona a consulta segura?
                  </button>
                </div>
              </motion.div>
            )}

            {searchState === 'loading' && (
              <motion.div
                key="loading-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-6"
                id="search-loading"
              >
                <div className="relative">
                  <div className="h-20 w-20 rounded-full border-4 border-slate-100 border-t-emerald-600 animate-spin flex items-center justify-center"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-emerald-600 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-slate-900 text-base">Identificando contratos e pendências para o CPF</h4>
                  <p className="text-sm font-mono text-emerald-600 font-semibold">{cpf}</p>
                </div>

                <div className="max-w-md w-full bg-slate-50 border border-slate-100 rounded-xl p-4 min-h-[4.5rem] flex items-center justify-center">
                  <motion.p
                    key={loadingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-slate-600 font-medium font-sans animate-pulse"
                  >
                    {steps[loadingStep]}
                  </motion.p>
                </div>

                <div className="w-full max-w-xs bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-emerald-600 h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((loadingStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            )}

            {searchState === 'success' && (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
                id="search-success"
              >
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950 font-sans">
                      Oportunidade de Acordo Identificada!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Encontramos condições de desconto sob coordenação da Bulgarelli Sociedade de Advogados para quitação, reparação ou emissão de guias facilitadas vinculadas ao seu perfil.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block">Opções para o CPF {cpf}</span>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Regularização Fácil de Débitos:</strong> Abatimentos promocionais vigentes de juros e mora de até 85% sobre saldo residual em financiamentos e consórcios Chevrolet/Banco GM.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>2ª Via de Boletos de Financiamento:</strong> Autenticação imediata e emissão segura das parcelas do veículo diretamente no WhatsApp, evitando fraudes ou boletos falsos.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Revisional Contratual de Abusos:</strong> Opções de análise de contrato para repactuação do saldo devido, redução de parcelas e repetição de indébito de tarifas irregulares (TAC, TACB).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl">
                      <span className="text-[10px] uppercase font-mono text-gray-500 block">Abatimento Máximo</span>
                      <span className="text-lg md:text-xl font-bold text-emerald-700 font-mono">Até 85%</span>
                    </div>
                    <div className="p-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl">
                      <span className="text-[10px] uppercase font-mono text-gray-500 block">Parceiro Principal</span>
                      <span className="text-xs font-bold text-emerald-700 block mt-1 uppercase">Banco GM / Consórcios</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white font-sans font-semibold py-4 px-6 rounded-xl shadow-lg shadow-green-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider"
                    id="whatsapp-claim-btn"
                  >
                    <Smartphone className="h-5 w-5 shrink-0" />
                    Negociar pelo WhatsApp
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full hover:bg-slate-100 text-slate-600 font-sans font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase"
                    id="reset-search-btn"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Consultar outro CPF
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[10px] text-gray-400">
                    *Esta simulação é confidencial. Nosso escritório jamais compartilhará seus dados corporativos.*
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
