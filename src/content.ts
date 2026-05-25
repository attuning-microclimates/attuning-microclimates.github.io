export type Lang = 'zh' | 'en';

export type Section = {
  id: string;
  numeral: string;
  heading: { zh: string; en: string };
  paragraphs: { zh: string; en: string }[];
  subsections?: Section[];
};

export const titleBlock = {
  zh: [
    '感知微氣候',
    '在呼吸與微風之間',
    '生活美學館作為城市中的綠洲'
  ],
  en: [
    'Attuning to Microclimates',
    'Between the Breath and the Breeze',
    'Tainan Living Art Center as an Urban Oasis'
  ]
};

export const opening = {
  zh: '生活美學館作為城市中的綠洲，邀請訪客放慢腳步、坐下、呼吸，重新學習感知那些一直都在、卻一直被錯過的細微變化。',
  en: 'Tainan Living Art Center, as an urban oasis, invites visitors to slow down, sit, breathe, and relearn how to sense the subtle changes that have always been here yet have always been overlooked.'
};

export const sections: Section[] = [
  {
    id: 'section-1',
    numeral: '01',
    heading: { zh: '台南季節與微氣候', en: 'Tainan\'s Season and Microclimates' },
    paragraphs: [
      {
        zh: '台南的五月底到六月底，是一段難以被天氣預報精準描述的時節。梅雨將至未至，來自海上濕潤的氣團，午後雷陣雨可能落下也可能擦身而過，日照在雲層之間切換明暗。這些變化太細、太短、太局部，無法被「今日氣溫 28 度、降雨機率 60%」這樣的尺度捕捉——它們屬於另一個層次的氣候現象，氣象學稱之為微氣候（microclimate）。',
        en: 'From late May to late June in Tainan is a season no weather forecast can describe with precision. The plum rains hover but have not arrived; humid air masses drift in from the sea; afternoon thunderstorms may fall or may pass by unseen; sunlight switches between bright and dim through the clouds. These changes are too fine, too brief, too local to be captured by a scale like "today 28°C, 60% chance of rain" — they belong to a different layer of climatic phenomena that meteorology calls microclimate.'
      }
    ]
  },
  {
    id: 'section-2',
    numeral: '02',
    heading: { zh: '微氣候作為城市的真實存在', en: 'Microclimate as an Urban Reality' },
    paragraphs: [
      {
        zh: '微氣候是城市的真實存在。一棵行道樹下與正午柏油路面的溫差、騎樓陰影與廣場開闊處的氣流差異、清晨葉面上的露水與午後室內的乾燥——這些現象構成了我們身體實際所處的環境，卻往往在日常的匆忙中被忽略。我們呼吸著它們，卻很少真正感知它們。',
        en: 'Microclimate is the real fabric of the city. The temperature difference between the shade of a street tree and the asphalt at noon; the difference in air movement between an arcade\'s shadow and an open plaza; the dew on a leaf at dawn and the dryness of an interior in the afternoon — these phenomena form the environment our bodies actually inhabit, yet they are usually overlooked in the rush of daily life. We breathe them, but we rarely truly sense them.'
      }
    ]
  },
  {
    id: 'section-3',
    numeral: '03',
    heading: { zh: '感知作為邀請', en: 'Sensing as an Invitation' },
    paragraphs: [
      {
        zh: '「感知微氣候」是一場關於感知（sensing）的邀請。如瑞士建築師 Peter Zumthor 對「氛圍」（Stimmung）的核心定義——氛圍不是被佈置的，而是被生成的——以及德國哲學家海德格 Stimmung 概念中的雙向性：環境影響我們，我們也以身體去感知環境。在這個意義下，微氣候是一個正在發生的事件，「感知微氣候」的展場邀請身體進入並與之互動。',
        en: 'Attuning to Microclimates is an invitation to sensing. Following Swiss architect Peter Zumthor\'s core definition of atmosphere (Stimmung) — that atmosphere is not arranged but generated — and the reciprocity at the heart of Heidegger\'s notion of Stimmung — the environment moves us, and we sense the environment through our bodies — microclimate, in this sense, is an event already underway. The exhibition invites the body to step into it and engage.'
      }
    ]
  },
  {
    id: 'section-4',
    numeral: '04',
    heading: { zh: '生活美學館作為城市中的綠洲', en: 'Tainan Living Art Center as an Urban Oasis' },
    paragraphs: [
      {
        zh: '台南生活美學館坐落於城市之中，本身就是一座由建築界定的微氣候場域。展覽期間，這個場域被重新調節，同時作為：',
        en: 'Tainan Living Art Center sits within the city and is itself a microclimatic field bounded by architecture. During the exhibition, this field is retuned and serves simultaneously as:'
      }
    ]
  },
  {
    id: 'section-5',
    numeral: '05',
    heading: { zh: '城市的客廳', en: 'The City\'s Living Room' },
    paragraphs: [
      {
        zh: '展場中的長凳是動線上的休息點，也是邀請：邀請市民在綠意之間坐下、停留、共處一室。客廳是一座城市最私密、也最公共的空間——在這裡，微氣候不只是被感知的對象，也是共享的環境。',
        en: 'The benches in the gallery are not only resting points along the circulation route but also invitations: invitations for visitors to sit, linger, and share a room amid the green. A living room is both the most private and the most public space of a city — here, microclimate is not only an object to be sensed but a shared environment.'
      }
    ]
  },
  {
    id: 'section-6',
    numeral: '06',
    heading: { zh: '空氣污染的避難所', en: 'The Air Pollution Shelter' },
    paragraphs: [
      {
        zh: '植栽球選用的是能淨化空氣的植物種類——它們持續過濾懸浮微粒、吸附揮發性污染物、釋放氧氣與水氣。當城市的空氣品質在季節之間起伏，這座由活體植物構成的避難所，提供的不只是視覺的綠意以及涼爽的體感溫度，也是一口可以深呼吸的空氣。在這裡，「感知微氣候」有了最切身的意義：感知，從乾淨的呼吸開始。',
        en: 'The hanging planter spheres are composed of plant species known to purify air — they continuously filter particulates, absorb volatile pollutants, and release oxygen and moisture. As the city\'s air quality rises and falls between seasons, this shelter made of living plants offers not only visual greenery and a cooler perceived temperature, but also a breath of air worth drawing deeply. Here, attuning to microclimates takes on its most immediate meaning: to sense, beginning with one clean breath.'
      }
    ]
  },
  {
    id: 'section-7',
    numeral: '07',
    heading: { zh: '五種媒介', en: 'Five Media' },
    paragraphs: [
      {
        zh: '展場以五種媒介，將平日不可見的微氣候現象視覺化。',
        en: 'The exhibition makes the ordinarily invisible phenomena of microclimate visible through five media.'
      }
    ],
    subsections: [
      {
        id: 'subsection-7-1',
        numeral: '01',
        heading: { zh: '植物', en: 'Plants' },
        paragraphs: [
          {
            zh: '以淨化空氣的植物製成的植栽球懸於空中。植栽球選用的是能淨化空氣的植物種類，它們是微氣候的參與者，日夜呼吸、蒸散水氣、過濾懸浮微粒，本身就是最古老、最細緻的微氣候調節系統。',
            en: 'Planter spheres made of air-purifying plants hang in the air. The species chosen are participants in microclimate: breathing day and night, transpiring moisture, filtering particulates — themselves the oldest and most delicate system for tuning a microclimate.'
          }
        ]
      },
      {
        id: 'subsection-7-2',
        numeral: '02',
        heading: { zh: '彩帶與氣流', en: 'Ribbons and Airflow' },
        paragraphs: [
          {
            zh: '當空調系統送出的氣流吹動懸掛的彩帶，氣流獲得了形狀；觀者「看見」自己正在呼吸的空氣，如何在空間中流動、迴旋、停駐。',
            en: 'When the current from the air-conditioning system stirs the hanging ribbons, the airflow takes on shape; viewers "see" how the very air they are breathing moves, swirls, and settles within the space.'
          }
        ]
      },
      {
        id: 'subsection-7-3',
        numeral: '03',
        heading: { zh: '燈光場景', en: 'Light Scenes' },
        paragraphs: [
          {
            zh: '光線緩慢變化，模擬一日之中、雲影之下、樹冠之間的光線漂移。光本身就是微氣候——它決定溫度，決定植物的方向，也決定我們身體的日夜作息。',
            en: 'Light shifts slowly, simulating the drift of illumination across a day, beneath the shadow of clouds, between the canopies of trees. Light is itself a microclimate — it determines temperature, the orientation of plants, and the diurnal rhythms of our own bodies.'
          }
        ]
      },
      {
        id: 'subsection-7-4',
        numeral: '04',
        heading: { zh: '聲音計畫', en: 'Sound Project' },
        paragraphs: [
          {
            zh: '展場聲響來自美國作曲家 Alex Bainter 開發的開源生成式音樂平台 Generative.fm，特別選用作品《Oxalis 1》（酢漿草第一號）。這個選擇有三層理由：',
            en: 'The sound in the gallery comes from Generative.fm, an open-source generative-music platform developed by American composer Alex Bainter, with the piece Oxalis 1 selected in particular. This choice rests on three reasons.'
          },
          {
            zh: '其一，命名的呼應。Oxalis（酢漿草），與展場的綠色植物形成準確的對應。',
            en: 'First, a resonance in naming. Oxalis is the wood sorrel, forming a precise correspondence with the green plants in the gallery.'
          },
          {
            zh: '其二，植物學上的意義。酢漿草是一種真正會「感知微氣候」的植物——它的葉片會隨光照、溫度、晝夜進行感夜運動（nyctinasty），白晝展開，夜間閉合。這首作品所致敬的植物，本身就是「Attuning to Microclimates」的示範。',
            en: 'Second, a botanical kinship. Wood sorrel is a plant that genuinely "attunes to microclimates" — its leaves respond to light, temperature, and the cycle of day and night with nyctinastic movement (感夜運動), opening by day and folding closed at night. The plant this piece pays tribute to is itself a living demonstration of Attuning to Microclimates.'
          },
          {
            zh: '其三，生成式音樂本身就是一種微氣候。它由演算法即時演奏，緩慢漂移、永不重複。一段被錄製的循環是被凍結的天氣；Bainter 的生成器是正在發生的天氣。Oxalis 1 以緩慢的鋼琴音符與大量留白構成，呼吸節奏接近每分鐘 6 到 8 次，正是人類靜定時的呼吸頻率——它不爭奪注意力，而是緩緩沉入感知的背景，呼應 Brian Eno 在《Music for Airports》（1978）所定義的環境音樂原則：既可被忽略，亦值得專注。',
            en: 'Third, generative music is itself a kind of microclimate. Performed in real time by algorithm — slowly drifting, never repeating — a recorded loop is frozen weather; Bainter\'s generator is weather currently happening. Oxalis 1 is built from slow piano notes and ample silence; its breathing rhythm is close to six to eight cycles per minute, the rate of human breath in stillness. It does not compete for attention but slowly settles into the background of perception, echoing the principle Brian Eno set out in Music for Airports (1978): music that may be either ignored or attended to.'
          }
        ]
      },
      {
        id: 'subsection-7-5',
        numeral: '05',
        heading: { zh: '鏡面天花板與反射板', en: 'Mirrored Ceiling and Reflective Panels' },
        paragraphs: [
          {
            zh: '展場上方覆以鏡面，將懸空的植栽球、飄動的彩帶、流轉的光線，以及在其間走動、停留、呼吸的人，向上反射。這不只是視覺的：鏡面藉由反射把天花板「打開」，讓侷促的高度向上延伸，空間因此獲得了呼吸的尺度，也將陰暗的大廳變得更明亮。鏡面也介入了體感——它讓視線向上逃逸、讓光在表面流動、讓天花消失於倒影之中，意圖在台南六月的炎熱裡，讓身體獲得幾分清涼。而「體感溫度」，正是最貼近微氣候的元素：它不是溫度計上的數字，而是身體在特定空間、光線與氣流中真實的冷暖感受。冰冷的鏡面讓微氣候不只被看見，更讓身體在炎熱的六月直接感到冷卻而降溫。',
            en: 'The space above the exhibition is wrapped in mirror, reflecting upward the hanging planter spheres, the drifting ribbons, the moving light, and the people walking, pausing, and breathing among them. This is more than a visual gesture: by reflection, the mirror "opens" the ceiling, extending a constricted height upward so that the space gains a breathable scale, and brightens what had been a dim lobby. The mirror also intervenes in bodily sense — drawing the gaze upward, letting light flow across its surface, dissolving the ceiling into reflection — with the intention of granting the body a measure of coolness in the heat of Tainan\'s June. Perceived temperature is in fact the element closest to microclimate: not a number on a thermometer, but the body\'s actual sense of warm or cool within a particular space, light, and current of air. The cold surface of the mirror lets microclimate be not only seen, but felt as the body cools amid the heat of June.'
          }
        ]
      }
    ]
  },
  {
    id: 'section-8',
    numeral: '08',
    heading: { zh: '微氣候共同體', en: 'A Microclimatic Community' },
    paragraphs: [
      {
        zh: '當生成式音樂、回應光線的植物、視覺化氣流的彩帶、反射空間與光線的鏡面共處於同一個展場，它們構成一個跨媒介、互相呼應的微氣候共同體。而鏡面把這個共同體再反射——連同走入其中的訪客，都成為這片微氣候的風景。這個共同體在展期中，自行生成——就像台南五月底到六月底的風與光，永不重複。',
        en: 'When generative music, light-responsive plants, ribbons that make airflow visible, and mirrors that reflect space and light all share a single gallery, they form a cross-media microclimatic community in mutual resonance. And the mirror reflects this community once more — together with the visitors who step into it, becoming part of the microclimate\'s own scenery. This community is generated by itself, in real time across the run of the exhibition — like the wind and light of Tainan from late May to late June, never repeating.'
      }
    ]
  }
];
