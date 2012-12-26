<!DOCTYPE html>
<html>

<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?></title>

<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->

<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<?php wp_head(); ?>

<?php $options = get_option( 'FLSCR_options' ); ?>
	<?php
		$style = "<style type='text/css'>";
		if($options['fontFamily'] != ""){
			$style .= "* { font-family:" . $options['fontFamily'] . "; }\n";
		}
		if($options['fontSize'] != ""){
			$style .= "* { font-size:" . $options['fontSize'] . "; }\n";
		}
		if($options['lineHeight'] != ""){
			$style .= "* { line-height:" . $options['lineHeight'] . "; }\n";
		}
		if($options['dtext'] != ""){
			$style .= "#nav.light ul.navItem li a, #title.light a, #showInfo.light, #showInfo.light * { color:" . $options['dtext'] . "; }\n";
			$style .= "#nav.light ul.navItem li a:hover { border-bottom:1px solid " . $options['dtext'] . "; }\n";
		}
		if($options['ltext'] != ""){
			$style .= "#nav.dark ul.navItem li a, #nav ul.navItem li a:hover, #nav.dark ul.navItem li a:hover, #showInfo.dark, #showInfo.dark *, #title.dark a { color:" . $options['ltext'] . "; }\n";
			$style .= "#nav.dark ul.navItem li a:hover { border-bottom:1px solid " . $options['ltext'] . "; }\n";
		}
		if($options['onOff'] == "On"){
			$style .= "#showInfo, #showInfo.dark, #showInfo.light { display:block; }\n";
		}
		if($options['top'] != ""){
			$style .= "#showInfo, #showInfo.dark, #showInfo.light { top:".$options['top']."; }\n";
		}
		if($options['mw'] != ""){
			$style .= "#showInfo, #showInfo.dark, #showInfo.light { max-width:".$options['mw']."; }\n";
		}
		$style .= "</style>";
		echo $style;
	?>
</head>
<body>
	<div id="content">
		<div id="infinite">