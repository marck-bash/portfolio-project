import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from '../assets/MarckBashawResume-1.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
  
export default function PdfViewer() {
    
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

  return (
    <div className="lg:mb-10 scale-50 lg:scale-100">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page 
                pageNumber={pageNumber}
                renderTextLayer={false}
            />
        </Document>
    </div>
  )
}
