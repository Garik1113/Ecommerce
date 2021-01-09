// declare module '*.scss';
// declare module '*.css';
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.css' {
    const content: {[className: string]: string};
    export default content;
}