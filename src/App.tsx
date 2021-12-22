import React, { useState, useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Bingo from './Components/Bingo';

type BingoType = {
  id: number;
  information: string;
  isSelected: boolean;
};

type App = {
  data: Array<BingoType>;
  test: boolean
}

type BingoList = {
  data: Array<BingoType>;
};

// bingo informations of x, y and diagnol axises
const xAxisBingo = [false, false, false, false, false];
const yAxisBingo = [false, false, false, false, false];
let diagnolPositiveBingo = false;
let diagnolNegativeBingo = false;

const App: React.FC<App> = ({ data, test }) => {
  const [bingoData, setBingoData] = useState<Array<BingoType>>(data);
  const [celebration, setCelebration] = useState<boolean>(false);

  const { width, height } = useWindowSize();

  useEffect(() => {
    shuffleBingoData(bingoData);
  }, []);
  

  // it changing state of selected index
  const selectSlot = (id: number): void => {
    bingoData[id].isSelected = !bingoData[id].isSelected;
    checkBingo(id);
    setBingoData((prevData) => [...prevData]);
  };

  // this function find the location (x, y, and diagnol locations) of selected index
  // and returns x-axis, y-axis indexes and also if it placed on diagnol axis or not
  const findTheLocationOfIndex = (index: number) => {
    const xAxis = Math.floor(index / 5);
    const yAxis = index % 5;

    const isDiagnolPositiveAxis = index % 4 === 0;
    const isDiagnolNegativeAxis = index % 6 === 0;

    return { xAxis, yAxis, isDiagnolPositiveAxis, isDiagnolNegativeAxis };
  };

  // this function checks the if there is any bingo
  const checkBingo = (index: number): void => {
    const { xAxis, yAxis, isDiagnolPositiveAxis, isDiagnolNegativeAxis } =
      findTheLocationOfIndex(index);

    const xStartingIndex = xAxis * 5;
    const yStartingIndex = yAxis;

    let isXBingo = true;
    let isYBingo = true;

    // if index is placed on the diagnol axis the function is executed
    // and checks if there is bingo at diagnol axis
    if (isDiagnolPositiveAxis) {
      diagnolPositiveBingo = true;
      for (let q = 0; q < 5; q += 1) {
        if (bingoData[4 + q * 4].isSelected === false && 4 + q * 4 !== 12) {
          diagnolPositiveBingo = false;
        }
      }
    }

    // if index is placed on the diagnol axis the function is executed
    // and checks if there is bingo at diagnol axis
    if (isDiagnolNegativeAxis) {
      diagnolNegativeBingo = true;
      for (let q = 0; q < 5; q += 1) {
        if (bingoData[0 + q * 6].isSelected === false && 0 + q * 6 !== 12) {
          diagnolNegativeBingo = false;
        }
      }
    }

    // checks if there is bingo x-axis and/or y-axis
    for (let i = 0; i < 5; i += 1) {
      if (bingoData[xStartingIndex + i].isSelected === false && xStartingIndex + i !== 12) {
        isXBingo = false;
      }
      if (bingoData[yStartingIndex + i * 5].isSelected === false && yStartingIndex + i * 5 !== 12) {
        isYBingo = false;
      }
    }

    // if there is a bingo than the celebration animation will execute
    if ((isXBingo || isYBingo || diagnolPositiveBingo || diagnolNegativeBingo) && !test) {
      setCelebration(true);
      setTimeout(() => setCelebration(false), 5000);
    }

    // it sets bingo values for rows
    if (isXBingo) xAxisBingo[xAxis] = true;
    else xAxisBingo[xAxis] = false;

    // it sets bingo values for columns
    if (isYBingo) yAxisBingo[yAxis] = true;
    else yAxisBingo[yAxis] = false;
  };

  // it returns bingo for rows
  const xBingo = (index: number): boolean => xAxisBingo[Math.floor(index / 5)];

  // it returns bingo for cols
  const yBingo = (index: number): boolean => yAxisBingo[index % 5];

  // it returns bingo for one of the diagnol axis
  const positiveDiagnolBingo = (index: number): boolean =>
    index % 4 === 0 && index !== 0 && index !== 24;

  // it returns bingo for one of the diagnol axis
  const negativeDiagnolBingo = (index: number): boolean => index % 6 === 0;

  // it changes selected slot styles
  const isItSelected = (isSelected: boolean): string =>
    isSelected === true ? 'opacity-20 line-through ' : '';

  // it randomly sorting bingo card for each users
  const shuffleBingoData = (array: Array<BingoType>): void => {
    array.sort(() => Math.random() - 0.5);
    setBingoData((prevData) => [...prevData]);
  };

  return (
    <>
      {!test && celebration && <Confetti width={width} height={height} recycle={false} />}
      <div className="bg-gradient-to-r from-mainColor to-secondColor">
        <div className="flex flex-col items-center justify-center h-screen -rotate-2">
          <div className="grid grid-cols-5 grid-rows-6">
            <Bingo />
            {bingoData &&
              bingoData.map(
                (item, index) =>
                  (index !== 12 && (
                    <div className="border border-black p-2 sm:p-1 bg-white" key={index}>
                      <div
                        className={`flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 ${
                          (yBingo(index) ||
                            xBingo(index) ||
                            (diagnolPositiveBingo && positiveDiagnolBingo(index)) ||
                            (diagnolNegativeBingo && negativeDiagnolBingo(index))) &&
                          'bg-mainColor'
                        } `}
                        data-testid={`test-box-${index}`}
                      >
                        <header
                          className="flex flex-col items-end"
                          data-testid={`test-header-${index}`}
                        >
                          <p
                            className={`text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed ${
                              item.isSelected && 'opacity-20'
                            }`}
                          >
                            {index}
                          </p>
                        </header>
                        <div
                          className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2"
                          onClick={() => selectSlot(index)}
                          data-testid={`test-button-${index}`}
                        >
                          <p
                            className={`lg:text-base md:text-sm sm:text-xs ${isItSelected(
                              item.isSelected,
                            )}`}
                            data-testid={`test-content-${index}`}
                          >
                            {item.information}
                          </p>
                        </div>
                      </div>
                    </div>
                  )) ||
                  (index === 12 && (
                    <div className="border border-black p-2 sm:p-1 bg-white" key={12}>
                      <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black rounded-full">
                        <header className="flex flex-col items-end ">
                          <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed" />
                        </header>
                        <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
                          <p className="lg:text-base md:text-sm sm:text-xs">CONF CALL 😷 BINGO</p>
                        </div>
                      </div>
                    </div>
                  )),
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
