import { useState, useEffect } from 'react'

const useInfiniteScroll = () => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.addEventListener(
            'scroll',
            () => {
                const {
                    scrollTop,
                    scrollHeight,
                    clientHeight
                } = document.documentElement;

                /* Magic code from THE internet */
                if (scrollTop + clientHeight >= scrollHeight - 5) {
                    setPage(page => page+1); 
                }
            },
            {
                passive: true
            }
        );

        return () => window.removeEventListener('scroll')
    }, []);

    return {
        page
    };
};

export default useInfiniteScroll