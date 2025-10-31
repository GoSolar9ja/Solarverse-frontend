// import useSearchQueryParam from "./use-search-query-param";

// const usePagination = ({
//   hasNextPage,
//   fetchNextPage,
//   fetchPreviousPage,
// }: {
//   hasNextPage: boolean;
//   fetchNextPage: () => void;
//   fetchPreviousPage: () => void;
// }) => {
//   const { searchParams, createSearchParams } = useSearchQueryParam();
//   const handlePageChange = (page: number) => {
//     createSearchParams({ param: { name: "page", value: page.toString() } });
//   };

//   const handleNextPage = () => {
//     if (hasNextPage) {
//       fetchNextPage();
//       createSearchParams({
//         param: {
//           name: "page",
//           value: (Number(searchParams.get("page") || 1) + 1).toString(),
//         },
//         replaceUrl: true,
//       });
//     }
//   };

//   const handlePreviousPage = () => {
//     if (Number(searchParams.get("page") || 1) > 1) {
//       fetchPreviousPage();
//       createSearchParams({
//         param: {
//           name: "page",
//           value: (Number(searchParams.get("page") || 1) - 1).toString(),
//         },
//         replaceUrl: true,
//       });
//     }
//   };
//   return {
//     handlePageChange,
//     handleNextPage,
//     handlePreviousPage,
//   };
// };

// export default usePagination;
