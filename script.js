// ---------------------------------------------------------------------------
// Business settings
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = '919960022128';

// ---------------------------------------------------------------------------
// Products — photos live in img/<code>/. Add a product by adding an entry here.
// priceLow/priceHigh: leave null to show "call for price".
// ---------------------------------------------------------------------------
const photos = (code, files) => files.map(f => `img/${code}/${f}`);
const tg = n => `photo_63122484911907${n}_y.jpg`; // original Telegram photo names

const products = [
  {
    code: '1pt', category: 'trolleys',
    name: { mr: 'फाळका ट्रॉली', en: 'Phalka Trolley' },
    desc: {
      mr: 'पत्र्याच्या बाजू असलेली सिंगल ॲक्सल ट्रॅक्टर ट्रॉली — शेतमाल व रोजच्या कामासाठी.',
      hi: 'शीट की साइड वाली सिंगल एक्सल ट्रैक्टर ट्रॉली — खेती के सामान और रोज़ के काम के लिए।',
      en: 'Single-axle tractor trolley with sheet-metal sides — for farm produce and everyday work.'
    },
    size: '6 x 4 ft', colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: 18000, priceHigh: 20000,
    images: photos('1pt', ['17653', '17654', '17655', '17656', '17657', '17658'].map(tg))
  },
  {
    code: '2bt', category: 'trolleys',
    name: { mr: 'बॉक्स ट्रॉली', en: 'Box Trolley' },
    desc: {
      mr: 'खोल बॉक्स बॉडी, ड्रॉबार हुक व सपोर्ट स्टँडसह ट्रॅक्टर ट्रॉली. निळा, लाल व केशरी रंगात उपलब्ध.',
      hi: 'गहरी बॉक्स बॉडी, ड्रॉबार हुक और सपोर्ट स्टैंड वाली ट्रैक्टर ट्रॉली। नीला, लाल और नारंगी रंग में उपलब्ध।',
      en: 'Tractor trolley with a deep box body, drawbar hook and support stand. Available in blue, red and orange.'
    },
    size: '6 x 4 ft', colors: { mr: 'निळा / लाल / केशरी', hi: 'नीला / लाल / नारंगी', en: 'Blue / Red / Orange' },
    priceLow: 17000, priceHigh: 19000,
    images: [
      ...photos('2bt', ['17672', '17673', '17674', '17675', '17676'].map(tg)),
      ...photos('2bt', ['new_IMG_9421.jpg', 'new_IMG_9415.jpg', 'new_IMG_9412.jpg', 'new_IMG_9424.jpg',
        'new_IMG_0177.jpg', 'new_IMG_0179.jpg', 'new_IMG_0180.jpg', 'new_IMG_0181.jpg',
        'new_IMG_9819.jpg', 'new_IMG_9817.jpg', 'new_IMG_9820.jpg', 'new_IMG_9824.jpg'])
    ]
  },
  {
    code: '3tt', category: 'trolleys',
    name: { mr: 'तळ ट्रॉली', en: 'Tal Trolley' },
    desc: {
      mr: 'पत्र्याचा भक्कम तळ व पाईपच्या जाळीच्या बाजू असलेली ट्रॅक्टर ट्रॉली.',
      hi: 'मज़बूत शीट के तल और पाइप जाली की साइड वाली ट्रैक्टर ट्रॉली।',
      en: 'Tractor trolley with a solid sheet floor and pipe-grill sides.'
    },
    size: '6 x 4 ft', colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: 16000, priceHigh: 18000,
    images: [
      ...photos('3tt', ['17678', '17679', '17680', '17681', '17682'].map(tg)),
      ...photos('3tt', ['new_IMG_9141.jpg', 'new_IMG_9142.jpg', 'new_IMG_9143.jpg', 'new_IMG_9144.jpg'])
    ]
  },
  {
    code: '4pat', category: 'trolleys',
    name: { mr: 'पट्टी ट्रॉली', en: 'Patte Trolley' },
    desc: {
      mr: 'पट्टीचा तळ व जाळीच्या बाजू — चारा, क्रेट्स व हलक्या मालासाठी उत्तम.',
      hi: 'पट्टी का तल और जाली की साइड — चारा, क्रेट और हल्के सामान के लिए बढ़िया।',
      en: 'Strip (patti) floor with grill sides — ideal for fodder, crates and lighter loads.'
    },
    size: '6 x 4 ft', colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: 12000, priceHigh: 16000,
    images: [
      ...photos('4pat', ['17689', '17690', '17691', '17692'].map(tg)),
      ...photos('4pat', ['new_IMG_8456.jpg', 'new_IMG_8460.jpg', 'new_IMG_8463.jpg', 'new_IMG_8464.jpg',
        'new_IMG_9901.jpg', 'new_IMG_9902.jpg', 'new_IMG_9900.jpg', 'new_IMG_9905.jpg'])
    ]
  },
  {
    code: '5k5p', category: 'implements',
    name: { mr: 'खुरूट ५ फणी', en: 'Cultivator — 5 Tine' },
    desc: {
      mr: 'ट्रॅक्टरला जोडता येणारा ५ फणी खुरूट — मशागत व माती भुसभुशीत करण्यासाठी.',
      hi: 'ट्रैक्टर से जुड़ने वाला 5 फन का कल्टीवेटर — जुताई और मिट्टी भुरभुरी करने के लिए।',
      en: 'Tractor-mounted 5-tine cultivator for tilling and loosening soil.'
    },
    size: '6 x 4 ft', colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: 15000, priceHigh: 18000,
    images: photos('5k5p', ['17700', '17701', '17702', '17703', '17704'].map(tg))
  },
  {
    code: '6k7p', category: 'implements',
    name: { mr: 'खुरूट ७ फणी', en: 'Cultivator — 7 Tine' },
    desc: {
      mr: '७ फणी खुरूट — एका फेरीत जास्त रुंदीची मशागत.',
      hi: '7 फन का कल्टीवेटर — एक बार में ज़्यादा चौड़ाई की जुताई।',
      en: '7-tine cultivator — wider coverage in a single pass.'
    },
    size: '3 x 5 ft', colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: 15000, priceHigh: 18000,
    // TODO: these photos are identical to 5k5p — replace with real 7-tine photos.
    images: photos('6k7p', ['17700', '17701', '17702', '17703', '17704'].map(tg))
  },
  {
    code: '7gg', category: 'carts',
    name: { mr: 'द्राक्षबागेचा गाडा', en: 'Grape Garden Cart' },
    desc: {
      mr: 'तीन चाकी ढकलगाडा — द्राक्षबागेत क्रेट्स, द्राक्षे व खत वाहण्यासाठी. रेलिंगसह व रेलिंगशिवाय उपलब्ध.',
      hi: 'तीन पहिया धक्का गाड़ी — अंगूर के बाग में क्रेट, अंगूर और खाद ढोने के लिए। रेलिंग के साथ और बिना रेलिंग उपलब्ध।',
      en: 'Three-wheel push cart for moving crates, grapes and fertiliser between vineyard rows. With or without side railing.'
    },
    size: '3 x 7 ft', colors: { mr: 'निळा / केशरी', hi: 'नीला / नारंगी', en: 'Blue / Orange' },
    priceLow: 10000, priceHigh: 12000,
    images: [
      ...photos('7gg', ['new_IMG_9852.jpg', 'new_IMG_9848.jpg', 'new_IMG_9851.jpg', 'new_IMG_9842.jpg',
        'new_IMG_7779.jpg', 'new_IMG_7774.jpg']),
      ...photos('7gg', ['17716', '17717', '17718', '17719', '17720'].map(tg)),
      ...photos('7gg', ['new_IMG_9347.jpg', 'new_IMG_9348.jpg', 'new_IMG_9350.jpg', 'new_IMG_0303.jpg', 'new_IMG_0306.jpg'])
    ]
  },
  {
    code: '8vg', category: 'carts',
    name: { mr: 'विटभट्टी सप्लाय गाडा', en: 'Brick Kiln Cart' },
    desc: {
      mr: 'सपाट भक्कम प्लॅटफॉर्म असलेला तीन चाकी गाडा — वीटभट्टीवर विटा वाहण्यासाठी.',
      hi: 'मज़बूत सपाट प्लेटफ़ॉर्म वाली तीन पहिया गाड़ी — ईंट भट्टे पर ईंटें ढोने के लिए।',
      en: 'Heavy flat-platform three-wheel cart for carrying bricks at brick kilns.'
    },
    size: '3 x 8 ft', colors: { mr: 'काळा', hi: 'काला', en: 'Black' },
    priceLow: 11000, priceHigh: 14000,
    images: photos('8vg', ['17725', '17726', '17727', '17728', '17729'].map(tg))
  },
  {
    code: '9mg', category: 'carts', isNew: true,
    name: { mr: 'मोटर सायकलचा गाडा', en: 'Motorcycle Cart' },
    desc: {
      mr: 'मोटरसायकलमागे जोडता येणारा गाडा — दुधाचे कॅन, चारा व शेतमाल वाहण्यासाठी.',
      hi: 'मोटरसाइकिल के पीछे जुड़ने वाली गाड़ी — दूध के कैन, चारा और खेती का माल ढोने के लिए।',
      en: 'Trailer that hitches behind a motorcycle — for milk cans, fodder and farm produce.'
    },
    size: null, colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: null, priceHigh: null,
    images: photos('9mg', ['new_IMG_8991.jpg', 'new_IMG_8986.jpg', 'new_IMG_8988.jpg', 'new_IMG_8990.jpg'])
  },
  {
    code: '10cf', category: 'cattle', isNew: true,
    name: { mr: 'जनावरांची गव्हाण', en: 'Cattle Feeder' },
    desc: {
      mr: 'लोखंडी स्टँडवर ड्रमची गव्हाण — वरच्या जाळीसह (चारा वाया जात नाही) किंवा साधी. लहान व लांब माप उपलब्ध.',
      hi: 'लोहे के स्टैंड पर ड्रम वाली नांद — ऊपर जाली के साथ (चारा बर्बाद नहीं होता) या सादी। छोटे और लंबे साइज़ में उपलब्ध।',
      en: 'Drum-type feeder on a steel stand — with a top cage to stop fodder waste, or plain. Short and long sizes.'
    },
    size: null, colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: null, priceHigh: null,
    images: photos('10cf', ['new_IMG_9354.jpg', 'new_IMG_9352.jpg', 'new_IMG_9355.jpg', 'new_IMG_9357.jpg',
      'new_cage1.jpg', 'new_cage2.jpg', 'new_IMG_8471.jpg',
      'new_IMG_7941.jpg', 'new_IMG_7942.jpg', 'new_IMG_7943.jpg', 'new_IMG_7944.jpg',
      'new_trough1.jpg', 'new_trough2.jpg', 'new_IMG_8397.jpg'])
  },
  {
    code: '11dc', category: 'cattle', isNew: true,
    name: { mr: 'ड्रम गाडा', en: 'Drum Cart' },
    desc: {
      mr: 'अर्ध्या ड्रमची बॉडी असलेला दोन चाकी गाडा — चारा, शेण व सुटा माल वाहण्यासाठी.',
      hi: 'आधे ड्रम की बॉडी वाली दो पहिया गाड़ी — चारा, गोबर और खुला सामान ढोने के लिए।',
      en: 'Two-wheel cart with a half-drum body — for fodder, dung and loose material.'
    },
    size: null, colors: { mr: 'निळा', hi: 'नीला', en: 'Blue' },
    priceLow: null, priceHigh: null,
    images: photos('11dc', ['new_IMG_7948.jpg', 'new_IMG_7945.jpg', 'new_IMG_7947.jpg', 'new_IMG_7949.jpg'])
  }
];

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations = {
  mr: {
    skip: 'उत्पादनांवर जा',
    tagline: 'अँड वेल्डींग वर्क्स, पलूस',
    address: 'पलूस-तासगांव रोड, लाईफकेअर हॉस्पिटल समोर, पलूस, जि. सांगली',
    nav_products: 'उत्पादने', nav_about: 'आमच्याबद्दल', nav_contact: 'संपर्क',
    whatsapp: 'WhatsApp करा',
    hero_kicker: 'पलूस, सांगली येथे तयार',
    hero_title: 'मजबूत ट्रॅक्टर ट्रॉली, गाडे आणि शेती साहित्य',
    hero_desc: 'तुमच्या गरजेनुसार मापात बनवलेले — थेट कारखान्यातून, योग्य दरात.',
    view_products: 'उत्पादने पहा',
    hero_whatsapp: 'WhatsApp वर दर विचारा',
    our_products: 'आमची उत्पादने',
    products_intro: 'फोटोवर क्लिक करून सर्व फोटो, माप आणि दर पहा.',
    filter_all: 'सर्व', filter_trolleys: 'ट्रॅक्टर ट्रॉली', filter_carts: 'गाडे',
    filter_implements: 'शेती अवजारे', filter_cattle: 'जनावरांसाठी',
    size: 'माप', color: 'रंग', price: 'दर', call_for_price: 'दरासाठी फोन करा',
    photos: 'फोटो', new_badge: 'नवीन', view_details: 'तपशील पहा',
    about_title: 'यशवंत इंजिनिअरिंग का निवडावे?',
    about_desc: 'मजबूत, टिकाऊ आणि हाताने बनवलेले धातू साहित्य — स्थानिक सेवेसह.',
    f1_t: 'मजबूत बांधणी', f1_d: 'जड लोखंडी चॅनेल व पाईप, पक्की वेल्डिंग.',
    f2_t: 'हव्या त्या मापात', f2_d: 'तुमच्या गरजेनुसार माप व रंग.',
    f3_t: 'थेट कारखान्यातून', f3_d: 'मध्यस्थ नाही — योग्य दर, मोठ्या ऑर्डरवर सवलत.',
    f4_t: 'स्थानिक सेवा', f4_d: 'पलूसमध्ये कारखाना — दुरुस्ती व मदतीसाठी जवळ.',
    contact_title: 'ऑर्डर किंवा चौकशीसाठी संपर्क करा',
    contact_intro: 'कस्टम माप, मोठी ऑर्डर किंवा दर जाणून घेण्यासाठी फोन किंवा WhatsApp करा.',
    call_us: 'फोन करा', person1: 'संजय माळी', person2: 'संकेत माळी',
    address_label: 'पत्ता', map_link: 'Google Maps वर पहा →',
    hours_label: 'वेळ', hours: 'सोमवार – शनिवार : सकाळी ९ ते संध्याकाळी ६',
    form_title: 'WhatsApp वर चौकशी पाठवा',
    form_note: 'फॉर्म भरा — तुमचा संदेश थेट आमच्या WhatsApp वर उघडेल.',
    label_name: 'नाव *', label_phone: 'मोबाईल नंबर *', label_product: 'कोणते उत्पादन?',
    label_message: 'संदेश', message_ph: 'माप, संख्या, रंग इ. लिहा', select_product: 'उत्पादन निवडा',
    send_whatsapp: 'WhatsApp वर पाठवा',
    err_required: 'कृपया नाव आणि मोबाईल नंबर भरा.',
    err_phone: 'कृपया १० अंकी मोबाईल नंबर टाका.',
    form_ok: 'WhatsApp उघडत आहे… संदेश पाठवण्यासाठी तिथे "Send" दाबा.',
    order_whatsapp: 'WhatsApp वर ऑर्डर करा', call_now: 'फोन करा',
    footer_desc: 'ट्रॅक्टर ट्रॉली, गाडे, शेती अवजारे व जनावरांसाठी साहित्य — पलूस, सांगली.',
    quick_links: 'लिंक्स',
    wa_hello: 'नमस्कार, मला या उत्पादनाबद्दल माहिती हवी आहे:',
    wa_general: 'नमस्कार, मला तुमच्या उत्पादनांबद्दल माहिती हवी आहे.',
    wa_name: 'नाव', wa_phone: 'मोबाईल', wa_product: 'उत्पादन', wa_message: 'संदेश'
  },
  hi: {
    skip: 'उत्पादों पर जाएँ',
    tagline: 'एंड वेल्डिंग वर्क्स, पलूस',
    address: 'पलूस-तासगांव रोड, लाइफकेयर हॉस्पिटल के सामने, पलूस, ज़ि. सांगली',
    nav_products: 'उत्पाद', nav_about: 'हमारे बारे में', nav_contact: 'संपर्क',
    whatsapp: 'WhatsApp करें',
    hero_kicker: 'पलूस, सांगली में निर्मित',
    hero_title: 'मज़बूत ट्रैक्टर ट्रॉली, गाड़ियाँ और खेती का सामान',
    hero_desc: 'आपकी ज़रूरत के साइज़ में बना — सीधे फ़ैक्टरी से, सही दाम में।',
    view_products: 'उत्पाद देखें',
    hero_whatsapp: 'WhatsApp पर दाम पूछें',
    our_products: 'हमारे उत्पाद',
    products_intro: 'सभी फ़ोटो, साइज़ और दाम देखने के लिए फ़ोटो पर क्लिक करें।',
    filter_all: 'सभी', filter_trolleys: 'ट्रैक्टर ट्रॉली', filter_carts: 'गाड़ियाँ',
    filter_implements: 'खेती के औज़ार', filter_cattle: 'पशुओं के लिए',
    size: 'साइज़', color: 'रंग', price: 'दाम', call_for_price: 'दाम के लिए कॉल करें',
    photos: 'फ़ोटो', new_badge: 'नया', view_details: 'विवरण देखें',
    about_title: 'यशवंत इंजीनियरिंग क्यों चुनें?',
    about_desc: 'मज़बूत, टिकाऊ और हाथ से बना धातु का सामान — स्थानीय सेवा के साथ।',
    f1_t: 'मज़बूत बनावट', f1_d: 'भारी लोहे के चैनल और पाइप, पक्की वेल्डिंग।',
    f2_t: 'मनचाहा साइज़', f2_d: 'आपकी ज़रूरत के अनुसार साइज़ और रंग।',
    f3_t: 'सीधे फ़ैक्टरी से', f3_d: 'कोई बिचौलिया नहीं — सही दाम, बड़े ऑर्डर पर छूट।',
    f4_t: 'स्थानीय सेवा', f4_d: 'पलूस में फ़ैक्टरी — मरम्मत और मदद के लिए पास।',
    contact_title: 'ऑर्डर या पूछताछ के लिए संपर्क करें',
    contact_intro: 'कस्टम साइज़, बड़े ऑर्डर या दाम जानने के लिए कॉल या WhatsApp करें।',
    call_us: 'कॉल करें', person1: 'संजय माळी', person2: 'संकेत माळी',
    address_label: 'पता', map_link: 'Google Maps पर देखें →',
    hours_label: 'समय', hours: 'सोमवार – शनिवार : सुबह 9 से शाम 6',
    form_title: 'WhatsApp पर पूछताछ भेजें',
    form_note: 'फ़ॉर्म भरें — आपका संदेश सीधे हमारे WhatsApp पर खुलेगा।',
    label_name: 'नाम *', label_phone: 'मोबाइल नंबर *', label_product: 'कौन सा उत्पाद?',
    label_message: 'संदेश', message_ph: 'साइज़, संख्या, रंग आदि लिखें', select_product: 'उत्पाद चुनें',
    send_whatsapp: 'WhatsApp पर भेजें',
    err_required: 'कृपया नाम और मोबाइल नंबर भरें।',
    err_phone: 'कृपया 10 अंकों का मोबाइल नंबर डालें।',
    form_ok: 'WhatsApp खुल रहा है… संदेश भेजने के लिए वहाँ "Send" दबाएँ।',
    order_whatsapp: 'WhatsApp पर ऑर्डर करें', call_now: 'कॉल करें',
    footer_desc: 'ट्रैक्टर ट्रॉली, गाड़ियाँ, खेती के औज़ार और पशुओं का सामान — पलूस, सांगली।',
    quick_links: 'लिंक्स',
    wa_hello: 'नमस्ते, मुझे इस उत्पाद के बारे में जानकारी चाहिए:',
    wa_general: 'नमस्ते, मुझे आपके उत्पादों के बारे में जानकारी चाहिए।',
    wa_name: 'नाम', wa_phone: 'मोबाइल', wa_product: 'उत्पाद', wa_message: 'संदेश'
  },
  en: {
    skip: 'Skip to products',
    tagline: '& Welding Works, Palus',
    address: 'Palus-Tasgaon Road, opp. Lifecare Hospital, Palus, Dist. Sangli',
    nav_products: 'Products', nav_about: 'About', nav_contact: 'Contact',
    whatsapp: 'WhatsApp us',
    hero_kicker: 'Made in Palus, Sangli',
    hero_title: 'Strong tractor trolleys, farm carts and equipment',
    hero_desc: 'Built to your size — direct from our workshop, at a fair price.',
    view_products: 'View products',
    hero_whatsapp: 'Ask price on WhatsApp',
    our_products: 'Our Products',
    products_intro: 'Tap a product to see all photos, size and price.',
    filter_all: 'All', filter_trolleys: 'Tractor Trolleys', filter_carts: 'Carts',
    filter_implements: 'Implements', filter_cattle: 'Cattle',
    size: 'Size', color: 'Colour', price: 'Price', call_for_price: 'Call for price',
    photos: 'photos', new_badge: 'New', view_details: 'View details',
    about_title: 'Why choose Yashwant Engineering?',
    about_desc: 'Strong, durable, handcrafted metal products — with local support.',
    f1_t: 'Heavy build', f1_d: 'Heavy steel channel and pipe, solid welding.',
    f2_t: 'Made to your size', f2_d: 'Size and colour to suit your work.',
    f3_t: 'Direct from the maker', f3_d: 'No middleman — fair prices, discounts on bulk orders.',
    f4_t: 'Local support', f4_d: 'Workshop in Palus — close by for repairs and help.',
    contact_title: 'Contact us to order or enquire',
    contact_intro: 'Call or WhatsApp for custom sizes, bulk orders or prices.',
    call_us: 'Call', person1: 'Sanjay Mali', person2: 'Sanket Mali',
    address_label: 'Address', map_link: 'Open in Google Maps →',
    hours_label: 'Hours', hours: 'Monday – Saturday : 9 AM – 6 PM',
    form_title: 'Send an enquiry on WhatsApp',
    form_note: 'Fill in the form — your message opens directly in our WhatsApp.',
    label_name: 'Name *', label_phone: 'Mobile number *', label_product: 'Which product?',
    label_message: 'Message', message_ph: 'Size, quantity, colour, etc.', select_product: 'Select a product',
    send_whatsapp: 'Send on WhatsApp',
    err_required: 'Please enter your name and mobile number.',
    err_phone: 'Please enter a 10-digit mobile number.',
    form_ok: 'Opening WhatsApp… press "Send" there to send your message.',
    order_whatsapp: 'Order on WhatsApp', call_now: 'Call now',
    footer_desc: 'Tractor trolleys, carts, farm implements and cattle equipment — Palus, Sangli.',
    quick_links: 'Links',
    wa_hello: 'Hello, I would like details about this product:',
    wa_general: 'Hello, I would like details about your products.',
    wa_name: 'Name', wa_phone: 'Mobile', wa_product: 'Product', wa_message: 'Message'
  }
};

