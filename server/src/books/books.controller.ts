import {
  Controller,
  Get,
  Param,
  Req,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { Book, BookDto } from './book';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  findAll(@Req() request: Request): Book[] {
    console.log(request.query);
    return this.booksService.findAll(request.query);
  }
  @Get()
  findBook(@Param('bookId') bookId: string): Book {
    return this.booksService.findBook(bookId);
  }
  @Post()
  createBook(@Body() newBook: BookDto): Book {
    return this.booksService.createBook(newBook);
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string): Book {
    return this.booksService.deleteBook(bookId);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): Book {
    return this.booksService.updateBook(bookId, newBook);
  }
}
