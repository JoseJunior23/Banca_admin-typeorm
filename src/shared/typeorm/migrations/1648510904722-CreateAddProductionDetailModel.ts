import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddProductionDetailModel1648510904722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'production_detail',
      new TableColumn({
        name: 'shoes_model_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'production_detail',
      new TableForeignKey({
        name: 'fk_production_detail_model',
        columnNames: ['shoes_model_id'],
        referencedTableName: 'shoes_model',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('production_detail', 'fk_production_detail_model'),
      await queryRunner.dropColumn('production_detail', 'shoes_model_id');
  }
}
