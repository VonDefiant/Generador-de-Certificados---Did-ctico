import React from 'react';
import { CertificateData } from '../types';

interface CertificateFormProps {
  data: CertificateData;
  onChange: (field: keyof CertificateData, value: string) => void;
}

export default function CertificateForm({ data, onChange }: CertificateFormProps) {
  const InputRow = ({ label, field, className = "" }: { label: string, field: keyof CertificateData, className?: string }) => (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-[11px] font-semibold text-slate-600 ml-1">{label}</label>
      <input 
        type="text" 
        value={data[field]} 
        onChange={(e) => onChange(field, e.target.value)}
        className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
      />
    </div>
  );

  return (
    <div className="space-y-8 no-print">
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Información de Registro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputRow label="Correlativo RENAP (Rojo)" field="correlativoRENAP" />
          <InputRow label="CUI Principal" field="cui" />
          
          <InputRow label="Certificador" field="certificador" className="md:col-span-2" />
          <InputRow label="Lugar Certificación" field="lugarCertificacion" />
          <InputRow label="Depto. Certificación" field="departamentoCertificacion" />
          <InputRow label="Fecha de Asiento" field="fechaAsiento" className="md:col-span-2" />
          
          <InputRow label="Partida" field="partida" />
          <InputRow label="Folio" field="folio" />
          <InputRow label="Libro" field="libro" />
          <InputRow label="Acto Inscrito (defunción/matrimonio)" field="actoInscrito" />
          
          <InputRow label="Municipio Asiento" field="municipioAsiento" />
          <InputRow label="Depto. Asiento" field="departamentoAsiento" />
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Datos del Difunto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputRow label="Nombre Completo" field="nombreDifunto" className="md:col-span-2" />
          <InputRow label="Edad" field="edad" />
          <InputRow label="DPI" field="dpi" />
          <InputRow label="Género" field="genero" />
          <InputRow label="Estado Civil" field="estadoCivil" />
          <InputRow label="Profesión" field="profesion" />
          <InputRow label="Nombre del Cónyuge" field="conyuge" />
          <InputRow label="País, Depto, Municipio de Nacimiento" field="lugarNacimiento" className="md:col-span-2" />
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Datos de la Defunción</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputRow label="Fecha de Defunción" field="fechaDefuncion" />
          <InputRow label="Hora" field="horaDefuncion" />
          <InputRow label="Lugar de Defunción" field="lugarDefuncion" className="md:col-span-2" />
          <InputRow label="Causa A" field="causaA" className="md:col-span-2" />
          <InputRow label="Causa B" field="causaB" className="md:col-span-2" />
          <InputRow label="Causa C" field="causaC" className="md:col-span-2" />
          <InputRow label="Causa D" field="causaD" className="md:col-span-2" />
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Datos de los Padres</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputRow label="Nombre de la Madre" field="madre" />
          <InputRow label="Nombre del Padre" field="padre" />
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Observaciones y Metadatos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputRow label="Observaciones" field="observaciones" className="md:col-span-2" />
          <InputRow label="ID (Izq)" field="idInferior" />
          <InputRow label="Código (Der)" field="codigoInferior" />
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-[11px] font-semibold text-slate-600 ml-1">Líneas de Fecha (Der)</label>
            <textarea 
               value={data.fechaInferior} 
               onChange={(e) => onChange("fechaInferior", e.target.value)}
               className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm h-16 resize-none focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
