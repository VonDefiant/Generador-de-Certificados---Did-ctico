import React from 'react';
import { MarriageCertificateData } from '../types';

interface MarriageCertificateFormProps {
  data: MarriageCertificateData;
  onChange: (data: MarriageCertificateData) => void;
}

const MarriageCertificateForm: React.FC<MarriageCertificateFormProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof MarriageCertificateData) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, [fieldName]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const renderInput = (label: string, name: keyof MarriageCertificateData, disabled = false) => (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium text-slate-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={data[name]}
        onChange={handleChange}
        disabled={disabled}
        className={`px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${disabled ? 'bg-slate-100 text-slate-500' : ''}`}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Editar Datos del Certificado</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        <h3 className="col-span-1 md:col-span-2 text-lg font-semibold text-slate-700 mt-4 mb-2">Encabezado</h3>
        {renderInput("Correlativo", "correlativo")}
        {renderInput("Verificador", "verificador")}
        {renderInput("Municipio (Certifica)", "municipioCertificacion")}
        {renderInput("Departamento (Certifica)", "departamentoCertificacion")}
        {renderInput("Fecha de Asiento", "fechaAsiento")}
        {renderInput("Municipio (Asiento)", "municipioAsiento")}
        {renderInput("Departamento (Asiento)", "departamentoAsiento")}
        {renderInput("Matrimonio No.", "numeroMatrimonio")}

        <h3 className="col-span-1 md:col-span-2 text-lg font-semibold text-slate-700 mt-6 mb-2 border-t border-slate-100 pt-4">Datos del Varón</h3>
        {renderInput("CUI Varón", "cuiVaron")}
        {renderInput("Nombre Varón", "nombreVaron")}
        {renderInput("Lugar de Origen Varón", "lugarOrigenVaron")}
        {renderInput("Ocupación Varón", "ocupacionVaron")}
        <div className="flex flex-col mb-4 col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-700 mb-1">Fotografía Varón</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "fotoVaron")}
            className="px-3 py-2 border border-slate-300 rounded-md text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <h3 className="col-span-1 md:col-span-2 text-lg font-semibold text-slate-700 mt-6 mb-2 border-t border-slate-100 pt-4">Datos de la Mujer</h3>
        {renderInput("CUI Mujer", "cuiMujer")}
        {renderInput("Nombre Mujer", "nombreMujer")}
        {renderInput("Lugar de Origen Mujer", "lugarOrigenMujer")}
        {renderInput("Ocupación Mujer", "ocupacionMujer")}
        <div className="flex flex-col mb-4 col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-700 mb-1">Fotografía Mujer</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "fotoMujer")}
            className="px-3 py-2 border border-slate-300 rounded-md text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
          />
        </div>

        <h3 className="col-span-1 md:col-span-2 text-lg font-semibold text-slate-700 mt-6 mb-2 border-t border-slate-100 pt-4">Datos del Matrimonio</h3>
        {renderInput("Lugar de Matrimonio", "lugarMatrimonio")}
        {renderInput("Fecha del Matrimonio", "fechaMatrimonio")}
        {renderInput("Capitulaciones", "capitulaciones")}
        {renderInput("Régimen Económico", "regimenEconomico")}
        <div className="col-span-1 md:col-span-2">
           {renderInput("Autoridad", "autoridad")}
        </div>

        <h3 className="col-span-1 md:col-span-2 text-lg font-semibold text-slate-700 mt-6 mb-2 border-t border-slate-100 pt-4">Códigos y Verificadores (Pie de Página)</h3>
        {renderInput("Código Largo (Fondo/QR)", "codigoLargo")}
        {renderInput("ID Impresión", "idImpresion")}
        {renderInput("Fecha y Hora Impresión", "fechaImpresion")}
        {renderInput("Código Verificador Pie", "codigoImpresion")}
      </div>
    </div>
  );
};

export default MarriageCertificateForm;
