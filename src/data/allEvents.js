/**
 * ALL EVENTS DATA
 *
 * The twelve cards on the "Discover All Events" page.
 *
 * Unlike the homepage grid, every card here has its own photo.
 * The images were downloaded from the Stitch export into
 * src/assets/images/events/ so the site does not depend on
 * Google's CDN at runtime.
 *
 * Colour fields are turned into class names by EventCard.jsx:
 *   badgeColor -> badge-magenta / badge-slate-cyan / ...
 *   priceColor -> chip-cyan / chip-pink / chip-white
 *   glow       -> glow-magenta / glow-cyan / glow-purple
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

export const allEvents = [
  {
    id: 'mood-indigo-pro-nite',
    badge: 'College Fest',
    badgeColor: 'magenta',
    date: 'Sat, Dec 21 • 5:00 PM',
    title: 'Mood Indigo 2025: Pro-Nite',
    venue: 'IIT Powai Main Gymkhana, Mumbai',
    description:
      "Asia's biggest collegiate cultural spectacle featuring international electronic producers, laser tunnels, and battle rounds.",
    price: 'Student ID Pass',
    priceColor: 'cyan',
    glow: 'magenta',
    image: moodIndigo,
  },
  {
    id: 'bass-and-beats',
    badge: 'Campus Gig',
    badgeColor: 'purple',
    date: 'Fri, Nov 22 • 7:30 PM',
    title: 'Bass & Beats: NSUT Moksha Stage',
    venue: 'NSUT Moksha Arena, Dwarka Delhi',
    description:
      'Heavy low-end synth basslines, college beatbox cyphers, and headlining underground Punjabi bass producers.',
    price: '₹199 Entry',
    priceColor: 'pink',
    glow: 'cyan',
    image: bassAndBeats,
  },
  {
    id: 'sunday-maha-bhandara',
    badge: 'Free Bhandara',
    badgeColor: 'steel',
    date: 'Sun, Nov 24 • 12:30 PM',
    title: 'Aaspaas Sunday Maha-Bhandara',
    venue: 'Hanuman Mandir Chowk, Connaught Place',
    description:
      'Pure bliss after all-night study or partying. Crispy puris, spicy aloo sabzi, hot halwa and endless buttermilk for all students.',
    price: 'Free Prasad',
    priceColor: 'cyan',
    glow: 'magenta',
    image: sundayBhandara,
  },
  {
    id: 'campus-laughs',
    badge: 'Standup Comedy',
    badgeColor: 'slate-pink',
    date: 'Sat, Nov 30 • 8:00 PM',
    title: 'Campus Laughs: Rahul Dua & Friends',
    venue: 'The Comedy Store, Cyber Hub Gurgaon',
    description:
      "Uncensored college hostel stories, dating app catastrophes, and engineering exams satire with Delhi's sharpest comics.",
    price: '₹299 onwards',
    priceColor: 'white',
    glow: 'purple',
    image: campusLaughs,
  },
  {
    id: 'techfest-hack-arena',
    badge: 'Tech Hackathon',
    badgeColor: 'bright-cyan',
    date: 'Fri, Dec 06 • 10:00 AM',
    title: 'Techfest Hack Arena 2025',
    venue: 'DTU Sports Complex, Rohini, Delhi',
    description:
      '36 hours of sleepless coding, AI agents, Midnight Maggi refills, and ₹1.5L prize pool backed by top Bengaluru tech startups.',
    price: 'Free + ₹50K Prizes',
    priceColor: 'cyan',
    glow: 'cyan',
    image: techfest,
  },
  {
    id: 'delhi-indie-sundowner',
    badge: 'Acoustic Sunset',
    badgeColor: 'slate-cyan',
    date: 'Sun, Dec 01 • 4:30 PM',
    title: 'Delhi Indie Sundowner & Chai',
    venue: 'Sunder Nursery Amphitheatre, Delhi',
    description:
      'Unplugged soulful Hindi and indie pop, freshly brewed saffron kulhad chai, hand-painted rugs, and campus songwriting open mic.',
    price: 'Free Entry',
    priceColor: 'pink',
    glow: 'magenta',
    image: indieSundowner,
  },
  {
    id: 'dramatics-street-play',
    badge: 'Nukkad Natak',
    badgeColor: 'slate-magenta',
    date: 'Tue, Nov 26 • 2:00 PM',
    title: 'Dramatics Street Play Clash',
    venue: "St. Stephen's Quad, DU North Campus",
    description:
      '16 legendary North & South campus dramatics societies going head-to-head in roaring social critiques and dhol rhythms.',
    price: 'Open to All',
    priceColor: 'cyan',
    glow: 'magenta',
    image: streetPlay,
  },
  {
    id: 'kebab-trail',
    badge: 'Midnight Trail',
    badgeColor: 'slate-cyan',
    date: 'Sat, Nov 23 • 11:30 PM',
    title: '3 AM Purani Dilli Kebab Trail',
    venue: 'Jama Masjid Gate 1 to Matia Mahal, Delhi',
    description:
      'Guided student crawl through legendary 70-year-old seekh kebabs, melting butter chicken, and ice-cold shahi tukda.',
    price: '₹349 Crawl Pass',
    priceColor: 'white',
    glow: 'cyan',
    image: kebabTrail,
  },
  {
    id: 'sunburn-campus',
    badge: 'Bollywood Rave',
    badgeColor: 'magenta',
    date: 'Fri, Dec 13 • 7:00 PM',
    title: 'Sunburn Campus: Lost Stories',
    venue: 'BITS Pilani Main Stage, Rajasthan',
    description:
      "India's top dance music powerhouse dropping folk electronica flips and chartbusting campus festival anthems.",
    price: '₹499 Early Bird',
    priceColor: 'pink',
    glow: 'magenta',
    image: sunburn,
  },
  {
    id: 'clay-and-sip',
    badge: 'Studio Workshop',
    badgeColor: 'slate-cyan',
    date: 'Sun, Dec 08 • 11:00 AM',
    title: 'Clay & Sip: Wheel Throwing Workshop',
    venue: 'Hauz Khas Village Loft Studio, Delhi',
    description:
      'Hands-on pottery masterclass, take-home personalized terracotta planters, and unlimited artisanal iced tea & bakery bites.',
    price: '₹399 Student Pass',
    priceColor: 'white',
    glow: 'cyan',
    image: claySip,
  },
  {
    id: 'crossroads-battle-of-bands',
    badge: 'Battle of Bands',
    badgeColor: 'slate-pink',
    date: 'Sat, Nov 30 • 3:30 PM',
    title: 'Crossroads: War of the Rock Bands',
    venue: 'SRCC Cross Avenue, North Campus',
    description:
      '12 explosive student bands tearing up original grunge, metal riffs, and indie rock for the North Campus championship title.',
    price: 'Free Student Entry',
    priceColor: 'cyan',
    glow: 'magenta',
    image: crossroads,
  },
  {
    id: 'dastaan-e-urdu',
    badge: 'Poetry Slam',
    badgeColor: 'slate-lavender',
    date: 'Thu, Dec 05 • 6:30 PM',
    title: 'Dastaan-e-Urdu Open Mic & Cypher',
    venue: 'Kala Ghoda Art House, South Mumbai',
    description:
      'Intimate spoken word, nazms, Hindi slam pieces, and acoustic harmonium beats under candlelit bohemian arches.',
    price: '₹149 Early Bird',
    priceColor: 'white',
    glow: 'purple',
    image: dastaan,
  },
]
