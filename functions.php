<?php
if ( !function_exists( 'bp_dtheme_enqueue_styles' ) ) :
	function wp_enqueue_styles(){
		$version = '0.1';

		//wp_register_style( 'screen',  get_stylesheet_directory_uri() . '/css/screen.css', array(), $version, 'screen, projection' );

		wp_register_script( 'jqueryui',  get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), $version, true );
		wp_register_script( 'scrollwheel',  get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), $version, true );
		wp_register_script( 'thouchwipe',  get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), $version, true );
		wp_register_script( 'thouchpunch',  get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), $version, true );
		wp_register_script( 'script',  get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), $version, true );

		//wp_enqueue_style( 'fonts' );
		//wp_enqueue_style( 'screen' );


		wp_enqueue_script('jquery',false, array(), $version, true);
		wp_enqueue_script('jqueryui',false, array(), $version, false);
		wp_enqueue_script('scrollwheel',false, array(), $version, true);
		wp_enqueue_script('thouchwipe',false, array(''), $version, true);
		wp_enqueue_script('thouchpunch',false, array(''), $version, true);
		wp_enqueue_script('script',false, array(''), $version, true);


	}

	add_action( 'wp_enqueue_scripts', 'wp_enqueue_styles' );
endif;