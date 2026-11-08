/**
 * FEATURED EVENT DATA
 *
 * The eight cards in the "What's the scene?" grid.
 *
 * The colour fields are turned into class names by EventCard.jsx:
 *   accent     -> is-pink / is-cyan / ...   (date + title hover colour)
 *   badgeColor -> badge-magenta / badge-blue / ...
 *   priceColor -> price-emerald / price-yellow / ...
 *   footerColor-> footer-white / footer-emerald
 *   imageFilter-> img-none / img-hue-15 / ...
 *
 * All eight cards use the same stage photo, just like the Stitch design.
 */
export const featuredEvents = [
  {
    id: 'mood-indigo',
    badge: 'College Fest',
    badgeColor: 'magenta',
    price: 'Free with Student ID',
    priceColor: 'emerald',
    date: 'This Saturday, 6:00 PM',
    accent: 'pink',
    title: 'Mood Indigo 2025 Prelude',
    venue: 'IIT Powai Main Ground, Mumbai',
    description:
      "Kickstart Asia's largest cultural fest with indie rock bands, light installations, and dance clashes.",
    footer: 'Free Entry',
    footerColor: 'white',
    imageFilter: 'none',
  },
  {
    id: 'bass-and-beats',
    badge: 'Campus Concert',
    badgeColor: 'blue',
    price: '₹299',
    priceColor: 'yellow',
    date: 'Friday Night, 7:30 PM',
    accent: 'cyan',
    title: 'Bass & Beats Campus Gig',
    venue: 'NSUT Amphitheatre, Delhi NCR',
    description:
      'Bass heavy synthwave and indie electro live sets headlined by emerging college DJ collectives.',
    footer: '₹299 onwards',
    footerColor: 'white',
    imageFilter: 'hue-15',
  },
  {
    id: 'sunday-bhandara',
    badge: 'Free Bhandara',
    badgeColor: 'orange',
    price: 'Free Prasad Feasts',
    priceColor: 'green',
    date: 'Every Sunday, 12:30 PM',
    accent: 'orange',
    title: 'Aaspaas Free Sunday Bhandara',
    venue: 'Hanuman Mandir Chowk, CP, Delhi',
    description:
      'Hot poori chole, halwa prasad, and soulful community service organized by campus youth clubs.',
    footer: 'Free Sewa',
    footerColor: 'emerald',
    imageFilter: 'saturate-150',
  },
  {
    id: 'rahul-dua-live',
    badge: 'Standup Comedy',
    badgeColor: 'yellow',
    price: '₹499 Early Bird',
    priceColor: 'yellow',
    date: 'This Sunday, 8:00 PM',
    accent: 'yellow',
    title: 'Laugh Marathon: Rahul Dua Live',
    venue: 'Canvas Laugh Club, Cyber Hub',
    description:
      'Uncensored college humor, dating horror tales, and fresh punchlines tested in an intimate setting.',
    footer: '₹499 onwards',
    footerColor: 'white',
    imageFilter: 'contrast-125',
  },
  {
    id: 'techfest-hack-arena',
    badge: 'Tech Hackathon',
    badgeColor: 'emerald',
    price: '₹50K Prizes',
    priceColor: 'cyan',
    date: 'Next Friday, 10:00 AM',
    accent: 'emerald',
    title: 'Techfest Hack Arena 2025',
    venue: 'DTU Sports Complex, Delhi',
    description:
      '24-hour sprint to build AI agents, open source web tools, and crypto games with mentors.',
    footer: 'Free Team Pass',
    footerColor: 'white',
    imageFilter: 'invert-15',
  },
  {
    id: 'indie-sundowner',
    badge: 'Acoustic Sunset',
    badgeColor: 'rose',
    price: '₹199 Entry',
    priceColor: 'pink',
    date: 'Saturday, 5:00 PM',
    accent: 'rose',
    title: 'Delhi Indie Sundowner',
    venue: 'Sunder Nursery Amphitheatre',
    description:
      'Acoustic jams, cold brews, and golden hour chill sessions with homegrown singer-songwriters.',
    footer: '₹199',
    footerColor: 'white',
    imageFilter: 'hue-60',
  },
  {
    id: 'street-play-clash',
    badge: 'Nukkad Natak',
    badgeColor: 'purple',
    price: 'Open For All',
    priceColor: 'purple',
    date: 'Sunday, 11:00 AM',
    accent: 'purple',
    title: 'Dramatics Street Play Clash',
    venue: "St. Stephen's Grounds, DU North",
    description:
      '16 college dramatic societies compete with high-voltage dhols, bold scripts, and raw energy.',
    footer: 'Free Entry',
    footerColor: 'white',
    imageFilter: 'hue-180',
  },
  {
    id: 'midnight-food-trail',
    badge: 'Midnight Trail',
    badgeColor: 'cyan',
    price: 'BYOB (Bring Cash)',
    priceColor: 'yellow',
    date: 'Tonight, 11:30 PM',
    accent: 'cyan',
    title: 'Nirvana Midnight Food Trail',
    venue: 'Jama Masjid Gate 1 to Matia Mahal',
    description:
      'Butter chicken, hot rumali rotis, shahi tukda, and late-night chai with campus backpackers.',
    footer: 'Free Walk Join',
    footerColor: 'white',
    imageFilter: 'hue-90',
  },
]
