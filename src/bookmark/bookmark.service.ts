import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookmarkDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class BookmarkService {
  constructor(private prismaService: PrismaService) {}

  /**
   * create bookmark
   */
  async createBookmarks(bookmarkDto: BookmarkDto) {
    // create bookmark details
    try {
      const bookmark = await this.prismaService.bookmark.create({
        data: {
          ...bookmarkDto,
        },
      });
      return bookmark;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2018') {
          throw new ForbiddenException('Cannot find bookmark details.');
        }
      }
    }
  }

  /**
   * list all bookmarks
   */
  async listAllBookmarks() {
    // list all database bookmarks
    const bookmarks = await this.prismaService.bookmark.findMany({
      select: {
        title: true,
        description: true,
        link: true,
        userId: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });
    // if bookmark doesn't exist throw exception
    if (!bookmarks) throw new ForbiddenException('bookmark details not found.');
    // send back the bookmark list
    return bookmarks;
  }
}
