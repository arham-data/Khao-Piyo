/**
 * EVENT DATA
 *
 * One list of twelve events used by both pages.
 *
 *   featured: true  -> also shown in the homepage "What's the scene?" grid
 *   featured: false -> only shown on the Discover All Events page
 *
 * The homepage card and the listing card look different, so each
 * event carries two sets of colour keys:
 *
 *   badgeColor / priceColor          -> Discover All Events card
 *   featuredBadgeColor / featuredPriceColor -> homepage card
 *
 * EventCard.jsx picks the right set based on its `variant` prop.
 */

import moodIndigo from '../assets/images/events/mood-indigo-pro-nite.jpg'
import bassAndBeats from '../assets/images/events/bass-and-beats.jpg'
import sundayBhandara from '../assets/images/events/sunday-maha-bhandara.jpg'
import campusLaughs from '../assets/images/events/campus-laughs-rahul-dua.jpg'
import techfest from '../assets/images/events/techfest-hack-arena.jpg'
import indieSundowner from '../assets/images/events/delhi-indie-sundowner.jpg'
import streetPlay from '../assets/images/events/dramatics-street-play.jpg'
import kebabTrail from '../assets/images/events/purani-dilli-kebab-trail.jpg'
import sunburn from '../assets/images/events/sunburn-campus-lost-stories.jpg'
import claySip from '../assets/images/events/clay-and-sip-workshop.jpg'
import crossroads from '../assets/images/events/crossroads-battle-of-bands.jpg'
import dastaan from '../assets/images/events/dastaan-e-urdu-open-mic.jpg'

export const events = [
  
]
