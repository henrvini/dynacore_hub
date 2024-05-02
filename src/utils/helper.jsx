export const getColor = (value) => {
    if (value >= 0 && value <= 33) return 'success';
    if (value > 33 && value <= 66) return 'warning';
    if (value > 66) return 'error';

    return 'default';
};
