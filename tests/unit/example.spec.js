import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';
import NewsCard from '@/components/news/NewsCard.vue';

import shared from '../../src/shared';
import services from '../../src/services';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(NewsCard, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).to.include(msg);
//   });
// });

describe('Shared DateFormatter', () => {
  it('date formatted with proper date string', () => {
    const date = '2022-03-08T04:12:00Z';
    const formattedDate = shared.format_date(date);
    expect(formattedDate).to.equal('8th Mar 2022');
  });
  it('date format error with wrong date string', () => {
    const date = '';
    const formattedDate = shared.format_date(date);
    expect(formattedDate).to.equal('Invalid date');
  });
});

describe('Service Testing', () => {
  it('should call newsService.topHeadLines function and return status 200 on success', async () => {
    const result = await services.newsService.topHeadLines({ country: 'us' });
    expect(result).to.be.an('object');
    expect(result.data.status).to.equal('ok');
  });

  it('should call newsService.listSources function and return status 200 on success', async () => {
    const result = await services.newsService.listSources();
    expect(result).to.be.an('object');
    expect(result.data.status).to.equal('ok');
  });
});

describe('NewsCard.vue', () => {
  it('newscard renders props.articleData basic information when passed', () => {
    const articleData = {
      source: { id: null, name: 'WCVB Boston' }, author: 'Ashen', title: 'Average price of gas in Massachusetts sets new record high, according to AAA - WCVB Boston', description: 'NewsCenter 5 has found prices for regular gasoline as high as $4.29 per gallon at some stations.', url: 'https://www.wcvb.com/article/higher-gas-prices-massachusetts-record-high-march-2022/39342144', urlToImage: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/high-gas-prices-in-massachusetts-march-2022-1646593545.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*', publishedAt: '2022-03-08T04:12:00Z', content: 'BOSTON —The average price of regular gasoline in Massachusetts rose $0.54 in one week, rocketing above $4 per gallon for the first time since the Great Recession, according to AAA.\r\nAAA said the aver… [+4159 chars]',
    };
    const wrapper = shallowMount(NewsCard, {
      propsData: { articleData },
    });
    expect(wrapper.text()).to.include(articleData.title);
    expect(wrapper.text()).to.include(articleData.description);
    expect(wrapper.text()).to.include(articleData.author);
  });

  it('newscard renders props.articleData with published date when passed', () => {
    const articleData = {
      title: 'Test Title', publishedAt: '2022-03-08T04:12:00Z',
    };
    const date = shared.format_date(articleData.publishedAt);
    const wrapper = shallowMount(NewsCard, {
      propsData: { articleData },
    });
    expect(wrapper.text()).to.include(
      date,
    );
  });
});
