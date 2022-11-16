import pdfMake from 'pdfmake/build/pdfmake';
import pdfFontes from 'pdfmake/build/vfs_fonts';
//import Convidados from './convidados';

const Impressao = () => {
	//const lista = Convidados;  
	pdfMake.vfs = pdfFontes.pdfMake.vfs;
	const reportTitle = [
		{
			text: 'Convidado',
			fontsize: 15,
			bold: true,
			margin: [15, 20, 0 ,45]
		}
	];

	const details = [
		{
			table:{
				headerRows: 1,
				widths: ['*','*','*','*'],
				body: [
					[
						{text: 'Código', style: 'tableHeader', fontSize: 10},
						{text: 'Nome', style: 'tableHeader', fontSize: 10},
						{text: 'CPF', style: 'tableHeader', fontSize: 10},
						{text: 'Tipo', style: 'tableHeader', fontSize: 10}
					],
					// lista.map(list => (
					// [list.cadastro.nome,list.cadastro.nome,list.cadastro.nome,list.cadastro.nome]
					// ))	
				]
			},
			layout: 'headerLineOnly'
		}
	];

	const Rodape = (currentPage, pageCount) => {
		return [
			{
				text: currentPage + ' / ' + pageCount,
				alignment: 'right',
				fontsize: 9,
				margin: [0, 10, 20, 0] // left top right bottom

			}
		]

	};

	const docDefinitios = {
		pageSize: 'A4',
		pageMargins: [15, 50, 15, 40],
		
		header: [reportTitle],
		content: [details],
		footer: Rodape
	}

	pdfMake.createPdf(docDefinitios).download();

}


export default Impressao;