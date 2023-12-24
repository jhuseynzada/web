import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, initialPage = 1, limit = 10) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(initialPage);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(prevData => [...prevData, ...jsonData]);
            // Update hasMore based on whether the returned data is less than the limit
            setHasMore(jsonData.length === limit);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url, page, limit]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, hasMore, setPage };
};

export default useFetch;
