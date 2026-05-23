import { useState } from 'react';
import { Printer, RefreshCw, Download, ArrowLeft } from 'lucide-react';
import CertificateForm from './CertificateForm';
import DocumentPreview from './DocumentPreview';
import { CertificateData, defaultCertificateData } from '../types';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

interface DeathCertificateAppProps {
  onBack: () => void;
}

export default function DeathCertificateApp({ onBack }: DeathCertificateAppProps) {
  const [data, setData] = useState<CertificateData>(defaultCertificateData);
  const [isExporting, setIsExporting] = useState(false);

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
    try {
      const dataUrl = await toPng(element, { quality: 1.0, pixelRatio: 2, backgroundColor: '#ffffff' });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CertificadoDeDefuncion_${data.cui.replace(/\s/g, '') || 'RENAP'}.pdf`);
    } catch (e) {
      console.error("Error generating PDF:", e);
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    setData(defaultCertificateData);
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden font-sans text-slate-800">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-0 overflow-hidden">
        {/* Left Panel: Editor Form (hidden on print) */}
        <aside className="w-full md:w-[320px] lg:w-[400px] xl:w-[450px] bg-white border-r border-slate-200 flex flex-col p-4 md:p-6 overflow-y-auto space-y-8 no-print shrink-0 max-h-[50vh] md:max-h-full">
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-xs text-slate-500 leading-relaxed italic hidden sm:block">
            Modifica los valores en el formulario. Los cambios se reflejan en tiempo real. Usa "Exportar PDF" para descargar el documento.
          </div>
          <CertificateForm data={data} onChange={handleChange} />
        </aside>

        {/* Right Panel: Document Preview */}
        <section className="flex-1 bg-slate-100 flex justify-center items-start overflow-y-auto relative py-4 md:py-8 print:bg-transparent print:p-0 print:overflow-visible">
          <div id="document-preview-container" className="shadow-2xl print:shadow-none bg-white scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transform-origin-top">
            <DocumentPreview data={data} />
          </div>
        </section>
      </main>
    </div>
  );
}
