import React from 'react';

import Result from './Result';

const Results = ({ shortedLinksList, copyHandler, copyInfo }) => {
  const shortedLinksListCopy = shortedLinksList;

  const shortedLinksListMap = shortedLinksListCopy.map((item, index) => (
    <Result key={index} {...item} onCopy={copyHandler} isCopy={copyInfo} />
  ));

  return (
    <section className='results'>
      <div className='results__container container'>{shortedLinksListMap}</div>
    </section>
  );
};

export default Results;
