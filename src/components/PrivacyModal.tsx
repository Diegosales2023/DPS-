/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Shield, Scale, FileText, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab: 'privacy' | 'terms' | 'cookies' | 'security';
}

export default function PrivacyModal({ isOpen, onClose, tab }: PrivacyModalProps) {
  const [activeTab, setActiveTab] = React.useState<typeof tab>(tab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(tab);
    }
  }, [isOpen, tab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" id="modal-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-gray-100"
          id="modal-content"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-emerald-400" />
              <div>
                <h3 className="font-sans font-semibold text-lg text-white">Portal de Governança, Transparência e Compliance</h3>
                <p className="text-xs text-gray-400">BULGARELLI SOCIEDADE DE ADVOGADOS</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-gray-400 hover:text-white"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 shrink-0">
            <button
               onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 py-3 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-emerald-600 text-emerald-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-slate-900'
              }`}
            >
              <Shield className="h-4 w-4" />
              Política de Privacidade
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 py-3 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-emerald-600 text-emerald-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-slate-900'
              }`}
            >
              <FileText className="h-4 w-4" />
              Termos de Uso
            </button>
            <button
              onClick={() => setActiveTab('cookies')}
              className={`flex items-center gap-2 py-3 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'cookies'
                  ? 'border-emerald-600 text-emerald-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-slate-900'
              }`}
            >
              <Cookie className="h-4 w-4" />
              Cookies
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 py-3 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'security'
                  ? 'border-emerald-600 text-emerald-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-slate-900'
              }`}
            >
              <Shield className="h-4 w-4 animate-pulse" />
              Segurança e Compliance
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8 overflow-y-auto flex-1 text-gray-700 font-sans space-y-6 text-sm leading-relaxed">
            {activeTab === 'privacy' && (
              <div id="modal-privacy-policy">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Política de Privacidade</h4>
                <p className="mb-4">
                  A <strong>BULGARELLI SOCIEDADE DE ADVOGADOS</strong>, registrada sob o CNPJ <strong>10.461.172/0001-16</strong>, valoriza a privacidade dos seus usuários e está comprometida com a proteção de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">1. Coleta de Informações</h5>
                <p className="mb-4">
                  Coletamos informações estritamente necessárias para a prestação de serviços de advocacia e consulta de elegibilidade de acordos, tais como nome, CPF, e-mail, telefone para contato e detalhes gerais do contrato sob análise securitária ou financeira.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">2. Finalidade do Tratamento</h5>
                <p className="mb-4">
                  Seus dados são tratados exclusivamente para diagnosticar a viabilidade de propostas de regularização, expurgo de venda casada ou quitação de contratos bancários e de seguros, além de viabilizar suporte pelo nosso autoatendimento da equipe especializada.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">3. Direitos do Titular</h5>
                <p className="mb-4">
                  O titular dos dados tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou inexatos, e a exclusão definitiva de sua base após o encerramento do atendimento preliminar.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">4. Segurança dos Dados</h5>
                <p className="mb-4">
                  Nossos sistemas utilizam criptografia de ponta a ponta e rígidos controles de acesso para garantir que nenhuma informação pessoal seja exposta a terceiros não autorizados. Os dados buscados no simulador de CPF são protegidos por sigilo profissional garantido pelo Estatuto da OAB.
                </p>
                <p className="text-xs text-gray-500 mt-6">Última atualização: Junho de 2026</p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div id="modal-terms">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Termos de Uso do Website</h4>
                <p className="mb-4">
                  Ao acessar o portal da <strong>BULGARELLI SOCIEDADE DE ADVOGADOS</strong>, o usuário concorda em cumprir e respeitar os seguintes termos e condições de uso:
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">1. Caráter Informativo</h5>
                <p className="mb-4">
                  As análises e simulações executadas através de nossa ferramenta de consulta de CPF servem para apontar indícios estatísticos e legais de cobranças abusivas ou descumprimento de coberturas de seguros. Elas representam um parecer preliminar informativo e não substituem uma consulta formal ou garantia de resultado judicial.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">2. Uso Permitido</h5>
                <p className="mb-4">
                  O usuário compromete-se a consultar apenas o seu próprio CPF ou dados de terceiros sob expressa autorização legal. O uso indevido de CPFs ou a simulação fraudulenta ensejará as cabíveis medidas judiciais.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">3. Propriedade Intelectual</h5>
                <p className="mb-4">
                  Todo o design, algoritmo de validação, marcas e textos presentes neste portal pertencem exclusivamente à sociedade de advocacia mencionada, sendo vedada a reprodução total ou parcial, cópia de código-fonte ou engenharia reversa sob pena da legislação nacional de propriedade industrial.
                </p>
                <p className="text-xs text-gray-500 mt-6">Última atualização: Junho de 2026</p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div id="modal-cookies">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Política de Gerenciamento de Cookies</h4>
                <p className="mb-4">
                  Este portal utiliza cookies para melhorar seu desempenho e enriquecer sua experiência de navegação segura.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">O que são Cookies?</h5>
                <p className="mb-4">
                  Cookies são pequenos arquivos de texto armazenados no seu navegador para rastrear suas preferências de design e auxiliar no preenchimento de formulários de forma otimizada.
                </p>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">Como utilizamos os Cookies?</h5>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para as validações de CPF, segurança de sessão e navegação segura entre as abas do painel.</li>
                  <li><strong>Cookies de Desempenho e Navegação:</strong> Armazenam informações sobre tempos de carregamento de páginas e interações com o simulador, ajudando a identificar erros e aperfeiçoar nossos canais de atendimento.</li>
                </ul>
                <h5 className="text-base font-semibold text-slate-800 mt-6 mb-2">Controle do Usuário</h5>
                <p className="mb-4">
                  Você pode configurar seu navegador de internet para recusar ou apagar os cookies a qualquer momento. No entanto, algumas funcionalidades dinâmicas como o simulador de contratos podem se comportar de forma instável.
                </p>
                <p className="text-xs text-gray-500 mt-6">Última atualização: Junho de 2026</p>
              </div>
            )}

            {activeTab === 'security' && (
              <div id="modal-security">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Termos de Responsabilidade e Segurança Bancária</h4>
                <p className="mb-4">
                  Nosso escritório atua sob rigoroso compromisso com as regras do Conselho Federal da OAB e melhores práticas do setor financeiro:
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong>Sigilo Profissional (Artigo 25 do Estatuto da OAB):</strong> Todos os dados inseridos em nosso simulador ou recebidos por nossos canais de atendimento são protegidos por sigilo profissional perpétuo inerente ao exercício da advocacia.
                  </li>
                  <li>
                    <strong>Parceria de Negociação Ética:</strong> Diferentemente de empresas informais de assessoria, nossa atuação visa restabelecer o equilíbrio contratual com amparo estrito nas súmulas do Superior Tribunal de Justiça (STJ), protegendo o cliente contra riscos desnecessários.
                  </li>
                  <li>
                    <strong>Prevenção a Golpes:</strong> Alertamos que nosso escritório jamais solicita senhas bancárias pessoais, códigos temporários sms, depósitos para liberações em contas de terceiros ou pagamentos fora dos boletos oficiais descritos nos contratos assinados digitalmente.
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-6">Última atualização: Junho de 2026</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 hover:bg-slate-850 text-white rounded-lg font-medium text-xs transition-colors"
              id="modal-close-footer"
            >
              Compreendi e Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
