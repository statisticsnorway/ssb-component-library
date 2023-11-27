import fs from 'fs';
import path from 'path';
import { render as rtlRender } from '@testing-library/react';

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

const styles = fs.readFileSync(path.relative(process.cwd(), './lib/bundle.css'), 'utf8');

export function render(ui, options) {
	const view = rtlRender(ui, options);

	const styleElement = document.createElement('style');
	styleElement.innerHTML = styles;
	document.body.appendChild(styleElement);

	return view;
}
