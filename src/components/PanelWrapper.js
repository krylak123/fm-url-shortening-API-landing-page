import React, { useState, useEffect } from 'react';

import Form from './Form';
import Results from './Results';

const baseURL = 'https://api.shrtco.de/v2/';

const PanelWrapper = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputOnChange = (e) => {
    const value = e.target.value;

    document.querySelector('.form').classList.remove('error');

    document.querySelectorAll('.result__btn').forEach((btn) => {
      btn.textContent = 'Copy';
      btn.classList.remove('result__btn--active');
    });

    setInputValue(value);
    setIsCopied(false);
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();

    const link = inputValue;

    if (!validation(link))
      return document.querySelector('.form').classList.add('error');

    getData(link);
    setInputValue('');
  };

  const handleOnCopy = () => {
    setIsCopied(true);
  };

  const validation = (link) => {
    const regex =
      // eslint-disable-next-line
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    return regex.test(link);
  };

  const getData = (link) => {
    showLoading();

    fetch(`${baseURL}shorten?url=${link}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Status ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          throw Error(`This is not a valid URL`);
        } else {
          const { result } = data;

          const resultsListCopy = resultsList;

          const newItem = {
            linkFrom: link,
            linkTo: result.short_link,
          };

          resultsListCopy.unshift(newItem);

          setResultsList(resultsListCopy);

          hideLoading();
        }
      })
      .catch((err) => console.error(err));
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('resultsList'));

    if (data) {
      setResultsList(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resultsList', JSON.stringify(resultsList));
  });

  return (
    <>
      <Form
        inputHandler={handleInputOnChange}
        inputValue={inputValue}
        sumbitHandler={handleFormOnSubmit}
        isLoading={isLoading}
      />
      <Results
        shortedLinksList={resultsList}
        copyHandler={handleOnCopy}
        copyInfo={isCopied}
      />
    </>
  );
};

export default PanelWrapper;
