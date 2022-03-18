import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductionDetail1647483310364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'production_detail',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'entry_date',
            type: 'Date',
          },
          {
            name: 'departure_date',
            type: 'Date',
          },
          {
            name: 'production_sheet',
            type: 'Decimal',
          },
          {
            name: 'number_pairs',
            type: 'int',
          },
          {
            name: 'billing',
            type: 'varchar',
          },
          {
            name: 'billing_date',
            type: 'Date',
          },
          {
            name: 'payday',
            type: 'Date',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('production_detail');
  }
}
