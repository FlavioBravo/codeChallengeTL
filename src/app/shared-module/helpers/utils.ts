export const compareSeason = (lastUpdated: string, year: string) => {
    const updated = lastUpdated.split('-')[0];
    return (updated === year) ? true : false;
};