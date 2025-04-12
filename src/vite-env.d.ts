/// <reference types="vite/client" />

// CSS 모듈에 대한 타입 정의
declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

// 이미지 파일에 대한 타입 정의
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
