import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'cams', table: 'location'}}})
export class Location extends Entity {
  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_address', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationAddress?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_city', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationCity?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'location_company_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  locationCompanyId: number;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_country', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationCountry?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'location_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  locationId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'location_is_active', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  locationIsActive?: number;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationName?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_postal_code', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationPostalCode?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_province', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationProvince?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'location_suite', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locationSuite?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Location>) {
    super(data);
  }
}

export interface LocationRelations {
  // describe navigational properties here
}

export type LocationWithRelations = Location & LocationRelations;
