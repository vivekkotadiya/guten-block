/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {InnerBlocks, useBlockProps, InspectorControls} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';


/**
 * Editor Styles
 */
import './editor.scss';

/**
 * Internal Dependencies
 */

const INNERBLOCK_TEMPLATE = [
    [ 'core/gallery', {} ],
];

import { ArrowIcon } from './helpers/icons';


export default function Edit( { attributes, setAttributes } ) {

	const {title_black, title_red } = attributes;

	const blockProps = useBlockProps( {
		className: 'alignfull social--proof',
	} );

	return (
		<>
		<InspectorControls key="setting">
			<PanelBody
					title={__('Block Settings', 'guten-block')}
					initialOpen={true}
				>
			<TextControl
				label={__('Heading Line 1', 'guten-block')}
				placeholder={__('Heading Line 1', 'guten-block')}
				type="text"
				value={ title_black }
				onChange={ ( val ) => setAttributes( { title_black: val } ) }
			/>
			<TextControl
				label={__('Heading Line 2', 'guten-block')}
				placeholder={__('Heading Line 2', 'guten-block')}
				type="text"
				value={ title_red }
				onChange={ ( val ) => setAttributes( { title_red: val } ) }
			/>
			</PanelBody>
		</InspectorControls>
		<section {...blockProps}>
			<div className="gradient--bg"></div>
			<div className="container">		
				<span className="goto--next"><ArrowIcon /></span>
				<h1 className="section--heading">{title_black} <span class="color--red">{title_red} </span></h1>
				<div className="social--gallery">
					<InnerBlocks
						template={ INNERBLOCK_TEMPLATE }
						templateLock="all"
					/>
				</div>
			</div>
		</section>
		</>
	);
}
