import AMAZON_REGISTRY from './../images/amazon_registry.jpg';
import CALLOUT_CHRIS from './../images/callout_chris.png';
import CALLOUT_MONIKA from './../images/callout_monika.png';
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
    amazonRegistry: imageURL(AMAZON_REGISTRY),
    calloutChris: imageURL(CALLOUT_CHRIS),
    calloutMonika: imageURL(CALLOUT_MONIKA),
    happyAngry: imageURL(HAPPY_ANGRY),
    mainCouple: imageURL(MAIN_COUPLE),
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
    amazonRegistry: 'https://www.amazon.com/wedding/registry/35K3QA0D03A2W',
    rengstorffHouse: 'http://r-house.org/',
    shorelinePark: 'http://mountainview.gov/depts/cs/shoreline/',
    directions: 'https://www.google.com/maps/place/Rengstorff+House/@37.4314895,-122.0892954,17z/data=!4m2!3m1!1s0x808fba1f047cbef7:0xb8eb878dcc968b9d',
    googleMapsEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDNdyf4jh8SjG-KxKSerdnbB_U-gYBTAiA&q=Rengstorff+House',
    rsvp: 'https://chris-and-monika.app.rsvpify.com/',
    michaels: 'http://michaelsatshoreline.com/',
    hotels: {
      zenHotel: 'https://www.google.com/maps/place/The+Zen+Hotel/@37.4012393,-122.1181739,14z/data=!4m8!1m2!2m1!1shotels+near+Shoreline+Park+at+Mountain+View,+North+Shoreline+Boulevard,+Mountain+View,+CA!3m4!1s0x0000000000000000:0x0cfd088be461d2d9!8m2!3d37.4119341!4d-122.1252573',
      ramada: 'https://www.google.com/maps/place/Ramada+Mountain+View/@37.4012393,-122.1181739,14z/data=!4m8!1m2!2m1!1shotels+near+Shoreline+Park+at+Mountain+View,+North+Shoreline+Boulevard,+Mountain+View,+CA!3m4!1s0x0000000000000000:0x58e9fdc6ca6f22b7!8m2!3d37.4062754!4d-122.0638883',
      comfortInn: 'https://www.google.com/maps/place/Comfort+Inn+Palo+Alto/@37.4012393,-122.1181739,14z/data=!4m8!1m2!2m1!1shotels+near+Shoreline+Park+at+Mountain+View,+North+Shoreline+Boulevard,+Mountain+View,+CA!3m4!1s0x0000000000000000:0x6f31c15be66eff25!8m2!3d37.4163355!4d-122.1285188',
      googleMaps: 'https://www.google.com/maps/search/hotels+near+Shoreline+Park+at+Mountain+View,+North+Shoreline+Boulevard,+Mountain+View,+CA/@37.4012393,-122.1181739,14z/data=!3m1!4b1',
      airbnb: 'https://www.airbnb.com/s/Shoreline-Park-at-Mountain-View--North-Shoreline-Boulevard--Mountain-View--CA--United-States?checkin=09%2F30%2F2016&checkout=10%2F01%2F2016&ss_id=mijqv504&s_tag=lec2hFwK',
    },
    castro: 'https://www.google.com/maps/search/castro+street+restaurants/@37.3911623,-122.0836072,17z/data=!3m1!4b1',
    stanfordShopping: 'https://www.google.com/maps/place/Stanford+Shopping+Center/@37.4428449,-122.1741269,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbb3471827639:0x75895b0f0e878d4!8m2!3d37.4428449!4d-122.1719382',
  },
  social: {
    facebook: 'https://www.facebook.com/events/1606861099640111/',
  },
};

export default constants;
