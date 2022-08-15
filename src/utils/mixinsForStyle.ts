
export function customGridWidth(size: number) {
    return {
        flexBasis: `calc(100% -  ${size}px)`,
        maxWidth: `calc(100%  -  ${size}px)`,
    };
}


