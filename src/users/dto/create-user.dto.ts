import { UserRole } from '../entities/enums/role.enum';

export class CreateUserDto {
  username: string;
  role: UserRole;
  email: string;
  password: string;
}
