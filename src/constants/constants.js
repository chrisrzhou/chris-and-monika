import BRIDGE_TROUBLE from './../images/bridge_trouble.png';
import HAPPY_ANGRY from './../images/happy_angry.png';
import MAIN_COUPLE from './../images/main_couple.png';
import MONKEY_KISS from './../images/monkey_kiss.png';
import MONKEY_KISS_CARTOON from './../images/monkey_kiss_cartoon.jpg';
import RENGSTORFF_HOUSE from './../images/rengstorff_house.jpg';
import RENGSTORFF_HOUSE_2 from './../images/rengstorff_house_2.jpg';
import SHORELINE_PARK from './../images/shoreline_park.jpg';
import RING from './../images/ring.png';

const imageURL = (image) => {
  return `.${image}`;
};

const constants = {
  images: {
    mainCouple: imageURL(MAIN_COUPLE),
    bridgeTrouble: imageURL(BRIDGE_TROUBLE),
    happyAngry: imageURL(HAPPY_ANGRY),
    monkeyKiss: imageURL(MONKEY_KISS),
    monkeyKissCartoon: imageURL(MONKEY_KISS_CARTOON),
    rengstorffHouse: imageURL(RENGSTORFF_HOUSE),
    rengstorffHouse2: imageURL(RENGSTORFF_HOUSE_2),
    shorelinePark: imageURL(SHORELINE_PARK),
    ring: imageURL(RING),
  },
  emails: {
    chris: 'mailto:christopher.r.zhou@gmail.com',
    monika: 'mailto:monikasun88@gmail.com',
  },
  github: {
    project: 'https://github.com/chrisrzhou/chris-and-monika',
    chris: 'https://github.com/chrisrzhou',
    monika: 'https://github.com/monikasun88',
  },
  links: {
    rengstorffHouse: 'http://r-house.org/',
    shorelinePark: 'http://mountainview.gov/depts/cs/shoreline/',
    directions: 'https://www.google.com/maps/place/Rengstorff+House/@37.4314895,-122.0892954,17z/data=!4m2!3m1!1s0x808fba1f047cbef7:0xb8eb878dcc968b9d',
    googleMapsEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDNdyf4jh8SjG-KxKSerdnbB_U-gYBTAiA&q=Rengstorff+House',
    rsvp: 'https://chris-and-monika.app.rsvpify.com/',
  },
};

export default constants;
