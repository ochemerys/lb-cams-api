import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'cams', table: 'holiday_list'}}})
export class HolidayList extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'company_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  companyId?: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'holiday_list_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  holidayListId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'holiday_list_is_active', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  holidayListIsActive?: number;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'holiday_list_name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  holidayListName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HolidayList>) {
    super(data);
  }
}

export interface HolidayListRelations {
  // describe navigational properties here
}

export type HolidayListWithRelations = HolidayList & HolidayListRelations;
