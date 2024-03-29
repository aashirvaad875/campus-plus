import * as dotenv from 'dotenv';
import path from 'path';
import swaggerAutogen from 'swagger-autogen';
dotenv.config();
const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Campus  plus Demo Project',
    description: 'Implementation of Swagger with TypeScript'
  },
  schemes: ['http', 'https'],
  host: [`${process.env.BASE_URL}`],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      superAdmin: {
        $email: 'admin',
        $password: 'password',
        $first_name: 'first_name',
        $last_name: 'last_name'
      }
    }
  }
};

const endPointFiles = [path.join(__dirname, '../apps/Campus/Backend/routes/index.ts')];
const outputFile = path.join(__dirname, '../../../../../swaggerApi.json');
swaggerAutogen({ openapi: '3.0.0' })(outputFile, endPointFiles, doc);

console.log(process.env.BASE_URL);
