<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="article in articles"
      :key="article.title" cols="12" sm="6" md="6" lg="4" xl="3"
      class="mb-4">
        <news-card :articleData="article" />
      </v-col>
    </v-row>
    </v-container>
</template>

<script>

import NewsCard from './news-card/NewsCard.vue';

export default {
  name: 'NewsGrid',
  components: {
    NewsCard,
  },
  data: () => ({
    articles: [
      {
        source: {
          id: 'reuters',
          name: 'Reuters',
        },
        author: null,
        title: 'Russian column stalled for days outside Kyiv - Reuters',
        description:
          "Russia's invasion of Ukraine entered its second week on Thursday an apparent tactical failure so far, with its main assault force stalled for days on a highway north of Kyiv and other advances halted at the outskirts of cities it is bombing into wastelands.",
        url: 'https://www.reuters.com/markets/europe/top-wrap-2-russian-troops-strategic-black-sea-port-city-kherson-mayor-says-2022-03-03/',
        urlToImage:
          'https://www.reuters.com/resizer/7u_X3FBNCzlMW5tsaFW8l1R4QMI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WPIWBLHQKJC25ICXYYLLRGKH7Y.JPG',
        publishedAt: '2022-03-03T12:00:00Z',
        content:
          "BORODYANKA, Ukraine, March 3 (Reuters) - Russia's invasion of Ukraine entered its second week on Thursday an apparent tactical failure so far, with its main assault force stalled for days on a highwa… [+6967 chars]",
      },
      {
        source: {
          id: null,
          name: 'Daily Mail',
        },
        author: 'Charlie Lankston, Rachael Bunyan',
        title:
          'Melinda Gates describes tough times she endures as she battled to work during divorce with Bill - Daily Mail',
        description:
          "Melinda Gates has spoken of having days of being 'in tears' just before a meeting while she hammered out her divorce from billionaire Microsoft founder Bill.",
        url: 'https://www.dailymail.co.uk/news/article-10573011/Melinda-Gates-describes-tough-times-endures-battled-work-divorce-Bill.html',
        urlToImage:
          'https://i.dailymail.co.uk/1s/2022/03/02/13/54854903-0-image-a-32_1646226110913.jpg',
        publishedAt: '2022-03-01T11:17:31Z',
        content:
          "Melinda Gates has spoken of having days of being 'in tears' just before a meeting while she hammered out her divorce from billionaire Microsoft founder Bill as she revealed more details of their spli… [+8309 chars]",
      },
      {
        source: {
          id: 'the-hill',
          name: 'The Hill',
        },
        author: 'Alexander Bolton',
        title: 'Democrats look for offramp from masking in public | TheHill - The Hill',
        description:
          'Democratic lawmakers are distancing themselves from the strong pro-mask stance they took for most...',
        url: 'https://thehill.com/homenews/senate/596652-democrats-look-for-offramp-from-masking-in-public',
        urlToImage: 'https://thehill.com/sites/default/files/sotu_030222pool_lead.jpg',
        publishedAt: '2022-03-03T11:01:14Z',
        content:
          'Democratic lawmakers are distancing themselves from the strong pro-mask stance they took for most of the pandemic, which is becoming more and more of a political liability at a time when many America… [+10728 chars]',
      },
      {
        source: {
          id: 'associated-press',
          name: 'Associated Press',
        },
        author: 'Jim Heintz, Yuras Karmanau, Mstyslav Chernov',
        title:
          'Refugee count tops 1 million; Russians besiege Ukraine ports - The Associated Press - en Español',
        description:
          'KYIV, Ukraine (AP) — Russian forces have seized a strategic Ukrainian seaport   and besieged another as part of efforts to cut the country off from its coastline, even as Moscow said Thursday it was ready for talks to end the fighting that has sent more than …',
        url: 'https://apnews.com/article/russia-ukraine-united-nations-general-assembly-volodymyr-zelenskyy-kyiv-moscow-a3092d8e476949ed7c55607a645a9154',
        urlToImage:
          'https://storage.googleapis.com/afs-prod/media/a28c4d513372495893f2c5e4e25b0dc9/3000.jpeg',
        publishedAt: '2022-03-03T10:30:00Z',
        content:
          'KYIV, Ukraine (AP) Russian forces have seized a strategic Ukrainian seaport and besieged another as part of efforts to cut the country off from its coastline, even as Moscow said Thursday it was read… [+7678 chars]',
      },
      {
        source: {
          id: 'reuters',
          name: 'Reuters',
        },
        author: null,
        title: '"We are being destroyed," city council of Ukraine\'s Mariupol says - Reuters',
        description:
          'Mariupol city council said Russian forces were constantly and deliberately shelling vital civilian infrastructure in the southeastern Ukrainian port, leaving it without water, heating or power and preventing bringing supplies or evacuating people.',
        url: 'https://www.reuters.com/world/europe/we-are-being-destroyed-mariupol-city-council-says-2022-03-03/',
        urlToImage:
          'https://www.reuters.com/resizer/dGowPb4vapMgk9S0U_Mgh_-9D-Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XZJ6SBJQAZL63P7U4WMQRA2GRA.jpg',
        publishedAt: '2022-03-03T10:20:00Z',
        content:
          'LVIV, Ukraine, March 3 (Reuters) - Mariupol city council said Russian forces were constantly and deliberately shelling vital civilian infrastructure in the southeastern Ukrainian port, leaving it wit… [+1071 chars]',
      },
      {
        source: {
          id: 'the-washington-post',
          name: 'The Washington Post',
        },
        author: 'Drew Harwell, Mary Ilyushina',
        title:
          "Ukraine's Telegram channel of dead Russians may violate Geneva Conventions - The Washington Post",
        description:
          'Ukraine has posted hundreds of gory photos allegedly of Russian soldiers captured or killed in battle in an effort to raise anger in Russia over the cost of the war. But the tactic also appears to violate the Geneva Conventions.',
        url: 'https://www.washingtonpost.com/technology/2022/03/03/telegram-russian-war-dead-ukraine-pows/',
        urlToImage:
          'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IT3TSSE2Q4I6ZGMHTXHO4YVD6Y.jpg&w=1440',
        publishedAt: '2022-03-03T10:02:58Z',
        content:
          'In many of the images, soldiers corpses can be seen burned, ripped apart, mangled in wreckage or abandoned in snow; in some, their faces are featured in bloody close-ups, frozen in pain.\r\nStory conti… [+9656 chars]',
      },
      {
        source: {
          id: null,
          name: 'Yahoo Entertainment',
        },
        author: 'Peter Weber, Senior editor',
        title:
          "How cheap Chinese tires might explain Russia's 'stalled' 40-mile-long military convoy in Ukraine - Yahoo News",
        description:
          "How cheap Chinese tires might explain Russia's 'stalled' 40-mile-long military convoy in Ukraine",
        url: 'https://news.yahoo.com/cheap-chinese-tires-might-explain-094313721.html',
        urlToImage: 'https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png',
        publishedAt: '2022-03-03T09:43:13Z',
        content:
          "As the eighth day of Russia's invasion of Ukraine began Thursday morning, Russian forces appeared to have gained tactical control of their first city, the southern port city of Kherson, but Ukraine i… [+2863 chars]",
      },
      {
        source: {
          id: null,
          name: 'TMZ',
        },
        author: 'TMZ Staff',
        title:
          "'Mob Wives' Renee Graziano Gets Addiction Help from 'The Hills' Star Jason Wahler - TMZ",
        description:
          'Renee Graziano is getting the help she needs to kick a pill addiction -- and doing it side by side with another reality TV vet, Jason Wahler.',
        url: 'https://www.tmz.com/2022/03/03/mob-wives-renee-graziano-sober-treatment-hills-jason-wahler/',
        urlToImage:
          'https://imagez.tmz.com/image/69/16by9/2022/03/02/69c37b2dc495439ea0b980170ff781a3_xl.jpg',
        publishedAt: '2022-03-03T08:50:00Z',
        content:
          "Renee Graziano is getting the help she needs to kick a pill addiction she's been battling for years -- and doing it side by side with another reality TV vet, no less ... Mr. Jason Wahler.\r\nThe \"Mob W… [+1863 chars]",
      },
      {
        source: {
          id: 'associated-press',
          name: 'Associated Press',
        },
        author: 'Kelvin Chan',
        title:
          "Russia's war spurs corporate exodus, exposes business risks - The Associated Press - en Español",
        description:
          'LONDON (AP) — Auto shipments stopped, beer stopped flowing, cargo ships dropped port calls and oil companies cut their pipelines.  Russia’s invasion of Ukraine  has thrown business plans into disarray and forced a growing number of the world’s best known bran…',
        url: 'https://apnews.com/article/russia-ukraine-vladimir-putin-business-europe-lifestyle-ca0aabe1c4a8fb3fbc0baec76a9c5666',
        urlToImage:
          'https://storage.googleapis.com/afs-prod/media/3c71534adafd42709cb3cac8cf8dd056/3000.jpeg',
        publishedAt: '2022-03-03T08:41:58Z',
        content:
          'LONDON (AP) Auto shipments stopped, beer stopped flowing, cargo ships dropped port calls and oil companies cut their pipelines. \r\nRussias invasion of Ukraine has thrown business plans into disarray a… [+7069 chars]',
      },
      {
        source: {
          id: null,
          name: 'SciTechDaily',
        },
        author: null,
        title:
          'Powerful Telescopes See Blasts of Hot and Cold Winds Blowing From Neutron Star As It Tears Apart Its Companion - SciTechDaily',
        description:
          'Using the most powerful telescopes on Earth and in space, a team of astronomers has found for the first time blasts of hot, warm, and cold winds from a neutron star whilst it consumes matter from a nearby star. The discovery provides new insight into the beha…',
        url: 'https://scitechdaily.com/powerful-telescopes-see-blasts-of-hot-and-cold-winds-blowing-from-neutron-star-as-it-tears-apart-its-companion/',
        urlToImage:
          'https://scitechdaily.com/images/Neutron-Star-Blowing-Out-Warm-and-Cold-Winds.jpg',
        publishedAt: '2022-03-03T04:36:47Z',
        content:
          'Depiction of neutron star blowing out warm and cold winds. Credit: Gabriel Pérez (IAC)\r\nUsing the most powerful telescopes on Earth and in space, a team of astronomers has found for the first time bl… [+11405 chars]',
      },
      {
        source: {
          id: null,
          name: 'YouTube',
        },
        author: null,
        title: 'Final 1:30 WILD ENDING Bucks vs Heat - NBA',
        description:
          'Jrue Holiday finished a driving layup with 1.9 seconds remaining in regulation to lift the Milwaukee Bucks over the Miami Heat, 120-119. Holiday finished the...',
        url: 'https://www.youtube.com/watch?v=2v28fOaUG3I',
        urlToImage: 'https://i.ytimg.com/vi/2v28fOaUG3I/maxresdefault.jpg',
        publishedAt: '2022-03-03T04:28:27Z',
        content: null,
      },
      {
        source: {
          id: 'cnn',
          name: 'CNN',
        },
        author: 'Reuters',
        title:
          'Ex-Nissan executive Greg Kelly convicted in Japan for role in hiding Carlos Ghosn payments - CNN',
        description:
          'A Tokyo court on Thursday convicted former Nissan Motor executive Greg Kelly of helping Carlos Ghosn hide pay from financial regulators, but said he had not been responsible for the total $80 million the ex-Nissan chief allegedly failed to disclose.',
        url: 'https://www.cnn.com/2022/03/02/business/japan-verdict-former-nissan-ghosn-aide-intl-hnk/index.html',
        urlToImage:
          'https://cdn.cnn.com/cnnnext/dam/assets/220302200456-greg-kelly-2020-super-tease.jpg',
        publishedAt: '2022-03-03T04:28:00Z',
        content:
          '(Reuters)A Tokyo court on Thursday convicted former Nissan Motor executive Greg Kelly of helping Carlos Ghosn hide pay from financial regulators, but said he had not been responsible for the total $8… [+2245 chars]',
      },
      {
        source: {
          id: 'cnn',
          name: 'CNN',
        },
        author: 'Katelyn Polantz and Ryan Nobles, CNN',
        title:
          "Trump and right-wing lawyer were part of 'criminal conspiracy' to overturn 2020 election, January 6 committee alleges - CNN",
        description: null,
        url: 'https://www.cnn.com/2022/03/02/politics/trump-criminal-conspiracy-defraud-january-6-committee/index.html',
        urlToImage:
          'https://cdn.cnn.com/cnnnext/dam/assets/211027234429-02-donald-trump-100921-super-tease.jpg',
        publishedAt: '2022-03-03T04:23:00Z',
        content:
          '(CNN)Former President Donald Trump and a right-wing lawyer were part of a "criminal conspiracy" to overturn the 2020 presidential election, the House select committee investigating the January 6 Capi… [+6415 chars]',
      },
      {
        source: {
          id: null,
          name: 'Eonline.com',
        },
        author: 'Corinne Heller',
        title: 'How Kanye "Ye" West Feels About Kim Kardashian Being Legally Single - E! NEWS',
        description:
          'Find out what Kanye "Ye" West thinks about ex Kim Kardashian\'s new relationship status as their divorce proceedings continue.',
        url: 'https://www.eonline.com/news/1321714/how-kanye-ye-west-feels-about-kim-kardashian-being-legally-single',
        urlToImage:
          'https://akns-images.eonline.com/eol_images/Entire_Site/202222/rs_1200x1200-220302144849-1200-kim-kardashian-kanye-west.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top',
        publishedAt: '2022-03-03T04:13:00Z',
        content:
          'Kim Kardashian is officially legally single again. Ye?\r\nOn March 2, Kim won a legal victory against her estranged ex by getting a judge to agree to an official request to terminate her marital status… [+734 chars]',
      },
      {
        source: {
          id: 'the-hill',
          name: 'The Hill',
        },
        author: 'Lexi Lonas',
        title:
          "Ex-cop says he 'absolutely' did nothing wrong in Breonna Taylor raid | TheHill - The Hill",
        description: 'Former Louisville police officer Brett Hankison, who shot 10...',
        url: 'https://thehill.com/homenews/state-watch/596663-ex-cop-says-he-absolutely-did-nothing-wrong-in-breonna-taylor-raid',
        urlToImage:
          'https://thehill.com/sites/default/files/article_images/hankisonbrett_030222_ap_timothy_d_easley.jpeg',
        publishedAt: '2022-03-03T03:40:01Z',
        content:
          'Former Louisville police officer Brett Hankison, who shot 10 bullets into a neighboring apartment during the police raid that killed Breonna Taylor, said on trial Wednesday that he did absolutely not… [+1140 chars]',
      },
      {
        source: {
          id: null,
          name: 'NBC Chicago',
        },
        author: null,
        title:
          'Former Illinois House Speaker Michael Madigan Charged With Racketeering - NBC Chicago',
        description:
          'Michael Madigan, the former speaker of the Illinois House and for decades one of the nation’s most powerful legislators, was charged with racketeering and…',
        url: 'https://www.nbcchicago.com/news/local/chicago-politics/former-illinois-house-speaker-michael-madigan-charged-with-racketeering/2773445/',
        urlToImage:
          'https://media.nbcchicago.com/2021/05/1a2c7a3be38b42089f97638b73d37258.jpg?quality=85&strip=all&resize=1200%2C675',
        publishedAt: '2022-03-03T03:21:55Z',
        content:
          'Michael Madigan, the former speaker of the Illinois House and for decades one of the nations most powerful legislators, was charged with a nearly $3 million racketeering and bribery Wednesday, becomi… [+8023 chars]',
      },
      {
        source: {
          id: 'the-washington-post',
          name: 'The Washington Post',
        },
        author: 'María Luisa Paúl, Casey Parks',
        title:
          "Judge partially blocks Texas Gov. Greg Abbott's order to treat gender-affirming care as child abuse - The Washington Post",
        description: '',
        url: 'https://www.washingtonpost.com/dc-md-va/2022/03/02/texas-transgender-child-abuse-injunction/',
        urlToImage:
          'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RRB3QNEZ4MI6ZGMHTXHO4YVD6Y.jpg&w=1440',
        publishedAt: '2022-03-03T03:06:17Z',
        content:
          'Meachums ruling grants a temporary restraining order to the plaintiffs represented in the case, but it does not prevent Texas from investigating other parents. The judge will consider that question i… [+5925 chars]',
      },
      {
        source: {
          id: 'cnn',
          name: 'CNN',
        },
        author: 'Jennifer Korn',
        title: 'Russia refuses to launch internet satellites, pointing at sanctions - CNN',
        description:
          'The business fallout from the war in Ukraine is about to extend to outer space.',
        url: 'https://www.cnn.com/2022/03/02/tech/russian-oneweb-launch-refusal/index.html',
        urlToImage:
          'https://cdn.cnn.com/cnnnext/dam/assets/220302134449-soyuz-2-1b-rocket-booster-oneweb-satellites-launch-pad-baikonur-cosmodrome-kazakhstan-0302-restricted-super-tease.jpg',
        publishedAt: '2022-03-03T02:58:00Z',
        content: null,
      },
      {
        source: {
          id: 'cnn',
          name: 'CNN',
        },
        author:
          'By <a href="/profiles/aditi-sandal">Aditi Sangal</a>, <a href="/profiles/adrienne-vogt">Adrienne Vogt</a>, <a href="/profiles/meg-wagner">Meg Wagner</a>, <a href="/profiles/jessie-yeung">Jessie Yeung</a>, Adam Renton, Maureen Chowdhury, Jason Kurtz and Mike Hayes, CNN',
        title: 'March 2, 2022 Russia-Ukraine news - CNN',
        description:
          "Russia has ramped up war efforts, and President Putin has ordered his country's deterrence forces — including nuclear arms — be placed on high alert. Follow here for live news updates from on the ground in Ukraine.",
        url: 'https://www.cnn.com/europe/live-news/ukraine-russia-putin-news-03-02-22/index.html',
        urlToImage:
          'https://cdn.cnn.com/cnnnext/dam/assets/220301161501-01b-ukraine-0301-kyiv-super-tease.jpg',
        publishedAt: '2022-03-03T02:15:00Z',
        content:
          'As the violence in Ukraine intensifies, athletes and sports organizations around the world are responding. \r\nHere are a few examples of the ways in which the world of sports is handling the conflict.… [+5386 chars]',
      },
      {
        source: {
          id: 'newsweek',
          name: 'Newsweek',
        },
        author: 'Justin Klawans',
        title: 'Russia Gains Strategic Advantage by Taking Southern City of Kherson - Newsweek',
        description:
          'Kherson, the home of a significant shipbuilding industry and a major economic hub for Ukraine, provides access to inland portions of the country.',
        url: 'https://www.newsweek.com/russia-gains-strategic-advantage-taking-southern-city-kherson-1684363',
        urlToImage: 'https://d.newsweek.com/en/full/1994557/kharkiv-city.jpg',
        publishedAt: '2022-03-03T01:47:34Z',
        content:
          'Kherson, a key strategic point along the Black Sea, has been captured by Russia, making it the first major Ukrainian city to fall to invading Russian forces.\r\nAs the fighting raged into its seventh d… [+4079 chars]',
      },
    ],
  }),
};
</script>
