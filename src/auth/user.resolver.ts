import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuardJwtGql } from './auth-guard-jwt.gql';
import { CurrentUser } from './current-user.decorator';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { name: 'me' })
  @UseGuards(AuthGuardJwtGql)
  public async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
