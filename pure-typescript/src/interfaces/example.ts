interface IWords {
  [key: string]: string;
}

interface INumbers {
  [key: string]: number;
}

interface IBooleans {
  [key: string]: boolean;
}

interface IValues {
  [key: string]: string | number;
}

interface IStructures {
  [key: string]: INumbers | IBooleans | IValues;
}

export {
  // not exporting IWords | INumbers
  IBooleans,
  IValues,
  IStructures,
}