interface IEnv {

};

const DEV:IEnv = {

};

const PROD:IEnv = {

};

export const ENV:IEnv = __DEV__ ? DEV : PROD;