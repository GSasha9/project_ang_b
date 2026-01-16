import { Groups, Property, Required } from '@tsed/schema';

export class UserModel {
  @Property()
  @Groups('!creation')
  id: string;

  @Required()
  name: string;

  @Required()
  email: string;

  @Required()
  password: string;
}
