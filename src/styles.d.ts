// For CSS
declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}
  
  // For LESS
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}
  
  // For SCSS
declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.png"