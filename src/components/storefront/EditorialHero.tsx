import Image from 'next/image';
import NextLink from 'next/link';
import lineupSeven from '@/assets/images/campaign/lineup-seven.webp';
import sweatsFour from '@/assets/images/campaign/sweats-four.webp';

/**
 * Image-led hero: the two campaign photos side by side (stacked on phones),
 * each in a fixed 16:10 frame so nothing shifts while they load. The sources
 * are small (1200 and 736px wide), so halving the width keeps them close to
 * native size instead of stretching one across 1440px. The page title is a
 * visually hidden h1; the only visible text is one "Shop" pill.
 */
export function EditorialHero() {
  return (
    <section aria-labelledby="hero-title" className="relative grid gap-2 sm:grid-cols-2">
      <h1 id="hero-title" className="sr-only">
        meh, Season 01: the sample drop
      </h1>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-page)] bg-muted">
        <Image
          src={lineupSeven}
          alt="Seven people in relaxed streetwear standing in a line against a white studio wall"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          style={{objectPosition: '50% 70%'}}
        />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-page)] bg-muted">
        {/* Above the fold too, so eager, but it doesn't compete with the first image. */}
        <Image
          src={sweatsFour}
          alt="Four men in neutral sweatsuits pulling on hoodies against a grey backdrop"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          loading="eager"
          className="object-cover"
          style={{objectPosition: '50% 40%'}}
        />
      </div>
      <NextLink
        href="#new-in"
        className="absolute start-3 bottom-3 inline-flex min-h-8 items-center rounded-full bg-paper px-4 text-[14px] font-medium text-ink shadow-[0_1px_2px_rgb(0_0_0/0.12)] hover:bg-paper/90 focus-visible:outline-2 focus-visible:outline-offset-2 sm:start-4 sm:bottom-4">
        Shop new in
      </NextLink>
    </section>
  );
}
