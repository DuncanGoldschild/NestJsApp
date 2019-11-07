import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway()
export class AthleteGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;

    async handleConnection(){

    }

    async handleDisconnect(){

    }

    @SubscribeMessage('athleteModif')
    async onAthleteModif(client, message){
        client.broadcast.emit('athleteModif', message);
    }

}