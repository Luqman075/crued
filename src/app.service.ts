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

  writeData(Body: myData[]):myData[]{
    fs?.writeFileSync(this.file, JSON.stringify(Body));
    return this.getdata();
  }

  postData(Body: myData[]) {
    let data = []
     data=this.getdata();
     let d=this.writeData(Body)
     data.push(d)
     this.writeData(data);
    return this.getdata();
  }


  updateById(body:{id:Number,name:string}) :myData[]{
    let data = []
    data = this.getdata();
    let responce = []
    responce = data.map((item:myData) => {
      if (item.id == body.id) {
        item.name = body.name;
      }
      return item;
    })
    return this.writeData(responce);
  }
  delById(id: myData): myData[] {
    let data = []
    data = this.getdata();
    const result = data.filter((item: any):myData[] => {
      if (item.id != id) {
        return item;
      }
    })
    return this.writeData(result)
  }
}