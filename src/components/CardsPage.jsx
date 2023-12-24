import React, { useState, useRef, useCallback, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

function CardsPage() {
    const { data, loading, error, hasMore, setPage } = useFetch('http://localhost:8000/flashs', 1, 10);
    const [isFetching, setIsFetching] = useState(false);
    const observer = useRef();

    const lastElementRef = useCallback(
        node => {
            if (loading || isFetching) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setIsFetching(true);
                    setPage(prevPage => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore, isFetching]
    );

    // Update isFetching when data changes
    useEffect(() => {
        if (data && data.length && isFetching) {
            setIsFetching(false);
        }
    }, [data, isFetching]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {data.map((item, index) => {
                if (data.length === index + 1) {
                    return (
                        <Card ref={lastElementRef} key={item.id} item={item}/>
                    );
                } else {
                    return  <Card key={item.id} item={item}/>
                }
            })}
            {loading && <div>Loading...</div>}
        </div>
    );
}

export default CardsPage;
