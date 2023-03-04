import { Module } from '@nestjs/common';
import { Bookmodule } from './book/book.module';


@Module({
  imports: [Bookmodule],
  controllers: [],
  providers: [],
})
export class AppModule {}
