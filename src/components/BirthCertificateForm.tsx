import { BirthCertificateData } from '../types';
import { Camera } from 'lucide-react';
import React from 'react';

interface Props {
  data: BirthCertificateData;
  onChange: (field: keyof BirthCertificateData, value: string) => void;
}

export default function BirthCertificateForm({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.name as keyof BirthCertificateData, e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: keyof BirthCertificateData) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(field, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (field: keyof BirthCertificateData) => {
    onChange(field, '');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Información del Certificado</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Correlativo</label>
            <input type="text" name="correlativo" value={data.correlativo} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Verificador Sec 1</label>
            <input type="text" name="verificadorSec1" value={data.verificadorSec1} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Verificador Sec 2</label>
            <input type="text" name="verificadorSec2" value={data.verificadorSec2} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Verificador Completo</label>
            <input type="text" name="verificador" value={data.verificador} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">ID Superior Derecho</label>
            <input type="text" name="id" value={data.id} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos de Certificación</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Municipio Cert.</label>
            <input type="text" name="municipioCertificacion" value={data.municipioCertificacion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Dpto. Cert.</label>
            <input type="text" name="departamentoCertificacion" value={data.departamentoCertificacion} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha Asiento</label>
            <input type="text" name="fechaAsiento" value={data.fechaAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Partida</label>
            <input type="text" name="partida" value={data.partida} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Folio</label>
            <input type="text" name="folio" value={data.folio} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="col-span-2">
             <label className="block text-xs font-medium text-slate-500 mb-1">Libro</label>
            <input type="text" name="libro" value={data.libro} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Municipio Asiento</label>
            <input type="text" name="municipioAsiento" value={data.municipioAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Dpto. Asiento</label>
            <input type="text" name="departamentoAsiento" value={data.departamentoAsiento} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos del Inscrito</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fotografía Inscrito</label>
            <div className="flex items-center gap-4">
              {data.fotoInscrito ? (
                <div className="relative">
                  <img src={data.fotoInscrito} alt="Inscrito" className="w-20 h-24 object-cover border border-slate-200 rounded" />
                  <button type="button" onClick={() => removeImage('fotoInscrito')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                </div>
              ) : (
                <div className="w-20 h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6 mb-1" />
                </div>
              )}
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-sm transition-colors border border-slate-200">
                Seleccionar
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'fotoInscrito')} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Completo</label>
             <input type="text" name="nombreInscrito" value={data.nombreInscrito} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">CUI (Documento de Identificación)</label>
             <input type="text" name="cuiInscrito" value={data.cuiInscrito} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha Nacimiento (Texto)</label>
             <input type="text" name="fechaNacimientoInscritoText" value={data.fechaNacimientoInscritoText} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Nacimiento</label>
             <input type="text" name="lugarNacimientoInscrito" value={data.lugarNacimientoInscrito} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Género</label>
             <input type="text" name="generoInscrito" value={data.generoInscrito} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

       <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos de la Madre</h3>
        <div className="space-y-4">
           <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fotografía Madre</label>
            <div className="flex items-center gap-4">
              {data.fotoMadre ? (
                <div className="relative">
                  <img src={data.fotoMadre} alt="Madre" className="w-20 h-24 object-cover border border-slate-200 rounded" />
                  <button type="button" onClick={() => removeImage('fotoMadre')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                </div>
              ) : (
                <div className="w-20 h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6 mb-1" />
                </div>
              )}
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-sm transition-colors border border-slate-200">
                Seleccionar
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'fotoMadre')} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Completo</label>
             <input type="text" name="nombreMadre" value={data.nombreMadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha Nacimiento</label>
             <input type="text" name="fechaNacimientoMadre" value={data.fechaNacimientoMadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Origen</label>
             <input type="text" name="lugarOrigenMadre" value={data.lugarOrigenMadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

       <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Datos del Padre</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fotografía Padre</label>
            <div className="flex items-center gap-4">
              {data.fotoPadre ? (
                <div className="relative">
                  <img src={data.fotoPadre} alt="Padre" className="w-20 h-24 object-cover border border-slate-200 rounded" />
                  <button type="button" onClick={() => removeImage('fotoPadre')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                </div>
              ) : (
                <div className="w-20 h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6 mb-1" />
                </div>
              )}
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-sm transition-colors border border-slate-200">
                Seleccionar
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'fotoPadre')} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Completo</label>
             <input type="text" name="nombrePadre" value={data.nombrePadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha Nacimiento</label>
             <input type="text" name="fechaNacimientoPadre" value={data.fechaNacimientoPadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lugar de Origen</label>
             <input type="text" name="lugarOrigenPadre" value={data.lugarOrigenPadre} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Información de Inferior</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Portal</label>
            <input type="text" name="portal" value={data.portal} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Fecha y Hora</label>
            <input type="text" name="portalFecha" value={data.portalFecha} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Servicio Web</label>
            <input type="text" name="portalServicio" value={data.portalServicio} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
            <input type="text" name="portalEmail" value={data.portalEmail} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">Código Largo Final</label>
            <input type="text" name="codigoBottom" value={data.codigoBottom} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
