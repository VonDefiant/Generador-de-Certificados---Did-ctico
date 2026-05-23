/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Printer, RefreshCw, Download } from 'lucide-react';
import CertificateForm from './components/CertificateForm';
import DocumentPreview from './components/DocumentPreview';
import { CertificateData, defaultCertificateData } from './types';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

export default function App() {
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
      const scale = 2;
      const param = {
        height: element.offsetHeight * scale,
        width: element.offsetWidth * scale,
        quality: 0.98,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${element.offsetWidth}px`,
          height: `${element.offsetHeight}px`
        },
        bgcolor: '#ffffff'
      };

      const dataUrl = await domtoimage.toJpeg(element, param);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificado_${data.cui.replace(/\s/g, '') || 'RENAP'}.pdf`);
    } catch (e) {
      console.error("Error generating PDF:", e);
      // Fallback
      window.print();
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    if (window.confirm("¿Estás seguro de restablecer todos los valores al ejemplo original?")) {
      setData(defaultCertificateData);
    }
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden font-sans text-slate-800">
      {/* Navbar - hidden on print */}
      <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm flex-shrink-0 no-print">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
             <Printer className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">Generador de Certificado RENAP</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleReset}
            className="text-xs font-medium text-slate-400 uppercase tracking-widest hover:text-slate-600 flex items-center gap-2 transition-colors bg-transparent border-none"
          >
            <RefreshCw className="w-3 h-3" />
            Restablecer
          </button>
          <button 
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <Download className="w-4 h-4 animate-bounce" />
                Generando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Exportar PDF
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex gap-0 overflow-hidden">
        {/* Left Panel: Editor Form (hidden on print) */}
        <aside className="w-[320px] md:w-[400px] lg:w-[450px] bg-white border-r border-slate-200 flex flex-col p-6 overflow-y-auto space-y-8 no-print">
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-xs text-slate-500 leading-relaxed italic">
            Modifica los valores en el formulario. Los cambios se reflejan en tiempo real. Usa "Exportar PDF" para descargar el documento.
          </div>
          <CertificateForm data={data} onChange={handleChange} />
        </aside>

        {/* Right Panel: Document Preview */}
        <section className="flex-1 bg-slate-100 flex justify-center items-start overflow-y-auto relative py-8 print:bg-transparent print:p-0 print:overflow-visible">
          <div id="document-preview-container" className="shadow-2xl print:shadow-none bg-white">
            <DocumentPreview data={data} />
          </div>
        </section>
      </main>
    </div>
  );
}
