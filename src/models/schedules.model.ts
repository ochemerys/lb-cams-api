import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'cams', table: 'schedules'}}})
export class Schedules extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'company_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  companyId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'schedules_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  schedulesId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'schedules_is_active', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  schedulesIsActive?: number;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'schedules_name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  schedulesName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Schedules>) {
    super(data);
  }
}

export interface SchedulesRelations {
  // describe navigational properties here
}

export type SchedulesWithRelations = Schedules & SchedulesRelations;
