//Interface named IProduct
export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

//Interface Named ICategory
export interface ICategory {
  id: number;
  name: string;
}

// Interface for Post
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Interface for User
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress; // import if it anthor place
  phone: string;
  website: string;
  company: ICompany;
}
// Interface Address
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

// Interface Geo

export interface IGeo {
  lat: string;
  lng: string;
}

// Interface Company
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
