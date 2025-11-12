import { NavigateOptions, useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  const setParam = ({
    name,
    value,
    options,
  }: {
    name: string;
    value: string;
    options?: NavigateOptions;
  }) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    }, options);
  };

  const setParamAndClear = ({
    name,
    value,
    options,
  }: {
    name: string;
    value: string;
    options?: NavigateOptions;
  }) => {
    setSearchParams((prev) => {
      // Clear all existing parameters
      prev.forEach((_, key) => prev.delete(key));
      // Set only the new parameter
      prev.set(name, value);
      return prev;
    }, options);
  };

  const removeParam = (name: string) => {
    setSearchParams((prev) => {
      prev.delete(name);
      return prev;
    });
  };

  const clearParams = () => {
    setSearchParams((prev) => {
      prev.forEach((_, key) => prev.delete(key));
      return prev;
    });
  };

  return {
    getParam,
    setParam,
    setParamAndClear,
    removeParam,
    clearParams,
    searchParams,
  };
};

export default useQueryParams;
