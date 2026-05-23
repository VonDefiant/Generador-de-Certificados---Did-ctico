import React from 'react';
import { MarriageCertificateData } from '../types';
import QRCode from 'react-qr-code';
import { jsPDF } from "jspdf";

interface MarriageCertificatePreviewProps {
  data: MarriageCertificateData;
}

const MarriageCertificatePreview: React.FC<MarriageCertificatePreviewProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-[2px] shadow-sm flex flex-col justify-between"
         style={{
           width: '100%',
           maxWidth: '800px', // A4 aspect ratio width based on height
           aspectRatio: '1 / 1.414', // A4 size
           position: 'relative',
           overflow: 'hidden',
           margin: '0 auto',
           padding: '40px 60px',
           backgroundImage: 'url(https://raw.githubusercontent.com/VonDefiant/CERTIFICADO-DE-DEFUNCION-EDUCATIVO/033cef2151a3b3faee21e3c110bae80ccb4e1dab/REEMPLAZO%20HOJA%20CERTIFICADO.jpg)',
           backgroundSize: '100% 100%',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
    >
      <div className="flex-1 w-full relative z-10 flex flex-col pt-[50px]">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start mb-[30px] relative">
          <div className="flex flex-col">
           <img 
             src="https://raw.githubusercontent.com/VonDefiant/CERTIFICADO-DE-DEFUNCION-EDUCATIVO/033cef2151a3b3faee21e3c110bae80ccb4e1dab/187128-removebg-preview.png" 
             alt="RENAP Logo" 
             className="h-[45px] object-contain object-left mix-blend-multiply" 
             referrerPolicy="no-referrer"
           />
            <p className="text-[10px] mt-[1px] text-gray-800 ml-1">
              Correlativo: <span className="font-semibold">{data.correlativo}</span>
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="mb-1 w-full flex justify-end">
               {/* Barcode mock */}
               <svg className="w-[180px] h-[22px]">
                   <rect x="0" y="0" width="100%" height="100%" fill="none" />
                   <g fill="black">
                       <rect x="0" y="0" width="2" height="22" />
                       <rect x="4" y="0" width="1" height="22" />
                       <rect x="7" y="0" width="3" height="22" />
                       <rect x="12" y="0" width="1" height="22" />
                       <rect x="15" y="0" width="2" height="22" />
                       <rect x="20" y="0" width="4" height="22" />
                       <rect x="26" y="0" width="1" height="22" />
                       <rect x="29" y="0" width="2" height="22" />
                       <rect x="34" y="0" width="1" height="22" />
                       <rect x="37" y="0" width="3" height="22" />
                       <rect x="42" y="0" width="1" height="22" />
                       <rect x="45" y="0" width="2" height="22" />
                       <rect x="50" y="0" width="4" height="22" />
                       <rect x="56" y="0" width="1" height="22" />
                       <rect x="59" y="0" width="2" height="22" />
                       <rect x="64" y="0" width="1" height="22" />
                       <rect x="67" y="0" width="4" height="22" />
                       <rect x="73" y="0" width="2" height="22" />
                       <rect x="77" y="0" width="1" height="22" />
                       <rect x="80" y="0" width="3" height="22" />
                       <rect x="85" y="0" width="2" height="22" />
                       <rect x="89" y="0" width="1" height="22" />
                       <rect x="92" y="0" width="4" height="22" />
                       <rect x="98" y="0" width="1" height="22" />
                       <rect x="101" y="0" width="2" height="22" />
                       <rect x="105" y="0" width="3" height="22" />
                       <rect x="110" y="0" width="1" height="22" />
                       <rect x="113" y="0" width="2" height="22" />
                       <rect x="117" y="0" width="4" height="22" />
                       <rect x="123" y="0" width="2" height="22" />
                       <rect x="127" y="0" width="1" height="22" />
                       <rect x="130" y="0" width="3" height="22" />
                       <rect x="135" y="0" width="1" height="22" />
                       <rect x="138" y="0" width="2" height="22" />
                       <rect x="142" y="0" width="4" height="22" />
                       <rect x="148" y="0" width="1" height="22" />
                       <rect x="151" y="0" width="2" height="22" />
                       <rect x="155" y="0" width="3" height="22" />
                       <rect x="160" y="0" width="1" height="22" />
                       <rect x="163" y="0" width="2" height="22" />
                       <rect x="167" y="0" width="4" height="22" />
                       <rect x="173" y="0" width="1" height="22" />
                       <rect x="176" y="0" width="3" height="22" />
                   </g>
               </svg>
            </div>
            <p className="text-[10px] text-gray-800 tracking-wide">
              {data.verificador}
            </p>
          </div>
        </div>

        {/* TITLE SECTION */}
        <div className="flex flex-col items-center text-center mt-[10px] mb-[20px]">
          <h1 className="text-[15px] font-bold text-gray-900 leading-tight">Registro Civil de las Personas</h1>
          <h2 className="text-[14px] font-bold text-gray-900 mb-[4px] leading-tight">Certificado de Matrimonio</h2>
          <p className="text-[11px] text-gray-900 max-w-[85%] leading-[1.4] mt-[5px]">
            El infrascrito Registrador Civil de las Personas del Registro Nacional de las Personas del<br/>
            Municipio de {data.municipioCertificacion}, Departamento de {data.departamentoCertificacion},<br/>
            CERTIFICA
          </p>
          <p className="text-[11px] text-gray-900 max-w-[85%] mt-[8px]">
            que con fecha {data.fechaAsiento}, en el Registro Civil del Municipio de {data.municipioAsiento}, Departamento de {data.departamentoAsiento}, quedó inscrito el Matrimonio No. {data.numeroMatrimonio} de:
          </p>
        </div>

        {/* DATOS DEL VARON */}
        <div className="flex mt-[15px]">
           <div className="w-[180px] flex flex-col shrink-0">
             <div className="font-bold text-[13px] text-gray-900 pb-[10px]">
               Datos del Varón
             </div>
             <div className="w-[85px] shrink-0 ml-[20px]">
               {data.fotoVaron ? (
                 <div className="w-[85px] h-[105px] border border-gray-400 p-[2px] bg-white">
                    <img src={data.fotoVaron} alt="Varón" className="w-full h-full object-cover" />
                 </div>
               ) : (
                 <div className="w-[85px] h-[105px] border border-gray-400 bg-white flex flex-col justify-center items-center text-center p-2 opacity-80 mt-[5px]">
                    <p className="text-[12px] font-semibold text-gray-600 leading-tight">Fotografía</p>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">no disponible</p>
                 </div>
               )}
             </div>
           </div>

           <div className="flex-1 flex flex-col pt-[5px] pl-[10px]">
              <div className="flex flex-col items-center">
                 <p className="text-[10px] text-gray-900 font-semibold mb-[1px]">CUI:{data.cuiVaron}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Documento de Identificación</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[11px] text-gray-900 relative top-[3px]">{data.nombreVaron}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Nombres y Apellidos del Varón</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[10px] text-gray-900 relative top-[3px]">{data.lugarOrigenVaron}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Lugar de Origen</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[10px] text-gray-900 relative top-[3px]">{data.ocupacionVaron}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Ocupación</p>
              </div>
           </div>
        </div>

        {/* DATOS DE LA MUJER */}
        <div className="flex mt-[20px]">
           <div className="w-[180px] flex flex-col shrink-0">
             <div className="font-bold text-[13px] text-gray-900 pb-[10px]">
               Datos de la Mujer
             </div>
             <div className="w-[85px] shrink-0 ml-[20px]">
               {data.fotoMujer ? (
                 <div className="w-[85px] h-[105px] border border-gray-400 p-[2px] bg-white">
                    <img src={data.fotoMujer} alt="Mujer" className="w-full h-full object-cover" />
                 </div>
               ) : (
                 <div className="w-[85px] h-[105px] border border-gray-400 bg-white flex flex-col justify-center items-center text-center p-2 opacity-80 mt-[5px]">
                    <p className="text-[12px] font-semibold text-gray-600 leading-tight">Fotografía</p>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">no disponible</p>
                 </div>
               )}
             </div>
           </div>

           <div className="flex-1 flex flex-col pt-[5px] pl-[10px]">
              <div className="flex flex-col items-center">
                 <p className="text-[10px] text-gray-900 font-semibold mb-[1px]">CUI:{data.cuiMujer}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Documento de Identificación</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[11px] text-gray-900 relative top-[3px]">{data.nombreMujer}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Nombres y Apellidos de la Mujer</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[10px] text-gray-900 relative top-[3px]">{data.lugarOrigenMujer}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Lugar de Origen</p>
              </div>

              <div className="flex flex-col items-center mt-[12px]">
                 <p className="text-[10px] text-gray-900 relative top-[3px]">{data.ocupacionMujer}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Ocupación</p>
              </div>
           </div>
        </div>

        {/* DATOS DEL MATRIMONIO */}
        <div className="flex mt-[20px] mb-[15px]">
           <div className="w-[180px] font-bold text-[13px] text-gray-900 shrink-0">
             Datos del Matrimonio
           </div>
           
           <div className="flex-1 flex flex-col pt-[5px] pl-[10px]">
              <div className="flex flex-col items-center">
                 <p className="text-[10px] text-gray-900 relative top-[3px]">{data.lugarMatrimonio}</p>
                 <div className="w-full border-t border-black mb-[2px]"></div>
                 <p className="text-[7.5px] italic text-gray-700 leading-none">Lugar de Matrimonio</p>
              </div>

              <div className="flex w-full mt-[12px]">
                 <div className="flex flex-col items-center flex-1 mr-[10px]">
                    <p className="text-[10px] text-gray-900 relative top-[3px]">{data.fechaMatrimonio}</p>
                    <div className="w-full border-t border-black mb-[2px]"></div>
                    <p className="text-[7.5px] italic text-gray-700 leading-none">Fecha del Matrimonio</p>
                 </div>
                 <div className="flex flex-col items-center w-[60px]">
                    <p className="text-[10px] text-gray-900 relative top-[3px]">{data.capitulaciones}</p>
                    <div className="w-full border-t border-black mb-[2px]"></div>
                    <p className="text-[7.5px] italic text-gray-700 leading-none">Capitulaciones</p>
                 </div>
              </div>

              <div className="flex w-full mt-[12px]">
                 <div className="flex flex-col items-center w-[160px] mr-[20px]">
                    <p className="text-[10px] text-gray-900 relative top-[3px]">{data.regimenEconomico}</p>
                    <div className="w-full border-t border-black mb-[2px]"></div>
                    <p className="text-[7.5px] italic text-gray-700 leading-none">Régimen Económico</p>
                 </div>
                 <div className="flex flex-col items-center flex-1">
                    <p className="text-[10px] text-gray-900 relative top-[3px]">{data.autoridad}</p>
                    <div className="w-full border-t border-black mb-[2px]"></div>
                    <p className="text-[7.5px] italic text-gray-700 leading-none">Autoridad</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
      
      {/* Footer / Info Block Absolute Positioning */}
      <div className="absolute bottom-[35px] left-0 w-full px-[60px] flex items-end justify-between z-20">
         <div className="w-[180px]">
            <p className="text-[11px] font-bold text-gray-900 tracking-wide pb-[5px]">Página 1 de 2</p>
         </div>

         <div className="flex flex-col items-center">
           <div className="bg-white p-[4px] mb-[4px]">
             <QRCode value={data.codigoLargo} size={75} level="M" />
           </div>
           <p className="text-[8px] font-sans text-gray-800 tracking-wider text-center">
              {data.codigoLargo}
           </p>
         </div>

         <div className="w-[180px] flex flex-col items-end text-[8.5px] text-gray-900 leading-[1.6] pb-[10px]">
           <div className="text-left w-[120px]">
              <p>{data.idImpresion}</p>
              <div className="flex justify-between w-full">
                 <p>{data.fechaImpresion}</p>
                 <p>11:09:14a.m.</p>
              </div>
              <p>{data.codigoImpresion}</p>
           </div>
         </div>
      </div>

    </div>
  );
};

export default MarriageCertificatePreview;
