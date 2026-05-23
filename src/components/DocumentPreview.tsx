import React from 'react';
import Barcode from 'react-barcode';
import { CertificateData } from '../types';

interface DocumentPreviewProps {
  data: CertificateData;
}

const Field = ({ 
  value, 
  label, 
  className = "", 
  align = "center" 
}: { 
  value: string; 
  label: string; 
  className?: string;
  align?: "left" | "center" | "right";
}) => (
  <div className={`flex flex-col ${align === 'center' ? 'items-center' : align === 'left' ? 'items-start' : 'items-end'} ${className}`}>
    <div className={`w-full text-center border-b-[1px] border-slate-400 pb-[1px] text-[0.8rem] font-sans leading-tight whitespace-pre-wrap min-h-[1.2rem]`}>
      {value || '\u00A0'}
    </div>
    <div className="text-[0.60rem] text-slate-700 mt-[1px] leading-none px-1 text-center font-sans tracking-tight">
      {label}
    </div>
  </div>
);

export default function DocumentPreview({ data }: DocumentPreviewProps) {
  return (
    <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg document-preview mx-auto flex flex-col pt-10 pb-16 px-12 text-gray-800 font-sans relative">
      
      {/* Header section */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0">
          {/* RENAP logotype */}
          <img 
            src="/logo-renap.png" 
            alt="RENAP Logo" 
            className="h-10 object-contain mix-blend-multiply" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="absolute right-0 top-[-10px] text-right">
          <div className="text-[1.35rem] font-medium text-[#c00000] tracking-wide mb-1 opacity-90">{data.correlativoRENAP}</div>
          {/* Decorative stamp image */}
          <img 
            src="/sello-dorado.png" 
            alt="Timbre RENAP" 
            className="w-[3.5rem] ml-auto object-contain mix-blend-multiply mt-2"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="text-center font-bold font-serif leading-tight">
          <h2 className="text-base tracking-wide">Registro Nacional de las Personas</h2>
          <h3 className="text-[0.8rem] font-sans font-bold">Republica de Guatemala</h3>
          <h3 className="text-base tracking-wide mt-1">Registro Civil de las Personas</h3>
          <h2 className="text-sm font-sans font-bold mt-1">Certificado de Defunción</h2>
        </div>
      </div>

      {/* Intro text */}
      <div className="text-[0.85rem] text-justify leading-tight mb-4">
        <p>
          {data.certificador} del Registro Nacional de las
          Personas del Municipio de {data.lugarCertificacion}, departamento de {data.departamentoCertificacion};
        </p>
        <p className="text-center font-bold text-[0.95rem] my-3">CERTIFICA</p>
        <p className="px-6 text-center">
          que con fecha {data.fechaAsiento}, en la partida {data.partida}, 
          del folio {data.folio}, del libro {data.libro}, del Registro Civil del Municipio de {data.municipioAsiento}, Departamento 
          de {data.departamentoAsiento} , quedó inscrito el {data.actoInscrito} de:
        </p>
      </div>

      {/* Large CUI */}
      <div className="w-full max-w-sm mx-auto mb-6">
        <Field value={data.cui} label="Codigo Unico de Identificación (CUI) No." className="text-[1.15rem]" />
      </div>

      {/* Datos del difunto */}
      <div className="mb-6">
        <h4 className="font-bold text-sm mb-3">Datos del difunto</h4>
        
        <div className="w-full mb-3">
          <Field value={data.nombreDifunto} label="Nombres y apellidos del difunto" />
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-3">
          <Field value={data.edad} label="Edad" className="col-span-1" />
          <Field value={data.dpi} label="DPI" className="col-span-1" />
          <Field value={data.genero} label="Genero" className="col-span-1" />
          <Field value={data.estadoCivil} label="Estado Civil" className="col-span-1" />
        </div>

        <div className="w-full mb-3">
          <Field value={data.profesion} label="Profesión" />
        </div>

        <div className="w-full mb-3">
          <Field value={data.lugarNacimiento} label="Pais, Departamento, Municipio de Nacimiento" />
        </div>

        <div className="w-full mb-3">
          <Field value={data.conyuge} label="Nombre y apellidos del cónyuge" />
        </div>
      </div>

      {/* Datos de la defunción */}
      <div className="mb-6">
        <h4 className="font-bold text-sm mb-3">Datos de la defunción</h4>
        
        <div className="grid grid-cols-4 gap-4 mb-3">
          <Field value={data.fechaDefuncion} label="Fecha de defunción" className="col-span-3" />
          <Field value={data.horaDefuncion} label="Hora de defunción" className="col-span-1" />
        </div>

        <div className="w-full mb-3">
          <Field value={data.lugarDefuncion} label="Lugar de defunción" />
        </div>

        <div className="w-full mb-2">
          <Field value={data.causaA} label="Causa A" />
        </div>
        <div className="w-full mb-2">
          <Field value={data.causaB} label="Causa B" />
        </div>
        <div className="w-full mb-2">
          <Field value={data.causaC} label="Causa C" />
        </div>
        <div className="w-full mb-3">
          <Field value={data.causaD} label="Causa D" />
        </div>
      </div>

      {/* Datos de los padres */}
      <div className="mb-6">
        <h4 className="font-bold text-sm mb-3">Datos de los padres</h4>
        
        <div className="w-full mb-3">
          <Field value={data.madre} label="Nombre y apellidos de la madre" />
        </div>
        <div className="w-full mb-3">
          <Field value={data.padre} label="Nombres y apellidos del padre" />
        </div>
      </div>

      {/* Observaciones */}
      <div className="mb-10">
        <h4 className="font-bold text-sm mb-2">Observaciones</h4>
        <p className="text-[0.8rem] uppercase">{data.observaciones}</p>
      </div>

      {/* Footer / Barcodes */}
      <div className="mt-auto grid grid-cols-2 text-[0.7rem] items-end pb-8">
        <div>
          <div className="-ml-3 mb-1 bg-white inline-block">
            <Barcode 
              value={data.idInferior}
              width={1.8}
              height={50}
              displayValue={false}
              margin={0}
            />
          </div>
          <p className="font-bold mt-1">ID: {data.idInferior}</p>
          <p>1 de 2</p>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="whitespace-pre-line text-xs font-semibold leading-tight">{data.fechaInferior}</p>
          <p>{data.codigoInferior}</p>
        </div>
      </div>

    </div>
  );
}
