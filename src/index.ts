export type Equal<X, Y> = (<Res>() => Res extends X ? true : false) extends (<Res>() => Res extends Y ? true : false) 
  ? true 
  : false; 


export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;