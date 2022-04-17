import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/database_config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config(__dirname))
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
