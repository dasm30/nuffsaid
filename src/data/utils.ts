import { get } from 'lodash';

export interface IKey {
  [key: string]: string;
}

export type StringOrArray = string | Array<string>;

// export interface IParams {
//   fieldName: string | Array<string>;
//   defaultValue: string | Array<string>,
// }

// The third function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getSelectField =
  (stateName: string) =>
  (fieldName: StringOrArray, defaultValue?: StringOrArray) =>
  ({ [stateName]: state }: IKey) => {
    if (!fieldName) return state;
    if (Array.isArray(fieldName)) {
      return fieldName.reduce((acc: IKey, field, i) => {
        acc[field] = get(
          state,
          field,
          Array.isArray(defaultValue) && defaultValue.length > i ? defaultValue[i] : defaultValue
        );
        return acc;
      }, {});
    }
    return get(state, fieldName, defaultValue);
  };

/**
 * wait for the specified amount of time and then resolves the promise
 * @param ms miliseconds
 * @returns a promise that resolves after the specified *miliseconds*
 */
export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
