const CODES = {
	A: 65,
	Z: 90,
}

function toCell(cell) {
	return `
        <div class="cell" contenteditable>
            ${cell}
        </div>
    `
}

function createCol(col) {
	return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content, index) {
	return `
        <div class="row">
            <div class="row-info">${index || ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1
	const rows = []
	const cols = new Array(colsCount).fill('').map(toChar).map(createCol).join('')

	// Creating Excel Table Header
	rows.push(createRow(cols, null))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCount).fill('').map(toCell).join('')
		rows.push(createRow(cells, i + 1))
	}
	console.log(colsCount)

	return rows.join('')
}
