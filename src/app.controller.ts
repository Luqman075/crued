import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { writeFile } from 'fs';
import *as fs from 'fs'
import { myData } from './myInterface';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  //
  @Get('/all')
  getdata(): string {
    return this?.appService?.getdata();
  }

  @Post('/post')
  putdata(@Body() b: myData) {
    return this?.appService?.postData(b);
  }

  @Patch('/updatebyid')
  UpdateData(@Body() b:myData) {
    return this?.appService?.updateById(b);
  }

  @Delete('delbyid')
  DelById(@Body() b: any) {
    return this?.appService?.delById(b.id);
  }
}

