const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const pattern = (regex: RegExp) => (value: string): boolean => {
    const results = regex.exec(value);
    if (results === null || results.length === 0) {
        return false;
    }
    return results[0] === value;
}

export const isEmail = (value: string): boolean => pattern(EMAIL_REGEX)(value)
