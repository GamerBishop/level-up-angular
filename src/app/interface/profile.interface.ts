import { Equipment } from "./equipment.interface";

export interface Profile {
  id: number;
  username: string;
  level: number;
  level_experiences: number;
  moula: number;
  roles: string[];
  inventory: Equipment[];
}
