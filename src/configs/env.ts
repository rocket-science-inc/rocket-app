interface IEnv {
    BASE_URL: string
};

const DEV:IEnv = {
    BASE_URL: "http://10.136.40.146:3000/graphql"
};

const PROD:IEnv = {
    BASE_URL: "http://localhost:3000/graphql"
};

export const ENV:IEnv = __DEV__ ? DEV : PROD;