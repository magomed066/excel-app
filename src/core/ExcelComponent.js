import DOMListener from '@core/DOMListener'

class ExcelComponent extends DOMListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
	}

	toHTML() {
		return ''
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
	}
}

export default ExcelComponent
