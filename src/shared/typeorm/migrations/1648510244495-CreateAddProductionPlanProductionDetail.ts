import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddProductionPlanProductionDetail1648510244495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'production_detail',
      new TableColumn({
        name: 'production_plan_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'production_detail',
      new TableForeignKey({
        name: 'fk_production_plan_detail',
        columnNames: ['production_plan_id'],
        referencedTableName: 'production_plan',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('production_detail', 'fk_production_plan_detail');
    await queryRunner.dropColumn('production_detail', 'production_plan_id');
  }
}
