import { useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const canUseDOM = () => (
	typeof window !== 'undefined'
        && typeof window.document !== 'undefined'
        && typeof window.document.createElement !== 'undefined'
);

export const useClientLayoutEffect = canUseDOM() ? useLayoutEffect : () => {};

export const useId = () => {
	const [newId, setNewId] = useState('');

	useClientLayoutEffect(() => {
		setNewId(uuidv4());
	}, []);

	return newId || '';
};
