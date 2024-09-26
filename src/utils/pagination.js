export function paginate({ length, list, currentPage }) {
  const TOURS_PER_PAGE = 3;

  const pages = Math.ceil(length / TOURS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE;
  const endIndex = currentPage * TOURS_PER_PAGE;

  const orderdTourList = list.slice(startIndex, endIndex);

  return {
    pages,
    orderdTourList,
  };
}
