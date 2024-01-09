import React from 'react';
import BlockContent from './BlockContent';
import Title from '../Title';
import LeadParagraph from '../LeadParagraph';

export default {
    title: 'BlockContent',
};

export const Default = () => (
    <div style={{ width: '900px' }}>
        <BlockContent sectionNumber={1}>
            <Title noMargin size={1}>
                Overskrift
            </Title>
            <LeadParagraph>Her er det så mye innhold at man bør innlede</LeadParagraph>
        </BlockContent>
    </div>
);
