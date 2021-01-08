import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'cams', table: 'schedules_times'}}
})
export class SchedulesTimes extends Entity {
  @property({
    type: 'string',
    mysql: {columnName: 'close_time', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  closeTime?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'day_of_week', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  dayOfWeek: number;

  @property({
    type: 'string',
    mysql: {columnName: 'open_time', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  openTime?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'schedules_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  schedulesId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'schedules_time_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  schedulesTimeId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchedulesTimes>) {
    super(data);
  }
}

export interface SchedulesTimesRelations {
  // describe navigational properties here
}

export type SchedulesTimesWithRelations = SchedulesTimes & SchedulesTimesRelations;
