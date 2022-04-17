import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/database_config';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config(__dirname)),
    CardsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
