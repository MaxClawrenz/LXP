function useTime(allSeconds: number){
    const hours = Math.floor(allSeconds / 3600);
    const minutes = Math.floor((allSeconds % 3600) / 60);

    return {
        hours,
        minutes
    }
}

export default useTime