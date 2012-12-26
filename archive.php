<?php get_header(); ?>
		<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>

		<div class="post">
			<div class="postTitle"><?php the_title(); ?></div>
			<div class="images"></div>
			<div class="info">
				<?php the_content(''); ?>
			</div>
		</div>

		<?php endwhile; ?>

	</div>
</div>
<div id="title">
	<?php $options = get_option( 'FLSCR_options' ); ?>
	<?php 
		if($options['logo'] != ""){
			echo "<a href='".get_bloginfo('url')."'><img src='".$options['logo']."' alt='".get_bloginfo('title')."' /></a>";
		}else{
	?>
	<a href="<?php bloginfo('url'); ?>"><?php bloginfo('title'); ?></a>
	<?php } ?>
</div>
<div id="nav">
	<ul class="navItem">
		<li><a href="javascript:void(0)" id="right">Next</a> <div class="paginate"><?php next_posts_link('( &rarr; )') ?></div></li>
		<li><a href="javascript:void(0)" id="left">Previous</a> <div class="paginate"><?php previous_posts_link('( &larr; )') ?></div></li>
		<?php if($options['onOff'] == "On"){ ?>
			<li><a href="javascript:void(0)" id="info">Hide Info</a></li>
		<?php }else{ ?>
			<li><a href="javascript:void(0)" id="info">Show Info</a></li>
		<?php } ?>
	</ul>
	<ul class="navItem">
		<?php wp_list_pages('title_li='); ?>
	</ul>
</div>

	<?php else : ?>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
