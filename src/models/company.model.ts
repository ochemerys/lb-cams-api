import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'cams', table: 'company'}}})
export class Company extends Entity {
  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_address', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyAddress?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_city', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyCity?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_country', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyCountry?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'company_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  companyId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'company_is_active', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  companyIsActive?: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'company_name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  companyName: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_postal_code', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyPostalCode?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_province', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyProvince?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'company_suite', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companySuite?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
