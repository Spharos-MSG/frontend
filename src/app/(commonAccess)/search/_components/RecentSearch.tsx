"use client"

import React, { useEffect, useState } from 'react';

function RecentSearch() {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const storedSearches = localStorage.getItem('searchHistory');
        if (storedSearches) {
            const reversedSearches = JSON.parse(storedSearches);
            setRecentSearches(reversedSearches);
        }
    }, []);

    const handleSearchClick = (index : any) => {
        // 클릭한 항목 제외한 나머지 항목들을 필터링하여 새로운 배열 생성
        const updatedSearches = recentSearches.filter((_, i) => i !== index);
        // 새로운 배열을 로컬 스토리지에 저장
        localStorage.setItem('searchHistory', JSON.stringify(updatedSearches));
        // 상태 업데이트
        setRecentSearches(updatedSearches);
    };

    return (
        <>
            <div style={{padding : '12px'}}>
                <h2 style={{fontSize:'13px', fontWeight:'bold'}}>최근 검색어</h2>
            </div>

            <div style={{display:'flex', width : '100%', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                <div style={{width:'fit-content'}}>
                    <div style={{width : '150px', height : 'auto', display:'inline-block'}}>
                        {recentSearches.map((search, index) => (
                            <div key={index} style={{border : '1px solid grey', marginLeft: '12px', marginTop:'5px',padding: '8px', paddingLeft: '20px',paddingRight: '20px', borderRadius: '20px', fontSize: '13px', display:'inline-block', cursor: 'pointer'}}
                                onClick={() => handleSearchClick(index)}>
                                <span>{search}</span>
                                {' '}
                                <span>X</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentSearch;

