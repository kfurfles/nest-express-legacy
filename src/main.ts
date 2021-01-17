import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { useExpress } from './workspaces/legacy-app/server'
import { TodoModule } from './workspaces/todo/todo.module'
import { NestFactory } from '@nestjs/core';

// was in src/workspaces/my-legacy-app/server.ts
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  app.use(bodyParser.json());

  // was in src/workspaces/my-legacy-app/server.ts
  // also did not know how to resolve the issue of types, so use "any"
  useExpress(app.getHttpAdapter() as any)

  await app.listen(3000,() => {
    console.info(`App runnning on port: ${3000}`)
  });
}
bootstrap();
