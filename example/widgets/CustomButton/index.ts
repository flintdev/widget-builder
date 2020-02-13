import * as yaml from 'js-yaml';

const config =  require("./config.yaml");
const configJson = yaml.safeLoad(config);

export { default } from './CustomButton';
export {configJson as config};