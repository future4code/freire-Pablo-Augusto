import { AddressInfo } from 'net';
import app from './app';
import { insertAddress } from './endpoints/insertAddress';

app.post("/user", insertAddress);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});