import React from 'react';
import Divider from './index';

export default {
	title: 'Divider',

	parameters: {
		layout: 'fullscreen',
	},
};

export const Dark = () => (
	<div
		style={{
			alignItems: 'center',
			display: 'flex',
			height: '100%',
			position: 'absolute',
			width: '100%',
		}}
	>
		<Divider dark />
	</div>
);

export const Light = () => (
	<div
		style={{
			alignItems: 'center',
			display: 'flex',
			height: '100%',
			position: 'absolute',
			width: '100%',
		}}
	>
		<Divider light />
	</div>
);
