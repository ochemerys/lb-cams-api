import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'cams', table: 'survey_company_location'}}
})
export class SurveyCompanyLocation extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'company_id', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  companyId: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'created_by_user_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  createdByUserId: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'created_dt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  createdDt: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'deleted_by_user_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  deletedByUserId?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'deleted_dt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  deletedDt?: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'effective_dt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  effectiveDt: string;

  @property({
    type: 'date',
    mysql: {columnName: 'expiry_dt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expiryDt?: string;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'is_active', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  isActive: number;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'is_deleted', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  isDeleted: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'last_updated_by_user_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  lastUpdatedByUserId: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'last_updated_ts', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastUpdatedTs: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'location_id', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  locationId: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'survey_company_location_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  surveyCompanyLocationId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'survey_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  surveyId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SurveyCompanyLocation>) {
    super(data);
  }
}

export interface SurveyCompanyLocationRelations {
  // describe navigational properties here
}

export type SurveyCompanyLocationWithRelations = SurveyCompanyLocation & SurveyCompanyLocationRelations;
