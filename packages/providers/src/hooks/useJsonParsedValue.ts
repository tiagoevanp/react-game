export const useJsonParsedValue = (str: string) => {
    let value;

    try {
        value = JSON.parse(str);
    } catch {
        value = str;
    }

    return value;
};
