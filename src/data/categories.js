/**
 * CATEGORY DATA
 *
 * The eight "Explore Categories" tiles on the homepage.
 * Keeping the text here means the JSX only has to loop over it —
 * you can add or edit a category without touching the layout.
 *
 * color: matches the `is-<color>` class in HomePage.css
 * comingSoon: true puts the tinted "Coming Soon" cover on the tile
 */
export const categories = [
  {
    id: 'college-fests',
    color: 'pink',
    emoji: '🎪',
    title: 'College Fests',
    description: 'Annual fests, cultural nights, battle of bands & pro-nites.',
    cta: 'Explore 42 Fests',
  },
  {
    id: 'concerts',
    color: 'blue',
    emoji: '🎸',
    title: 'Concerts & Music',
    description: 'EDM nights, indie rock tours, acoustic jams & campus gigs.',
    cta: 'Explore 58 Shows',
    comingSoon: true,
  },
  {
    id: 'comedy',
    color: 'yellow',
    emoji: '🎤',
    title: 'Comedy Shows',
    description: 'Campus open-mics, trial shows & top comedian national tours.',
    cta: 'Explore 29 Lineups',
    comingSoon: true,
  },
  {
    id: 'workshops',
    color: 'emerald',
    emoji: '💡',
    title: 'Workshops & Exhibitions',
    description: 'UI/UX hackathons, pottery, indie art labs & tech bootcamps.',
    cta: 'Explore 35 Bootcamps',
    comingSoon: true,
  },
  {
    id: 'bhandaras',
    color: 'orange',
    emoji: '🍲',
    title: 'Bhandaras',
    description: 'Holy prasad feasts, Tuesday langar points & community food.',
    cta: 'Explore 18 Locations',
    comingSoon: true,
  },
  {
    id: 'cultural',
    color: 'purple',
    emoji: '🎭',
    title: 'Cultural Events',
    description: 'Street nukkad natak, Urdu poetry mushairas & folk festivals.',
    cta: 'Explore 22 Gatherings',
    comingSoon: true,
  },
  {
    id: 'parties',
    color: 'rose',
    emoji: '🎉',
    title: 'Parties & Social',
    description: 'Fresher sundowners, rooftop trivia nights & hostel mixers.',
    cta: 'Explore 44 Mixers',
    comingSoon: true,
  },
  {
    id: 'local',
    color: 'teal',
    emoji: '🚲',
    title: 'Local Experiences',
    description: 'Midnight heritage cycling walks, sunrise photo walks & stargazing.',
    cta: 'Explore 19 Experiences',
    comingSoon: true,
  },
]
