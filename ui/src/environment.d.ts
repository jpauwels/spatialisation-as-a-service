declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_ACCESS_KEY_ID: string;
            REACT_APP_SECRET_ACCESS_KEY: string;
            REACT_APP_UPLOAD_BUCKET: string;
            REACT_APP_OUTPUT_BUCKET: string;
        }
    }
}

export {};