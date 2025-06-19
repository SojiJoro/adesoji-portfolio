declare module 'html2pdf.js' {
  interface Html2CanvasOptions {
    scale: number;
    useCORS?: boolean;
    allowTaint?: boolean;
    logging?: boolean;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    scrollX?: number;
    scrollY?: number;
    windowWidth?: number;
    windowHeight?: number;
    backgroundColor?: string | null;
    foreignObjectRendering?: boolean;
    imageTimeout?: number;
    letterRendering?: boolean;
    proxy?: string | null;
    removeContainer?: boolean;
  }

  interface JsPDFOptions {
    unit: 'pt' | 'mm' | 'cm' | 'in' | 'px' | 'pc' | 'em' | 'ex';
    format: string | [number, number];
    orientation: 'portrait' | 'landscape';
    precision?: number;
    compress?: boolean;
    floatPrecision?: number;
    encryption?: {
      userPassword?: string;
      ownerPassword?: string;
      userPermissions?: string[];
    };
  }

  interface Html2PdfOptions {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { 
      type: 'jpeg' | 'png' | 'webp';
      quality: number;
    };
    html2canvas?: Html2CanvasOptions;
    jsPDF?: JsPDFOptions;
    pagebreak?: {
      mode?: string | string[];
      before?: string | string[];
      after?: string | string[];
      avoid?: string | string[];
    };
    enableLinks?: boolean;
  }

  interface Html2Pdf {
    set(options: Html2PdfOptions): Html2Pdf;
    from(element: HTMLElement): Html2Pdf;
    save(): Promise<void>;
    save(filename: string): Promise<void>;
    output(type: 'blob' | 'datauristring' | 'arraybuffer'): Promise<Blob | string | ArrayBuffer>;
    toPdf(): Html2Pdf;
    get(type: 'pdf' | 'canvas' | 'img'): Promise<unknown>;
  }

  function html2pdf(): Html2Pdf;
  export default html2pdf;
}