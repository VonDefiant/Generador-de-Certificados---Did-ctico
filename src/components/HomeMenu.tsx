import { FileText, Baby, Heart, ShieldCheck } from 'lucide-react';

export type CertificateType = 'death' | 'birth' | 'marriage';

interface HomeMenuProps {
  onSelect: (type: CertificateType) => void;
}

export default function HomeMenu({ onSelect }: HomeMenuProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 shadow-inner">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Generador de Certificados RENAP
          </h1>
          <div className="mb-6">
             <span className="inline-flex items-center justify-center bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
               Para Gaby Hernández
             </span>
          </div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Selecciona el tipo de certificado que deseas generar. Se generará un documento en formato PDF con el diseño oficial para propósitos didácticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Defunción */}
          <button 
            onClick={() => onSelect('death')}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
              Certificado de Defunción
            </h2>
            <p className="text-sm text-slate-500 flex-grow">
              Genera constancias de fallecimiento con código CUI, correlativo, datos del fallecido y causas de defunción.
            </p>
            <div className="mt-6 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              Ingresar <span aria-hidden="true">&rarr;</span>
            </div>
          </button>

          {/* Card: Nacimiento */}
          <button 
            onClick={() => onSelect('birth')}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
              <Baby className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
              Certificado de Nacimiento
            </h2>
            <p className="text-sm text-slate-500 flex-grow">
              Genera actas de nacimiento con datos de los padres, lugar de nacimiento y número de libro.
            </p>
            <div className="mt-6 text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              Ingresar <span aria-hidden="true">&rarr;</span>
            </div>
          </button>

          {/* Card: Matrimonio */}
          <button 
            onClick={() => onSelect('marriage')}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 group-hover:bg-rose-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-700 transition-colors">
              Certificado de Matrimonio
            </h2>
            <p className="text-sm text-slate-500 flex-grow">
              Genera actas de matrimonio civil con datos de los contrayentes, régimen económico y testigos.
            </p>
            <div className="mt-6 text-sm font-semibold text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              Ingresar <span aria-hidden="true">&rarr;</span>
            </div>
          </button>
        </div>
        
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>Uso exclusivo para propósitos educativos y de capacitación. Los documentos generados no tienen validez legal.</p>
        </div>
      </div>
    </div>
  );
}
