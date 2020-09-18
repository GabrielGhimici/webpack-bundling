import { camelCase, capitalize, startCase } from 'lodash';

export enum FormatType {
  Camel = 'camel-case',
  Capital = 'capital-case',
  Start = 'start-case'
}

export function format(text: string, formatter: FormatType) {
  switch(formatter) {
    case FormatType.Camel:
      return camelCase(text);
    case FormatType.Capital:
      return capitalize(text);
    case FormatType.Start:
      return startCase(text);
    default:
      return text;
  }
}
