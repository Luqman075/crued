import { Body, Injectable, Post, Put } from '@nestjs/common';
import { log } from 'console';
import { readFileSync } from 'fs';
import *as fs from 'fs';
import { myData } from '/home/luqman/Documents/nestcrued/crued/src/myInterface';
@Injectable()
export class AppService {

  private readonly file = 'src/data.JSON'


  getdata() {
    let data = fs?.readFileSync(this.file);
    return JSON.parse(data.toString());
  }

  writeData(Body: myData[]) {
    let data = fs?.writeFileSync(this.file, JSON.stringify(Body))
    return this.getdata();
  }

  postData(body: myData[]): myData[] {
    let data = []
    data = this.getdata();
    let d = fs?.writeFileSync(this.file, JSON.stringify(body))
    data.push(d);
    return this.writeData(data);
  }


  updateById(body:{id:Number,name:string}): myData[] {
    let data = []
    data = this.getdata();
    let responce = []
    responce = data.map((item:myData) => {
      if (item.id == body.id) {
        item.name = body.name;
      }
      return item;
    })
    return this.postData(responce);
  }
  delById(id: myData): any {
    let data = []
    data = this.getdata();
    const result = data.filter((item: any): any => {
      if (item.id != id) {
        return item;
      }
    })
    this.postData(result)
  }
}