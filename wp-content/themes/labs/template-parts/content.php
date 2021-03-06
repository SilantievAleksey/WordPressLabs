<article id="<?php the_ID(); ?>" <?php post_class('blog_post'); ?>>
    <h4> <a href="<?php the_permalink(); ?>"><?php echo get_the_title(); ?></a></h4>
    <?php if (has_category()): ?>
        <div class="blog_category">
            <ul>
                <li><?php the_category(', '); ?></li>
            </ul>
        </div>
    <?php endif; ?>
    <div class="blog_text">
        <ul>
            <li> | </li>
            <li> Post By : <a href="#"><?php the_author_posts_link(); ?></a></li>
            <li> | </li>
            <li>  On : <?php the_date(); ?> </li>
        </ul>
    </div>
    <div class="blog_post_img">
        <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    </div>
    <p> <?php the_excerpt(); ?> </p>
    <a href="<?php the_permalink(); ?>"> Continue reading <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</article>