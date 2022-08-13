import { Bloodline, UpdateBloodline } from "../models/Bloodline";
import { IBaseRepository } from "./IBaseRepository";

export interface IBloodlineRepository extends IBaseRepository<Bloodline, UpdateBloodline> {

}