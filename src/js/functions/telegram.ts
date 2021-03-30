export function getToken(): string {
    return `${(getTokenFirstPart())}:${(getTokenLastPart())}`;
}

function getTokenFirstPart(): string {
    return "313003051";
}

function getTokenLastPart(): string {
    return "AAHkjUvNJS7jCkSkVGghxFKMLkC-R-nyC2I";
}
