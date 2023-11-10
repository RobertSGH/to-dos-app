import { useState, useCallback } from 'react';
import { Todo } from '../Context/Types';

const usePagination = (data: Todo[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = useCallback(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }, [currentPage, itemsPerPage, data]);

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return { jump, currentData, currentPage, maxPage };
};

export default usePagination;
