import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddPlanDetailModel1648510904722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plan_detail',
      new TableColumn({
        name: 'shoes_model_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plan_detail',
      new TableForeignKey({
        name: 'fk_plan_detail_model',
        columnNames: ['shoes_model_id'],
        referencedTableName: 'shoes_model',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('plan_detail', 'fk_plan_detail_model'),
      await queryRunner.dropColumn('plan_detail', 'shoes_model_id');
  }
}
