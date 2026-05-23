import React, { useState } from 'react';
import { ArrowLeft, Download, RotateCcw, FileText } from 'lucide-react';
import MarriageCertificateForm from './MarriageCertificateForm';
import MarriageCertificatePreview from './MarriageCertificatePreview';
import { MarriageCertificateData, defaultMarriageCertificateData } from '../types';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

interface MarriageCertificateAppProps {
  onBack: () => void;
}

const MarriageCertificateApp: React.FC<MarriageCertificateAppProps> = ({ onBack }) => {
  const [data, setData] = useState<MarriageCertificateData>(defaultMarriageCertificateData);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    const element = document.getElementById('marriage-preview-container');
    if (!element) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(element, { quality: 1.0, pixelRatio: 2, backgroundColor: '#ffffff' });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CertificadoDeMatrimonio_${data.cuiVaron}_${data.cuiMujer}.pdf`);
    } catch (e) {
      console.error("Error generating PDF:", e);
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    setData(defaultMarriageCertificateData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                <span className="font-medium text-sm">Volver</span>
              </button>
              <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-indigo-600" />
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">Certificado de Matrimonio</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleReset}
                className="flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4 mr-2 text-slate-500" />
                Restablecer
              </button>
              <button 
                onClick={handleExportPDF}
                disabled={isExporting}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4 mr-2" />
                {isExporting ? 'Generando PDF...' : 'Exportar PDF'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">
        <section className="w-full lg:w-[450px] shrink-0">
          <MarriageCertificateForm data={data} onChange={setData} />
        </section>
        
        <section className="flex-1 flex flex-col relative">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Vista Previa del Documento</h2>
              <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full uppercase tracking-wider">A4 Size</span>
            </div>
            
            <div className="bg-slate-200/50 p-6 rounded-2xl border border-slate-200 overflow-x-auto flex justify-center shadow-inner">
              <div id="marriage-preview-container" className="shadow-2xl bg-white origin-top" style={{ width: '800px', transform: 'scale(1)', transformOrigin: 'top center' }}>
                <MarriageCertificatePreview data={data} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MarriageCertificateApp;
