import { ArrowLeft } from 'lucide-react';

interface MarriageCertificateAppProps {
  onBack: () => void;
}

export default function MarriageCertificateApp({ onBack }: MarriageCertificateAppProps) {
  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center shadow-sm flex-shrink-0">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-3"
          title="Volver al menú"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-lg font-bold tracking-tight text-slate-900">Generador de Certificado de Matrimonio</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-700 mb-2">Próximamente</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            El módulo para generar certificados de matrimonio está en desarrollo. Vuelve pronto para utilizar esta función.
          </p>
        </div>
      </main>
    </div>
  );
}
