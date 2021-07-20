import React from 'react';

import Result from './Result';

const Results = ({ shortedLinksList }) => {
  const shortedLinksListCopy = shortedLinksList;

  const shortedLinksListMap = shortedLinksListCopy.map((item, index) => (
    <Result key={index} {...item} />
  ));

  return (
    <section className='results'>
      <div className='results__container container'>{shortedLinksListMap}</div>
    </section>
  );
};

export default Results;
