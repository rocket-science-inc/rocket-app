const trancate = (text:string, len: number) => {
    if (text.length <= len) return text;
    else return `${text.substr(0, len)}...`
};

export const text = {
    trancate
}