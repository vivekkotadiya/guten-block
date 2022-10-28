<?php
/**
 * Plugin Name:       Guten Block
 * Description:       Social Proof Gutenberg Block.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Vivek Kotadiya
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       guten-block
 *
 * @package           create-block
 */

 

function create_block_starter_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_starter_block_block_init' );
