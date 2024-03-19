function useTime(allSeconds: number | undefined){

    const hours = allSeconds ? Math.floor(allSeconds / 3600) : 0;
    const minutes = allSeconds ? Math.floor((allSeconds % 3600) / 60) : 0;

    return {
        hours,
        minutes
    }
}

export default useTime