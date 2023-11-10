import React from 'react';
import { ChevronDown } from 'react-feather';
import Button from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, auto)',
	gridColumnGap: '20px',
};

export default {
	title: 'Button',
};

export const Primary = () => (
	<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
		<Button primary>Primary button</Button>
		<Button icon={<ChevronDown size={18} />} primary>
			Primary icon
		</Button>
		<Button primary disabled>
			Disabled button
		</Button>
	</div>
);

export const PrimaryWithDescription = () => (
	<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
		<Button ariaLabel="test description of primary button" primary>
			Primary button
		</Button>
		<Button ariaLabel="test description of icon button" icon={<ChevronDown size={18} />} primary>
			Primary icon
		</Button>
		<Button ariaLabel="test description of disabled button" primary disabled>
			Disabled button
		</Button>
	</div>
);

PrimaryWithDescription.story = {
	name: 'Primary with description',
};

export const Secondary = () => (
	<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
		<Button className="mr-4">Secondary button</Button>
		<Button className="mr-4" icon={<ChevronDown size={18} />}>
			Secondary icon
		</Button>
		<Button disabled>Disabled button</Button>
	</div>
);

export const PrimaryNegative = () => (
	<div style={negativeStyle}>
		<Button className="mr-4" negative primary>
			Primary button
		</Button>
		<Button className="mr-4" icon={<ChevronDown size={18} />} negative primary>
			Primary icon
		</Button>
		<Button negative primary disabled>
			Disabled button
		</Button>
	</div>
);

PrimaryNegative.story = {
	name: 'Primary - Negative',
};

export const SecondaryNegative = () => (
	<div style={negativeStyle}>
		<Button className="mr-4" negative>
			Secondary button
		</Button>
		<Button className="mr-4" icon={<ChevronDown size={18} />} negative>
			Secondary icon
		</Button>
		<Button negative disabled>
			Disabled button
		</Button>
	</div>
);

SecondaryNegative.story = {
	name: 'Secondary - Negative',
};
