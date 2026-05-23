import { BirthCertificateData } from '../types';
import QRCode from 'react-qr-code';

interface Props {
  data: BirthCertificateData;
}

export default function BirthCertificatePreview({ data }: Props) {
  return (
    <div className="bg-white text-black text-sm max-w-[800px] w-[800px] mx-auto document-preview relative overflow-hidden font-sans" 
         style={{ 
           minHeight: '1050px',
           padding: '45px 60px 20px 60px',
           backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'10\' y=\'30\' font-family=\'Arial\' font-size=\'14\' fill=\'%23e2e8f0\' transform=\'rotate(-45 30 30)\' font-weight=\'bold\' opacity=\'0.3\'%3E RENAP%3C/text%3E%3C/svg%3E")' 
         }}>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-[15px]">
        <div className="flex flex-col w-[350px]">
           <img 
             src="/logo-renap.png" 
             alt="RENAP Logo" 
             className="h-[45px] object-contain object-left mix-blend-multiply" 
             referrerPolicy="no-referrer"
           />
           <p className="text-[9px] mt-[2px] tracking-tight font-semibold text-slate-800 ml-1">
             Correlativo: <span className="font-normal">{data.correlativo}</span>
           </p>
        </div>

        <div className="text-right font-mono pt-[5px]">
          <div className="font-bold flex justify-end gap-4 text-[13px] tracking-widest mb-[4px] opacity-90 text-slate-900">
            <span>{data.verificadorSec1}</span> <span>{data.verificadorSec2}</span>
          </div>
          <div className="text-[9.5px] mb-[2px] font-sans tracking-tight text-slate-800">
            VERIFICADOR: <span className="tracking-widest font-mono font-medium">{data.verificador}</span>
          </div>
          <div className="text-[9.5px] font-sans tracking-tight text-slate-800">
            ID:<span className="tracking-widest font-mono font-medium">{data.id}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-[25px]">
        <h1 className="text-[17px] font-bold tracking-tight text-slate-900">Registro Civil de las Personas</h1>
        <h2 className="text-[16.5px] font-bold mt-[2px] tracking-tight text-slate-900">Certificado de Nacimiento</h2>
      </div>

      {/* Body Text */}
      <div className="text-[11.5px] leading-[1.6] mb-[25px] text-center px-4 font-normal tracking-tight text-slate-800">
        <p>El Infrascrito Registrador Civil de las Personas del Registro Nacional de las Personas del Municipio de</p>
        <p>{data.municipioCertificacion}, Departamento de {data.departamentoCertificacion},</p>
        <p className="font-bold my-[6px] tracking-widest text-[12px] text-black">CERTIFICA</p>
        <p>que con fecha {data.fechaAsiento}, en la partida {data.partida}, folio {data.folio} del libro {data.libro}, del Registro</p>
        <p>Civil del Municipio de {data.municipioAsiento}, Departamento de {data.departamentoAsiento}, quedó inscrito el Nacimiento de:</p>
      </div>

      {/* Name Center */}
      <div className="text-center mb-[25px] pb-2">
        <p className="font-medium text-[13.5px] mb-[3px] tracking-wide text-slate-900 min-h-[16px]">{data.nombreInscrito}</p>
        <div className="border-t-[1.5px] border-black w-[400px] mx-auto opacity-[0.65]"></div>
        <p className="text-[8px] mt-[3px] italic opacity-80 font-semibold text-slate-700">Nombres y Apellidos del Inscrito</p>
      </div>

      {/* Datos del Inscrito Section */}
      <div className="flex gap-[16px] items-start mb-[35px] w-full z-10 relative pl-2">
        <div className="w-[105px] shrink-0">
           {data.fotoInscrito ? (
             <div className="border border-black p-[2px] w-[105px] h-[135px] bg-white">
               <img src={data.fotoInscrito} alt="Inscrito" className="w-full h-full object-cover grayscale" />
             </div>
           ) : (
             <div className="border-[1px] border-slate-700 w-[105px] h-[135px] flex flex-col items-center justify-center text-center bg-white text-slate-600">
               <p className="text-[14px] mb-[2px] font-semibold tracking-tight">Fotografía</p>
               <p className="text-[12px] font-normal leading-tight opacity-80">no</p>
               <p className="text-[12px] font-normal leading-tight opacity-80">disponible</p>
             </div>
           )}
        </div>
        
        <div className="flex-1 pt-[6px] ml-2">
          <h3 className="font-bold text-[13px] mb-[20px] tracking-tight text-slate-900">Datos del Inscrito</h3>
          
          <div className="mb-[16px]">
            <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px] text-slate-900">{data.cuiInscrito}</p>
            <div className="border-t border-black w-full opacity-[0.65]"></div>
            <p className="text-[8px] mt-[3px] italic font-[600] opacity-[0.7] text-slate-800">Documento de Identificación</p>
          </div>
          
          <div className="mb-[16px]">
            <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px] text-slate-900">{data.fechaNacimientoInscritoText}</p>
            <div className="border-t border-black w-full opacity-[0.65]"></div>
            <p className="text-[8px] mt-[3px] italic font-[600] opacity-[0.7] text-slate-800">Fecha de Nacimiento</p>
          </div>
          
           <div className="mb-[16px]">
            <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px] text-slate-900">{data.lugarNacimientoInscrito}</p>
            <div className="border-t border-black w-full opacity-[0.65]"></div>
            <p className="text-[8px] mt-[3px] italic font-[600] opacity-[0.7] text-slate-800">Lugar de Nacimiento</p>
          </div>
          
           <div className="mb-0">
            <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px] text-slate-900">{data.generoInscrito}</p>
            <div className="border-t border-black w-full opacity-[0.65]"></div>
            <p className="text-[8px] mt-[3px] italic font-[600] opacity-[0.7] text-slate-800">Género</p>
          </div>
        </div>
      </div>

      {/* PARENTS & FOOTER ABSOLUTE SECTION */}
      <div className="relative w-full h-[360px] mt-[10px]">
         
         {/* Fotos Padres (Center) */}
         <div className="absolute top-0 left-[50%] transform -translate-x-1/2 flex gap-[8px] z-10 bg-transparent">
            {data.fotoMadre ? (
               <div className="border border-black p-[2px] w-[90px] h-[115px] bg-white">
                 <img src={data.fotoMadre} alt="Madre" className="w-full h-full object-cover grayscale" />
               </div>
             ) : (
               <div className="border-[1px] border-slate-700 w-[90px] h-[115px] flex flex-col items-center justify-center text-center bg-white text-slate-600">
                 <p className="text-[13px] mb-[2px] font-semibold tracking-tight">Fotografía</p>
                 <p className="text-[11px] font-normal leading-tight opacity-80">no</p>
                 <p className="text-[11px] font-normal leading-tight opacity-80">disponible</p>
               </div>
             )}
             
             {data.fotoPadre ? (
               <div className="border border-black p-[2px] w-[90px] h-[115px] bg-white">
                 <img src={data.fotoPadre} alt="Padre" className="w-full h-full object-cover grayscale" />
               </div>
             ) : (
               <div className="border-[1px] border-slate-700 w-[90px] h-[115px] flex flex-col items-center justify-center text-center bg-white text-slate-600">
                  <p className="text-[13px] mb-[2px] font-semibold tracking-tight">Fotografía</p>
                 <p className="text-[11px] font-normal leading-tight opacity-80">no</p>
                 <p className="text-[11px] font-normal leading-tight opacity-80">disponible</p>
               </div>
             )}
         </div>

         {/* Madre Block */}
         <div className="absolute top-[0px] left-[0px] w-[240px] z-10">
             <h3 className="font-bold text-[13px] mb-[45px] tracking-tight">Datos de la Madre</h3>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.nombreMadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Nombres y Apellidos de la Madre</p>
             </div>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.fechaNacimientoMadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Fecha de Nacimiento</p>
             </div>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.lugarOrigenMadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Lugar de Origen</p>
             </div>
         </div>

         {/* Padre Block */}
         <div className="absolute top-[0px] right-[0px] w-[240px] z-10">
             <h3 className="font-bold text-[13px] mb-[45px] tracking-tight">Datos del Padre</h3>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.nombrePadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Nombres y Apellidos del Padre</p>
             </div>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.fechaNacimientoPadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Fecha de Nacimiento</p>
             </div>

             <div className="mb-[35px]">
               <p className="text-[11px] mb-[2px] tracking-wide leading-none min-h-[12px]">{data.lugarOrigenPadre}</p>
               <div className="border-t border-black opacity-[0.65] w-full"></div>
               <p className="text-[8px] mt-[3px] font-[600] italic opacity-[0.7]">Lugar de Origen</p>
             </div>
         </div>

         {/* Bottom Footer Elements: Pagination, QR, Portal */}
         <div className="absolute bottom-[-10px] left-0 w-full flex items-center justify-between z-20 pl-[15px]">
            {/* Pagination */}
            <div className="w-[240px] pt-[20px]">
               <p className="font-bold text-[11px] tracking-wide text-slate-900">Página 1 de 2</p>
            </div>

            {/* QR Code */}
            <div className="shrink-0 bg-white p-[4px] relative -top-[12px]">
               <QRCode value={`https://renap.gob.gt/verificador?id=${data.id}`} size={85} level="M" />
            </div>

            {/* RENAPPORTAL Text */}
            <div className="w-[240px] pl-[40px]">
                <div className="text-[9px] text-left leading-[1.4] text-gray-800 font-sans">
                   <p className="font-black text-[10px] text-gray-900 tracking-tight">{data.portal}</p>
                   <p className="text-[9.5px]">{data.portalFecha}</p>
                   <p className="text-[9.5px]">{data.portalServicio}</p>
                   <p className="text-[8.5px] italic opacity-90">{data.portalEmail}</p>
                </div>
            </div>
         </div>
      </div>

      {/* Bottom Code */}
      <div className="text-center w-full relative z-20 pt-[5px] pb-[5px]">
         <p className="font-mono text-[9px] tracking-tighter opacity-[0.85]">{data.codigoBottom}</p>
      </div>

    </div>
  );
}
