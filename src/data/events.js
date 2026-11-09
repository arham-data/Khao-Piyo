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

export const events = [
  {
    id: 'ESYA 26',
    category: 'College Fest',
    badge: 'College Fest',
    date: '14-15 Nov',
    title: 'ESYA 26, IIITD',
    venue: 'IIIT Delhi',
    description:
      "Asia's biggest collegiate cultural spectacle featuring international electronic producers, laser tunnels, and battle rounds.",
    price: 'Student ID Pass',
    organiser: 'IIT Delhi',
    highlights: [
      'Three stages running back to back',
      'Laser tunnel and light installations',
      'Battle rounds between 40+ colleges',
    ],
    image: moodIndigo,
    featured: true,
    // Discover All Events card
    badgeColor: 'magenta',
    priceColor: 'cyan',
    glow: 'magenta',
    // Homepage card
    featuredBadgeColor: 'magenta',
    featuredPriceColor: 'emerald',
    accent: 'pink',
    footer: 'Free Entry',
    footerColor: 'white',
    imageFilter: 'none',
  },
  {
    id: 'Chamanlal',
    category: 'Local',
    badge: 'Local',
    date: 'Everyday',
    title: 'Chamanlal Ustadji Chole Bhature Wale',
    venue: 'Chamanlal Ustadji Chole Bhature Wale',
    description:
      `Chamanlal Ustadji Chole Bhature Wale is highly popular across Delhi for its viral "unlimited chole bhature" deal, serving all-you-can-eat plates for just ₹50 to ₹60. 



    Unlimited chole bhature

    2 outlets 


    Adress of 1st : pillar no.655, east metro station, Shivaji Marg, Hari Nagar, Block D2, Milap Nagar, Uttam Nagar, Delhi, 110059 

    Nearest metro station: uttam nagar east 

    Cost : 61rupees unlimited chole bhature 
    Time: 8 am to 4 pm


    Address 2 : A1, BLOCK 1, opposite M2K Road, Pocket 1, Sector 7, Rohini, Delhi, 110085 

    Nearest metro station: rohini east metro station


    Cost : 50 rupees 
    Time: 8 am to 5:30 pm`,
    price: '61 Rupees',
    organiser: 'Chamanlal Ustadji Chole Bhature Wale',
    highlights: [
      'Unlimited Chole Bhature',
      '61 rupees unlimited Chole Bhature',
    ],
    image: moodIndigo,
    featured: true,
    // Discover All Events card
    badgeColor: 'magenta',
    priceColor: 'cyan',
    glow: 'magenta',
    // Homepage card
    featuredBadgeColor: 'magenta',
    featuredPriceColor: 'emerald',
    accent: 'pink',
    footer: 'Free Entry',
    footerColor: 'white',
    imageFilter: 'none',
  }
]
