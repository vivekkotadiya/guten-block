import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/social-proof', {
	edit: Edit,
	save,
} );