let currentLang = 'mr';
let currentFilter = 'all';

function t(key) {
  return translations[currentLang][key] ?? translations.en[key] ?? key;
}

function productName(p) {
  return currentLang === 'en' ? p.name.en : `${p.name.mr} (${p.name.en})`;
}

function priceText(p) {
  if (!p.priceLow) return t('call_for_price');
  const fmt = n => '₹' + n.toLocaleString('en-IN');
  return `${fmt(p.priceLow)} – ${fmt(p.priceHigh)}`;
}

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// ---------------------------------------------------------------------------
// Language
// ---------------------------------------------------------------------------
function setLanguage(lang) {
  if (!translations[lang]) lang = 'mr';
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }

  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-wa-link]').forEach(a => {
    a.href = waLink(t('wa_general'));
  });

  renderProducts();
  renderProductSelect();
  if (modalState.product) renderModalInfo();
}

// ---------------------------------------------------------------------------
// Product grid
// ---------------------------------------------------------------------------
function createProductCard(p) {
  const card = el('article', 'product-card');
  card.dataset.category = p.category;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${productName(p)} — ${t('view_details')}`);

  const media = el('div', 'product-image');
  const img = el('img');
  img.src = p.images[0];
  img.alt = productName(p);
  img.loading = 'lazy';
  img.decoding = 'async';
  media.append(img, el('span', 'photo-count', `📷 ${p.images.length} ${t('photos')}`));
  if (p.isNew) media.append(el('span', 'new-badge', t('new_badge')));

  const info = el('div', 'product-info');
  info.append(el('h3', 'product-title', productName(p)));
  info.append(el('p', 'product-desc', p.desc[currentLang]));

  const meta = el('div', 'product-meta');
  if (p.size) meta.append(el('span', 'meta-item', `${t('size')}: ${p.size}`));
  meta.append(el('span', 'meta-item', `${t('color')}: ${p.colors[currentLang]}`));
  info.append(meta);

  const footer = el('div', 'product-footer');
  footer.append(el('span', p.priceLow ? 'price-tag' : 'price-tag price-ask', priceText(p)));
  footer.append(el('span', 'details-link', `${t('view_details')} →`));
  info.append(footer);

  card.append(media, info);
  card.addEventListener('click', () => openModal(p, card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p, card); }
  });
  return card;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.replaceChildren(...products
    .filter(p => currentFilter === 'all' || p.category === currentFilter)
    .map(createProductCard));
}

function filterProducts(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const active = btn.dataset.filter === category;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  renderProducts();
}

function renderProductSelect() {
  const select = document.getElementById('product');
  const selected = select.value;
  const placeholder = el('option', null, t('select_product'));
  placeholder.value = '';
  select.replaceChildren(placeholder, ...products.map(p => {
    const opt = el('option', null, productName(p));
    opt.value = p.code;
    return opt;
  }));
  select.value = selected;
}

// ---------------------------------------------------------------------------
// Product modal
// ---------------------------------------------------------------------------
const modalState = { product: null, index: 0, returnFocus: null };

function openModal(product, trigger) {
  const modal = document.getElementById('productModal');
  modalState.product = product;
  modalState.index = 0;
  modalState.returnFocus = trigger || document.activeElement;

  const multi = product.images.length > 1;
  const thumbs = document.getElementById('modalThumbs');
  thumbs.replaceChildren(...(multi ? product.images : []).map((src, i) => {
    const b = el('button', 'thumb');
    b.type = 'button';
    b.setAttribute('aria-label', `${t('photos')} ${i + 1}`);
    const im = el('img');
    im.src = src;
    im.alt = '';
    im.loading = 'lazy';
    b.append(im);
    b.addEventListener('click', () => showSlide(i));
    return b;
  }));

  document.getElementById('modalPrev').hidden = !multi;
  document.getElementById('modalNext').hidden = !multi;
  thumbs.hidden = !multi;

  renderModalInfo();
  showSlide(0);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function renderModalInfo() {
  const p = modalState.product;
  document.getElementById('modalTitle').textContent = productName(p);
  document.getElementById('modalDesc').textContent = p.desc[currentLang];

  const specs = document.getElementById('modalSpecs');
  const rows = [];
  if (p.size) rows.push([t('size'), p.size]);
  rows.push([t('color'), p.colors[currentLang]]);
  rows.push([t('price'), priceText(p)]);
  specs.replaceChildren(...rows.flatMap(([k, v]) => [el('dt', null, k), el('dd', null, v)]));

  document.getElementById('modalWa').href = waLink(`${t('wa_hello')} ${productName(p)} [${p.code}]`);
}

function showSlide(index) {
  const images = modalState.product.images;
  const i = ((index % images.length) + images.length) % images.length;
  modalState.index = i;
  const img = document.getElementById('modalImg');
  img.src = images[i];
  img.alt = `${productName(modalState.product)} — ${i + 1}/${images.length}`;
  document.getElementById('modalCounter').textContent = `${i + 1} / ${images.length}`;
  document.querySelectorAll('#modalThumbs .thumb').forEach((b, k) => {
    b.classList.toggle('active', k === i);
    if (k === i) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modalState.product = null;
  if (modalState.returnFocus) modalState.returnFocus.focus();
}

function isModalOpen() {
  return !document.getElementById('productModal').hidden;
}

// ---------------------------------------------------------------------------
// Contact form -> WhatsApp
// ---------------------------------------------------------------------------
function showFormMessage(text, type) {
  const box = document.getElementById('formMessage');
  box.textContent = text;
  box.className = `form-message ${type}`;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  const message = form.message.value.trim();
  const product = products.find(p => p.code === form.product.value);

  if (!name || !phone) return showFormMessage(t('err_required'), 'error');
  if (!/^\d{10}$/.test(phone)) return showFormMessage(t('err_phone'), 'error');

  const lines = [t('wa_general'), '', `${t('wa_name')}: ${name}`, `${t('wa_phone')}: ${phone}`];
  if (product) lines.push(`${t('wa_product')}: ${productName(product)} [${product.code}]`);
  if (message) lines.push(`${t('wa_message')}: ${message}`);

  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  showFormMessage(t('form_ok'), 'success');
}

// ---------------------------------------------------------------------------
// Hero slideshow
// ---------------------------------------------------------------------------
function startHeroSlideshow() {
  const heroImg = document.getElementById('heroImg');
  const pool = ['img/store/s1.jpg', 'img/store/s2.jpg', 'img/store/s3.jpg', 'img/store/s4.jpg',
    products[1].images[5], products[3].images[4], products[6].images[0], products[9].images[0]];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0;

  function show(src) {
    const pre = new Image();
    pre.onload = () => {
      heroImg.classList.remove('visible');
      setTimeout(() => { heroImg.src = src; heroImg.classList.add('visible'); }, 300);
    };
    pre.onerror = () => { pool.splice(pool.indexOf(src), 1); };
    pre.src = src;
  }

  show(pool[0]);
  if (reduceMotion) return;
  setInterval(() => {
    if (!pool.length || document.hidden) return;
    i = (i + 1) % pool.length;
    show(pool[i]);
  }, 5000);
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* storage unavailable */ }
  const langSelect = document.getElementById('langSelect');
  langSelect.value = translations[saved] ? saved : 'mr';
  setLanguage(langSelect.value);
  langSelect.addEventListener('change', e => setLanguage(e.target.value));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
  });

  // Modal controls
  document.querySelectorAll('#productModal [data-close]').forEach(b => b.addEventListener('click', closeModal));
  document.getElementById('modalPrev').addEventListener('click', () => showSlide(modalState.index - 1));
  document.getElementById('modalNext').addEventListener('click', () => showSlide(modalState.index + 1));
  document.addEventListener('keydown', e => {
    if (!isModalOpen()) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showSlide(modalState.index + 1);
    if (e.key === 'ArrowLeft') showSlide(modalState.index - 1);
    if (e.key === 'Tab') {
      // keep focus inside the dialog
      const focusable = [...document.querySelectorAll('#productModal .modal-content :is(button, a[href]):not([hidden])')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe between photos on phones
  const gallery = document.querySelector('.modal-gallery');
  let touchX = null;
  gallery.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  gallery.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) showSlide(modalState.index + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

  // Mobile nav
  const toggle = document.getElementById('mobileNavToggle');
  const nav = document.getElementById('siteNav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  startHeroSlideshow();
});
