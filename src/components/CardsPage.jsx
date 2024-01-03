import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import useOnScreen from '../hooks/useOnScreen';
import Card from './Card';
import "../styles/CardsPage.css"

function CardsPage() {
    const { data, loading, error, page, setPage, refresh } = useFetch('http://localhost:8000/flashs', 1, 10);
    const [ref, isIntersecting] = useOnScreen({ threshold: 0.1 });
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        setFilteredCards(
            data.filter(card => (statusFilter !== '' ? card.status === statusFilter : true))
                .filter(card =>
                    card.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    card.answer.toLowerCase().includes(searchQuery.toLowerCase()))
                .sort((a, b) => {
                    if (sortOption === "Question") {
                        return a.question.localeCompare(b.question);
                    }
                    if (sortOption === "Answer") {
                        return a.answer.localeCompare(b.answer);
                    }
                    if (sortOption === "Created Date") {
                        return new Date(a.createdAt) - new Date(b.createdAt);
                    }
                    if (sortOption === "Updated Date") {
                        return new Date(a.updatedAt) - new Date(b.updatedAt);
                    }
                    return 0;
                })
        );
    }, [searchQuery, data, statusFilter, sortOption]);


    useEffect(() => {
        if (isIntersecting) setPage(page + 1);
    }, [isIntersecting]);

    const handleFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };
    const handleSortChange = (event) => {
        console.log(event.target.value)
        setSortOption(event.target.value)
    }

    return (
        <div className='pages-container'>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search cards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className='categoryselectors'>

                <div className="dropdownbox">
                    <label htmlFor="statusFilter">Filter by Status:</label>
                    <select
                        id="statusFilter"
                        value={statusFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="Learned">Learned</option>
                        <option value="Want to Learn">Want to Learn</option>
                        <option value="Noted">Noted</option>
                    </select>
                </div>
                <div className="dropdownbox">
                    <label htmlFor="sortField">Sort by:</label>
                    <select
                        id="sortField"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">All</option>
                        <option value="Question">Question</option>
                        <option value="Answer">Answer</option>
                        <option value="Created Date">Created Date</option>
                        <option value="Updated Date">Updated Date</option>
                    </select>
                </div>
            </div>

            {filteredCards.map((card, i) => {
                if (i === (filteredCards.length - 1))
                    return (
                        <div ref={ref} key={i}>
                            <Card item={card} refresh={() => refresh(card.id)} />
                        </div>
                    )
                return <Card key={i} item={card} refresh={() => refresh(card.id)} />;
            })}
            {loading && <div className='loading'>Loading...</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default CardsPage;
