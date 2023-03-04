import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookservice: BookService) {}

  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookservice.findAllBooks();
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookservice.updatedBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookservice.deletebookService(bookId);
  } 

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookservice.addBookService(book);
  }
}
