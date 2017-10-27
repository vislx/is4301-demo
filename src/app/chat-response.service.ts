import { Injectable } from '@angular/core';

@Injectable()
export class ChatResponseService {

  constructor() { }
  
  public getResponse(content: string): Promise<string> {
    let result = 'Sorry, I can\'t understand your request :(';
    
    if (content === 'Hello' || content === 'Hi') {
      result = 'Hi Harris, nice to meet you!';
    }

    return Promise.resolve(result);
  
  }

}
