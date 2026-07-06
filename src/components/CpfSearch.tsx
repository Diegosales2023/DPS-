import React from 'react';
import { ShieldCheck, CheckCircle, MessageSquare, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CpfSearchProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms' | 'cookies' | 'security') => void;
}

export default function CpfSearch({ onOpenPrivacy }: CpfSearchProps) {
  const getWhatsAppLink = () => {
    const message = 'Olá! Gostaria de consultar minhas pendências e renegociar meu contrato com os descontos da Paschoalotto.';
    return `https://wa.me/551431030000?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full font-sans animate-fade-in" id="cpf-search-wrapper">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Banner header inside card */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-dark p-6 text-white border-b border-brand-orange/25">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="h-5 w-5 text-brand-orange" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-orange font-mono">Orientação e Segurança ao Consumidor</span>
          </div>
          <h3 className="font-sans font-bold text-lg leading-snug md:text-xl text-white">
            Como Consultar e Regularizar seu CPF com Segurança
          </h3>
          <p className="text-xs text-gray-300 mt-1 max-w-lg">
            A Paschoalotto preza pelo total sigilo e proteção das suas informações. Siga nossas orientações e negocie com descontos autorizados diretamente no WhatsApp oficial.
          </p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            
            {/* Informational Item 1 */}
            <div className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100">
              <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                  1. Canais 100% Verificados
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Realize acordos exclusivamente pelo nosso WhatsApp de atendimento oficial <strong className="text-slate-800">(14) 3103-0000</strong>. Certifique-se sempre de visualizar o <strong className="text-brand-orange">selo verde de verificação</strong> na conta da Paschoalotto.
                </p>
              </div>
            </div>

            {/* Informational Item 2 */}
            <div className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100">
              <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange shrink-0 mt-0.5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                  2. Antifraude e Emissões Seguras
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Todos os boletos gerados são emitidos sob o CNPJ oficial da Paschoalotto: <strong className="text-slate-800">03.187.351/0001-38</strong>, registrados eletronicamente na Febraban. Verifique o beneficiário no app do seu banco antes de pagar.
                </p>
              </div>
            </div>

            {/* Informational Item 3 */}
            <div className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100">
              <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange shrink-0 mt-0.5">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                  3. Descontos e Prazos Especiais
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nossos credores parceiros (bancos, financeiras, varejistas e concessionárias) oferecem <strong className="text-brand-orange">descontos de até 90%</strong> para quitação à vista ou opções facilitadas de parcelamento do seu acordo.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Area */}
          <div className="pt-4 border-t border-gray-100 space-y-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-sans font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-600/15 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              id="informational-whatsapp-btn"
            >
              <MessageSquare className="h-4.5 w-4.5 text-white" />
              Negociar no WhatsApp Oficial
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 pt-1">
              <span className="flex items-center gap-1.5 font-mono">
                <ShieldCheck className="h-4 w-4 text-brand-orange shrink-0" />
                Segurança LGPD Garantida
              </span>
              <button
                onClick={() => onOpenPrivacy('security')}
                className="hover:text-brand-orange underline cursor-pointer hover:font-bold transition-all text-left bg-transparent"
                id="info-modal-trigger"
              >
                Como protegemos seus dados?
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
