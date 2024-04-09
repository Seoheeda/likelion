const deepObject = {
    state: {
      information: {
        name: 'meotsa',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
  const {
    state: {
      information: { name, languages }
    },
    value
  } = deepObject;
  
  const extracted = {
    name,
    languages,
    value
  };
  
  console.log(extracted);