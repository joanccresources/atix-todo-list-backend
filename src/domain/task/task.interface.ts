import { User } from "../user";

export interface Task {
  text: string;
  checked: boolean;
  user: User;
}
