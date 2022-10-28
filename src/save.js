/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */

 import { ArrowIcon } from './helpers/icons';

export default function save({attributes}) {

	const {title_black, title_red } = attributes;

	return (
		<section className="social--proof alignfull">
			<div className="gradient--bg"></div>
			<div className="container">		
				<span className="goto--next"><ArrowIcon /></span>
				<h1 className="section--heading">{title_black} <span class="color--red">{title_red}</span></h1>
				<div className="social--gallery">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
