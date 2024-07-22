export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;
    if (!email) return ["Missing email name"];
    if (!password) return ["Missing password name"];

    return [undefined, new LoginUserDto(email, password)];
  }
}