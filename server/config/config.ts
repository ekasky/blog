import dotenv from "dotenv";

dotenv.config();


interface ConfigInterface {

    PORT: number | undefined;

};

const config:ConfigInterface = {
  
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
    
};

export default config;