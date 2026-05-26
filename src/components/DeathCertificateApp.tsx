import { useState, useDeferredValue } from 'react';
import { Printer, RefreshCw, Download, ArrowLeft } from 'lucide-react';
import CertificateForm from './CertificateForm';
import DocumentPreview from './DocumentPreview';
import { CertificateData, defaultCertificateData } from '../types';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

interface DeathCertificateAppProps {
  onBack: () => void;
}

export default function DeathCertificateApp({ onBack }: DeathCertificateAppProps) {
  const [data, setData] = useState<CertificateData>(defaultCertificateData);
  const deferredData = useDeferredValue(data);
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');

  const handleChange = (field: keyof CertificateData, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePrint = async () => {
    const element = document.getElementById('document-preview-container');
    if (!element) return;

    setIsExporting(true);
    
    // Temporarily remove tailwind scaling classes to ensure full quality capture
    const originalClassName = element.className;
    element.className = originalClassName.replace(/scale-\[[^\]]+\]/g, '').replace(/sm:scale-\[[^\]]+\]/g, '').replace(/md:scale-\[[^\]]+\]/g, '').replace(/lg:scale-\[[^\]]+\]/g, '').replace(/xl:scale-\d+/g, '').replace(/min-\[400px\]:scale-\[[^\]]+\]/g, '');

    try {
      const dataUrl = await toJpeg(element, { 
        quality: 1.0, 
        pixelRatio: 2, 
        backgroundColor: '#ffffff'
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CertificadoDeDefuncion_${data.cui.replace(/\s/g, '') || 'RENAP'}.pdf`);
    } catch (e) {
      console.error("Error generating PDF:", e);
    } finally {
      element.className = originalClassName;
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    setData(defaultCertificateData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:h-screen md:overflow-hidden font-sans text-slate-800">
      {/* Navbar - hidden on print */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between shadow-sm flex-shrink-0 no-print">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-2"
            title="Volver al menú"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div className="hidden sm:flex w-8 h-8 bg-blue-600 rounded-lg items-center justify-center">
             <Printer className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-sm sm:text-lg font-bold tracking-tight text-slate-900">Generador de Certificado de Defunción</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={handleReset}
            className="hidden sm:flex text-xs font-medium text-slate-400 uppercase tracking-widest hover:text-slate-600 items-center gap-2 transition-colors bg-transparent border-none"
          >
            <RefreshCw className="w-3 h-3" />
            Restablecer
          </button>
          <button 
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <Download className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Generando...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Exportar PDF</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Tabs */}
      <div className="md:hidden flex bg-white border-b border-slate-200 no-print flex-shrink-0">
        <button
          onClick={() => setActiveTab('form')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          Formulario
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'preview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          Vista Previa
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-0 md:overflow-hidden">
        {/* Left Panel: Editor Form (hidden on print) */}
        <aside className={`${activeTab === 'form' ? 'flex' : 'hidden md:flex'} w-full md:w-[320px] lg:w-[400px] xl:w-[450px] bg-white border-r border-slate-200 flex-col p-4 md:p-6 md:overflow-y-auto space-y-8 no-print shrink-0 md:max-h-full flex-1 md:flex-initial`}>
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-xs text-slate-500 leading-relaxed italic hidden sm:block">
            Modifica los valores en el formulario. Los cambios se reflejan en tiempo real. Usa "Exportar PDF" para descargar el documento.
          </div>
          <CertificateForm data={data} onChange={handleChange} />
        </aside>

        {/* Right Panel: Document Preview */}
        <section className={`${activeTab === 'preview' ? 'flex' : 'hidden md:flex'} flex-1 bg-slate-100 justify-center items-start overflow-y-auto relative py-4 md:py-8 print:bg-transparent print:p-0 print:overflow-visible print:!flex`}>
          <div id="document-preview-container" className="shadow-2xl print:shadow-none bg-white scale-[0.45] min-[400px]:scale-[0.5] sm:scale-[0.75] md:scale-[0.5] lg:scale-[0.7] xl:scale-100 origin-top">
            <DocumentPreview data={deferredData} />
          </div>
        </section>
      </main>
    </div>
  );
}
