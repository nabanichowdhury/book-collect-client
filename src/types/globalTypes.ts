export type IBook= {
    _id:string;
    image: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    owner:string;
    reviews: string[];

  }

export type ILoginResponse={
  statusCode:number,
  success:boolean,
  message:string,
  data:{
    accessToken:string,
  }
}