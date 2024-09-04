import React from 'react';

export function useLHSForm() {
  const [type, setType] = React.useState<number>(0);
  const [age, setAge] = React.useState<number>(0);
  const [people, setPeople] = React.useState<number>(0);
  const [dog, setDog] = React.useState(0);
  const [handleability, setHandleability] = React.useState(0);
  const [kennelPresentation, setKennalPresentation] = React.useState(0);
  const [biteHistory, setBiteHistory] = React.useState(0);
  const [returns, setReturns] = React.useState(0);
  const [inHome, setInHome] = React.useState(0);

  return {
    type,
    setType,
    age,
    setAge,
    people,
    setPeople,
    dog,
    setDog,
    handleability,
    setHandleability,
    kennelPresentation,
    setKennalPresentation,
    biteHistory,
    setBiteHistory,
    returns,
    setReturns,
    inHome,
    setInHome,
  };
}
