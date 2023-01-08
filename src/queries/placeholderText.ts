import type { ReactTestInstance } from 'react-test-renderer';
import { TextInput } from 'react-native';
import { findAll } from '../helpers/findAll';
import { matches, TextMatch, TextMatchOptions } from '../matches';
import { getConfig } from '../config';
import { filterNodeByType } from '../helpers/filterNodeByType';
import { makeQueries } from './makeQueries';
import type {
  FindAllByQuery,
  FindByQuery,
  GetAllByQuery,
  GetByQuery,
  QueryAllByQuery,
  QueryByQuery,
} from './makeQueries';
import { CommonQueryOptions } from './options';

type ByPlaceholderTextOptions = CommonQueryOptions & TextMatchOptions;

const getTextInputNodeByPlaceholderText = (
  node: ReactTestInstance,
  placeholder: TextMatch,
  options: TextMatchOptions = {}
) => {
  const { exact, normalizer } = options;
  const shouldReturnHostTextInput = getConfig().useBreakingChanges;
  const typeToMatch = shouldReturnHostTextInput
    ? getConfig().hostComponentNames?.textInput || 'TextInput'
    : TextInput;

  return (
    filterNodeByType(node, typeToMatch) &&
    matches(placeholder, node.props.placeholder, normalizer, exact)
  );
};

const queryAllByPlaceholderText = (
  instance: ReactTestInstance
): ((
  placeholder: TextMatch,
  queryOptions?: ByPlaceholderTextOptions
) => Array<ReactTestInstance>) =>
  function queryAllByPlaceholderFn(placeholder, queryOptions) {
    return findAll(
      instance,
      (node) =>
        getTextInputNodeByPlaceholderText(node, placeholder, queryOptions),
      queryOptions
    );
  };

const getMultipleError = (placeholder: TextMatch) =>
  `Found multiple elements with placeholder: ${String(placeholder)} `;
const getMissingError = (placeholder: TextMatch) =>
  `Unable to find an element with placeholder: ${String(placeholder)}`;

const { getBy, getAllBy, queryBy, queryAllBy, findBy, findAllBy } = makeQueries(
  queryAllByPlaceholderText,
  getMissingError,
  getMultipleError
);

export type ByPlaceholderTextQueries = {
  getByPlaceholderText: GetByQuery<TextMatch, ByPlaceholderTextOptions>;
  getAllByPlaceholderText: GetAllByQuery<TextMatch, ByPlaceholderTextOptions>;
  queryByPlaceholderText: QueryByQuery<TextMatch, ByPlaceholderTextOptions>;
  queryAllByPlaceholderText: QueryAllByQuery<
    TextMatch,
    ByPlaceholderTextOptions
  >;
  findByPlaceholderText: FindByQuery<TextMatch, ByPlaceholderTextOptions>;
  findAllByPlaceholderText: FindAllByQuery<TextMatch, ByPlaceholderTextOptions>;
};

export const bindByPlaceholderTextQueries = (
  instance: ReactTestInstance
): ByPlaceholderTextQueries => ({
  getByPlaceholderText: getBy(instance),
  getAllByPlaceholderText: getAllBy(instance),
  queryByPlaceholderText: queryBy(instance),
  queryAllByPlaceholderText: queryAllBy(instance),
  findByPlaceholderText: findBy(instance),
  findAllByPlaceholderText: findAllBy(instance),
});
