import { MarriageCertificateData } from '../types';
import { Camera } from 'lucide-react';
import React from 'react';

interface Props {
  data: MarriageCertificateData;
  onChange: (data: MarriageCertificateData) => void;
}

export default function MarriageCertificateForm({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: keyof MarriageCertificateData) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, [field]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (field: keyof MarriageCertificateData) => {
    onChange({ ...data, [field]: '' });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Información de Registro</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Correlativo</label>
            <input type="text" name="correlativo" value={data.correlativo} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Verificador</label>
            <input type="text" name="verificador" value={data.verificador} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Municipio (Certifica)</label>
            <input type="text" name="municipioCertificacion" value={data.municipioCertificacion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Departamento (Certifica)</label>
            <input type="text" name="departamentoCertificacion" value={data.departamentoCertificacion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha de Asiento</label>
            <input type="text" name="fechaAsiento" value={data.fechaAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Municipio (Asiento)</label>
            <input type="text" name="municipioAsiento" value={data.municipioAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Departamento (Asiento)</label>
            <input type="text" name="departamentoAsiento" value={data.departamentoAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Matrimonio No.</label>
            <input type="text" name="numeroMatrimonio" value={data.numeroMatrimonio} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos del Varón</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fotografía Varón</label>
            <div className="flex items-center gap-4">
              {data.fotoVaron ? (
                <div className="relative">
                  <img src={data.fotoVaron} alt="Varón" className="w-20 h-24 object-cover border border-slate-200 rounded" />
                  <button type="button" onClick={() => removeImage('fotoVaron')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                </div>
              ) : (
                <div className="w-20 h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6 mb-1" />
                </div>
              )}
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-sm transition-colors border border-slate-200">
                 Seleccionar
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'fotoVaron')} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">CUI Varón</label>
             <input type="text" name="cuiVaron" value={data.cuiVaron} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Varón</label>
             <input type="text" name="nombreVaron" value={data.nombreVaron} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Origen Varón</label>
             <input type="text" name="lugarOrigenVaron" value={data.lugarOrigenVaron} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Ocupación Varón</label>
             <input type="text" name="ocupacionVaron" value={data.ocupacionVaron} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>

       <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos de la Mujer</h3>
        <div className="space-y-4">
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fotografía Mujer</label>
            <div className="flex items-center gap-4">
              {data.fotoMujer ? (
                <div className="relative">
                  <img src={data.fotoMujer} alt="Mujer" className="w-20 h-24 object-cover border border-slate-200 rounded" />
                  <button type="button" onClick={() => removeImage('fotoMujer')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                </div>
              ) : (
                <div className="w-20 h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6 mb-1" />
                </div>
              )}
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-sm transition-colors border border-slate-200">
                 Seleccionar
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'fotoMujer')} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">CUI Mujer</label>
             <input type="text" name="cuiMujer" value={data.cuiMujer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Mujer</label>
             <input type="text" name="nombreMujer" value={data.nombreMujer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Origen Mujer</label>
             <input type="text" name="lugarOrigenMujer" value={data.lugarOrigenMujer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Ocupación Mujer</label>
             <input type="text" name="ocupacionMujer" value={data.ocupacionMujer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos del Matrimonio</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Matrimonio</label>
            <input type="text" name="lugarMatrimonio" value={data.lugarMatrimonio} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="col-span-2">
             <label className="block text-xs font-medium text-slate-500 mb-1">Fecha del Matrimonio</label>
             <input type="text" name="fechaMatrimonio" value={data.fechaMatrimonio} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Capitulaciones</label>
            <input type="text" name="capitulaciones" value={data.capitulaciones} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Régimen Económico</label>
            <input type="text" name="regimenEconomico" value={data.regimenEconomico} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Autoridad</label>
            <input type="text" name="autoridad" value={data.autoridad} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>

       <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Códigos (Pie de Página)</h3>
        <div className="grid grid-cols-2 gap-4">
           <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Código Largo (Fondo/QR)</label>
            <input type="text" name="codigoLargo" value={data.codigoLargo} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">ID Impresión</label>
            <input type="text" name="idImpresion" value={data.idImpresion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha y Hora Impresión</label>
            <input type="text" name="fechaImpresion" value={data.fechaImpresion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
           <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Código Verificador Pie</label>
            <input type="text" name="codigoImpresion" value={data.codigoImpresion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

