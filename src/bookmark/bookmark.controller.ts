import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookmarkDto } from './dto';
import { BookmarkService } from './bookmark.service';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post('create')
  createBookmark(@Body() bookmarkDto: BookmarkDto) {
    return this.bookmarkService.createBookmarks(bookmarkDto);
  }

  /**
   * list all bookmarks
   */
  @Get('listAll')
  listAllBookmarks() {
    return this.bookmarkService.listAllBookmarks();
  }
}
