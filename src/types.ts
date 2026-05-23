export interface CertificateData {
  certificador: string;
  lugarCertificacion: string;
  departamentoCertificacion: string;
  fechaAsiento: string;
  partida: string;
  folio: string;
  libro: string;
  municipioAsiento: string;
  departamentoAsiento: string;
  actoInscrito: string;
  
  cui: string;
  
  nombreDifunto: string;
  edad: string;
  dpi: string;
  genero: string;
  estadoCivil: string;
  profesion: string;
  lugarNacimiento: string;
  conyuge: string;
  
  fechaDefuncion: string;
  horaDefuncion: string;
  lugarDefuncion: string;
  causaA: string;
  causaB: string;
  causaC: string;
  causaD: string;
  
  madre: string;
  padre: string;
  
  observaciones: string;
  
  correlativoRENAP: string;
  idInferior: string;
  fechaInferior: string;
  codigoInferior: string;
}

export const defaultCertificateData: CertificateData = {
  certificador: "El infrascrito Registrador Civil de las Personas del Registro Nacional de las Personas",
  lugarCertificacion: "Cobán",
  departamentoCertificacion: "Alta Verapaz",
  fechaAsiento: "veintiocho de septiembre de dos mil dieciocho",
  partida: "205",
  folio: "20",
  libro: "03",
  municipioAsiento: "COBÁN",
  departamentoAsiento: "ALTA VERAPAZ",
  actoInscrito: "matrominio",
  
  cui: "1234 56789 1601",
  
  nombreDifunto: "Mario Rene Ortiz Méndez",
  edad: "85 años 2 meses 9 días",
  dpi: "1234 56789 1601",
  genero: "Masculino",
  estadoCivil: "Soltero",
  profesion: "Jornalero",
  lugarNacimiento: "COBÁN, ALTA VERAPAZ, GUATEMALA",
  conyuge: "-",
  
  fechaDefuncion: "Veintiseis de septiembre de dos mil dieciocho",
  horaDefuncion: "06:45",
  lugarDefuncion: "Guatemala, Alta Verapaz, Cobán, 5ta Ave, 3-18 Zona 1",
  causaA: "Insuficiencia Respiratoria",
  causaB: "Derrame Plencal Hilateral",
  causaC: "Hepatocarcinoma",
  causaD: "Infección de Tracto Urinario",
  
  madre: "Dominga Méndez",
  padre: "Domingo Ortiz",
  
  observaciones: "NO CONSTA NINGUNA ANOTACIÓN",
  
  correlativoRENAP: "51630503",
  idInferior: "178000215894",
  fechaInferior: "1841865871601 \n 06/02/2019 09:57:15 am",
  codigoInferior: "REG_178_025",
};
