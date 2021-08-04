export interface IComparePassword {
  compare( 
    password : string, 
    passwordHash : string | Buffer
  ) : Promise<boolean>
}