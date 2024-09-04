import { useLHSForm } from '@/hooks/useLHSForm';
import { Button } from './ui/button';
import {
  AGE,
  BITE_HISTORY,
  DOGS,
  HANDLEABILITY,
  IN_HOME,
  KENNEL_PRESENTATION,
  PEOPLE,
  RETURNS,
  TYPE,
} from '@/lib/formdata';
import { AlertBanner } from './Alert';
import { RadioOptionGroup } from './RadioOptionGroup';

interface LHSFormProps {
  score: number;
  setScore: (value: number) => void;
}

export default function LHSForm({ score, setScore }: LHSFormProps) {
  const {
    type,
    setType,
    age,
    setAge,
    people,
    setPeople,
    dog,
    setDog,
    biteHistory,
    setBiteHistory,
    handleability,
    setHandleability,
    inHome,
    setInHome,
    kennelPresentation,
    setKennalPresentation,
    returns,
    setReturns,
  } = useLHSForm();

  function handleSubmit() {
    const maxValue =
      type +
      age +
      people +
      dog +
      biteHistory +
      handleability +
      inHome +
      kennelPresentation +
      returns;
    setScore(maxValue);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='p-4 flex flex-col gap-4 lg:w-1/2 mx-auto'>
      {score > 0 ? (
        <AlertBanner title={'Score'} description={'Total Score: ' + score} />
      ) : null}
      <h1>HSVLC Pathways Form</h1>

      <RadioOptionGroup
        label='Type'
        options={TYPE}
        selectedValue={type}
        onChange={setType}
      />

      <RadioOptionGroup label='Age' options={AGE} selectedValue={age} onChange={setAge} />

      <RadioOptionGroup
        label='People'
        options={PEOPLE}
        selectedValue={people}
        onChange={setPeople}
      />

      <RadioOptionGroup
        label='Dogs'
        options={DOGS}
        selectedValue={dog}
        onChange={setDog}
      />

      <RadioOptionGroup
        label='Handleability'
        options={HANDLEABILITY}
        selectedValue={handleability}
        onChange={setHandleability}
      />

      <RadioOptionGroup
        label='Kennel Presentation'
        options={KENNEL_PRESENTATION}
        selectedValue={kennelPresentation}
        onChange={setKennalPresentation}
      />

      <RadioOptionGroup
        label='Bite History'
        options={BITE_HISTORY}
        selectedValue={biteHistory}
        onChange={setBiteHistory}
      />

      <RadioOptionGroup
        label='Returns'
        options={RETURNS}
        selectedValue={returns}
        onChange={setReturns}
      />
      <RadioOptionGroup
        label='In Home'
        options={IN_HOME}
        selectedValue={inHome}
        onChange={setInHome}
      />

      <Button className='w-24' variant={'outline'} onClick={handleSubmit}>
        See Results
      </Button>
    </div>
  );
}
